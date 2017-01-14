'use strict';

const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');

module.exports = {
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin()
  ],
  entry: {
    app: ['./assets/app']
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugin: ['transform-flow-strip-types']
        }
      }
    ]
  }
};