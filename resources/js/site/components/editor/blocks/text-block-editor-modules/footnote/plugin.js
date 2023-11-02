import { DomEditor } from '@wangeditor/editor'

function withFootnote(editor) {
	const { isInline, isVoid } = editor
	const newEditor = editor

	// rewrite isInline
	newEditor.isInline = elem => {
		const type = DomEditor.getNodeType(elem)
		if (type === 'footnote') {
			return true
		}

		return isInline(elem)
	}

	// rewrite isVoid
	newEditor.isVoid = elem => {
		const type = DomEditor.getNodeType(elem)
		if (type === 'footnote') {
			return true
		}

		return isVoid(elem)
	}

	return newEditor
}

export default withFootnote
