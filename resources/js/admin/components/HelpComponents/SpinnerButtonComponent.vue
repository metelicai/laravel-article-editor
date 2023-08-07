<template>
	<button type="button" class="btn" :disabled="showSpinner">
		<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" v-show="showSpinner"></span>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props: {
			showSpinner: {
				type: Boolean
			}
		}
	}
</script>
