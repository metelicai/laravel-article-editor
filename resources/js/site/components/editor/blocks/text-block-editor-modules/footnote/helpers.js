import { SlateEditor, SlateTransforms } from '@wangeditor/editor'
import { DomEditor } from '@wangeditor/core'

export function getFootnoteConfig(editor) {
	const { EXTEND_CONF } = editor.getConfig()
	const { footnoteConfig } = EXTEND_CONF
	return footnoteConfig
}

export function showModal(editor) {
	const { showModal, hideModal } = getFootnoteConfig(editor)

	if (showModal) showModal(editor)

	setTimeout(() => {
		function _hide() {
			if (hideModal) hideModal(editor)
		}
		editor.once('fullScreen', _hide)
		editor.once('unFullScreen', _hide)
		editor.once('scroll', _hide)
		editor.once('modalOrPanelShow', _hide)
		editor.once('modalOrPanelHide', _hide)

		function hideOnChange() {
			if (editor.selection != null) {
				_hide()
				editor.off('change', hideOnChange) // Unbind in time
			}
		}
		editor.on('change', hideOnChange)
	})
}

export function updateFootnotesNumbers(editor) {
	const footnoteElements = SlateEditor.nodes(editor, {
		at: [], // Path of Editor
		match: (node, path) => node.type === 'footnote',
	})

	let number = 1
	for (const [nodeEntry, location] of footnoteElements) {
		const footnote = { ...nodeEntry }
		footnote.number = number++

		SlateTransforms.select(editor, location)
		SlateTransforms.setNodes(editor, footnote, {
			match: n => DomEditor.checkNodeType(n, 'footnote'),
		})
		// editor.restoreSelection()
		// editor.move(1) // Move cursor
	}

	editor.restoreSelection()
}
