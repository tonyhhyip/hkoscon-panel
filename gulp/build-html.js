'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const jinja = require('gulp-nunjucks');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('build:html', () => {
  return gulp.src('./assets/html/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile(process.env))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttribute: true
    }))
    .pipe(gulp.dest('public'));
});