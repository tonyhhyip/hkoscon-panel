'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge.smart({
  plugin: [
    new UglifyPlugin({
      compress: true
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    })
  ],
  devtool: 'source-map'
}, config);