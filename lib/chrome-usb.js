'use strict';
var ByteBuffer   = require('protobufjs').ByteBuffer;
var util         = require('util');

var TrezorDevice = require('./device');
var EventEmitter = require('events').EventEmitter;

function USB() {
  this.reportId = 63; // TODO: where did this number come from?!
  this.connection;
  this.device;
  this._scanInterval;
}
util.inherits(USB, EventEmitter);

USB.prototype.scan = function(interval) {
  this._scan();
  this._scanInterval = setInterval(this._scan.bind(this), interval || 2000);
}

USB.prototype._scan = function() {
  var self = this;
  self.emit('scanning');
  chrome.hid.getDevices(
    {vendorId: TrezorDevice.VENDOR_ID, productId: TrezorDevice.PRODUCT_ID },
    function(devices) {
      // TODO: handle multiple devices
      if(devices[0].deviceId){
        clearInterval(self._scanInterval);
        self.emit('device-found', devices[0]);
        self.connect(devices[0]);
      }
    }
  )
}

USB.prototype.connect = function(device) {
  var self = this;
  chrome.hid.connect(device.deviceId, function(connection) {
    if (chrome.runtime.lastError) {
      self.emit('error', chrome.runtime.lastError.message);
      return;
    }
    self.connection = connection;
    self.device = device;
    self.emit('connect', device, connection);
    //TODO: set an interval to detect if device disconnected
  });
}
USB.prototype.disconnect = function () {
  chrome.hid.disconnect(self.connection.connectionId, function() {
    if (chrome.runtime.lastError) {
      return self.emit('error', chrome.runtime.lastError.message);
    }
    self.connection = null;
    self.emit('disconnect');
  });
}

USB.prototype.send = function(data) {
  var self = this;
  chrome.hid.send(self.connection.connectionId, self.reportId, data, function() {
    if (chrome.runtime.lastError) {
      return self.emit('error', chrome.runtime.lastError.message);
    }
    self.receive();
  });
}

USB.prototype.receive = function() {
  var self = this;
  self._raw_receive().then(function(report) {
    var headers = self.parseHeadersAndCreateByteBuffer(report.data);
    if (headers == null) {
      reject("Failed to parse headers.");
    } else {
      self._receiveMoreOfMessageBody(headers[2], headers[1])
        .then(function(byteBuffer) {
          byteBuffer.reset();
          self.emit('message', headers, byteBuffer.toArrayBuffer());
        })
        .catch(function(err) { self.emit('error', err) });
    }
  })
  .catch(function(err) { self.emit('error', err) });
}

USB.prototype.destroy = function() {
  clearInterval(this._scanInterval);
}

USB.prototype._raw_receive = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    chrome.hid.receive(self.connection.connectionId, function(reportId, data) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError.message);
      } else {
        self.reportId = reportId;
        resolve({id: reportId, data: data});
      }
    });
  });
}

USB.prototype._receiveMoreOfMessageBody = function(messageBuffer, messageSize) {
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

USB.prototype.parseHeadersAndCreateByteBuffer = function(first_msg) {
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

module.exports = USB;
