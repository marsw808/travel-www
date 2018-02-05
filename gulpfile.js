var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
	console.log("Sukcess");
});

gulp.task('html', function() {
	console.log("sukces2");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/css/style.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/css'));
});

gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html');
	});
	
	watch('./app/assets/css/**/*.css', function() {
		gulp.start('styles');
	});
});