const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch('src/*.html').on('change', browserSync.reload)
});

gulp.task('styles', function () {
    return gulp.src("src/sass/*.+(scss|sass|css)")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
  
gulp.task('html', function(){
    return gulp.src('src/*.html') // путь к исходным файлам 
    .pipe(htmlmin({ collapseWhitespace: true })) 
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function(){
    return gulp.src('src/js/*.js') // путь к исходным файлам 
    .pipe(gulp.dest('dist/js'));
});

gulp.task('icons', function(){
    return gulp.src('src/icons/**/*') // путь к исходным файлам 
    .pipe(gulp.dest('dist/icons'));
})

gulp.task('img', function(){
    return gulp.src('src/img/**/*') // путь к исходным файлам 
    .pipe(gulp.dest('dist/img'));
})

gulp.task('watch', function () {
    gulp.watch('src/sass/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('src/*.html').on("change", gulp.parallel('html'));
    gulp.watch('src/js/*.js').on("change", gulp.parallel('scripts'));
    gulp.watch('src/img/*.img').on("change", gulp.parallel('img'));

});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'icons', 'img'));

