/**
 * @description parse html
 * @author wangfupeng
 */

import { Text } from 'slate'

function genParser(level) {
	function parseHtml(elem, children, editor) {
		children = children.filter(child => {
			if (Text.isText(child)) return true
			if (editor.isInline(child)) return true
			return false
		})

		// 无 children ，则用纯文本
		if (children.length === 0) {
			children = [{ text: elem.textContent.replace(/\s+/gm, ' ') }]
		}

		const headerNode = {
			type: `myHeader${level}`,
			children,
		}

		return headerNode
	}
	return parseHtml
}

export const parseHeader1HtmlConf = {
	selector: 'h1:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
	parseElemHtml: genParser,
}

export const parseHeader2HtmlConf = {
	selector: 'h2:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
	parseElemHtml: genParser,
}

export const parseHeader3HtmlConf = {
	selector: 'h3:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
	parseElemHtml: genParser,
}

export const parseHeader4HtmlConf = {
	selector: 'h4:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
	parseElemHtml: genParser,
}

export const parseHeader5HtmlConf = {
	selector: 'h5:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
	parseElemHtml: genParser,
}
