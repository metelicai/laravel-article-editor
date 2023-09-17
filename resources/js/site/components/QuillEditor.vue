<template>
	<div style="background-color: antiquewhite;">
		<QuillEditor
			id="editor"
			v-model:content="content"
			:global-options="editorSettings.globalOptions"
			:content-type="editorSettings.contentType"
			:toolbar="editorSettings.toolbar"
			@update:content="saveContent()"
			ref="quill">
			<!-- <template #toolbar>
				<div id="my-toolbar">
					<span class="ql-formats">
						<select class="ql-header">
							<option value="1"></option>
							<option value="2"></option>
							<option value="3"></option>
							<option value="4"></option>
							<option value="5"></option>
							<option value="6"></option>
							<option selected></option>
						</select>
						<select class="ql-size">
							<option value="small"></option>
							<option selected></option>
							<option value="large"></option>
							<option value="huge"></option>
						</select>
					</span>
					<span class="ql-formats">
						<button type="button" class="ql-bold"></button>
						<button type="button" class="ql-italic"></button>
						<button type="button" class="ql-underline"></button>
						<button type="button" class="ql-strike"></button>
					</span>
					<span class="ql-formats">
						<button id="custom-button">Сноска</button>
					</span>
				</div>
			</template> -->
		</QuillEditor>
	</div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import { onBeforeMount, ref } from 'vue'

// import '@vueup/vue-quill/dist/vue-quill.snow.css'

const quill = ref()
const editorSettings = ref({
	globalOptions: {
		debug: 'error',
		// modules: {},
		// placeholder: 'Compose an epic...',
		readOnly: false,
		theme: 'snow',
	},
	// toolbar: '#my-toolbar',
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ size: ['small', false, 'large', 'huge'] }],
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }],
		// [{ indent: '-1' }, { indent: '+1' }],
		// [{ direction: 'rtl' }],
		[{ color: [] }, { background: [] }],
		// [{ font: [] }],
		// [{ align: [] }],
		['clean'],
	],
	contentType: 'html',
})

const content = ref('')

onBeforeMount(() => {
	content.value = localStorage.getItem('quillEditor') || ''
})

function saveContent() {
	localStorage.setItem('quillEditor', content.value)
}

</script>
