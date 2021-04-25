const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('sass');

gulp.task('sass', function () {
  return gulp.src('./!(node_modules)/**/*.scss', { base: './' })
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./components/**/*.scss', gulp.series(['sass']));
});
