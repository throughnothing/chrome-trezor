'use strict';
var webpack = require('webpack');

module.exports = {
    entry: {
        wallet : './examples/wallet.js',
    },
    output: {
        path: __dirname + '/examples-build/js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
        ]
    },
};
