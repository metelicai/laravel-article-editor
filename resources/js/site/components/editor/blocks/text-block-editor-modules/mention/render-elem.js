/**
 * @description render elem
 * @author wangfupeng
 */

import { h } from 'snabbdom'
import { DomEditor } from '@wangeditor/editor'

function renderMention(elem, children, editor) {
	// Is the current node selected?
	const selected = DomEditor.isNodeSelected(editor, elem)
	const { id = null, name = '' } = elem

	// get url by id here

	const vnode = h(
		'a',
		{
			props: {
				href: '/users/' + id, // put getted url here
				target: '_blank',
				contentEditable: false,
			},
			style: {
				marginLeft: '3px',
				marginRight: '3px',
				backgroundColor: 'var(--w-e-textarea-slight-bg-color)',
				border: selected // Selected/unselected, the styles are different
					? '2px solid var(--w-e-textarea-selected-border-color)' // wangEditor provided css var https://www.wangeditor.com/v5/theme.html
					: '2px solid transparent',
				borderRadius: '3px',
				padding: '0 3px',
			},
		},
		`@${name}`,
	)

	return vnode
}

const conf = {
	type: 'mention',
	renderElem: renderMention,
}

export default conf
