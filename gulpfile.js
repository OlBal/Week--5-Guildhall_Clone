const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
sass.compiler = require('node-sass')

function reload(done){
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
      server: {
         baseDir: "./",
         index: "./index.html"
      }
  });
  done(); 
}

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

gulp.task( 'minify-css', () => {
  return gulp.src( 'css/main.css' )
  .pipe( cleanCSS( {compatibility: 'ie8'} ) )
  .pipe( rename( {suffix: '.min'} ) )
  .pipe( gulp.dest( './css/' ) );
} );

gulp.task( 'minifystyle', gulp.series( 'sass', 'minify-css', reload ) );

gulp.task( 'watch', function () {
    return gulp.watch(['./styles/*.scss', 'js/.*js'],
            gulp.task( 'minifystyle' ) );
  } );
  
gulp.task('default', gulp.series(serve, 'watch'));

 


  
  