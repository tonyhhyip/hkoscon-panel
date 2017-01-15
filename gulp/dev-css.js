'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss')(require('./postcss'));

gulp.task('dev:style', () => {
  return gulp.src('./assets/style/**/*.scss')
    .on('error', log)
    .pipe(sass())
    .pipe(postcss)
    .pipe(gulp.dest('./public/assets'));
});