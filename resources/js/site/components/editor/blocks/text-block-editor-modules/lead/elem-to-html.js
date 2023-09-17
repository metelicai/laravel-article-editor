/**
 * @description to html
 */

function leadToHtml(elem, childrenHtml) {
	return `<p class="lead">${childrenHtml}</p>`
}

export const leadToHtmlConf = {
	type: 'lead',
	elemToHtml: leadToHtml,
}
