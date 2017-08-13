const fs = require('fs'),
  gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('browserify', () => {
  browserify('./src/js/main.js', { debug: true })
    .transform('babelify', {
      presets: ['es2015', 'react'],
      plugins: ['babel-plugin-transform-class-properties']
    })
    .bundle()
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
  gulp.src('src/index.html').pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*').pipe(gulp.dest('dist/css'));
  gulp.src('src/js/vendors/*.*').pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['browserify', 'copy'], () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('./src/js/**/*.*', ['browserify', 'copy']);
  watch('./dist/js/main.js').on('change', () => {
    browserSync.reload();
  });
});
