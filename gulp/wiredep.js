var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

var config = require('./config');

function wire() {
    return gulp.src(config.srcFolder + '/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest(config.srcFolder));
}

module.exports = wire;
