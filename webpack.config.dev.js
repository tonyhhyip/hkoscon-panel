'use strict';

const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge.smart({
  devtool: 'inline-source-map'
}, config);
