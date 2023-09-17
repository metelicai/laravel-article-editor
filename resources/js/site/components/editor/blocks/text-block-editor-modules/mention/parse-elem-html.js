/**
 * @description parse elem html
 * @author wangfupeng
 */

function parseHtml(elem, children, editor) {
	const id = elem.getAttribute('data-id') || null
	const name = elem.getAttribute('data-name') || null

	// void node (children) must have a blank text
	return { type: 'mention', id, name, children: [{ text: '' }] }
}

const parseHtmlConf = {
	selector: 'a[data-w-e-type="mention"]',
	parseElemHtml: parseHtml,
}

export default parseHtmlConf
