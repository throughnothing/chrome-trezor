'use strict';
var Trezor         = require('../index'),
    TrezorDevice   = Trezor.Device,
    TrezorMessage  = Trezor.Message,
    TrezorMessages = Trezor.Messages,
    bitcoin        = require('bitcoinjs-lib');

var trezor = new TrezorDevice();

function onError(err) {
  console.log('Error:', err);
  trezor.disconnect().on('disconnect', function(){
    console.log('Trezor disconnected.');
  });
}

function onConnect() {
  console.log('Trezor Connected.  DeviceID:', trezor.features.device_id);
}

function onMessagePublicKey(message) {
  console.log('Got Master Public Key:', message.decode().xpub);
}

function onPassphraseRequest(message) {
  document.querySelector("#password-span").style.display = "inline";
}

/* Trezor Event Handlers */
trezor.on('error', onError);
trezor.on('connect', onConnect);
trezor.on('message', function(message) {
  console.log('message type, method:', message.type, message.getMethod());
  switch (message.type) {
    case TrezorMessages.MessageType.MessageType_PublicKey:
      onMessagePublicKey(message);
      break;
    case TrezorMessages.MessageType.MessageType_PassphraseRequest:
      onPassphraseRequest(message);
      break;
    default:
      console.log('Unhandled Message Type:', message.getMethod());
      break;
  }
});

/* Button Handling Methods */
function connect() {
  trezor.connect()
}

function getPublicKey() {
  trezor.send('GetPublicKey',
      [Trezor.HARDEN|44, Trezor.HARDEN|0, Trezor.HARDEN|0]);
}

function sendPassphraseAck(passphrase) {
  var password = document.querySelector("#password").value;
  if(!password) {
    console.log("Password needed!");
    return;
  }
  console.log('Using password:', password);
  trezor.send('PassphraseAck', password);
  document.querySelector('#password-span').style.display = "none";
}



window.onload = function() {
  document.querySelector("#connect-button").addEventListener(
    "click", connect);
  document.querySelector("#get-public-key-button").addEventListener(
    "click", getPublicKey);
  document.querySelector("#submit-password-button").addEventListener(
    "click", sendPassphraseAck);
};
