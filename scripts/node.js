'use strict';
var trezor = require('..');
var NodeUSB = require('../lib/usb/node.js');

var t = new trezor.Device({ usb: NodeUSB });
t.on('connect', function() {
  console.log('connected');
});
t.connect();

