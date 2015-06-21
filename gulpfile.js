var gulp = require('gulp'),
		livereload = require('gulp-livereload'),
		less = require('gulp-less'),
		path = require('path'),
		minifyCSS = require('gulp-minify-css'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		plumber = require('gulp-plumber');

gulp.task('default', ['less'], function() {

});

gulp.task('less', function () {
  return gulp.src('css/**/*.less')
  	.pipe(plumber())
    .pipe(less())
		.pipe(autoprefixer({
		  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 8'],
		  cascade: false
		}))
  	.pipe(minifyCSS())
  	.pipe(concat('style.css'))
  	.pipe(gulp.dest('./dist/css'))
  	.pipe(livereload({ start: true }));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('css/*.less', ['less']);
});