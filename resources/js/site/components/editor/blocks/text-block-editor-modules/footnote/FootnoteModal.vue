<template>
	<div class="w-e-modal" :style="{ top: top, left: left, width: '300px' }">
		<form @submit.prevent="submitFootnote">
			<label class="babel-container">
				<span>{{ t('footnote.valueInputLabel') }}</span>
				<textarea type="text" rows="4" required ref="input" @keyup="inputKeyupHandler"></textarea>
			</label>
			<div class="button-container">
				<button>{{ t('common.ok') }}</button>
			</div>
		</form>

		<span class="btn-close" @click="closeModal">
			<svg viewBox="0 0 1024 1024">
				<path d="M1024 896.1024l-128 128L512 640 128 1024 0 896 384 512 0 128 128 0 512 384 896.1024 0l128 128L640 512z"></path>
			</svg>
		</span>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { SlateTransforms, t } from '@wangeditor/editor'
import { DomEditor } from '@wangeditor/core'
import { updateFootnotesNumbers } from './helpers'

const props = defineProps({
	modelValue: Boolean,
	editor: {
		type: Object,
		required: true,
	},
})

const emits = defineEmits([
	'update:modelValue',
])

onMounted(() => {
	setModalPosition()
	getSelectedFootnote()
})

const top = ref('')
const left = ref('')
function setModalPosition() {
	// Get cursor position
	const domSelection = document.getSelection()
	const domRange = domSelection?.getRangeAt(0)
	if (domRange == null) return
	const rect = domRange.getBoundingClientRect()

	// Set modal position
	top.value = `${rect.top + 20}px`
	left.value = `${rect.left + 5}px`

	input.value.focus()
}

const selectedFootnote = ref(false)
function getSelectedFootnote() {
	selectedFootnote.value = DomEditor.getSelectedNodeByType(props.editor, 'footnote')

	if (selectedFootnote.value) {
		input.value.value = selectedFootnote.value?.value || ''
	}
}

const input = ref()
function inputKeyupHandler(event) {
	if (event.key === 'Escape') closeModal()
	if (event.key === 'Enter') submitFootnote()
}

function submitFootnote() {
	if (props.editor) {
		props.editor.restoreSelection()
		selectedFootnote.value ? updateFootnote() : insertFootnote()
	}

	closeModal()
}

function insertFootnote() {
	const footnoteNode = {
		type: 'footnote',
		number: '',
		value: input.value.value || '',
		children: [{ text: '' }], // There must be an empty text as children
	}

	// props.editor.deleteBackward('character') // Delete '@'
	props.editor.insertNode(footnoteNode)
	props.editor.move(1) // Move cursor

	updateFootnotesNumbers(props.editor)
}

function updateFootnote() {
	const footnote = { ...selectedFootnote.value, value: input.value.value || '' }

	SlateTransforms.setNodes(props.editor, footnote, {
		match: n => DomEditor.checkNodeType(n, 'footnote'),
	})
}

function closeModal() {
	props.editor.restoreSelection()
	emits('update:modelValue', false)
}
</script>
