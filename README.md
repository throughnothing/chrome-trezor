# chrome-trezor

[![Build Status](https://travis-ci.org/throughnothing/chrome-trezor.svg)](https://travis-ci.org/throughnothing/chrome-trezor)
[![Coverage Status](https://coveralls.io/repos/throughnothing/chrome-trezor/badge.svg)](https://coveralls.io/r/throughnothing/chrome-trezor)

This is a javascript library to interface with a Trezor Bitcoin hardware
wallet directly from the Chrome browser.  It will work in Chrome on all
platforms and also on Chromebooks.

# Synopsis

```javascript
var Trezor         = require('chrome-trezor'),
    TrezorDevice   = Trezor.Device,
    TrezorMessage  = Trezor.Message,
    TrezorMessages = Trezor.Messages;

var trezor = new TrezorDevice();
trezor.on('connect', function() { console.log('connected') });
trezor.connect();
```

## Running in Chrome

This is just a library to be used in other projects, but it does come with
some examples that can be run in Chrome.

To run the examples, you *do not* need to install the developer requirements
listed below if you don't want to modify the code.

Simply enable "Developer mode" checkbox in the upper-right-hand corner of
`chrome://extensions` and then click "Load unpacked extension..." and pick
the `examples-build` directory of this repo.

The `examples-build/manifest.json`, along with the
`examples-build/js/background.js` file that it points to will tell chrome
how to run everything.

If you want to modify the code and run your modifications, you will need to
proceed with the development requirements below.

## Using in Chrome Apps/Extensions

To use this in Chrome Apps/Extensions, you will need your app to have
the following permissions in your `manifest.json` in order to access
the trezor device:

```
  "permissions": [
    "hid",
    {
      "usbDevices": [
        { "vendorId": 21324, "productId": 1 }
      ]
    },
    ...
  ],
```

The example program has a sample in `example-builds/manifest.json` that can be used as an example.

## Development requirements

  * Chrome 38 or later. If you're on dev channel you should be fine.
  * Node.js's [npm](https://www.npmjs.org/). On my OSX machine I
    satisfied this requirement with `brew install node`.
  * Webpack + App dependencies:
    * `sudo npm -g install webpack && npm install`

## Build

To build run: `npm run build`

Whenever you make changes to the javascript in `index.js` or `lib/` you will
need to run this again before re-launching the app from Chrome.
