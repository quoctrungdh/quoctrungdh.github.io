var input = 'sass/**/*.sass';
var output = 'css';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
	return gulp.src(input)
	.pipe(sass())
	.pipe(gulp.dest(output))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: ''
		}
	})
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);

	//other watchers
});
