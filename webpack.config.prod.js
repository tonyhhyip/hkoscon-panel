'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge.smart({
  plugin: [
    new UglifyPlugin({
      compress: true
    })
  ]
}, config);