'use strict';

const gulp = require('gulp');

gulp.task('watch:css', () => {
  return gulp.watch([
    'assets/css/**/*.scss'
  ], ['dev:css']);
});

gulp.task('watch:html', () => {
  return gulp.watch([
    'assets/html/**/*.jinja'
  ], ['dev:html']);
});

gulp.task('watch', ['watch:html', 'watch:css']);