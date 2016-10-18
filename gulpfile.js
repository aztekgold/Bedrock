var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var prefix       = require('gulp-autoprefixer');
var wiredep      = require('wiredep').stream;
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

var src = {
    scss: 'app/styles/main.scss',
    css:  'app/css',
    html: 'app/*.html'
};

gulp.task('bower', function () {
  gulp.src('./app/footer.html')
    .pipe(wiredep({
      // optional: 'configuration',
      // goes: 'here'
    }))
    .pipe(gulp.dest('./dist'));
});

// Compile Sass and Autoprefix
gulp.task('sass', function() {
    return gulp.src('./app/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(prefix({
        browsers: '> 5%'
    }))
    .pipe(gulp.dest('./app/styles/css/'))
})

gulp.task('scripts', function(){
    return gulp.src('./app/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/'))
})
// Make Bundle JS

gulp.task('imagemin', function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

gulp.task('sasswatch', function(){
  browserSync.init({
    server: "./app"
  });
  gulp.watch('app/styles/**/*.scss',['sass']).on('change', reload);
})

// Make icons from logo.png
// var appleTouch = {
//    <link rel="icon" href="/themes/PellMell/static/img/favicon.ico">
//    <link rel="apple-touch-icon" sizes="57x57" href="/themes/PellMell/static/img/apple-touch-icon-57x57.png">
//    <link rel="apple-touch-icon" sizes="60x60" href="/themes/PellMell/static/img/apple-touch-icon-60x60.png">
//    <link rel="apple-touch-icon" sizes="72x72" href="/themes/PellMell/static/img/apple-touch-icon-72x72.png">
//    <link rel="apple-touch-icon" sizes="76x76" href="/themes/PellMell/static/img/apple-touch-icon-76x76.png">
//    <link rel="apple-touch-icon" sizes="114x114" href="/themes/PellMell/static/img/apple-touch-icon-114x114.png">
//    <link rel="apple-touch-icon" sizes="120x120" href="/themes/PellMell/static/img/apple-touch-icon-120x120.png">
//    <link rel="apple-touch-icon" sizes="144x144" href="/themes/PellMell/static/img/apple-touch-icon-144x144.png">
//    <link rel="apple-touch-icon" sizes="152x152" href="/themes/PellMell/static/img/apple-touch-icon-152x152.png">
//    <link rel="apple-touch-icon" sizes="180x180" href="/themes/PellMell/static/img/apple-touch-icon-180x180.png">
//    <link rel="icon" type="image/png" href="/themes/PellMell/static/img/favicon-32x32.png" sizes="32x32">
//    <link rel="icon" type="image/png" href="/themes/PellMell/static/img/favicon-194x194.png" sizes="194x194">
//    <link rel="icon" type="image/png" href="/themes/PellMell/static/img/favicon-96x96.png" sizes="96x96">
//    <link rel="icon" type="image/png" href="/themes/PellMell/static/img/android-chrome-192x192.png" sizes="192x192">
//    <link rel="icon" type="image/png" href="/themes/PellMell/static/img/favicon-16x16.png" sizes="16x16">
//    <meta name="msapplication-TileColor" content="#e83d48">
//    <meta name="msapplication-TileImage" content="/themes/PellMell/static/img/mstile-144x144.png">
//    <meta name="theme-color" content="#ffffff">
//
//    <meta name="mobile-web-app-capable" content="yes"> <!-- Android home screen -->
//    <meta name="apple-mobile-web-app-capable" content="yes"> <!-- Apple home screen btn -->
//    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
// }
