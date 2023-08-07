export default {
	data() {
		return {
			modals: {},
			modalsData: {},
		}
	},
	watch: {
		opennedModals(count) {
			const htmlTag = document.documentElement
			htmlTag.classList.toggle('no-scroll', count > 0)
		},
	},
	computed: {
		opennedModals() {
			return Object.values(this.modals).reduce((a, b) => a + b, 0)
		},
	},
	mounted() {
		this.initCloseOnAnchor()
	},
	methods: {
		openModal(name, data = {}) {
			this.modals[name] = true
			this.modalsData[name] = data
		},
		closeModals() {
			this.modals = {}
		},
		// Закрытие модалок при клике на якоря
		initCloseOnAnchor() {
			const anchorsLinks = document.querySelectorAll('.modal a[href*="#"]')
			anchorsLinks.forEach(anchor => {
				const href = anchor.getAttribute('href')
				const id = href.substring(href.indexOf('#') + 1)

				if (id) anchor.addEventListener('click', () => this.closeModals())
			})
		},
	},
}
