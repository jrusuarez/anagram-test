'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
	camelize: true
});

require('require-dir')('./gulp');

gulp.task('default', function (cb) {
	$.sequence('test', cb);
});
