/**
 * @description button menu base
 */

import { t } from '@wangeditor/editor'
import { matchNode } from '../../helpers'
import { showModal } from '../helpers'

class EditFootnoteButtonMenu {
	title = t('footnote.edit')
	iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M864 0a160 160 0 0 1 128 256l-64 64-224-224 64-64c26.752-20.096 59.968-32 96-32zM64 736l-64 288 288-64 592-592-224-224L64 736z m651.584-372.416l-448 448-55.168-55.168 448-448 55.168 55.168z"></path></svg>'
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
			return type === 'footnote'
		})

		return !node
	}

	exec(editor, value) {
		showModal(editor)
	}
}

export default EditFootnoteButtonMenu
