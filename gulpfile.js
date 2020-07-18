var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var rename = require('gulp-rename')

sass.compiler = require('node-sass')

gulp.task('sass', function () {
  return gulp
    .src('./src/scss/custom.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('date', function () {
  return gulp
    .src('./src/input/date/_date.css')
    .pipe(rename('date.css'))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('default', gulp.series('sass', 'date'))
