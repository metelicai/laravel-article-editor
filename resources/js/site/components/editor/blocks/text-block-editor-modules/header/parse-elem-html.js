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
	selector: 'h1[data-w-e-type="header1"]',
	parseElemHtml: genParser(1),
}

export const parseHeader2HtmlConf = {
	selector: 'h2[data-w-e-type="header2"]',
	parseElemHtml: genParser(2),
}

export const parseHeader3HtmlConf = {
	selector: 'h3[data-w-e-type="header3"]',
	parseElemHtml: genParser(3),
}

export const parseHeader4HtmlConf = {
	selector: 'h4[data-w-e-type="header4"]',
	parseElemHtml: genParser(4),
}

export const parseHeader5HtmlConf = {
	selector: 'h5[data-w-e-type="header6"]',
	parseElemHtml: genParser(5),
}
