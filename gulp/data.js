'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');

gulp.task('data', () => {
  return gulp.src('assets/data/**/*.json')
    .on('error', log)
    .pipe(gulp.dest('public/data'));
});