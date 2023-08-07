<template>
	<div class="row h-100">
		<div class="col-4 bg-light rounded h-100 sidebar" :class="{ 'sidebar-opened': isOpened }">
			<div class="icon mt-2 text-end" :class="{ 'icon-opened': isOpened, 'mb-2': !isOpened }">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					@click="isOpened = !isOpened"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</div>
			<transition>
				<div v-show="isOpened">
					<PageMenu />
				</div>
			</transition>
		</div>
		<div class="col"><slot></slot></div>
	</div>
</template>

<script setup>
	import { inject, ref } from 'vue';
	import PageMenu from '../PageMenuNavbarComponent.vue'

	const isOpened = ref(true)

</script>

<style lang="scss" scoped>

	.sidebar {
		--duration: 0.5s;
	}

	.icon {
		svg {
			cursor: pointer;
			width: 24px;
			transition: var(--duration) ease;
		}

		&-opened {
			svg {
				transform: rotate(180deg);
			}
		}
	}


	.sidebar {
		width: 48px;
		transition: var(--duration) ease;

		&-opened {
			width: 33.33333333%;
		}
	}

	@media (min-width: 768px) {
		.sidebar {
			width: 48px;
			transition: var(--duration) ease;

			&-opened {
				width: 16.66666667%;
			}
		}
	}

	.v-enter-active {
		transition: opacity 0.1s ease (var(--duration));
	}

	.v-leave-active {
		transition: opacity 0.01s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
