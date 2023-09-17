const mix = require('laravel-mix')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
// require('laravel-mix-bundle-analyzer')

// Webpack Config
const assetsPath = 'public/assets/site'
mix.setPublicPath(assetsPath)

// Исключаем обработку url-путей при использовании import в js, для .svg файлов в папке /resources/js/site
// Ниже делаем обработку импортов .svg как html
const excludeJsSvgReges = /resources\/js\/site\/(.*)\.svg$/
mix.override(config => {
	const ruleWithSvg = config.module.rules.find(rule => rule.test.test('.svg'))
	if (ruleWithSvg) ruleWithSvg.exclude = [excludeJsSvgReges]
})

mix.webpackConfig({
	module: {
		rules: [
			// Делаем обработку импортов .svg как html в указанной папке
			{
				test: excludeJsSvgReges,
				use: [{ loader: 'html-loader' }],
			},
		],
	},
	output: {
		publicPath: '/assets/site/',
	},
	resolve: {
		alias: {
			'@': path.resolve('resources/js/site'),
		},
	},
	plugins: [
		new CaseSensitivePathsPlugin(),
		new ESLintPlugin({
			files: 'resources/js/site/**/*.(js|vue)',
			extensions: ['.js', '.vue'],
		}),
	],
})

// JS
mix.js('resources/js/site/app.js', assetsPath + '/js').vue()
	.js('resources/js/site/services/y.metrika/y.metrika-init.js', assetsPath + '/js/y.metrika-init.js')
	.extract()

// SASS
mix.sass('resources/sass/site/style.scss', assetsPath + '/css')
	// .sass('resources/sass/site/tinymce.scss', assetsPath + '/css')
	.options({
		processCssUrls: false,
	})

mix.version()
mix.disableNotifications()

// browserSync
mix.browserSync({
	proxy: process.env.APP_URL,
	serveStatic: ['./public'],
	files: [
		'resources/views/site/**/*.blade.php',
		'resources/views/components/**/*.blade.php',
		'resources/js/site/**/*.{js,vue}',
		assetsPath + '/css/style.css',
		'app/**/*.php',
	],
})

// bundleAnalyzer (127.0.0.1:8888)
// mix.bundleAnalyzer({
	// openAnalyzer: false,
// })
