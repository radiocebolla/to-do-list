const { src, dest, series, parallel, watch } = require('gulp');

//fonts 
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

//images
const imagemin = require('gulp-imagemin');

// webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

// common
const browserSync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const fileInclude = require('gulp-file-include');
const yargs = require('yargs');

const argv = yargs.argv;
webpackConfig.mode = !!argv.development ? 'development' : 'production';

// css 
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

function clean() {
    return del('./dist')
}

function watchFiles() {
    watch(['./src/*.html'], html);
    watch(['./src/less/*.less'], css);
    watch([
        './src/js/*.js',
        './src/js/components/**/*.js',
        './src/js/helpers/*.js',
        './src/js/constants/*.js',
        './src/js/localStorage/*.js'
    ], js);
    watch(['./src/js/*.js'], images);
}

function browserSyncFn() {
    browserSync.init({
        server: {
            baseDir: './dist',
            port: 3000,
            notify: false
        }
    })
}

function html() {
    return src('./src/*.html')
    .pipe(fileInclude())
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream())
}

function css() {
    return src('./src/less/style.less')
    .pipe(less())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
        cascade: false
    }))
    .pipe(cleanCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream())
}

function js() {
    return src('./src/js/*.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream())
}

function fonts() {
    src('./src/fonts/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./dist/fonts'))
    return src('./src/fonts/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./dist/fonts'))
        .pipe(browserSync.stream())
}

function images() {
    return src('src/img/*.{png,jpg,svg,gif}')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream())
}

const build = series(clean, parallel(html, css, js, fonts, images));
const dev = parallel(build, watchFiles, browserSyncFn);

exports.default = dev;
exports.build = build;