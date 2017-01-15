'use strict';

const gulp = require('gulp');

gulp.task('build', ['build:style', 'build:html', 'build:js']);
gulp.task('dev', ['dev:style', 'dev:html', 'dev:js', 'watch']);