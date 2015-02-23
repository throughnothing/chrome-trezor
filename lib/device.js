'use strict';
var ProtoBuf     = require('protobufjs');
var ByteBuffer   = ProtoBuf.ByteBuffer;
var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var Messages     = require('./messages.js');
var Message      = require('./message.js');


function TrezorDevice() {
  this.connectionId = null;
  this.deviceId = null;
  this.features = null;
  this.reportId = 63; // TODO: where did this number come from?!
};

util.inherits(TrezorDevice, EventEmitter);

TrezorDevice.prototype._padByteArray = function(sequence, size) {
  var newArray = new Uint8Array(size);
  newArray.set(sequence);
  return newArray;
}

TrezorDevice.prototype.connect = function() {
  var self = this;
  chrome.hid.getDevices(
    {vendorId: TrezorDevice.VENDOR_ID, productId: TrezorDevice.PRODUCT_ID },
    function(devices) {
      if (!devices || devices.length == 0) {
        self.emit('error', "No device found.");
        return;
      } else {
        // TODO: handle multiple devices
        self.deviceId = devices[0].deviceId;
        if(!self.deviceId){
          self.emit('error','No Trezor device found!');
          return;
        }
        chrome.hid.connect(self.deviceId, function(connection) {
          if (chrome.runtime.lastError) {
            self.emit('error', chrome.runtime.lastError.message);
            return;
          } else {
            self.connectionId = connection.connectionId

            self.once('message', function(message) {
              self.features = message.decode();
              self.emit('connect');
            });
            self.send('Initialize');
          }
        });
      }
    }
  );

  return self;
  // TODO: not sure what these are for yet ?
  //self.sendFeatureReport(0x41, 0x01);
  //self.sendFeatureReport(0x43, 0x03);
}

TrezorDevice.prototype.disconnect = function() {
  var self = this;
  if (self.connectionId == null) {
    return;
  }
  chrome.hid.disconnect(self.connectionId, function() {
    self.connectionId = null;
    if (chrome.runtime.lastError) {
      reject(chrome.runtime.lastError.message);
    } else {
      console.log("Trezor disconnected");
      self.emit('disconnect');
    }
  });
  return self;
}

TrezorDevice.prototype.getDevice = function() {
  var self = this;
}

TrezorDevice.prototype._raw_receive = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    chrome.hid.receive(self.connectionId, function(reportId, data) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError.message);
      } else {
        self.reportId = reportId;
        resolve({id: reportId, data: data});
      }
    });
  });
}

TrezorDevice.prototype._receiveMoreOfMessageBody = function(messageBuffer, messageSize) {
  var self = this;
  return new Promise(function(resolve, reject) {
    if (messageBuffer.offset >= messageSize) {
      resolve(messageBuffer);
    } else {
      self._raw_receive().then(function(report) {
        if (report == null || report.data == null) {
          reject("received no data from device");
        } else {
          messageBuffer.append(report.data);
          self._receiveMoreOfMessageBody(messageBuffer, messageSize)
            .then(function(message) { resolve(message); })
            .catch(function(err) { self.emit('error', err) });
        }
      })
      .catch(function(err) { self.emit('error', err) });
    }
  });
}

TrezorDevice.prototype.parseHeadersAndCreateByteBuffer = function(first_msg) {
  var msg = ByteBuffer.concat([first_msg]);
  var original_length = msg.limit;

  var sharp1 = msg.readByte();
  var sharp2 = msg.readByte();
  if (sharp1 != 0x23 || sharp2 != 0x23) {
    console.error("Didn't receive expected header signature.");
    return null;
  }
  var messageType = msg.readUint16();
  var messageLength = msg.readUint32();
  var messageBuffer = new ByteBuffer(messageLength);
  messageBuffer.append(msg);

  return [messageType, messageLength, messageBuffer];
}

TrezorDevice.prototype.receive = function() {
  var self = this;
  self._raw_receive().then(function(report) {
    var headers = self.parseHeadersAndCreateByteBuffer(report.data);
    if (headers == null) {
      reject("Failed to parse headers.");
    } else {
      self._receiveMoreOfMessageBody(headers[2], headers[1])
        .then(function(byteBuffer) {
          byteBuffer.reset();
          var msg = new Message(headers[0], byteBuffer.toArrayBuffer());
          self.emit('message', msg);
        })
        .catch(function(err) { self.emit('error', err) });
    }
  })
  .catch(function(err) { self.emit('error', err) });
}

TrezorDevice.prototype.send = function(msg_name, data) {
  var self = this;
  if(!self.connectionId){
    self.emit('error', 'Trezor not connected!');
    return;
  }

  var msg;
  if(data) {
    msg = new Messages[msg_name](data);
  } else {
    msg = new Messages[msg_name]();
  }
  var msg_type = Messages.MessageType['MessageType_' + msg_name];

  var msg_ab = new Uint8Array(msg.encodeAB());
  var header_size = 1 + 1 + 4 + 2;
  var full_size = header_size + msg_ab.length;
  var msg_full = new ByteBuffer(header_size + full_size);
  msg_full.writeByte(0x23);
  msg_full.writeByte(0x23);
  msg_full.writeUint16(msg_type);
  msg_full.writeUint32(msg_ab.length);
  msg_full.append(msg_ab);
  var arrayBuffer = new Uint8Array(msg_full.buffer);

  var data = self._padByteArray(arrayBuffer, 63);
  chrome.hid.send(self.connectionId, self.reportId, data.buffer, function() {
    if (chrome.runtime.lastError) {
      self.emit('error', chrome.runtime.lastError.message);
      return;
    } else {
      self.receive();
    }
  });
  return self;
}


TrezorDevice.VENDOR_ID  = 0x534c;
TrezorDevice.PRODUCT_ID = 0x0001;
TrezorDevice.HARDEN = 0x80000000;
module.exports = TrezorDevice;
