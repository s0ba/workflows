var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffeeSources = ['builds/dev/components/coffee/tagline.coffee'];

// Order of process is the order of the array.
var jsSources = [
    'builds/dev/components/scripts/rclick.js',
    'builds/dev/components/scripts/pixgrid.js',
    'builds/dev/components/scripts/tagline.js',
    'builds/dev/components/scripts/template.js'
];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare : true })
            .on('error', gUtil.log))
        .pipe(gulp.dest('builds/dev/components/scripts'))
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('builds/dev/js'))
});
