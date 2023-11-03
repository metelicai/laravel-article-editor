<template>
	<div class="editor-block editor-block_files">
		<div class="files-list">
			<div
				v-for="(file, index) in _data.files"
				:key="index"
				class="file"
				:class="{
					'file_new': file.id === 'new',
					'file_deleted': file.deleted,
				}">
				<!-- file -->
				<a :href="file.original || null" target="_blank" class="file__link" :title="file.name">
					<i class="ri-file-line file__icon"></i>
					<div class="file__name">{{ file.name }}</div>
					<div class="file__info">
						<span>{{ file.ext }}, </span>
						<span>{{ file.size }}</span>
					</div>
				</a>

				<!-- badges & buttons -->
				<div>
					<!-- new badge -->
					<div v-if="file.id === 'new' && !file.deleted" class="file__badge file__badge_new" title="Новое изображение">
						<i class="ri-add-fill"></i>
					</div>
					<!-- deleted badge -->
					<div v-if="file.deleted" class="file__badge file__badge_deleted" title="Изображение будет удалено">
						<i class="ri-subtract-fill"></i>
					</div>
					<!-- delete btn -->
					<div class="file__delete" title="Удалить" @click.prevent="file.deleted = !file.deleted">
						<i class="ri-delete-bin-7-fill"></i>
					</div>
				</div>
			</div>
		</div>

		<!-- footer -->
		<div class="files-footer">
			<!-- add -->
			<label class="files-add">
				<input
					type="file"
					multiple
					:accept="config.mimeTypes && config.mimeTypes.length ? config.mimeTypes.join(', ') : ''"
					class="files-add__input"
					@change="uploadFiles" />
				<div class="files-add__label">Добавить файлы</div>
			</label>
			<!-- limits -->
			<div class="files-limits">
				<span>Максимальный размер: <strong>{{ configStore.filesLimits.maxFileSizeString }}</strong></span>
				<!-- <span>Максимум одновременно загружаемых файлов: <strong>{{ configStore.filesLimits.maxFiles }}</strong></span> -->
				<span v-if="config.acceptExts && config.acceptExts.length">Поддерживаются файлы форматов: <strong>{{ config.acceptExts.join(' ') }}</strong></span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useConfigStore } from '@/stores/config'

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
	return configStore.editorBlocks.files || {}
})
const pending = ref(false)

onBeforeMount(() => {
	// Инициализация необходимых параметров блока
	if (Object.keys(_data.value).length === 0) {
		_data.value.files = []
	}
})

function uploadFiles(event) {
	const files = { ...event.target.files }
	event.target.value = null
	pending.value = true

	for (const [, file] of Object.entries(files)) {
		const splitExt = file.name.split('.')

		_data.value.files.push({
			id: 'new',
			name: splitExt[0],
			ext: splitExt[1],
			size: Math.round(file.size / 1024) + ' KB',
			file,
		})
	}
}
</script>
