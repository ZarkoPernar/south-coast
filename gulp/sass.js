var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
var config = require('./config');

function sass() {
    return gulp.src(config.srcFolder + '/scss/**/*.scss')
        .pipe(gp.sass())
        .pipe(gulp.dest(config.distFolder + '/assets'));
}

module.exports = sass;
