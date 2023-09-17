<template>
	<div class="text-block-editor-mention-modal" :style="{ top: top, left: left }">
		<input v-model="searchVal" ref="input" @keyup="inputKeyupHandler">
		<ul>
			<li
				v-for="item in searchedList" :key="item.id"
				@click="insertMentionHandler(item.id, item.name)">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

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

const top = ref('')
const left = ref('')
const searchVal = ref('')
const list = ref([
	{ id: 1, name: 'Item 1' },
	{ id: 2, name: 'Item 2' },
	{ id: 3, name: 'Item 3' },
	{ id: 4, name: 'Item 4' },
	{ id: 5, name: 'Item 5' },
])
const input = ref()

onMounted(() => {
	// Get cursor position
	const domSelection = document.getSelection()
	const domRange = domSelection?.getRangeAt(0)
	if (domRange == null) return
	const rect = domRange.getBoundingClientRect()

	// Set modal position
	top.value = `${rect.top + 20}px`
	left.value = `${rect.left + 5}px`

	input.value.focus()
})

const searchedList = computed(() => {
	const _searchVal = searchVal.value.trim().toLowerCase()
	return list.value.filter(item => {
		const name = item.name.toLowerCase()

		return name.indexOf(_searchVal) >= 0
	})
})

function inputKeyupHandler(event) {
	if (event.key === 'Escape') closeModal()

	if (event.key === 'Enter') {
		// Insert first item
		const firstOne = searchedList.value[0]
		if (firstOne) {
			const { id, name } = firstOne
			insertMentionHandler(id, name)
		}
	}
}

function insertMentionHandler(id, name) {
	const mentionNode = {
		type: 'mention',
		id,
		name,
		children: [{ text: '' }], // There must be an empty text as children
	}

	if (props.editor) {
		props.editor.restoreSelection()
		props.editor.deleteBackward('character') // Delete '@'
		props.editor.insertNode(mentionNode)
		props.editor.move(1) // Move cursor
	}

	closeModal()
}

function closeModal() {
	emits('update:modelValue', false)
}

</script>

<style lang="scss">
.text-block-editor-mention-modal {
	position: absolute;
	border: 1px solid #ccc;
	background-color: #fff;
	padding: 5px;

	input {
		width: 100px;
		outline: none;
	}

	ul {
		padding: 0;
		margin: 0;

		li {
			list-style: none;
			cursor: pointer;
			padding: 3px 0;
			text-align: left;

			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
