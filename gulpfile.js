//http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/
var gulp        = require('gulp');
var connect     = require('gulp-connect');
var modRewrite  = require('connect-modrewrite');
var protractor  = require("gulp-protractor").protractor
const chalk     = require('chalk');
const log       = console.log;

gulp.task('live-server', function () {
    connect.server({
        root: 'client/',
        livereload: true,
        port: 8080,
        middleware: function () {
            return [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ];
        }
    });

});

// Rerun the task when a file changes
gulp.task('html', function () {
    console.log('Reloading with HTML change...');
    gulp.src('./app/**/*.html').pipe(connect.reload());
});

gulp.task('js', function () {
    console.log('Reloading with JS change...');
    gulp.src('./app/js/*.js').pipe(connect.reload());
});

//watch method takes as arguments: source to be watched, and a task to be triggered after change.
gulp.task('watch', function () {
    gulp.watch('client/js/**/*.js', ['js']);
    gulp.watch('client/**/*.html', ['html']);
});

//livereload html, js etc.
gulp.task('default', ['live-server','html', 'js', 'watch']);

var protractorOptions = {
    configFile: 'conf.js'
};
gulp.task('e2e', ['webdriver_standalone', 'live-server','html', 'js', 'watch'], function(cb) {
    gulp.src('specs/*spec.js')
        .pipe(protractor(protractorOptions))
        .on('error', function(e) {
            // stop webserver
            connect.serverClose();
            // print test results
            console.log(e);
        })
        .on('end', function(){
            // stop webserver
            connect.serverClose();
            cb();
        });
});

/** TODO: e2e  **/
// Start a standalone server
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('run-all', ['webdriver_standalone', 'live-server', 'test-protractor'], function (callback) {
    log(chalk.blue.underline.bold("Both webdriver & live-server & then run protractor scripts." ));
});


gulp.task('test-protractor', function (cb) {
    gulp.src('./specs/prot/*-spec.js')
        .pipe(protractor({
            configFile: 'conf.js',
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            throw e;
        })
        .on('end', cb);
});
