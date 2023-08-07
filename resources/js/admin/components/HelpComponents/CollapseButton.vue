<template>
	<svg
		v-if="isCollapsed"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="icon"
		@click="$emit('update', false)"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
	<svg
		v-else
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="icon"
		@click="$emit('update', true)"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
</template>

<script setup>
	const props = defineProps({
		isCollapsed: {
			type: Boolean,
			required: true
		}
	})

	defineEmits([ 'update' ])
</script>

<style lang="scss" scoped>
	.icon {
		width: 20px;
		margin-top: -4px;
	}
</style>
