var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['builds/dev/components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare : true })
            .on('error', gUtil.log))
        .pipe(gulp.dest('builds/dev/components/scripts'))
});
