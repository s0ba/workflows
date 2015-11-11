var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass');

var coffeeSources = ['builds/dev/components/coffee/tagline.coffee'];

// Order of process is the order of the array.
var jsSources = [
    'builds/dev/components/scripts/rclick.js',
    'builds/dev/components/scripts/pixgrid.js',
    'builds/dev/components/scripts/tagline.js',
    'builds/dev/components/scripts/template.js'
];

var sassSources = ['builds/dev/components/sass/style.scss'];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare : true })
            .on('error', gUtil.log))
        .pipe(gulp.dest('builds/dev/components/scripts'))
});
// adding the extra array of tasks is adding dependencies that get run before the parent task.
gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/dev/js'))
});

gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
            sass : 'builds/dev/components/sass',
            image : 'builds/dev/images',
            style : 'expanded',
            comments : true
        }))
        .pipe(gulp.dest('builds/dev/css')
            .on('error', gUtil.log))

});

gulp.task('default', ['coffee', 'js', 'compass']);
