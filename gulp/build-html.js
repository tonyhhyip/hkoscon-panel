'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const {FileSystemLoader, Environment} = require('nunjucks');
const jinja = require('gulp-nunjucks');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

const env = new Environment([
  new FileSystemLoader('assets/html/page'),
  new FileSystemLoader('assets/html/layout')
]);

gulp.task('build:html', () => {
  return gulp.src('./assets/html/page/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile({}, {env}))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttribute: true
    }))
    .pipe(gulp.dest('public'));
});