<template>
	<div>
		<div class="mb-3">
			<label class="form-label">Файлы</label>
			<input class="form-control" type="file" name="files[files][]" multiple :disabled="disabled">
			<limits-file multiple></limits-file>
		</div>
		<div v-if="data?.id">
			<div class="row">
				<div class="col-sm-3 mb-3" v-for="file in data.images.files" :key="file.media.id">
					<div class="card">
						<div class="card-body">
							<a :href="file.media.original_url" class="docs__link">
								<span class="docs__block">
									<span class="docs__head">{{ file.media.file_name }}</span>
								</span>
							</a>
						</div>
						<div class="card-footer">
							<div class="form-check">
								<input class="form-check-input" :id="'file' + file.media.id" name="delete_media[]" :value="file.media.id" type="checkbox">
								<label class="form-check-label" :for="'file' + file.media.id">Удалить</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LimitsFile from '../HelpComponents/LimitsFileComponent.vue'

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
			LimitsFile
		},
	}
</script>
