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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  entry: {
    app: './assets/js/app'
  },
  output: {
    path: `${__dirname}/public/assets`,
    filename: '[name].js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-flow-strip-types']
        }
      }
    ]
  }
};