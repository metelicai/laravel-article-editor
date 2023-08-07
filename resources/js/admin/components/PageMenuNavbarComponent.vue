<template>
	<ul class="treeview">
		<Draggable v-model="localPages" group="page-menu" item-key="id" tag="li" @end="endDraggable">
			<template #item="{ element: page }">
				<div :data-id="page.id">
					<CollapseButton class="me-1" :isCollapsed="hasCollapsed(page)" @update="collapsed($event, page)" />
					<span v-if="page.id == $route.params.menuItem">{{ page.name }}</span>
					<router-link v-else :to="{name: 'menu.edit', params: { menuItem: page.id } }">{{ page.name }}</router-link>
					<PageMenuNavbarComponent v-show="!hasCollapsed(page)" :parent-id="page.id" v-if="!isOneLevel" />
				</div>
			</template>
		</Draggable>

		<li :class="{ 'mt-3': !parentId }">
			<span v-if="parentId == $route.params.parentItem && $route.name == 'menu.create'">[ Новая страница ]</span>
			<router-link v-else-if="parentId" :to="{name:'menu.create', params: { 'parentItem': parentId } }">[ Новая страница ]</router-link>
			<router-link v-else :to="{name:'menu.create'}">[ Новая страница ]</router-link>
		</li>
	</ul>
</template>

<script setup>
	import { getConfig, menuItemsPositioning } from '../sdk'
	import { inject, onBeforeMount, ref, watchEffect } from 'vue'
	import Draggable from 'vuedraggable'
	import CollapseButton from './HelpComponents/CollapseButton.vue'

	const store = inject('store')

	defineEmits([ 'closeMenu' ])

	const props = defineProps({
		parentId: {
			type: Number
		}
	})

	const isOneLevel = ref(true)
	const localPages = ref([])
	const updateDelay = 100

	const collapsedPage = ref([])

	watchEffect(() => {
		if(props.parentId && store.pages.length) {
			setTimeout(() => {
				localPages.value = []
				store.getPageById(props.parentId)?.children.data.forEach(page => {
					localPages.value.push(page)
				})
			}, updateDelay)
		} else if(store.pages.length) {
			setTimeout(() => {
				localPages.value = []
				store.pages.forEach(page => {
					localPages.value.push(page)
				})
			}, updateDelay)
		}
	})

	function collapsed(isCollapsed, page) {
		if(isCollapsed) {
			collapsedPage.value.push(page.id)
		} else {
			const index = collapsedPage.value.indexOf(page.id)
			collapsedPage.value.splice(index, 1)
		}

	}

	function hasCollapsed(page) {
		return collapsedPage.value.indexOf(page.id) != -1
	}

	function endDraggable(event) {
		const element = event.item;
		const siblings = element.parentNode?.children;
		const index = event.newIndex;

		if(siblings && siblings.length) {
			const moved = siblings[index]?.dataset?.id;
			const prev = siblings[index - 1]?.dataset?.id;
			const next = siblings[index + 1]?.dataset?.id;

			menuItemsPositioning({moved, prev, next}).then(response => {
				store.reloadPages()
			})
		}
	}

	onBeforeMount(() => {
		getConfig('pages').then(response => {
			isOneLevel.value = response.data['one-level'];
		})
	})
</script>

<style lang="scss" scoped>
	.treeview {
		list-style-type: none;
		height: 100%;

		a {
			text-decoration: none;
		}
	}

	.sortable-ghost {
		background-color: rgba(var(--bs-dark-rgb), .3) !important;
	}
</style>
