'use strict';
var gulp = require('gulp');
var glp = require('gulp-load-plugins')();
//var postcss = require('gulp-postcss')
var plugins = require('postcss-load-plugins')();
var processors = [
        plugins.import()
];
gulp.task('style', function () {
    return gulp.src(['src/styles/**/*.css'])
        .pipe(glp.postcss(processors))
        .pipe(gulp.dest('./dest'))
});