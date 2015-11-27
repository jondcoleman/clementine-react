var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'src/index.html',
  SERVER: 'src/server.js',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html', 'src/**/*', 'src/*'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  SRC_TO_COPY: ['src/css/*.*','src/css/*.*','src/img/*.*','src/models/*.*','src/controllers/*.*','src/routes/*.*','src/config/*.*'],
  MINIFIED_OUT: 'build.min.js',
  DEST_src: 'dist/app',
  DEST_BUILD: 'dist/build',             
  DEST: 'dist',
  DEST_JS: 'dist/js',
};

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
    gulp.src(path.SERVER)
        .pipe(gulp.dest(path.DEST));    
    gulp.src(path.SRC_TO_COPY, {base: './src/'})
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);