<template>
	<div>
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
			<div class="form-text">Кнопка будет отображаться только если заполнены оба поля: «Надпись на кнопке» и «Телефон для кнопки»</div>
		</div>

		<div class="mb-3">
			<label class="form-label">Телефон для кнопки</label>
			<input type="text" class="form-control" name="content[button_phone]" v-model="content.button_phone" :disabled="disabled">
			<div class="form-text">Кнопка будет отображаться только если заполнены оба поля: «Надпись на кнопке» и «Телефон для кнопки»</div>
		</div>

		<div class="mb-3">
			<label class="form-label">Идентификатор цели «Яндекс.Метрики» для клика по кнопке</label>
			<input type="text" class="form-control" name="content[button_metrika]" v-model="content.button_metrika" :disabled="disabled">
			<div class="form-text">Необходим для учёта кликов по кнопке в конверсиях «Яндекс.Метрики»</div>
		</div>

		<div class="mb-3">
			<label class="form-label">Код для вставки видео с YouTube</label>
			<textarea class="form-control" rows="3" name="content[url_video]" v-model="content.url_video" :disabled="disabled"></textarea>
			<div class="form-text">Код можно получить если нажать кнопку «Поделиться» под видео и выбрать вариант «Встроить»<br>Если будут добавлены изображения ниже, то видео не будет показываться</div>
		</div>

		<div class="mb-3">
			<label class="form-label">Изображения</label>
			<input
				class="form-control"
				type="file"
				accept="image/jpeg,image/pjpeg,image/png"
				name="files[cover][]"
				multiple
				:disabled="disabled"
				@change="selectImages"
			>
			<limits-file format="jpg, png" minResolution="798x528" multiple></limits-file>
		</div>

		<image-collection :images="data?.images?.cover" :newImages="newImages"></image-collection>
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
				content: {
					title: '',
					description: '',
					button_text: '',
					button_phone: '',
					button_metrika: '',
					url_video: ''
				},
				media: [],
				newImages: []
			}
		},
		methods: {
			selectImages(event) {
				this.newImages = event.target.files;
			}
		},
		beforeMount() {
			this.content.title = this.data?.content.title;
			this.content.description = this.data?.content.description;
			this.content.button_text = this.data?.content.button_text;
			this.content.button_phone = this.data?.content.button_phone;
			this.content.button_metrika = this.data?.content.button_metrika;
			this.content.url_video = this.data?.content.url_video;
		}
	}
</script>
