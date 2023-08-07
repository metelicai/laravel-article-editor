module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'standard',
		'plugin:editorconfig/all',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
		'editorconfig',
	],
	rules: {
		'no-tabs': 0,
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'never' }],
		'padded-blocks': ['error', 'never'],
		'no-console': 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prefer-promise-reject-errors': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		'vue/multi-word-component-names': 'off',
		'no-irregular-whitespace': ['warn'],
	},
}
