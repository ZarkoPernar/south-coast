var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

var config = require('./config');

function inject() {
    return gulp.src(config.srcFolder + '/index.html')
        .pipe(gp.inject(gulp.src(config.distFolder + '/assets/**/*.*')))
        .pipe(gulp.dest(config.distFolder));
}

module.exports = inject;
