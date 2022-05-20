const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const size = require('gulp-size');
const gulpif = require('gulp-if');

// Обработка html
const html = () => {
	return src(path.html.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в html',
				message: error.message
			}))
		}))
		.pipe(fileInclude())
		.pipe(gulpif(app.isProd, size( {
			title: "До сжатия"
		})))
		.pipe(gulpif(app.isProd, htmlMin(app.htmlmin)))
		.pipe(gulpif(app.isProd, size({
			title: "После сжатия"
		})))
		.pipe(dest(path.html.dest));
}

module.exports = html;