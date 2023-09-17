import { Editor } from 'slate'
import { DomEditor } from '@wangeditor/core'

export function matchNode(editor, matchCallback) {
	const [nodeEntry] = Editor.nodes(editor, {
		match: n => {
			const type = DomEditor.getNodeType(n)
			return matchCallback(type)
		},
		universal: true,
		mode: 'highest',
	})

	return nodeEntry?.[0] || null
}
