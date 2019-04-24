var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src('src/scss/app.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
	return gulp.src('src/js/app.js')
		.pipe(gulp.dest('dist/js'))
});

var js_files = [
    './src/js/assets/*',
    './src/js/components/*',
    './src/js/app.js'
];

gulp.task('js', function() {
    gulp.src(js_files)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.js', ['js']);
});



