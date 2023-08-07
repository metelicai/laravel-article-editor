<template>
	<div
		class="modal d-block"
		tabindex="-1"
		aria-modal="true"
		role="dialog"
		@click.self="$emit('closeModal')"
	>
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="header"></slot>
				</div>
				<div class="modal-body">
					<form id="modalForm">
						<slot name="body"></slot>
					</form>
				</div>
				<div class="modal-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		emits: [ 'closeModal' ]
	}
</script>

<style lang="scss" scoped>
	.modal {
		background-color: rgba(0, 0, 0, .5);
	}
</style>
