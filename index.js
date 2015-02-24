'use strict';
var trezor = module.exports;

trezor.Device   = require('./lib/device');
trezor.Message  = require('./lib/message');
trezor.Messages = require('./lib/messages');
trezor.usb      = require('./lib/usb');

//Constants
trezor.HARDEN = 0x80000000;

