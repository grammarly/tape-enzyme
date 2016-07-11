// NOTE must be es5
/* eslint no-var: 0, strict: [2, "global"] */
'use strict' // eslint-disable-line strict
var gulp = require('gulp')
var del = require('del')
var babel = require('gulp-babel')

var src = __dirname + '/src'
var lib = __dirname + '/lib'

gulp.task('build', ['clean'], function () {
  return gulp.src(src + '/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(lib))
})

gulp.task('clean', function () {
  del(lib)
})

gulp.task('watch', ['build'], function () {
  gulp.watch([src + '/**/*'], ['build'])
})

gulp.task('default', ['build', 'watch'])
