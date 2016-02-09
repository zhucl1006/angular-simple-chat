'use strict';

var gulp = require('gulp'),
    conf = require('./conf'),
    $ = require('gulp-load-plugins')();

gulp.task('templates', function() {
    return gulp.src('./src/templates/**/*.html')
        .pipe($.angularTemplatecache({
            module: 'angular-bootstrap-chat'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/scripts'));
});