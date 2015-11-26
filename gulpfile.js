var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'src/index.html',
  SERVER: 'src/server.js',
  CSS: 'src/css/*.css',
  IMG: 'src/img/*',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  CONFIG: 'src/config/*.js',
  CONTROLLERS: 'src/controllers/*.js',
  MODELS: 'src/models/*.js',
  ROUTES: 'src/routes/*.js',
  MINIFIED_OUT: 'build.min.js',
  DEST_src: 'dist/app',
  DEST_BUILD: 'dist/build',             
  DEST: 'dist',
  DEST_CSS: 'dist/css',
  DEST_IMG: 'dist/img',
  DEST_CONFIG: 'dist/config',
  DEST_CONTROLLERS: 'dist/controllers',
  DEST_MODELS: 'dist/models',
  DEST_JS: 'dist/js',
  DEST_ROUTES: 'dist/routes',
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
    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_CSS));
    gulp.src(path.IMG)
        .pipe(gulp.dest(path.DEST_IMG));
    gulp.src(path.CONFIG)
        .pipe(gulp.dest(path.DEST_CONFIG));
    gulp.src(path.CONTROLLERS)
        .pipe(gulp.dest(path.DEST_CONTROLLERS));
    gulp.src(path.MODELS)
        .pipe(gulp.dest(path.DEST_MODELS));
    gulp.src(path.ROUTES)
        .pipe(gulp.dest(path.DEST_ROUTES));        
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);