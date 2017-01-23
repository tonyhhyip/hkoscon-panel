'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge.smart({
  plugins: [
    new UglifyPlugin({minimize: true}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  devtool: 'source-map'
}, config);
