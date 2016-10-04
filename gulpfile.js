var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var wiredep = require('wiredep').stream;

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
    .pipe(autoprefixer({
        browsers: '> 5%'
    }))
    .pipe(gulp.dest('./public/styles/'))
})

gulp.task('scripts', function(){
    return gulp.src('./app/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/'))
})

gulp.task('imagemin', function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
