<template>
	<menu-template>
		<h1 class="mb-4">Создание страницы</h1>

		<ul class="nav nav-tabs mb-2">
			<li class="nav-item">
				<span class="nav-link active">Свойства</span>
			</li>
		</ul>

		<meta-tab :parentId="parentId"></meta-tab>
	</menu-template>
</template>

<script>
	import Meta from './MetaComponent.vue'
	import MenuTemplate from './MenuTemplateComponent.vue';

	export default {
		components: {
			'meta-tab': Meta,
			'menu-template': MenuTemplate,
		},
		computed: {
			parentId() {
				return parseInt(this.$route.params?.parentItem);
			}
		}
	}
</script>
