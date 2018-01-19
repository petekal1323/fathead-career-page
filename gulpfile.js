
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

/*(gulp.task('styles', function () {
    gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('./'))
});*/

//WATCHERS JLW - 06/09/17 - no need to re-save to start now
/*gulp.task('watch', function () {
    gulp.watch('careers.scss', ['styles']);
});*/


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

   browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest("app/css"))
        .pipe(concat("app/css/careers.css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
