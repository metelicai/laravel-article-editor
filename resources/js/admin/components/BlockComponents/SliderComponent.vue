<template>
	<div>
		<div class="mb-3">
			<label class="form-label">Заголовок</label>
			<input type="text" class="form-control" name="content[title]" v-model="content.title" :disabled="disabled">
		</div>

		<div class="mb-3">
			<label class="form-label">Основной текст</label>
			<textarea class="form-control" rows="3" name="content[description]" v-model="content.description" :disabled="disabled"></textarea>
		</div>

		<div class="mb-3">
			<label class="form-label">Изображения</label>
			<input
				class="form-control"
				type="file"
				accept="image/jpeg,image/pjpeg,image/png"
				name="files[sliders][]"
				multiple
				:disabled="disabled"
				@change="selectImages"
			>
			<limits-file format="jpg, png" minResolution="798x528" multiple></limits-file>
		</div>
		<image-collection :images="data?.images?.sliders" :newImages="newImages"></image-collection>
	</div>
</template>

<script>
	import LimitsFile from '../HelpComponents/LimitsFileComponent.vue'
	import ImageCollection from '../HelpComponents/ImageCollection.vue'
	import Draggable from 'vuedraggable'

	export default {
		setup(props) {
			const initContent = props?.data?.content;

			let content = {
				title: initContent?.title,
				description: initContent?.description,
			}

			return { content }
		},
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
			LimitsFile,
			ImageCollection,
			Draggable
		},
		data() {
			return {
				files: [],
				media: [],
				newImages: []
			}
		},
		methods: {
			selectImages(event) {
				this.newImages = event.target.files;
			}
		}
	}
</script>
