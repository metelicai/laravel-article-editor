function footnoteToHtml(elem, childrenHtml) {
	const { number = null, value = '' } = elem
	return `<a href="#footnote-${number}" id="footnote-link-${number}" data-number="${number}" data-value="${value}" data-w-e-type="footnote">[${number}]</a>`
}

const conf = {
	type: 'footnote',
	elemToHtml: footnoteToHtml,
}

export default conf
