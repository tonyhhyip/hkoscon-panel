'use strict';

const fs = require('fs');
const gulp = require('gulp');
const util = require('gulp-util');
const webpack = require('webpack');
const config = require('../webpack.config.prod');

gulp.task('build:js', (cb) => {
  webpack(config, (e, stats) => {
    if (e) {
      throw new webpack.PluginError('[webpack]', e);
    } else {
      util.log('[webpack]', stats.toString({
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
      }));
      fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
    }
    cb();
  });
});