'use strict';
var trezor = require('..');
var NodeUSB = trezor.usb.Node;

var t = new trezor.Device({ usb: NodeUSB });
t.on('connect', function() {
  console.log('connected');
});
t.connect();

