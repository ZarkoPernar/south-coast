var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var inject = require('./gulp/inject');
var js = require('./gulp/js');
var wire = require('./gulp/wiredep');
var sass = require('./gulp/sass');
var clean = require('./gulp/clean');

gulp.task('inject', inject);
gulp.task('js', js);
gulp.task('wire', wire);
gulp.task('sass', sass);
gulp.task('clean', clean);


gulp.task('build', ['build:assets'], inject);
gulp.task('dist', ['clean'], () => {
    gulp.start('build');
});
gulp.task('build:assets', ['wire', 'js', 'sass'], () => {});



// Static server
gulp.task('work', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./src/scss/**/*.scss", ['sass'], browserSync.stream);
    gulp.watch("./src/*.html", ['build'], browserSync.reload);
    gulp.watch("./src/**/*.js", ['build'], browserSync.reload);

});
