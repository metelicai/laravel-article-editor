<template>
	<menu-template>
		<h1 class="mb-4">
			<span>Редактирование страницы</span><span class="fw-bold ms-2" v-if="pageInfo && pageInfo.name">{{ pageInfo.name }}</span>
			<a
				class="position-relative ms-2"
				target="_blank"
				:href="pageInfo.url"
				v-if="pageInfo?.is_published"
				@mouseover="tooltipLink = true"
				@mouseout="tooltipLink = false"
			>
				<span class="img-fluid">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="max-width: 24px;" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</span>
				<div
					class="tooltip bs-tooltip-auto fade show"
					role="tooltip"
					style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(30px, 17px);"
					data-popper-placement="right"
					v-if="tooltipLink"
				>
					<div
						class="tooltip-arrow"
						style="position: absolute; top: 0px; transform: translate(0px, 9px);"
					></div>
					<div class="tooltip-inner">Показать на сайте</div>
				</div>
			</a>
		</h1>

		<ul class="nav nav-tabs mb-2">
			<li class="nav-item">
				<span class="nav-link" :class="{ 'active': currentTab == 'content-tab' }" @click="currentTab = 'content-tab'">Содержимое</span>
			</li>
			<li class="nav-item">
				<span class="nav-link" :class="{ 'active': currentTab == 'meta-tab' }" @click="currentTab = 'meta-tab'">Свойства</span>
			</li>
		</ul>

		<keep-alive>
			<component :is="currentTab" :id="id" @deleted="deletedItem"></component>
		</keep-alive>
	</menu-template>
</template>

<script>
	import Meta from './MetaComponent.vue'
	import Content from './ContentComponent.vue'
	import MenuTemplate from './MenuTemplateComponent.vue';

	export default {
		components: {
			'meta-tab': Meta,
			'content-tab': Content,
			'menu-template': MenuTemplate
		},

		data() {
			return {
				currentTab: 'content-tab',
				tooltipLink: false
			}
		},
		computed: {
			id() {
				return parseInt(this.$route.params?.menuItem);
			},
			pageInfo() {
				return this.$root.store.getPageById(this.id);
			}
		},
		methods: {
			deletedItem(data) {
				this.$root.store.reloadPages();
				if(data?.id) {
					this.$router.push({name: 'menu.edit', params: { menuItem: data.id }});
				} else {
					this.$router.push({name: 'menu.create'});
				}
			}
		},
		watch: {
			pageInfo(newPage) {
				if(newPage?.name) {
					document.title = (this.$route.meta.title + ` «${newPage.name}»`) || 'Админцентр';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-link {
		cursor: pointer;
	}
</style>
