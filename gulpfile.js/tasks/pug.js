const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');

// Обработка pug
const pug = () => {
	return src(path.pug.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в pug',
				message: error.message
			}))
		}))
		.pipe(pugs(app.pug))
		.pipe(dest(path.pug.dest));
}

module.exports = pug;