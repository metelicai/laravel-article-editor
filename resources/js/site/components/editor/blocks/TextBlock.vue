<template>
	<div class="editor-block editor-block_text">
		<div style="border: 1px solid #ccc">
			<Toolbar
				:editor="editorRef"
				:defaultConfig="toolbarConfig"
				mode="default"
				style="border-bottom: 1px solid #ccc" />
			<Editor
				v-model="_data.content"
				:defaultConfig="editorConfig"
				mode="default"
				style="min-height: 200px; overflow-y: hidden;"
				@onCreated="handleCreated"
				@onChange="handleChange" />
			<MentionModal
				v-if="isShowMentionModal"
				v-model="isShowMentionModal"
				:editor="editorRef"></MentionModal>
			<FootnoteModal
				v-if="isShowFootnoteModal"
				v-model="isShowFootnoteModal"
				:editor="editorRef"></FootnoteModal>
		</div>
	</div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // import css

import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { Boot, i18nChangeLanguage } from '@wangeditor/editor'
import leadModule from './text-block-editor-modules/lead/index'
import headerModule from './text-block-editor-modules/header/index'
import textStyleSelectModule from './text-block-editor-modules/text-style-select/index'
import shiftEnterModule from './text-block-editor-modules/shift-enter/index'
import footnoteModule from './text-block-editor-modules/footnote/index'
import mentionModule from './text-block-editor-modules/mention/index'
import MentionModal from './text-block-editor-modules/MentionModal'
import FootnoteModal from './text-block-editor-modules/footnote/FootnoteModal'
import { updateFootnotesNumbers } from './text-block-editor-modules/footnote/helpers'

Boot.registerModule(headerModule)
Boot.registerModule(textStyleSelectModule)
Boot.registerModule(leadModule)
Boot.registerModule(shiftEnterModule)
Boot.registerModule(footnoteModule)
Boot.registerModule(mentionModule)
i18nChangeLanguage('en')

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
	data: {
		type: Object,
		required: true,
	},
})

const editorRef = shallowRef()
const _data = ref(props.data)
const toolbarConfig = {
	toolbarKeys: [
		'textStyleSelect',
		// 'headerSelect',
		// 'myHeader1',
		// 'header1',
		// 'myHeader2',
		// 'header2',
		'lead',
		'insertFootnote',
		'|',
		'bold',
		'italic',
		'underline',
		'through',
		'|',
		'sup',
		'sub',
		'blockquote',
		'|',
		'color',
		'bgColor',
		'clearStyle',
		'|',
		'bulletedList',
		'numberedList',
		{
			key: 'group-indent',
			title: 'Indent',
			iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z\'></path></svg>',
			menuKeys: [
				'indent',
				'delIndent',
			],
		},
		'|',
		'insertLink',
		'insertTable',
		'divider',
		'|',
		'undo',
		'redo',
		// {
		// 	key: 'group-more-style',
		// 	title: 'More',
		// 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path></svg>',
		// 	menuKeys: [
		// 		'code',
		//		'codeBlock',
		// 	],
		// },
		// '|',
		// 'fontSize',
		// 'fontFamily',
		// 'lineHeight',
		// 'todo',
		// {
		// 	key: 'group-justify',
		// 	title: 'Text align',
		// 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\'></path></svg>',
		// 	menuKeys: [
		// 		'justifyLeft',
		// 		'justifyRight',
		// 		'justifyCenter',
		// 		'justifyJustify',
		// 	],
		// },
		// 'emotion',
		// {
		// 	key: 'group-image',
		// 	title: 'Image',
		// 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\'></path></svg>',
		// 	menuKeys: [
		// 		'insertImage',
		// 		'uploadImage',
		// 	],
		// },
		// {
		// 	key: 'group-video',
		// 	title: 'Video',
		// 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z\'></path></svg>',
		// 	menuKeys: [
		// 		'insertVideo',
		// 		'uploadVideo',
		// 	],
		// },
		// '|',
		// 'fullScreen',
	],
}
const editorConfig = {
	placeholder: 'Type here...',
	MENU_CONF: {
		color: {
			colors: ['#000', '#333', '#666'],
		},
		bgColor: {
			colors: ['#000', '#333', '#666'],
		},
		fontSize: {
			fontSizeList: [
				'12px',
				'16px',
				{ name: '24px', value: '24px' },
				'40px',
			],
		},
	},
	hoverbarKeys: {
		link: {
			menuKeys: [
				'editLink',
				'unLink',
				'viewLink',
			],
		},
		image: {
			menuKeys: [
				'imageWidth30',
				'imageWidth50',
				'imageWidth100',
				'editImage',
				'viewImageLink',
				'deleteImage',
			],
		},
		pre: {
			menuKeys: [
				'enter',
				'codeBlock',
				'codeSelectLang',
			],
		},
		table: {
			menuKeys: [
				'enter',
				'tableHeader',
				'tableFullWidth',
				'insertTableRow',
				'deleteTableRow',
				'insertTableCol',
				'deleteTableCol',
				'deleteTable',
			],
		},
		divider: {
			menuKeys: [
				'enter',
			],
		},
		video: {
			menuKeys: [
				'enter',
				'editVideoSize',
			],
		},
		text: {
			menuKeys: [
				'headerSelect',
				'insertLink',
				'|',
				'bold',
				'italic',
				'|',
				'color',
				'bgColor',
				'clearStyle',
			],
		},
		footnote: {
			menuKeys: [
				'editFootnote',
			],
		},
	},
	EXTEND_CONF: {
		mentionConfig: {
			showModal: () => { isShowMentionModal.value = true },
			hideModal: () => { isShowMentionModal.value = false },
		},
		footnoteConfig: {
			showModal: () => { isShowFootnoteModal.value = true },
			hideModal: () => { isShowFootnoteModal.value = false },
		},
	},
}

const isShowMentionModal = ref(false)
const isShowFootnoteModal = ref(false)

onBeforeUnmount(() => {
	const editor = editorRef.value
	if (editor == null) return
	editor.destroy()
})

const handleCreated = (editor) => {
	editorRef.value = editor

	// console.log(editor.getConfig())
	// console.log(editor.getAllMenuConfig())
}

const handleChange = (editor) => {
	// handleFootnotes(editor)

	// const toolbar = DomEditor.getToolbar(editor)
	// console.log(toolbar.getConfig().toolbarKeys)
	// console.log(editor.getConfig().hoverbarKeys)
	// consol.elog(editor.getConfig())
}

const lastFootnotesCount = ref(0)
function handleFootnotes(editor) {
	const footnotes = editor.getElemsByType('footnote')
	_data.value.footnotes = footnotes

	// Обновить id сносок при удалении сноски
	const footnotesCount = footnotes.length
	if (footnotesCount < lastFootnotesCount.value) updateFootnotesNumbers(editor)
	lastFootnotesCount.value = footnotesCount
}
</script>
