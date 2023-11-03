/**
 * @description to html
 * @author wangfupeng
 */

function genToHtmlFn(level) {
	function headerToHtml(elem, childrenHtml) {
		// data-custom - для того, чтобы разделить базовые блоки редактора и собственные,
		// иначе будет конфликт из-за похожих тегов. Способа отключить базовые модули в редакторе не нашел
		return `<h${level} data-w-e-type="header${level}">${childrenHtml}</h${level}>`
	}
	return headerToHtml
}

export const header1ToHtmlConf = {
	type: 'myHeader1',
	elemToHtml: genToHtmlFn(1),
}

export const header2ToHtmlConf = {
	type: 'myHeader2',
	elemToHtml: genToHtmlFn(2),
}

export const header3ToHtmlConf = {
	type: 'myHeader3',
	elemToHtml: genToHtmlFn(3),
}

export const header4ToHtmlConf = {
	type: 'myHeader4',
	elemToHtml: genToHtmlFn(4),
}

export const header5ToHtmlConf = {
	type: 'myHeader5',
	elemToHtml: genToHtmlFn(5),
}
