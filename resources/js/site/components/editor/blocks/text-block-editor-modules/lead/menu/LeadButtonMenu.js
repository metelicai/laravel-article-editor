/**
 * @description button menu base
 */

import { t } from '@wangeditor/editor'
import { Transforms } from 'slate'
import { DomEditor } from '@wangeditor/core'
import { matchNode } from '../../helpers'

class LeadButtonMenu {
	title = t('lead.text')
	type = 'lead'
	tag = 'button'

	getValue(editor) {
		return ''
	}

	isActive(editor) {
		return !!DomEditor.getSelectedNodeByType(editor, this.type)
	}

	isDisabled(editor) {
		if (editor.selection == null) return true

		const node = matchNode(editor, (type) => {
			return type === 'paragraph' || type === 'lead' || type.startsWith('my-header')
		})

		return !node
	}

	exec(editor, value) {
		if (this.isDisabled(editor)) return

		const newType = this.isActive(editor) ? 'paragraph' : this.type

		Transforms.setNodes(editor, { type: newType }, { mode: 'highest' })
	}
}

export default LeadButtonMenu
