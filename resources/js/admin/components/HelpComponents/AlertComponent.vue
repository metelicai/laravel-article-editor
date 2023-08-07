<template>
	<div class="toast align-items-center border-0 text-white show" :class="'bg-' + type" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="d-flex">
			<div class="toast-body">
				<slot></slot>
			</div>
			<button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close" @click="$emit('close')"></button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'danger'
		}
	},
	emits: ['close']
}
</script>
