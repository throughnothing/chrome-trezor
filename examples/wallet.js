'use strict';
var Trezor   = require('..');
var Messages = Trezor.Messages;

var trezor = new Trezor.Device();

var logBox = document.querySelector("#console");
function log() {
  var msg = '';
  for(var i in arguments) {
    msg += ' ' + arguments[i];
  }
  logBox.innerHTML = msg + '<br/>' + logBox.innerHTML;
}

function onError(err) {
  log('Error:', err);
}

function onConnect() {
  log('Trezor Connected.  DeviceID:', trezor.features.device_id);
}

function onMessagePublicKey(message) {
  log('Got Master Public Key:', message.decode().xpub);
}

function onPassphraseRequest(message) {
  document.querySelector("#password-span").style.display = "inline";
}

/* Trezor Event Handlers */
trezor.on('error', onError);
trezor.on('connect', onConnect);
trezor.on('message', function(message) {
  log('message type, method:', message.type, message.getMethod());
  switch (message.type) {
    case Messages.MessageType.MessageType_PublicKey:
      onMessagePublicKey(message);
      break;
    case Messages.MessageType.MessageType_PassphraseRequest:
      onPassphraseRequest(message);
      break;
    default:
      log('Unhandled Message Type:', message.getMethod());
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
    log("Password needed!");
    return;
  }
  log('Using password:', password);
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
