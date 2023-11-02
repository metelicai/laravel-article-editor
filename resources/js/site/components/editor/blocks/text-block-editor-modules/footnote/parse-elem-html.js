function parseHtml(elem, children, editor) {
	const number = elem.getAttribute('data-number') || null
	const value = elem.getAttribute('data-value') || null

	// void node (children) must have a blank text
	return { type: 'footnote', number, value, children: [{ text: '' }] }
}

const parseHtmlConf = {
	selector: 'a[data-w-e-type="footnote"]',
	parseElemHtml: parseHtml,
}

export default parseHtmlConf
