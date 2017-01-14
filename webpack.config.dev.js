'use strict';

const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge.smart({
  devtool: 'eval-source-map',
  plugin: [
    new HotModuleReplacementPlugin()
  ],
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/'
    ]
  }
}, config);
