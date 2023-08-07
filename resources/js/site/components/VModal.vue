<template>
	<teleport to="#app" :disabled="!enabled">
		<transition v-if="enabled" name="modal" appear @after-leave="afterTransitonLeave()">
			<div
				v-show="!enabled || (enabled && modelValue)"
				class="modal"
				:class="[
						!!name && 'modal_' + name,
						!enabled && 'modal_disabled'
					]"
				v-bind="$attrs"
				:style="[{ 'z-index': zIndex }]">
				<div class="modal-mask">
					<div class="modal-wrapper" @click.self="!disableWrapperClose && close()">
						<div class="modal-container">
							<slot :close="close" :modal-data="modalData"></slot>

							<button type="button" class="modal-close" @click="close()"></button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</teleport>

	<slot v-if="!enabled || saveContent" :modal-data="modalData"></slot>
</template>

<script>
import { computed, getCurrentInstance, onMounted, onUnmounted, provide, ref, watch } from 'vue'

export default {
	inheritAttrs: false,
}
</script>

<script setup>
const $root = getCurrentInstance().proxy.$root

const props = defineProps({
	modelValue: Boolean,
	name: String,
	disableWrapperClose: Boolean,
	maxScreenWidth: Number,
	saveContent: Boolean,
})

const emits = defineEmits([
	'update:modelValue',
	'close',
])

provide('modalName', props.name)

const modalData = computed(() => {
	return $root.modalsData[props.name] || null
})

const zIndex = ref(10000)
watch(() => props.modelValue, (isOpenned) => {
	zIndex.value = isOpenned ? $root.opennedModals + 10000 : 10000
})

const enabled = ref(true)
const resizeObserver = ref(null)
onMounted(() => {
	if (props.maxScreenWidth > 0) {
		resizeObserver.value = new ResizeObserver((entries) => {
			enabled.value = entries[0].target.offsetWidth < props.maxScreenWidth
		})

		resizeObserver.value.observe(document.documentElement)
	}
})

onUnmounted(() => {
	resizeObserver.value?.unobserve(document.documentElement)
})

function close() {
	emits('update:modelValue', false)
	emits('close')
}

function afterTransitonLeave() {
	cleanData()
}

function cleanData() {
	delete $root.modalsData[props.name]
}
</script>
