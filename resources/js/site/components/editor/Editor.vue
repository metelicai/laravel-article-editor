<template>
	<div class="editor">
		<div class="editor__container">
			<div class="editor__blocks">
				<block-wrapper v-for="(block, index) in blocks" :key="index" :block="loadBlock(block)"></block-wrapper>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import BlockWrapper from './common/BlockWrapper.vue'
import LoadingBlock from './common/LoadingBlock.vue'
import ErrorBlock from './common/ErrorBlock.vue'

const blocks = ref([
	{
		id: 1,
		type: 'images',
		data: {
			style: 'gallery',
			images: [
				{
					id: 1,
					small: 'https://placehold.co/300x200.jpg',
					big: 'https://placehold.co/600x400.jpg',
				},
			],
		},
	},
	{
		id: 2,
		type: 'text',
		data: {
			content: '<p>123</p><p>123</p><p>123 <a href="/users/3" data-w-e-type="mention" data-id="3" data-name="Item 3">@Item 3</a></p>',
		},
	},
])

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
</script>

<style lang="scss" scoped>
.editor__blocks {
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 32px;
	max-width: 640px;
	margin: 0 auto;
}
</style>
