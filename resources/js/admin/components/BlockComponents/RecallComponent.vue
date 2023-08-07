<template>
	<div class="mb-3">
		<label class="form-label">Заголовок</label>
		<input type="text" class="form-control" name="content[title]" v-model="content.title" :disabled="disabled">
	</div>

	<div class="mb-3">
		<label class="form-label">Описание</label>
		<textarea class="form-control" rows="3" name="content[description]" v-model="content.description" :disabled="disabled"></textarea>
	</div>

	<div class="mb-3">
		<label class="form-label">Надпись на кнопке</label>
		<input type="text" class="form-control" name="content[button_text]" v-model="content.button_text" :disabled="disabled">
	</div>

	<div class="mb-1">
		<label class="form-label">Изображение</label>
		<input class="form-control" type="file" accept="image/jpeg,image/pjpeg,image/png" name="files[recall]" :disabled="disabled">
		<limits-file format="jpg, png" minResolution="1920x848"></limits-file>
	</div>

	<div class="img-fluid mb-3" v-if="data?.id && data.images['recall']?.length">
		<img :src="this.data.images['recall'][0].urls.thumb" alt="">
		<div class="form-check">
			<input
				class="form-check-input"
				name="delete_media[]"
				:value="data.images['recall'][0].media.id"
				:id="`recall${data.images['recall'][0].media.id}`"
				type="checkbox"
			>
			<label class="form-check-label" :for="`recall${data.images['recall'][0].media.id}`">Удалить</label>
		</div>
	</div>

	<div class="mb-3">
		<label class="form-label">Идентификатор цели «Яндекс.Метрики» для клика по кнопке</label>
		<input type="text" class="form-control" name="content[button_metrika]" v-model="content.button_metrika" :disabled="disabled">
		<div class="form-text">Необходим для учёта кликов по кнопке в конверсиях «Яндекс.Метрики»</div>
	</div>
</template>

<script>
    import LimitsFile from '../HelpComponents/LimitsFileComponent.vue'

	export default {
		setup(props) {
			const initContent = props?.data?.content;
			let content = {
				title: initContent?.title || '',
				description: initContent?.description || '',
				button_text: initContent?.button_text || '',
				button_metrika: initContent?.button_metrika || '',
			};

			return {
				content
			}
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
			LimitsFile
		}
	}
</script>

<style>

</style>
