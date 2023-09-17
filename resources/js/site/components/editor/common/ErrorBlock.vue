<template>
	<div class="editor__error">
		<span>Ошибка загрузки блока: </span>
		<span><strong>{{ error }}</strong></span>
	</div>
</template>

<script setup>

defineProps({
	error: Error,
})
</script>

<style lang="scss" scoped>
$error-color: #e76868;

.editor__error {
	color: $error-color;
	padding: 8px 0;
}
</style>
