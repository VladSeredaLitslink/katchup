const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync')

function style() {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
       server: {
           baseDir: './'
       }
    })
    gulp.watch('./assets/scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
}

function build() {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('./assets/fonts/*.otf')
        .pipe(gulp.dest('dist/assets/fonts'));
    gulp.src('./assets/img/*.png')
        .pipe(gulp.dest('dist/assets/img'));
};

exports.style = style
exports.watch = watch
exports.build = build
