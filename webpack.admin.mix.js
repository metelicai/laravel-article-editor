const mix = require('laravel-mix');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// Webpack Config
const assetsPath = 'public/assets/admin'
mix.setPublicPath(assetsPath)

mix.webpackConfig({
	output: {
		publicPath: '/assets/admin/'
	},
	stats: {
		children: true
	},
	resolve: {
		alias: {
			'@': path.resolve('resources/js/admin'),
		},
	},
	plugins: [
		new CaseSensitivePathsPlugin(),
	],
});

// Сайт
// JS
mix.js('resources/js/admin/app.js', assetsPath + '/js').vue()
	.js('resources/js/admin/preview-resize.js', assetsPath + '/js')
	.extract()

// SASS
mix.sass('resources/sass/admin/admin.scss', assetsPath + '/css')
	.options({
		processCssUrls: false
	});

mix.version();
mix.disableNotifications();

// browserSync
mix.browserSync({
	proxy: process.env.APP_URL + '/admin',
	serveStatic: ['./public'],
	files: [
		'resources/views/admin/**/*.blade.php',
		'resources/js/admin/**/*.{js,vue}',
		assetsPath + '/css/admin.css',
		'config/**/*.php',
		'app/**/*.php',
	]
});
