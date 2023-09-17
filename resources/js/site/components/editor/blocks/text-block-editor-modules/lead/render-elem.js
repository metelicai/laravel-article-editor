/**
 * @description render lead elem
 */

import { h } from 'snabbdom'

/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderLead(elemNode, children, editor) {
	const leadNode = h(
		'p.lead',
		{
			class: { lead: true },
		},
		children,
	)
	return leadNode
}

export const renderLeadConf = {
	type: 'lead',
	renderElem: renderLead,
}
