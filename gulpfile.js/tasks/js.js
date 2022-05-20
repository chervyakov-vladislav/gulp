const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');


// Обработка js
const js = () => {
	return src(path.js.src, { sourcemaps: app.isDev })
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в JavaScript',
				message: error.message
			}))
		}))
		.pipe(babel())
		.pipe(webpack(app.webpack))
		.pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
}

//суда же можно передать конфиг вебпак

module.exports = js;