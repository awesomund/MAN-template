// include gulp && plugins
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

var jsPaths = ['./public/js/**/*.js',
               './app/**/*.js', './config/**/*.js'];


// Default task(s)
gulp.task('default', ['nodemon', 'jshint'], function() {
});

// JS hint task
gulp.task('jshint', function() {
    gulp.src(jsPaths)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('nodemon', function(){
	nodemon({script: 'server.js'});
});