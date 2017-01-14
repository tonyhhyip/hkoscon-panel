'use strict';

const fs = require('fs');
const gulp = require('gulp');
const {log} = require('gulp-util');
const webpack = require('webpack');
const config = require('../webpack.config.dev');

gulp.task('dev:js', () => {
  webpack(config).watch({}, (err, stats) => {
    if (err) {
      throw new webpack.PluginError('[webpack]', e);
    } else {
      log('[webpack]', stats.toString({
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
      }));
      fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
    }
  });
});