/**
 * @description plugin
 */

import { DomEditor } from '@wangeditor/editor'

function withShiftEnter(editor) {
	const { insertBreak, insertText } = editor
	const newEditor = editor

	setTimeout(() => {
		// beforeInput event not recognized shift+enter，so bind DOM events yourself
		const { $textArea } = DomEditor.getTextarea(newEditor)
		if ($textArea == null) return
		$textArea.on('keydown', event => {
			const isShift = event.shiftKey || event.metaKey
			if (event.key === 'Enter' && isShift) {
				// shift+enter trigger newline
				newEditor.insertText('\n')
			} else if (event.key === 'Enter') {
				// enter trigger new break (paragraph line)
				newEditor.insertBreak()
			}
		})
	})

	newEditor.insertBreak = () => {
		const event = window.event
		const isShift = event.shiftKey || event.metaKey

		if (isShift) {
			// shift+enter trigger newline
			insertText('\n')
		} else if (event.key === 'Enter') {
			// enter trigger new break (paragraph line)
			insertBreak()
		}
	}
	return newEditor
}

export default withShiftEnter
