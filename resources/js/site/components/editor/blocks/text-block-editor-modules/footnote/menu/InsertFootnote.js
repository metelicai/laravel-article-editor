/**
 * @description button menu base
 */

import { t } from '@wangeditor/editor'
import { matchNode } from '../../helpers'
import { showModal } from '../helpers'

class InsertFootnoteButtonMenu {
	title = t('footnote.insert')
	iconSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.84788 0V2.22643H2.88479V21.7616H4.84788V24H0V0H4.84788Z" fill="black"/><path d="M14.2564 2.60948V20.0978H11.3716V6.03292L7.09825 7.4813V5.09925L13.9092 2.60948H14.2564Z" fill="black"/><path d="M19.1282 2.22643V0H24V24H19.1282V21.7616H21.1152V2.22643H19.1282Z" fill="black"/></svg>'
	type = 'footnote'
	tag = 'button'

	getValue(editor) {
		return ''
	}

	isActive(editor) {
		return false
	}

	isDisabled(editor) {
		if (editor.selection == null) return true

		const node = matchNode(editor, (type) => {
			return type === 'paragraph' || type === 'footnote'
		})

		return !node
	}

	exec(editor, value) {
		showModal(editor)
	}
}

export default InsertFootnoteButtonMenu
