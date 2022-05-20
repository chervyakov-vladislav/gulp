const pathSrc = "./src";
const pathDest = "./dist";

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + "/html/*.html",
		watch: pathSrc + "/html/**/*.html",
		dest: pathDest
	},

	pug: {
		src: pathSrc + "/pug/*.pug",
		watch: pathSrc + "/pug/**/*.pug",
		dest: pathDest
	},

	css: {
		src: pathSrc + "/styles/*.css",
		watch: pathSrc + "/styles/**/*.css",
		dest: pathDest + '/css'
	},

	scss: {
		src: pathSrc + "/styles/*.{sass,scss,css}",
		watch: pathSrc + "/styles/**/*.{sass,scss,css}",
		dest: pathDest + '/css'
	},

	js: {
		src: pathSrc + "/js/*.js",
		watch: pathSrc + "/js/**/*.js",
		dest: pathDest + '/js'
	},

	img: {
		src: pathSrc + "/img/*.{jpg,jpeg,svg,gif,png}",
		watch: pathSrc + "/img/**/*.{jpg,jpeg,svg,gif,png}",
		dest: pathDest + '/img'
	},

	font: {
		src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		dest: pathDest + '/fonts'
	}
}