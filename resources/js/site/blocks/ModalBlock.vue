<template>
	<div
		class="modal fade"
		:class="{ 'show': props.modelValue }"
		:style="[
			props.modelValue ? { display: 'block' } : { display: 'none' },
			{ zIndex: 9999 },
			{ backgroundColor: 'rgb(0 0 0 / 55%)' }
		]"
		tabindex="-1"
		@click.self="!dialog && closeModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 v-if="slots.title" class="modal-title">
						<slot name="title"></slot>
					</h5>
					<button v-if="!dialog" type="button" class="btn-close" @click="closeModal"></button>
				</div>
				<div v-if="slots.body" class="modal-body">
					<slot name="body"></slot>
				</div>
				<div v-if="slots.footer" class="modal-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>

		<!-- <teleport to="html">
			<div
				class="modal-backdrop fade"
				:class="{ 'show': props.modelValue }"
				:style="[
						props.modelValue ? { pointerEvents: 'all' } : { pointerEvents: 'none' },
						{ zIndex: 9990 },
					]">
			</div>
		</teleport> -->
	</div>
</template>

<script setup>
import { useSlots, watch } from 'vue'

const slots = useSlots()

const props = defineProps({
	modelValue: {
		type: [Boolean, Object],
		default: false,
	},
	dialog: {
		type: Boolean,
		default: false,
	},
})

const emits = defineEmits([
	'update:modelValue',
	'closed',
])

function closeModal() {
	emits('update:modelValue', false)
	emits('closed')
}

watch(() => props.modelValue, (value) => {
	toggleMainContentScroll(value)
}, { immediate: true })

function toggleMainContentScroll(value) {
	const html = document.querySelector('html')
	const deviceType = window.screen.width < 1280 ? 'mobile' : 'desktop'
	let dataModals = Number(html.dataset.modals || 0)

	if (value) dataModals += 1
	if (!value && dataModals !== 0) dataModals -= 1

	html.dataset.modals = dataModals

	// set no-scroll styles
	if (dataModals > 0) {
		html.style.overflow = 'hidden'
		if (deviceType === 'desktop') {
			html.style.marginRight = '17px'
		}
	} else {
		html.style.overflow = null
		html.style.marginRight = null
	}
}
</script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
	.modal-xl {
		--bs-modal-width: 1500px;
	}
}
</style>
