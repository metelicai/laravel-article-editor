<template>
	<div style="background-color: gainsboro;">
		<div id="editorjs" onMouseOver="() => {}"></div>

		<div>
			<h3>Сноски:</h3>
			<p v-for="(footnote, footnoteNumber) in footnotes" :key="footnoteNumber">
				<span>[{{ footnoteNumber }}] - </span>
				<span v-html="footnote"></span>
			</p>
		</div>

		<!-- <button class="btn btn_primary" @click="saveChanges">save</button> -->

		<div>
			{{ images }}
		</div>
	</div>
</template>

<script setup>
import Editor from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from './editorjs/quote/index'
import Table from '@editorjs/table'
import Footnotes from '@editorjs/footnotes'
import Gallery from './editorjs/editorjs-gallery/index'
// import Gallery from '@vtchinh/gallery-editorjs'
// import Undo from 'editorjs-undo'
import { ref, watch } from 'vue'

const editor = ref(null)
const editorData = ref({})
const footnotes = ref({})
const images = ref({
	'vj52bJ-TI9': [
		{
			id: 1,
			small: 'https://placehold.co/300x200.jpg',
			big: 'https://placehold.co/600x400.jpg',
		},
	],
})

editor.value = new Editor({
	holder: 'editorjs',
	// readOnly: true,
	tools: {
		header: {
			class: Header,
			inlineToolbar: true,
			config: {
				placeholder: 'Заголовок',
				levels: [1, 2, 3, 4, 5, 6],
				defaultLevel: 3,
			},
		},
		paragraph: {
			config: {
				placeholder: 'Начните вводить текст здесь',
				preserveBlank: true,
			},
			tunes: ['footnotes'],
		},
		quote: {
			class: Quote,
			inlineToolbar: true,
		},
		list: {
			class: List,
			inlineToolbar: true,
			config: {
				defaultStyle: 'unordered',
			},
		},
		table: {
			class: Table,
			inlineToolbar: true,
		},
		footnotes: {
			class: Footnotes,
			inlineToolbar: true,
		},
		gallery: {
			class: Gallery,
			config: {
				types: 'image/jpeg, image/png',
				maxElementCount: 50,
				images: images.value,
				methods: {
					updateBlock(blockId, blockdata, wasDeleted = false) {
						if (wasDeleted) {
							delete images.value[blockId]
						} else {
							images.value[blockId] = blockdata
						}
					},
				},
			},
		},
	},
	data: getData(),
	defaultBlock: 'paragraph',
	minHeight: '100%',
	autofocus: true,
	onReady: () => handleReady(),
	onChange: () => saveChanges(),
	// i18n: locale
})

function handleReady(e) {
	// eslint-disable-next-line
	// const undo = new Undo({ editor: editor.value })
	// undo.initialize(editorData.value)
}

watch(editorData, (data) => {
	getFootnotes()
	localStorage.setItem('editorjs', JSON.stringify(data))
}, { deep: true })

function getData() {
	const data = JSON.parse(localStorage.getItem('editorjs') || null)
	editorData.value = data
	getFootnotes()

	return data
}

function saveChanges() {
	editor.value.save().then((outputData) => {
		editorData.value = outputData
	})
}

function getFootnotes() {
	const _footnotes = {}

	editorData.value?.blocks?.forEach((block) => {
		if (block.type === 'paragraph') {
			block.tunes.footnotes.forEach((footnote) => {
				_footnotes[footnote.superscript] = footnote.content
			})
		}
	})

	footnotes.value = _footnotes
}
</script>
