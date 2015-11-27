var gulp = require('gulp');
var react = require('gulp-react');

var path = {
  COMPONENTS: 'app/src/*.jsx',
  DEST_COMPONENTS: 'app/components/',
};

gulp.task('transform', function(){
  gulp.src(path.COMPONENTS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_COMPONENTS));
});

gulp.task('watch', function(){
  gulp.watch(path.JS, ['transform']);
});

gulp.task('default', ['watch']);