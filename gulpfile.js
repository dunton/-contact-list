const gulp = require('gulp');
const browserify = require('browserify');
const reactify = require('reactify'); //converts jsx to js
const source = require('vinyl-source-stream'); //converts string to a stream
const babelify = require('babelify');

gulp.task('scripts', () => {
	browserify('./src/js/index.js')
		.transform('babelify')
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
})

gulp.task('default', ['browserify', 'copy'], function() {
	return gulp.watch('src/**/*.*', ['browserify', 'copy'])
})