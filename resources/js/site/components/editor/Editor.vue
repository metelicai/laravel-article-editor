<template>
	<div class="editor pb-4">
		<div class="editor__blocks">
			<block-container
				v-for="(block, index) in _blocks"
				:key="index"
				:block="loadBlock(block)"
				@addBlock="modalAddBlockShow($event, index)"
				@moveBlock="moveBlock($event, index)"
				@removeBlock="removeBlock(index)">
			</block-container>
		</div>

		<button
			type="button"
			class="btn btn-primary justify-content-center mt-4 content-wrapper"
			@click="modalAddBlockShow('down', _blocks.length - 1)">
			<i class="ri-add-fill"></i>
			<span>Добавить блок</span>
		</button>

		<ModalBlock v-model="modalAddBlock.openned" dialog>
			<template #title>Добавление блока</template>
			<template #body>
				<p class="fw-bold mb-2">Выберите тип блока:</p>

				<div class="d-grid gap-2">
					<button
						v-for="(block, blockType) in configStore.editorBlocks"
						:key="blockType"
						type="button"
						class="btn btn-primary"
						@click="addBlock(blockType)">
						{{ block.label }}
					</button>
				</div>
			</template>
			<template #footer>
				<button
					type="button"
					class="btn btn-secondary"
					@click="modalAddBlockClose()">
					Отмена
				</button>
			</template>
		</ModalBlock>
	</div>
</template>

<script setup>
import { defineAsyncComponent, inject, ref, watch } from 'vue'
import { useConfigStore } from '@/stores/config'

import BlockContainer from './common/BlockContainer.vue'
import LoadingBlock from './common/LoadingBlock.vue'
import ErrorBlock from './common/ErrorBlock.vue'
import ModalBlock from '@/blocks/ModalBlock'

const confirmDialog = inject('confirmDialog')
const configStore = useConfigStore()

const props = defineProps({
	modelValue: {
		type: Array,
		required: true,
	},
})

const emit = defineEmits([
	'update:modelValue',
])

const _blocks = ref([])

watch(() => props.modelValue, () => {
	_blocks.value = props.modelValue
}, { immediate: true, deep: true })

watch(() => _blocks.value, () => {
	emit('update:modelValue', _blocks.value)
}, { deep: true })

/**
 * Blocks
 *
 */

function loadBlock(block) {
	let type = null
	if (typeof block.type === 'string' && block.type.trim()) {
		type = block.type.toLowerCase()
		type = type.charAt(0).toUpperCase() + type.slice(1)
	}

	const component = defineAsyncComponent({
		loader: () => import(`./blocks/${type}Block.vue`),
		loadingComponent: LoadingBlock,
		errorComponent: ErrorBlock,
		timeout: 2000,
	})

	return {
		id: block.id,
		data: block.data,
		component,
	}
}

function addBlock(type) {
	if (modalAddBlock.value.placement === 'down') {
		modalAddBlock.value.currentBlockIndex += 1
	}

	_blocks.value.splice(modalAddBlock.value.currentBlockIndex, 0, {
		id: null,
		type,
		data: {},
	})

	modalAddBlockClose()
}

function moveBlock(direction, index) {
	if (direction === 'up') {
		const prevBlock = _blocks.value[index - 1]
		const currentBlock = _blocks.value[index]

		if (!prevBlock || !currentBlock) return 0

		_blocks.value[index - 1] = currentBlock
		_blocks.value[index] = prevBlock
	} else {
		const currentBlock = _blocks.value[index]
		const nextBlock = _blocks.value[index + 1]

		if (!currentBlock || !nextBlock) return 0

		_blocks.value[index] = nextBlock
		_blocks.value[index + 1] = currentBlock
	}
}

function removeBlock(index) {
	confirmDialog.show({
		title: 'Вы действительно хотите удалить блок?',
		confirmButton: { text: 'Удалить', color: 'danger' },
	})
		.then(() => {
			_blocks.value.splice(index, 1)
		}).catch(() => { })
}

/**
 * Modal add blocks
 *
 */

const modalAddBlock = ref({
	openned: false,
	currentBlockIndex: null,
	placement: 'down',
})

function modalAddBlockShow(placement, index) {
	modalAddBlock.value = {
		openned: true,
		currentBlockIndex: index,
		placement,
	}
}

function modalAddBlockClose() {
	modalAddBlock.value = {
		openned: false,
		currentBlockIndex: null,
		placement: 'down',
	}
}
</script>
