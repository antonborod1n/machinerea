const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const newer = require('gulp-newer');
/* const svgSprite = require('gulp-svg-sprite'); */
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const include = require('gulp-include');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      }),
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'app/js/*.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/nouislider/dist/nouislider.min.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'));
  //.pipe(browserSync.stream());
}

function images() {
  return src(['app/images/src/**/*.*', '!app/images/src/**/*.svg'])
    .pipe(newer('app/images'))
    .pipe(avif({ quality: 50 }))
    .pipe(src('app/images/src/**/*.*'))

    .pipe(newer('app/images'))
    .pipe(webp())
    .pipe(src('app/images/src/**/*.*'))

    .pipe(newer('app/images'))
    .pipe(imagemin())
    .pipe(dest('app/images'));
}

/* function sprite() {
  return src('app/images/icons/*.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
            example: true,
          },
        },
      }),
    )
    .pipe(dest('app/images'));
} */

function fonts() {
  return src('app/fonts/src/*.*')
    .pipe(
      fonter({
        formats: ['woff', 'ttf'],
      }),
    )
    .pipe(src('app/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('app/fonts'));
}

function pages() {
  return src('app/pages/*.html')
    .pipe(
      include({
        includePaths: 'app/components/**',
      }),
    )
    .pipe(dest('app'))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js',
      'app/images/*.*',
      /* 'app/images/sprite.svg', */
      'app/fonts/*.*',
      '!app/components/*.html',
      '!app/pages/*.html',
      '!app/images/*.svg',
    ],
    {
      base: 'app',
    },
  ).pipe(dest('dist'));
}

function cleanDist() {
  return src('dist').pipe(clean());
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/images/src'], images);
  /* watch(['app/images/src/icon'], sprite); */
  watch(['app/js/**/*.js', 'app/js/main.min.js'], scripts);
  watch(['app/components/**', 'app/pages/*'], pages);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.images = images;
/* exports.sprite = sprite; */
exports.fonts = fonts;
exports.pages = pages;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, pages, watching);
