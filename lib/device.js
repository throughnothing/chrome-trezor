'use strict';
var ByteBuffer   = require('protobufjs').ByteBuffer;
var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var Messages     = require('./messages');
var Message      = require('./message');
var usb          = require('./usb');


function Trezor(options) {
  if (!(this instanceof Trezor)) {
    return new Trezor(options);
  }

  options = options || {};
  options.usb = options.usb || usb.Chrome;
  this.features = null;
  this.status = Trezor.STATUS.DISCONNECTED;
  this.usb = new options.usb(
    { vendorId: Trezor.VENDOR_ID, productId: Trezor.PRODUCT_ID });

  var self = this;
  this.usb.on('error', function(err) { self.emit('error', err); });
  this.usb.on('scanning', function() { self.emit('scanning'); });
  this.usb.on('message', this._handleMessage.bind(this));
  this.usb.on('disconnect', this._handleDisconnect.bind(this));
};
util.inherits(Trezor, EventEmitter);

Trezor.prototype.connect = function() {
  if(this.status !== Trezor.STATUS.DISCONNECTED) {
    this.emit('error', 'Already connecting or connected');
    return;
  }
  this.status = Trezor.STATUS.CONNECTING;

  var self = this;
  this.usb.once('connect', function() {
    self.status = Trezor.STATUS.CONNECTED;
    self.once('message', function(message) {
      self.features = message.decode();
      self.emit('connect');
    });
    // Initialize once the device is seen
    self.send('Initialize');
  });
  this.usb.scan();
  return this;
};

Trezor.prototype.send = function(msg_name, data) {
  if(!this.status === Trezor.STATUS.CONNECTED){
    this.emit('error', 'Trezor not connected!');
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
  var newArray = new Uint8Array(63);
  newArray.set(arrayBuffer);
  data = newArray;

  this.usb.send(data);
  return this;
};

Trezor.prototype.disconnect = function() {
  if (this.status !== Trezor.STATUS.DISCONNECTED) {
    this.usb.disconnect();
  }
  return this;
};

Trezor.prototype._handleMessage = function (headers, arrayBuffer) {
  var msg = new Message(headers[0], arrayBuffer);
  this.emit('message', msg);
};

Trezor.prototype._handleDisconnect = function () {
  this.status = Trezor.STATUS.DISCONNECTED;
  this.emit('disconnect');
};


Trezor.STATUS = {
  DISCONNECTED: 0,
  CONNECTING: 1,
  CONNECTED: 2
};
Trezor.VENDOR_ID  = 0x534c;
Trezor.PRODUCT_ID = 0x0001;

module.exports = Trezor;
