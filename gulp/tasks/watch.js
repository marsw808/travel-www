var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({

		notify: false,
		server: {
			baseDir: "app"
		}

	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});
	
	watch('./app/assets/css/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});

gulp.task('cssInject', ['styles'], function() {
	gulp.src('./app/temp/css/style.css')
	.pipe(browserSync.stream());

});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
