//http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/
var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var modRewrite = require('connect-modrewrite');

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
