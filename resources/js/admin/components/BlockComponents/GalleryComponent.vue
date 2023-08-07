<template>
	<div>
		<div class="mb-3">
			<label class="form-label">Изображения</label>
			<input
				class="form-control"
				type="file"
				accept="image/jpeg,image/pjpeg,image/png"
				name="files[gallery][]"
				multiple
				:disabled="disabled"
				@change="selectImages"
			>
			<limits-file format="jpg, png" minResolution="500x250" multiple></limits-file>
		</div>

		<image-collection :images="data?.images?.gallery" :newImages="newImages"></image-collection>
	</div>
</template>

<script>
	import LimitsFile from '../HelpComponents/LimitsFileComponent.vue'
	import ImageCollection from '../HelpComponents/ImageCollection.vue'
	import Draggable from 'vuedraggable'

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
			LimitsFile,
			ImageCollection,
			Draggable
		},
		data() {
			return {
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
