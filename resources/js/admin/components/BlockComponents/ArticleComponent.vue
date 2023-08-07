<template>
	<div>
		<editor
			:initial-value="data?.content"
			:disabled="disabled"
			@change="updateText"
		></editor>
		<textarea name="content" :value="JSON.stringify(content)" style="display: none;"></textarea>
	</div>
</template>

<script>
	import Editor from '../Editor/EditorComponent.vue'

	export default {
		props: {
			disabled: {
				type: Boolean
			},
			data: {
				type: Object
			}
		},
		emits: [
			'update',
			'refreshPreview'
		],
		components: {
			'editor': Editor
		},
		data() {
			return {
				content: {},
			}
		},
		methods: {
			updateText(data) {
				this.content = data;
			},
		},
	}
</script>
