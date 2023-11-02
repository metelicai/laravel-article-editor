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
			content: '',
			// content: '<p>111<a href="#footnote-1" id="footnote-link-1" data-number="1" data-value="111" data-w-e-type="footnote">[1]</a></p><p>222</p><p>333<a href="#footnote-2" id="footnote-link-2" data-number="2" data-value="333" data-w-e-type="footnote">[2]</a></p><p>444</p><p>555</p><p>666<a href="#footnote-3" id="footnote-link-3" data-number="3" data-value="666" data-w-e-type="footnote">[3]</a></p>',
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
