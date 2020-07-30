const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')



gulp.task('minify-js', function() {
  gulp.src(['js/app.js'])
    .pipe(minify())
    .pipe(gulp.dest('js/'))
});

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'})
      .pipe(rename({suffix: '.min'})))
      .pipe(gulp.dest('./styles/'));
  });