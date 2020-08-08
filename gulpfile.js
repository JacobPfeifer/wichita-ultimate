// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require('sass');

// a task to generate the css with sass
gulp.task('sass', function() {
  return gulp.src('_includes/assets/css/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('_includes/assets/css'));
});

gulp.task("watch", function() {
    gulp.watch('./_includes/assets/css/**/*.scss', gulp.parallel('sass'));
  });