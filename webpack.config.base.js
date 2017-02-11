'use strict';

const DefinePlugin = require('webpack/lib/DefinePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  plugins: [
    new DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_MESSAGE_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
      'process.env.FIREBASE_MESSAGE_SERVER_KEY': JSON.stringify(process.env.FIREBASE_MESSAGE_SERVER_KEY),
    }),
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
    firebase: 'firebase',
    jquery: 'jQuery'
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
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
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
