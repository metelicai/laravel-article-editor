import { ref } from 'vue'
import { defineStore } from 'pinia'
// import configApi from '@/apis/config'

export const useConfigStore = defineStore('config', () => {
	const filesLimits = ref({
		maxFileSize: null,
		maxFileSizeString: null,
		maxFiles: null,
	})

	const editorBlocks = ref({
		images: {
			label: 'Изображения',
			mimeTypes: ['image/jpeg', 'image/png'],
			acceptExts: ['.jpg', '.png'],
		},
		text: {
			label: 'Текст',
		},
		files: {
			label: 'Файлы',
		},
	})

	function getConfig() {
		// configApi.get().then(response => {
		// 	filesLimits.value = response.filesLimits
		// 	editorBlocks.value = response.editorBlocks
		// })
	}

	return { filesLimits, editorBlocks, getConfig }
})
