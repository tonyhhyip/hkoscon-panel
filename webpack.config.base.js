'use strict';

const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin(),
    new ServiceWorkerWebpackPlugin({
      entry: `${__dirname}/assets/js/sw.js`,
      excludes: [
        '**/.*',
        '**/*.map',
        '*.html'
      ],
      publicPath: '/assets/'
    })
  ],
  externals: {
    jquery: 'jQuery',
    toastr: 'toastr',
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    moment: 'moment'
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
          babelrc: false,
          presets: [
            'react',
            'modern-browsers'
          ],
          plugins: ['transform-flow-strip-types']
        }
      }
    ]
  }
};
