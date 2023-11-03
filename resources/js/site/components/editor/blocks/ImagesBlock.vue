<template>
	<div class="editor-block editor-block_images">
		<!-- images list -->
		<Draggable
			v-model="_data.images"
			tag="div"
			item-key="index"
			class="images-list"
			:disabled="pending">
			<template #item="{ element: image }">
				<div
					class="image"
					:class="{
						'image_loaded': image.loaded,
						'image_new': image.id === 'new',
						'image_deleted': image.deleted,
					}">
					<!-- img -->
					<img
						v-show="image.loaded"
						:src="image.preview || ((image.p || image.small || image.dxl) + '?' + Date.now())"
						:alt="image.alt"
						class="image__picture"
						@load="image.loaded = true">
					<!-- badges & buttons -->
					<div v-show="image.loaded">
						<!-- new badge -->
						<div v-if="image.id === 'new' && !image.deleted" class="image__badge image__badge_new" title="Новое изображение">
							<i class="ri-add-fill"></i>
						</div>
						<!-- deleted badge -->
						<div v-if="image.deleted" class="image__badge image__badge_deleted" title="Изображение будет удалено">
							<i class="ri-subtract-fill"></i>
						</div>
						<!-- delete btn -->
						<div class="image__delete" title="Удалить" @click.prevent="image.deleted = !image.deleted">
							<i class="ri-delete-bin-7-fill"></i>
						</div>
					</div>
				</div>
			</template>
		</Draggable>
		<!-- footer -->
		<div class="images-footer">
			<!-- add -->
			<label class="images-add">
				<input
					type="file"
					multiple
					:accept="config.mimeTypes && config.mimeTypes.length ? config.mimeTypes.join(', ') : ''"
					class="images-add__input"
					@change="uploadImages" />
				<div class="images-add__label">Добавить изображения</div>
			</label>
			<!-- limits -->
			<div class="images-limits">
				<span v-if="configStore.filesLimits.maxFileSizeString">Максимальный размер: <strong>{{ configStore.filesLimits.maxFileSizeString }}</strong></span>
				<!-- <span>Максимум одновременно загружаемых файлов: <strong>{{ configStore.filesLimits.maxFiles }}</strong></span> -->
				<span v-if="config.acceptExts && config.acceptExts.length">Поддерживаются файлы форматов: <strong>{{ config.acceptExts.join(' ') }}</strong></span>
			</div>
			<!-- style -->
			<div class="images-style" title="Стиль отображения блока на странице">
				<label class="images-style__item">
					<input
						label="Галерея"
						type="radio"
						:name="'block-' + id + '-style'"
						v-model="_data.style"
						value="gallery"
						class="images-style__item-input" />
				</label>
				<label class="images-style__item">
					<input
						label="Слайдер"
						type="radio"
						:name="'block-' + id + '-style'"
						v-model="_data.style"
						value="slider"
						class="images-style__item-input" />
				</label>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useConfigStore } from '@/stores/config'

import Draggable from 'vuedraggable'

const configStore = useConfigStore()

const props = defineProps({
	id: {
		type: Number,
	},
	data: {
		type: Object,
		required: true,
	},
})

const _data = ref(props.data)
const config = computed(() => {
	return configStore.editorBlocks.images || {}
})
const pending = ref(false)

onBeforeMount(() => {
	// Инициализация необходимых параметров блока
	if (Object.keys(_data.value).length === 0) {
		_data.value.style = 'gallery'
		_data.value.images = []
	}
})

function uploadImages(event) {
	const files = { ...event.target.files }
	const countFiles = event.target.files.length
	event.target.value = null
	pending.value = true

	for (const [index, file] of Object.entries(files)) {
		const imageIndex = _data.value.images.push({
			id: 'new',
			file,
		}) - 1

		getPreview(file).then((preview) => {
			_data.value.images[imageIndex].preview = preview

			if (Number(index) + 1 === countFiles) {
				pending.value = false
			}
		})
	}
}

function getPreview(file) {
	return new Promise((resolve) => {
		if (file instanceof File) {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = (event) => {
				resolve(event.target.result)
			}
		} else {
			resolve(null)
		}
	})
}

</script>
