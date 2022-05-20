const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const gulpif = require('gulp-if');

// Обработка css
const css = () => {
	return src(path.css.src, { sourcemaps: app.isDev })
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в css',
				message: error.message
			}))
		}))
		
		.pipe(concat('main.css'))
		.pipe(cssImport())
		.pipe(autoprefixer())
		.pipe(gulpif(app.isProd, shorthand()))
		.pipe(groupCssMediaQueries())
		.pipe(gulpif(app.isDev, size({title: "main.css"})))
		.pipe(gulpif(app.isDev, dest(path.css.dest, { sourcemaps: app.isDev })))
		.pipe(gulpif(app.isProd, rename({ suffix: '.min'})))
		.pipe(gulpif(app.isProd, csso()))
		.pipe(gulpif(app.isProd, size({title: "main.min.css"})))
		.pipe(gulpif(app.isProd, dest(path.css.dest, { sourcemaps: app.isDev })));
}

module.exports = css;