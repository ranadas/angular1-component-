//gulp --gulpfile practice-gulp.js comb
'use strict';
const gulp  = require('gulp');
const chalk = require('chalk');
const log   = console.log;

// testing
gulp.task('task1', function(cb) {
    setTimeout(function() {
        log(chalk.yellow.bgRed("task1 executed." ));
        cb(null);
    }, 2000);
});

gulp.task('task2', function(cb) {
    setTimeout(function() {
        log(chalk.blue.bgRed("task2 executed." ));
        cb(null);
    }, 2000);
});

gulp.task('comb', ['task2', 'task1'], function() {
    log(chalk.blue.underline.bold("combo executed." ));
});