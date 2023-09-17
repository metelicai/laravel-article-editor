/**
 * @description elem to html
 * @author wangfupeng
 */

function mentionToHtml(elem, childrenHtml) {
	const { id = null, name = '' } = elem
	// return `<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="${value}" data-info="${infoStr}">@${value}</span>`
	return `<a href="/users/${id}" data-w-e-type="mention" data-id="${id}" data-name="${name}">@${name}</a>`
}

const conf = {
	type: 'mention',
	elemToHtml: mentionToHtml,
}

export default conf
