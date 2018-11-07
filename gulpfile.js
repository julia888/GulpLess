'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    return gulp.src('src/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('newStyle'));
});

gulp.watch('src/**/*.less', gulp.series('less'));