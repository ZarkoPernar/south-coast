var gulp = require('gulp');
var gp = require('gulp-load-plugins')();

var config = require('./config');

function js() {
    return gulp.src(config.srcFolder + '/**/*.js')
        .pipe(gulp.dest(config.distFolder + '/assets'));
}

module.exports = js;
