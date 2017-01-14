'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');
const {FileSystemLoader, Environment} = require('nunjucks');
const jinja = require('gulp-nunjucks');
const rename = require('gulp-rename');

const env = new Environment([
  new FileSystemLoader('assets/html/page', {watch: true}),
  new FileSystemLoader('assets/html/layout', {watch: true})
]);

gulp.task('dev:html', () => {
  return gulp.src('./assets/html/page/**/*.jinja')
    .on('error', log)
    .pipe(jinja.compile({}, {env}))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('public'));
});