'use strict';
var ByteBuffer   = require('protobufjs').ByteBuffer;
var EventEmitter = require('events').EventEmitter;
var util         = require('util');
var assert       = require('assert');
var usb          = require('usb');

function NodeUSB(options) {
  assert(options, 'options object required!');
  assert(options.vendorId, 'options.vendorId required!');
  assert(options.productId, 'options.productId required!');

  this.vendorId = options.vendorId;
  this.productId = options.productId;
  this.device;
  this.endpoint = {};
  this._scanInterval;
  this.reportId = 63; // TODO: where did this number come from?!
};
util.inherits(NodeUSB, EventEmitter);

NodeUSB.prototype.scan = function(interval) {
  this._scanInterval = setInterval(this._scan.bind(this), interval || 2000);
  this._scan();
};

NodeUSB.prototype._scan = function() {
  console.log('scanning');
  this.emit('scanning');

  this.device = usb.findByIds(this.vendorId, this.productId);
  if(this.device) {
    clearInterval(this._scanInterval);
    console.log('device-found');
    this.emit('device-found', this.device);
    this.device.open();
    this.inEndpoit = null;
    var self = this;
    this.device.interfaces[0].endpoints.forEach(function(endpoint) {
      if(endpoint.direction === 'in') {
        self.endpoint.in = endpoint;
      } else if (endpoint.direction === 'out') {
        self.endpoint.out = endpoint;
      }
      self._pollInbound();
    });
    console.log('emitting connect');
    this.emit('connect');
  }
};

NodeUSB.prototype._pollInbound = function () {
  // TODO handle 'end' event from endpoint.in ?
  //this.endpoint.in.startPoll(8, 64);
};

NodeUSB.prototype.disconnect = function () {
  clearInterval(this._scanInterval);
  //chrome.hid.disconnect(self.connection.connectionId, function() {
    //if (chrome.runtime.lastError) {
      //return self.emit('error', chrome.runtime.lastError.message);
    //}
    //self.connection = null;
    //self.emit('disconnect');
  //});
};

NodeUSB.prototype.send = function(data) {
  this.endpoint.out.transfer(data);
};

NodeUSB.prototype._handleData = function(data) {
};

module.exports = NodeUSB;
