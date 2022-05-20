const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const gulpif = require('gulp-if');

// Обработка scss
const scss = () => {
	return src(path.scss.src, { sourcemaps: app.isDev })
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в scss',
				message: error.message
			}))
		}))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulpif(app.isProd, shorthand()))
		.pipe(groupCssMediaQueries())
		.pipe(gulpif(app.isDev, size({title: "main.css"})))
		.pipe(gulpif(app.isDev, dest(path.scss.dest, { sourcemaps: app.isDev })))
		.pipe(gulpif(app.isProd, rename({ suffix: '.min'})))
		.pipe(gulpif(app.isProd, csso()))
		.pipe(gulpif(app.isProd, size({title: "main.min.css"})))
		.pipe(gulpif(app.isProd, dest(path.scss.dest, { sourcemaps: app.isDev })));
}

module.exports = scss;