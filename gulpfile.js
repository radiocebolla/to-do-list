const { src, dest, series, parallel, watch } = require('gulp');

//fonts 
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

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

const clean = () => {
    return del('./dist')
}

const watchFiles = () => {
    watch(['./src/*.html'], html);
    watch(['./src/less/*.less'], css);
    watch(['./src/js/*.js'], js)
}

const browserSyncFn = () => {
    browserSync.init({
        server: {
            baseDir: './dist',
            port: 3000,
            notify: false
        }
    })
}

const html = () => {
    return src('./src/*.html')
    .pipe(fileInclude())
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream())
}

const css = () => {
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

const js = () => {
    return src('./src/js/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream())
}

const fonts = () => {
    src('./src/fonts/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./dist/fonts'))
    return src('./src/fonts/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./dist/fonts'))
}

const build = series(clean, parallel(html, css, js, fonts));
const dev = parallel(build, watchFiles, browserSyncFn);

exports.default = dev;
exports.build = build;