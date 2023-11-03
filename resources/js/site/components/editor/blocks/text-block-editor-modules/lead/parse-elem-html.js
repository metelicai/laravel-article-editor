/**
 * @description parse html
 */

import { Text } from 'slate'

function parseLeadHtml(elem, children, editor) {
	children = children.filter(child => {
		if (Text.isText(child)) return true
		if (editor.isInline(child)) return true
		return false
	})

	if (children.length === 0) {
		children = [{ text: elem.textContent.replace(/\s+/gm, ' ') }]
	}

	return {
		type: 'lead',
		children,
	}
}

export const parseLeadHtmlConf = {
	selector: 'p[data-w-e-type="lead"',
	parseElemHtml: parseLeadHtml,
}
