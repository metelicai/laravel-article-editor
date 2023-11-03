<template>
	<div style="position: relative; width: max-content;">
		<div style="width: max-content;">
			<canvas
				id='pdf-canvas'
				style='border: 1px solid black; direction: ltr'
				@click.prevent=""
				@contextmenu.prevent="">
			</canvas>
			<div v-if="initialized">
				<button type="button" class="btn btn_primary" @click="currentPage--">-</button>
				<span>{{ `${currentPage}/${pagesCount}` }}</span>
				<button type="button" class="btn btn_primary" @click="currentPage++">+</button>
				<button type="button" class="btn btn_primary" @click="scale -= 0.5">scale-</button>
				<span>{{ scale }}</span>
				<button type="button" class="btn btn_primary" @click="scale += 0.5">scale+</button>
			</div>
		</div>
		<div v-if="!initialized" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; display: flex; align-items: center; justify-content: center;">
			<p style="color: red;"><strong>LOADING</strong></p>
		</div>
	</div>
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

const initialized = ref(false)
const pagesCount = ref(0)
const currentPage = ref(1)
const scale = ref(1)
let pdf = null

onBeforeMount(async () => {
	if (props.pdfUrl) {
		const loadingTask = pdfjs.getDocument({
			url: props.pdfUrl,
			httpHeaders: {
				'X-Requested-With': 'XMLHttpRequest',
			},
		})
		pdf = await loadingTask.promise

		initialized.value = true

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
	const outputScale = (window.devicePixelRatio || 1) * 2

	//
	// Prepare canvas using PDF page dimensions
	//
	const canvas = document.getElementById('pdf-canvas')
	const context = canvas.getContext('2d')

	canvas.width = Math.floor(viewport.width * outputScale)
	canvas.height = Math.floor(viewport.height * outputScale)
	canvas.style.width = Math.floor(viewport.width) + 'px'
	canvas.style.height = Math.floor(viewport.height) + 'px'
	// canvas.style.width = '100%'

	const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null

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
