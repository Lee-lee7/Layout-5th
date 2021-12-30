const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const packageImporter = require('node-sass-package-importer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();

const libraries = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/slick-carousel/slick/slick.js',
  './node_modules/bootstrap/dist/js/bootstrap.js'
]
const browser = 'firefox' // 'default', 'google chrome', 'firefox'

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ importer: packageImporter() }).on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
})

gulp.task('js', function () {
  return gulp.src(libraries)
    .pipe(concat('libs.min.js'))
    .pipe(uglify({ output: { comments: false, ascii_only: true, quote_keys: true } }))
    .pipe(gulp.dest('./js'));
})

gulp.task('watch', function () {
  browserSync.init({
    browser: browser,
    server: { baseDir: './' }
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./scss/**/*.scss', gulp.series('sass'))
})



gulp.task('default', gulp.series(gulp.parallel('js', 'sass'), 'watch'))