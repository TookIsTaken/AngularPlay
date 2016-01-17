﻿// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

var config = {
    //Include all js files but exclude any min.js files
    src: ['app/**/*.js', '!app/**/*.min.js'],
    vendor: ['node_modules/jquery/dist/jquery.js',
             'node_modules/angular/angular.js',
             'node_modules/angular-animate/angular-animate.js',
             'node_modules/angular-route/angular-route.js',
             'node_modules/angular-sanitize/angular-sanitize.js',
             'node_modules/bootstrap/dist/bootstrap.js',
             'node_modules/toastr/toastr.js',
             'node_modules/moment/moment.js',
             'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
             'node_modules/spin/dist/spin.js']
}

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['app/all.min.js']);
});

// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task('scripts', ['clean'], function () {

    return gulp.src(config.src)
      //.pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('app/'));
});
gulp.task('vendor', [], function () {

    //return gulp.src(config.vendor)
    //  .pipe(uglify())
    //  .pipe(concat('vendor.min.js'))
    //  .pipe(gulp.dest('app/'));
});

//Set a default tasks
gulp.task('default', ['scripts', 'vendor'], function () { });