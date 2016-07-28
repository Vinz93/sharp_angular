var gulp = require('gulp');

/* ======== development ========  */
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

/* ======== optimization ========  */
// var useref = require('gulp-useref');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
// var runSequence = require('run-sequence');
//
// var del = require('del');
// var rename = require('gulp-rename');




//
// gulp.task('delete',function () {
//   del(['dist/*'],function (err) {
//     console.log('Files deleted');
//   });
// });

/*===================================================================
                    DEVELOPMENT PROCESS
======================================================================*/

// gulp.task('style', function () {
//   return  gulp
//       .src('./app/css/main.css')
//       .pipe(minifyCSS())
//       .pipe(rename({suffix:'.min'}))
//       .pipe(gulp.dest('.dist'))
//       .pipe(browserSync.reload({
//       stream: true
//     }));
// });

gulp.task('script', function () {
  return gulp
  .src('app/js/**/*.jss')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(jshint());
  // .pipe(rename({suffix:'.min'}))
  // .pipe(gulp.dest('dist'));
});

/* ======== Watch files & reloads the browser ========  */

gulp.task('watch', ['browserSync'],function () {
  // Reloads the browser whenever HTML , CSS or JS files change
  gulp.watch('app/css/**/*.css',[browserSync.reload]);
  gulp.watch('app/js/**/*.js',['script',browserSync.reload]);
  gulp.watch('app/*.html', browserSync.reload);
});


/* ======== Spin up a Server ========  */

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

/*===================================================================
          READY FOR PRODUCTION WEB SITE (optimization process)
======================================================================*/
//
//
//
// /* ======== Build project ========  */
//
// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     // Minifies only if it's a JavaScript file
//     .pipe(gulpIf('*.js', uglify()))
//     // Minifies only if it's a CSS file
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });
//
// /* ======== Optimizing Images ========  */
//
// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//   // Caching images that ran through imagemin & Setting interlaced to true
//   .pipe(cache(imagemin({
//       interlaced: true
//     })))
//   .pipe(gulp.dest('dist/images'))
// });
//
// /* ======== Copying Fonts to Dist ========  */
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// })
//
// /* ======== Cleaning up dist ========  */
//
// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// })
//
// /* ======== Running all build stuff ========  */
//
// gulp.task('build', function (callback) {
//   runSequence('clean:dist',['useref', 'images', 'fonts'], callback)
// })
//
//
//
// gulp.task('default',['delete','style','script','watch']);
