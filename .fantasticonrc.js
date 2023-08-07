module.exports = {
	inputDir: './public/img/font-icons', // (required)
	outputDir: './public/fonts/icons', // (required)
	fontsUrl: '/fonts/icons',
	name: 'icons',
	fontTypes: ['woff2', 'woff', 'ttf'],
	assetTypes: ['css', 'html'],
	// Use a custom Handlebars templates
	templates: {
		css: './storage/fantasticon/css.hbs',
		html: './storage/fantasticon/html.hbs',
	},
	pathOptions: {
		css: './resources/sass/site/template/icons.scss'
	},
	selector: '.icon',
}
