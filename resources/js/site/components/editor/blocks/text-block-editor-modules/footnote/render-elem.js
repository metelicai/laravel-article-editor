import { h } from 'snabbdom'
import { DomEditor } from '@wangeditor/editor'

function renderFootnote(elem, children, editor) {
	// Is the current node selected?
	const selected = DomEditor.isNodeSelected(editor, elem)
	const { number = null, value = null } = elem

	const vnode = h(
		'span',
		{
			id: `footnote-link-${number}`,
			props: {
				// href: `#footnote-${id}`,
				contentEditable: false,
			},
			attrs: {
				'data-value': value,
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
		`[${number}]`,
	)

	return vnode
}

const conf = {
	type: 'footnote',
	renderElem: renderFootnote,
}

export default conf
