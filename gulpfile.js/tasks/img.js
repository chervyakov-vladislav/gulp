const { src, dest } = require('gulp');

//конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины 
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');


// Обработка images
const img = () => {
	return src(path.img.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'Ошибка в Images',
				message: error.message
			}))
		}))
		.pipe(newer(path.img.dest))
		.pipe(gulpif(app.isProd, imageMin(app.imagemin)))
		.pipe(dest(path.img.dest));
}

module.exports = img;

//не удалось реализовать webp для css, выдает ошибку
//при использовании webp для html у pug перетает работать параметр pretty
// отказался от webP в этой сборке