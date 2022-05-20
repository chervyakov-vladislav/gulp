const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');


// Обработка fonts
const font = () => {
	return src(path.font.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в Fonts',
				message: error.message
			}))
		}))
		.pipe(newer(path.font.dest))
		.pipe(dest(path.font.dest));
}

module.exports = font;

//конвертирует шрифты 2 минуты, если хочешь ждать, перепиши пайпы и подключи суда плагины
// пайпы после пламбера
		// .pipe(newer(path.font.dest))
		// .pipe(fonter(app.fonter))
		// .pipe(dest(path.font.dest))
		// .pipe(ttf2woff2())
		// .pipe(dest(path.font.dest));