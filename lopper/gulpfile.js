const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('build_project', function() {

    gulp.src('*.*')
        .pipe(gulp.dest('build'));

    gulp.src('./images/*.*')
        .pipe(gulp.dest('build/images'));

    gulp.src('./fonts/*.*')
        .pipe(gulp.dest('build/fonts'));

    let processors = [autoprefixer];

    return gulp.src('style/*.sass')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/style'));

});