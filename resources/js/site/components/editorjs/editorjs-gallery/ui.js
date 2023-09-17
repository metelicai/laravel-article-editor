import Sortable from 'sortablejs'

import trashIcon from './svg/trash.svg'
import { IconPlus } from '@codexteam/icons'

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
	/**
	 * @param {object} ui - image tool Ui module
	 * @param {object} ui.api - Editor.js API
	 * @param {ImageConfig} ui.config - user config
	 * @param {Function} ui.onSelectFile - callback for clicks on Select file button
	 * @param {boolean} ui.readOnly - read-only mode flag
	 */
	constructor({ api, config, onSelectFile, onDeleteFile, onMoveFile, readOnly }) {
		this.api = api
		this.config = config
		this.onSelectFile = onSelectFile
		this.onDeleteFile = onDeleteFile
		this.onMoveFile = onMoveFile
		this.readOnly = readOnly
		this.nodes = {
			wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
			fileButton: this.createFileButton(),
			container: make('div', this.CSS.container),
			itemsContainer: make('div', this.CSS.itemsContainer),
			controls: make('div', this.CSS.controls),
		}

		/**
		 * Create base structure
		 *  <wrapper>
		 *    <container>
		 *      <items-container>
		 *        <image-container />
		 *      </items-container>
		 *      <controls>
		 *        <limit-counter />
		 *        <select-file-button />
		 *      </controls>
		 *    </container>
		 *  </wrapper>
		 */
		if (this.config.maxElementCount) {
			this.nodes.limitCounter = make('div', this.CSS.limitCounter)
			this.nodes.controls.appendChild(this.nodes.limitCounter)
		}
		this.nodes.controls.appendChild(this.nodes.fileButton)

		this.nodes.container.appendChild(this.nodes.itemsContainer)
		this.nodes.container.appendChild(this.nodes.controls)

		this.nodes.wrapper.appendChild(this.nodes.container)

		const preventedEvents = ['dragenter', 'dragover', 'dragleave', 'drop']
		preventedEvents.forEach(eventName => {
			this.nodes.itemsContainer.addEventListener(eventName, function (e) {
				e.preventDefault()
				e.stopPropagation()
			}, false)
		})
	}

	/**
	 * CSS classes
	 *
	 * @returns {object}
	 */
	get CSS() {
		return {
			baseClass: this.api.styles.block,
			loading: this.api.styles.loader,
			input: this.api.styles.input,
			button: this.api.styles.button,

			/**
			 * Tool's classes
			 */
			wrapper: 'image-gallery',
			container: 'image-gallery__container',
			controls: 'image-gallery__controls',
			limitCounter: 'image-gallery__counter',
			itemsContainer: 'image-gallery__items',
			imageContainer: 'image-gallery__image',
			imageEl: 'image-gallery__image-picture',
			trashButton: 'image-gallery__image-trash',
			newBadge: 'image-gallery__image-new',
		}
	};

	/**
	 * Ui image states:
	 *
	 * @returns {{NEW: string, FILLED: string}}
	 */
	static get imageState() {
		return {
			NEW: 'new',
			FILLED: 'filled',
			DELETED: 'deleted'
		}
	}

	/**
	 * Renders tool UI
	 *
	 * @param {ImageGalleryData} toolData - saved tool data
	 * @returns {Element}
	 */
	render(toolData) {
		return this.nodes.wrapper
	}

	onRendered() {
		if (!this.sortable) {
			this.sortable = new Sortable(this.nodes.itemsContainer, {
				handle: `.${this.CSS.imageContainer}`,
				filter: `.${this.CSS.trashButton}`,
				onStart: () => {
					this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`)
				},
				onEnd: (evt) => {
					this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`)

					if (evt.oldIndex !== evt.newIndex) {
						this.onMoveFile(evt.oldIndex, evt.newIndex)
					}
				}
			})
		}
	}

	/**
	 * Creates upload-file button
	 *
	 * @returns {Element}
	 */
	createFileButton() {
		const button = make('div', [this.CSS.button])

		button.innerHTML = this.config.buttonContent || `${this.api.i18n.t('Выбрать изображения')}`

		button.addEventListener('click', () => {
			this.onSelectFile()
		})

		return button
	}

	/**
	 * Shows uploading button
	 *
	 * @returns {void}
	 */
	showFileButton() {
		this.nodes.fileButton.style.display = ''
	}

	/**
	 * Hide uploading button
	 *
	 * @returns {void}
	 */
	hideFileButton() {
		this.nodes.fileButton.style.display = 'none'
	}

	/**
	 * Get file preview during upload
	 *
	 * @returns {void}
	 */
	getPreview(image) {
		return new Promise((resolve) => {
			if (image.file instanceof File) {
				const reader = new FileReader()
				reader.readAsDataURL(image.file)
				reader.onload = (event) => {
					resolve(event.target.result)
				}
			} else {
				resolve(null)
			}
		})
	}

	/**
	 * Shows an image
	 *
	 * @param {ImageGalleryDataFile} image - image object
	 * @returns {void}
	 */
	appendImage(image) {
		let imageContainer = make('a', this.CSS.imageContainer)
		let imageEl = make('img', this.CSS.imageEl)
		this.nodes.itemsContainer.append(imageContainer)

		this.getPreview(image).then((preview) => {
			if (preview) {
				this.toggleImageState(imageContainer, Ui.imageState.NEW)
				imageEl.src = preview

				// new badge
				let newBadge = make('div', this.CSS.newBadge, {
					innerHTML: IconPlus,
				})
				this.api.tooltip.onHover(newBadge, 'Новое изображение', {
					placement: 'top',
				})
				imageContainer.appendChild(newBadge)
			} else {
				imageContainer.href = image.big || image.small
				imageEl.src = image.small
			}

			// append img el
			imageEl.addEventListener('load', () => {
				this.toggleImageState(imageContainer, Ui.imageState.FILLED)
			})
			imageContainer.appendChild(imageEl)


			// append trash btn
			const title = this.api.i18n.t('Удалить')
			let imageTrash = make('div', [this.CSS.trashButton], {
				innerHTML: trashIcon,
				title,
			})

			this.api.tooltip.onHover(imageTrash, title, {
				placement: 'top',
			})

			imageTrash.addEventListener('click', (e) => {
				e.preventDefault()
				this.api.tooltip.hide()

				let arrayChild = Array.prototype.slice.call(this.nodes.itemsContainer.children)
				let elIndex = arrayChild.indexOf(imageContainer)

				if (elIndex !== -1) {
					this.toggleImageState(imageContainer, Ui.imageState.DELETED)
					// this.nodes.itemsContainer.removeChild(imageContainer)

					// CREATE RESTORE BUTTON

					this.onDeleteFile(elIndex)
				}
			})
			imageContainer.appendChild(imageTrash)
		})
	}

	/**
	 * Changes UI image state
	 *
	 * @param {Element} elem
	 * @param {string} state - see {@link Ui.imageState} constants
	 * @returns {void}
	 */
	toggleImageState(elem, state) {
		elem.classList.toggle(`${this.CSS.imageContainer}--${state}`)
	}

	/**
	 * @param {int} imageCount
	 * @param {int|null} limitCounter
	 * @returns {void}
	 */
	updateLimitCounter(imageCount, limitCounter) {
		if (limitCounter && this.nodes.limitCounter) {
			this.nodes.limitCounter.innerText = `${imageCount} / ${limitCounter}`
		}
	}
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const make = function make(tagName, classNames = null, attributes = {}) {
	const el = document.createElement(tagName)

	if (Array.isArray(classNames)) {
		el.classList.add(...classNames)
	} else if (classNames) {
		el.classList.add(classNames)
	}

	for (const attrName in attributes) {
		el[attrName] = attributes[attrName]
	}

	return el
}
