'use strict';

const gulp = require('gulp');

gulp.task('build', ['build:css', 'build:html', 'build:js']);
gulp.task('dev', ['dev:css', 'dev:html', 'dev:js', 'watch']);