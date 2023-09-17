/**
 * @description mention plugin
 * @author wangfupeng
 */

import { DomEditor } from '@wangeditor/editor'

function getMentionConfig(editor) {
	const { EXTEND_CONF } = editor.getConfig()
	const { mentionConfig } = EXTEND_CONF
	return mentionConfig
}

function withMention(editor) {
	const { insertText, isInline, isVoid } = editor
	const newEditor = editor

	// Rewrite insertText
	newEditor.insertText = t => {
		// A void element is selected.
		const elems = DomEditor.getSelectedElems(newEditor)
		const isSelectedVoidElem = elems.some(elem => newEditor.isVoid(elem))
		if (isSelectedVoidElem) {
			insertText(t)
			return
		}

		// mention related configuration
		const { showModal, hideModal } = getMentionConfig(newEditor)

		if (t === '@') {
			setTimeout(() => {
				// Display modal (asynchronous to get the cursor position accurately)
				if (showModal) showModal(newEditor)

				// Listen, hide modal (asynchronous, wait for modal to render before listening)
				setTimeout(() => {
					function _hide() {
						if (hideModal) hideModal(newEditor)
					}
					newEditor.once('fullScreen', _hide)
					newEditor.once('unFullScreen', _hide)
					newEditor.once('scroll', _hide)
					newEditor.once('modalOrPanelShow', _hide)
					newEditor.once('modalOrPanelHide', _hide)

					function hideOnChange() {
						if (newEditor.selection != null) {
							_hide()
							newEditor.off('change', hideOnChange) // Unbind in time
						}
					}
					newEditor.on('change', hideOnChange)
				})
			})
		}

		// If not '@', the default behavior is performed
		insertText(t)
	}

	// rewrite isInline
	newEditor.isInline = elem => {
		const type = DomEditor.getNodeType(elem)
		if (type === 'mention') {
			return true
		}

		return isInline(elem)
	}

	// rewrite isVoid
	newEditor.isVoid = elem => {
		const type = DomEditor.getNodeType(elem)
		if (type === 'mention') {
			return true
		}

		return isVoid(elem)
	}

	return newEditor
}

export default withMention
