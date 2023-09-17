/**
 * @description header menu
 * @author wangfupeng
 */

// import { t } from '@wangeditor/core'
import { Transforms } from 'slate'
import { DomEditor } from '@wangeditor/core'
import { matchNode } from '../../helpers'

class TextStyleSelect {
	// title = t('header.title')
	title = 'Text style'
	iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M960 960c-51.2 0-102.4-3.2-153.6-3.2-51.2 0-99.2 3.2-150.4 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 57.6-28.8 86.4-48 19.2-12.8 19.2-60.8 19.2-80v-224-19.2c-9.6-3.2-19.2-3.2-28.8-3.2H320c-9.6 0-19.2 0-28.8 3.2V780.8c0 22.4 0 80 22.4 92.8 28.8 19.2 96-6.4 96 44.8 0 16-9.6 41.6-28.8 41.6-54.4 0-105.6-3.2-160-3.2-48 0-96 3.2-147.2 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 51.2-28.8 80-48 19.2-12.8 19.2-60.8 19.2-83.2V294.4c0-28.8 3.2-115.2-22.4-131.2-25.6-16-86.4 9.6-86.4-41.6 0-16 6.4-41.6 28.8-41.6 51.2 0 105.6 3.2 156.8 3.2 48 0 96-3.2 144-3.2 19.2 0 28.8 22.4 28.8 41.6 0 48-57.6 25.6-83.2 41.6-19.2 12.8-19.2 73.6-19.2 92.8v201.6c6.4 3.2 16 3.2 22.4 3.2h400c6.4 0 12.8 0 22.4-3.2V256c0-22.4 0-80-19.2-92.8-28.8-16-86.4 6.4-86.4-41.6 0-16 9.6-41.6 28.8-41.6 51.2 0 99.2 3.2 150.4 3.2 48 0 99.2-3.2 147.2-3.2 19.2 0 28.8 22.4 28.8 41.6 0 51.2-57.6 25.6-86.4 41.6-19.2 12.8-19.2 70.4-19.2 92.8v537.6c0 19.2 0 67.2 19.2 80 28.8 19.2 89.6-6.4 89.6 44.8 0 19.2-6.4 41.6-28.8 41.6z"></path></svg>'
	tag = 'select'
	width = 60

	getOptions(editor) {
		// 基本的 options 列表
		const options = [
			// value 和 elemNode.type 对应
			{
				value: 'myHeader1',
				text: 'H1',
				styleForRenderMenuList: { 'font-size': '32px', 'font-weight': 'bold' },
			},
			{
				value: 'myHeader2',
				text: 'H2',
				styleForRenderMenuList: { 'font-size': '24px', 'font-weight': 'bold' },
			},
			{
				value: 'myHeader3',
				text: 'H3',
				styleForRenderMenuList: { 'font-size': '18px', 'font-weight': 'bold' },
			},
			{
				value: 'myHeader4',
				text: 'H4',
				styleForRenderMenuList: { 'font-size': '16px', 'font-weight': 'bold' },
			},
			{
				value: 'myHeader5',
				text: 'H5',
				styleForRenderMenuList: { 'font-size': '13px', 'font-weight': 'bold' },
			},
			{
				value: 'lead',
				text: 'Lead',
				styleForRenderMenuList: { 'font-size': '24px', 'font-weight': 'normal' },
			},
			// { value: 'paragraph', text: t('header.text') },
			{ value: 'paragraph', text: 'Text' },
		]

		// 获取 value ，设置 selected
		const curValue = this.getValue(editor).toString()
		options.forEach((opt) => {
			if (opt.value === curValue) {
				opt.selected = true
			} else {
				delete opt.selected
			}
		})

		return options
	}

	isActive(editor) {
		// select menu 会显示 selected value ，用不到 active
		return false
	}

	/**
	 * 获取选中节点的 node.type
	 * @param editor editor
	 */
	getValue(editor) {
		const node = matchNode(editor, (type) => {
			return type === 'lead' || type.startsWith('myHeader')
		})

		return node ? DomEditor.getNodeType(node) : 'paragraph'
	}

	isDisabled(editor) {
		if (editor.selection == null) return true

		const node = matchNode(editor, (type) => {
			return type === 'paragraph' || type === 'lead' || type.startsWith('myHeader')
		})

		return !node
	}

	exec(editor, value) {
		if (this.isDisabled(editor)) return

		const type = value.toString()
		const newType = this.isActive(editor) ? 'paragraph' : type

		Transforms.setNodes(editor, { type: newType }, { mode: 'highest' })
	}
}

export default TextStyleSelect
