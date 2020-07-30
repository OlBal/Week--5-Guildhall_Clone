const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
sass.compiler = require('node-sass')
const minifystyle = require('gulp');


gulp.task('minify-js', function() {
  return gulp.src(['js/app.js'])
    .pipe(minify())
    .pipe(gulp.dest('js/'))
});

gulp.task('sass', function () {
	return gulp.src('styles/main.scss')
		.pipe(sass())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('./css/'));
}); 

gulp.task('minify-css', () => {
    return gulp.src('css/main.css')
      .pipe(cleanCSS({compatibility: 'ie8'})
      .pipe(rename({suffix: '.min'})))
      .pipe(gulp.dest('./css/'));
  });
 
  gulp.task( 'minifystyle', gulp.series( 'sass', 'minify-css' ) );

  gulp.task( 'watch', function () {
    //                   * all files to watch
      return gulp.watch('./styles/*.scss',
    //                      task to run
              gulp.task( 'minifystyle' ) );
    } );
    //^ this will automatically run 'minify-sass'

 


  
  