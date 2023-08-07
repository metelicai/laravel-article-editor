<template>
	<div class="form-text">
		Максимальный размер: {{ uploadMaxFilesize }}
		<span v-if="multiple"><br>Максимальное количество одновременно загружаемых файлов: {{ maxFileUploads }}</span>
		<span v-if="format"><br>Поддерживаемые форматы файлов: {{ format }}</span>
		<span v-if="minResolution"><br>Минимальное разрешение картинки: {{ minResolution }}</span>
	</div>
</template>

<script>
	import { limits } from '../../sdk'

	export default {
		props: {
			multiple: {
				type: Boolean,
				default: false
			},
			minResolution: {
				type: String
			},
			format: {
				type: String
			}
		},
		data() {
			return {
				uploadMaxFilesize: '',
				maxFileUploads: 0
			}
		},
		beforeMount() {
			limits().then(response => {
				this.uploadMaxFilesize = response.data.upload_max_filesize_string;
				this.maxFileUploads = response.data.max_file_uploads;
			});
		}
	}
</script>
