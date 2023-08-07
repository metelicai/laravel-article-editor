import { menuItemsList } from '../sdk'
import { ref } from 'vue'

export function usePages() {
	let pages = ref([]);
	let currentPage = ref(undefined);

	const reloadPages = () => {
		menuItemsList().then(response => {
			pages.value = [];

			response.data.forEach(item => {
				pages.value.push(item);
			});
		});
	};

	const getPages = () => {
		return pages;
	}

	const getPage = (index) => {
		return pages.value[index || 0];
	}

	const getPageById = (id, parent) => {
		id = parseInt(id);
		let findPage;

		if(!parent) {
			findPage = pages.value.find(page => page.id == id);
		}

		if(!findPage && !parent) {
			pages.value.some(page => {
				let childPage = page.children.data.find(childPage => childPage.id == id);

				if(!childPage) {
					childPage = getPage(id, page);
				}

				if(childPage) {
					findPage = childPage;
					return true;
				}
			});
		}

		if (!findPage && parent?.children?.data) {
			parent.children.data.some(page => {
				let childPage;

				if (page.id == id) {
					childPage = page;
				}

				if (!childPage) {
					childPage = getPage(id, page);
				}

				if(childPage) {
					findPage = childPage;
					return true;
				}
			});
		}

		return findPage;
		// return pages.value.find(page => page.id == id);
	};

	return { pages, currentPage, reloadPages, getPage, getPageById, getPages }
}
