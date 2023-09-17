<template>
	<canvas
		id='pdf-canvas'
		style='border: 1px solid black; direction: ltr'
		@click.prevent=""
		@contextmenu.prevent="">
	</canvas>
	<button type="button" class="btn btn_primary" @click="currentPage++">+</button>
	<button type="button" class="btn btn_primary" @click="currentPage--">-</button>
	<button type="button" class="btn btn_primary" @click="scale += 0.5">scale+</button>
	<button type="button" class="btn btn_primary" @click="scale -= 0.5">scale-</button>
</template>

<script setup>
import * as pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
import { onBeforeMount, ref, watch } from 'vue'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

const props = defineProps({
	pdfUrl: {
		type: String,
		required: true,
	},
})

// const initialized = ref(false)
const pagesCount = ref(0)
const currentPage = ref(1)
const scale = ref(2)
let pdf = null

onBeforeMount(async () => {
	if (props.pdfUrl) {
		const loadingTask = pdfjs.getDocument(props.pdfUrl)
		pdf = await loadingTask.promise
		pagesCount.value = pdf.numPages

		getPage()
	}
})

watch(currentPage, (newValue) => {
	getPage()
})

watch(scale, (newValue) => {
	getPage()
})

async function getPage() {
	const page = await pdf.getPage(currentPage.value)
	const viewport = page.getViewport({ scale: scale.value })
	// Support HiDPI-screens.
	const outputScale = window.devicePixelRatio || 1

	//
	// Prepare canvas using PDF page dimensions
	//
	const canvas = document.getElementById('pdf-canvas')
	const context = canvas.getContext('2d')

	canvas.width = Math.floor(viewport.width * outputScale)
	canvas.height = Math.floor(viewport.height * outputScale)
	canvas.style.width = Math.floor(viewport.width) + 'px'
	canvas.style.height = Math.floor(viewport.height) + 'px'

	const transform =
		outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null

	//
	// Render PDF page into canvas context
	//
	const renderContext = {
		canvasContext: context,
		transform,
		viewport,
	}
	page.render(renderContext)
}

</script>
