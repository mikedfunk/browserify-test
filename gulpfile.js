(function () {
  'use strict';

  // grab dependencies
  var gulp = require('gulp');
  var browserify = require('browserify');
  var uglify = require('gulp-uglify');
  var source = require('vinyl-source-stream');
  var rename = require('gulp-rename');
  var buffer = require('vinyl-buffer');

  // uglify javascript to the final file
  gulp.task('javascript', function () {
    return browserify('./assets/js/app.js')
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./assets/cache/'));
  });

  // build depends on uglify, which depends on browserify
  gulp.task('build', ['javascript']);

  // set up a watch task to watch for changes and build. also build when
  // you first run it.
  gulp.task('watch', ['build'], function () {
    gulp.watch('assets/js/*', ['build']);
  });

  // set the default here so it can be easily switched
  gulp.task('default', ['watch']);
}());

