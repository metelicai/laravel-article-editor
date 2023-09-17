<template>
	<component :is="block.component" :id="block.id" :data="block.data"></component>
</template>

<script setup>
defineProps({
	block: {
		required: true,
	},
})
</script>
