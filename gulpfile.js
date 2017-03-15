//Gulpfile

var pkg = require('./package.json');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var header = require('gulp-header');
var comment = '\/*\r\n* Establish ' + pkg.version + '\r\n* Copyright 2017, Talon Bragg\r\n* http:\/\/establish.ml\/\r\n* Free to use under the MIT license.\r\n* https:\/\/github.com\/talonbragg\/establish\/LICENSE.md\r\n*\/\r\n';

gulp.task('build', function() {
	return gulp.src('src/*.css')
		.pipe(concat('establish.css'))
		.pipe(header(comment + '\n' + '\n'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('dist/establish.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(header(comment))
    .pipe(concat('establish.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'minify-css']);
