'use strict';

const gulp = require('gulp');

gulp.task('build', ['build:style', 'build:html', 'build:js', 'data']);
gulp.task('dev', ['dev:style', 'dev:html', 'dev:js', 'data', 'watch']);