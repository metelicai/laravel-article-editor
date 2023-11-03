<template>
	<div class="editor-block-container">
		<!-- left controls -->
		<div class="editor-block-controls editor-block-controls_left">
			<button
				type="button"
				class="btn btn-primary editor-block-controls__add-block"
				title="Добавить блок выше"
				@click="emit('addBlock', 'up')">
				<i class="ri-add-fill"></i>
			</button>

			<div class="editor-block-controls__move">
				<button
					type="button"
					class="btn btn-light editor-block-controls__move-up"
					title="Переместить блок выше"
					@click="emit('moveBlock', 'up')">
					<i class="ri-arrow-up-fill"></i>
				</button>
				<button
					type="button"
					class="btn btn-light editor-block-controls__move-down"
					title="Переместить блок ниже"
					@click="emit('moveBlock', 'down')">
					<i class="ri-arrow-down-fill"></i>
				</button>
			</div>

			<button
				type="button"
				class="btn btn-primary editor-block-controls__add-new-block"
				title="Добавить блок ниже"
				@click="emit('addBlock', 'down')">
				<i class="ri-add-fill"></i>
			</button>
		</div>

		<!-- block component -->
		<component :is="block.component" :id="block.id" :data="block.data"></component>

		<!-- right controls -->
		<div class="editor-block-controls editor-block-controls_right">
			<button
				type="button"
				class="btn btn-danger editor-block-controls__remove-block"
				title="Удалить блок"
				@click="emit('removeBlock')">
				<i class="ri-delete-bin-7-fill"></i>
			</button>
		</div>
	</div>
</template>

<script setup>
defineProps({
	block: {
		required: true,
	},
})

const emit = defineEmits([
	'addBlock',
	'moveBlock',
	'removeBlock',
])
</script>
