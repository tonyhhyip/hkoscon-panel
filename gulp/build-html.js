'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const jinja = require('gulp-nunjucks');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('build:html', () => {
  return gulp.src('./assets/html/page/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile({}))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttribute: true
    }))
    .pipe(gulp.dest('public'));
});