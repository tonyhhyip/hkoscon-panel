'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss')(require('./postcss'));
const cleanCss = require('gulp-clean-css');

gulp.task('build:style', () => {
  return gulp.src('./assets/style/**/*.scss')
    .on('error', log)
    .pipe(sass())
    .pipe(postcss)
    .pipe(cleanCss())
    .pipe(gulp.dest('./public'));
});