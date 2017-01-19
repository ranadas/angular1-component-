//http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/
var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

gulp.task('live-server', function () {
    connect.server({
        root: 'client',
        port: 8080
    })
});


gulp.task('default', ['live-server']);