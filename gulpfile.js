// grab dependencies
var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

// compile to flat javascript
gulp.task('browserify', function() {
  return browserify('./assets/js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('assets/build/'));
});

// uglify javascript to the final file
gulp.task('uglify', ['browserify'], function() {
  return gulp.src('assets/build/bundle.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('assets/cache/'));
});

// set up one task to do both
gulp.task('build', ['uglify']);

// set up a watch task to watch for changes and build
gulp.task('watch', ['build'], function() {
  gulp.watch('assets/js/*', ['build']);
});

// set the default here so it can be easily switched
gulp.task('default', ['watch']);
