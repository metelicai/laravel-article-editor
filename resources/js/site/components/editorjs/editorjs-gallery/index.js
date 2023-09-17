/**
 * Image Gallery Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-gallery}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * gallery: {
 *   class: ImageGallery,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} ImageGalleryDataFile
 * @description Image Gallery Tool's files data format
 * @property {string} url — image URL
 */

/**
 * @typedef {object} ImageGalleryData
 * @description Image Tool's input and output data format
 * @property {string} style - style of gallery
 * @property {ImageGalleryDataFile[]} files — Image file data returned from backend
 */

import './index.scss'
import Ui from './ui'
import Tunes from './tunes'
import ToolboxIcon from './svg/toolbox.svg'
import Uploader from './uploader'

/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
export default class ImageGallery {
	/**
	 * Notify core that read-only mode is supported
	 *
	 * @returns {boolean}
	 */
	static get isReadOnlySupported() {
		return true
	}

	/**
	 * Get Tool toolbox settings
	 * icon - Tool icon's SVG
	 * title - title to show in toolbox
	 *
	 * @returns {{icon: string, title: string}}
	 */
	static get toolbox() {
		return {
			icon: ToolboxIcon,
			title: 'Gallery',
		}
	}

	/**
	 * @param {object} tool - tool properties got from editor.js
	 * @param {ImageGalleryData} tool.data - previously saved data
	 * @param {ImageConfig} tool.config - user config for Tool
	 * @param {object} tool.api - Editor.js API
	 * @param {boolean} tool.readOnly - read-only mode flag
	 */
	constructor({ block, data, config, api, readOnly }) {
		this.api = api
		this.block = block
		this.readOnly = readOnly

		/**
		 * Tool's initial config
		 */
		this.config = {
			endpoints: config.endpoints || '',
			field: config.field || 'image',
			types: config.types || 'image/*',
			buttonContent: config.buttonContent || '',
			methods: config.methods || undefined,
			actions: config.actions || [],
			maxElementCount: config.maxElementCount || undefined,
			images: config.images || [],
		}

		/**
		 * Module for file uploading
		 */
		this.uploader = new Uploader({
			config: this.config,
		})

		/**
		 * Module for working with UI
		 */
		this.ui = new Ui({
			api,
			config: this.config,
			onSelectFile: () => {
				let maxElementCount = (this.config.maxElementCount) ? this.config.maxElementCount - this._data.files.length : null
				this.uploader.uploadSelectedFiles(maxElementCount, {
					onUpload: (file) => {
						this.onUpload(file)
					},
				})
			},
			onDeleteFile: (index) => {
				this.deleteImage(index)
			},
			onMoveFile: (oldId, newId) => {
				this.moveImage(oldId, newId)
			},
			readOnly,
		})

		/**
		 * Module for working with tunes
		 */
		this.tunes = new Tunes({
			api,
			actions: this.config.actions,
			onChange: (styleName) => this.styleToggled(styleName),
		})

		/**
		 * Set saved state
		 */
		this._data = {}
		this.data = data
	}

	/**
	 * Renders Block content
	 *
	 * @public
	 *
	 * @returns {HTMLDivElement}
	 */
	render() {
		return this.ui.render(this.data)
	}

	rendered() {
		this.checkMaxElemCount()

		return this.ui.onRendered()
	}

	removed() {
		this.callExternalUpdateBlock(true)
	}

	/**
	 * Validate data: check if Image exists
	 *
	 * @param {ImageGalleryData} savedData — data received after saving
	 * @returns {boolean} false if saved data is not correct, otherwise true
	 * @public
	 */
	validate(savedData) {
		// if (!savedData.files || !savedData.files.length) {
		// 	return false
		// }

		return true
	}

	/**
	 * Return Block data
	 *
	 * @public
	 *
	 * @returns {ImageGalleryData}
	 */
	save() {
		this.callExternalUpdateBlock()

		return this.data
	}

	/**
	 * Makes buttons with tunes: add background, add border, stretch image
	 *
	 * @public
	 *
	 * @returns {Element}
	 */
	renderSettings() {
		return this.tunes.render(this.data)
	}

	/**
	 * Set new image file
	 *
	 * @private
	 *
	 * @param {ImageGalleryDataFile} file - uploaded file data
	 */
	appendImage(image) {
		if (image) {
			// if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {
			// 	return
			// }

			if (image.id === 'new') {
				this.images.push(image)
			}

			this.ui.appendImage(image)

			this.checkMaxElemCount()
		}
	}

	/**
	 * Move image file
	 *
	 * @private
	 *
	 * @param {integer} from - target image old index
	 * @param {integer} to - target image new index
	 */
	moveImage(from, to) {
		// if (to >= this.images.length) {
		// 	to = this.images.length - 1
		// }
		// this.images.splice(to, 0, this.images.splice(from, 1)[0])

		// if (this.config.methods && typeof this.config.methods.positioning === 'function') {
		// 	const moved = this._data.files[to]?.id || null
		// 	const prev = this._data.files[to - 1]?.id || null
		// 	const next = this._data.files[to + 1]?.id || null

		// 	this.config.methods.positioning(moved, prev, next)
		// }

	}

	/**
	 * Delete image file
	 *
	 * @private
	 *
	 * @param {integer} index - image index
	 */
	deleteImage(index) {
		this.images[index].deleted = !this.images[index].deleted
		this.checkMaxElemCount()

		// const file = this._data.files[index]
		// if (file !== undefined) {
		// 	this._data.files.splice(id, 1)

		// 	this.checkMaxElemCount()
		// }
	}

	/**
	 * Private methods
	 * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
	 */

	/**
	 * Stores all Tool's data
	 *
	 * @private
	 *
	 * @param {ImageGalleryData} data - data in Image Tool format
	 */
	set data(data) {
		this._data.files = [] // временно необходимо. Иначе ошибка. Позже проверить и убрать
		this.images = this.config.images?.[this.block.id] || []

		this.images.forEach(image => {
			this.appendImage(image)
		})

		this.callExternalUpdateBlock()

		let style = data.style || ''
		this.styleToggled(style)
	}

	/**
	 * Return Tool data
	 *
	 * @private
	 *
	 * @returns {ImageGalleryData}
	 */
	get data() {
		return this._data
	}

	/**
	 * File uploading callback
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	onUpload(file) {
		this.appendImage(file)
	}

	callExternalUpdateBlock(wasDeleted = false) {
		if (this.block.id && typeof this.config.methods?.updateBlock === 'function') {
			this.config.methods.updateBlock(this.block.id, this.images, wasDeleted)
		}
	}

	/**
	 * Callback fired when Block Tune is activated
	 *
	 * @private
	 *
	 * @param {string} tuneName - tune that has been clicked
	 * @returns {void}
	 */
	styleToggled(tuneName) {
		if (tuneName === 'fit') {
			this._data.style = 'fit'
		} else {
			this._data.style = 'slider'
		}
	}

	checkMaxElemCount() {
		this.ui.updateLimitCounter(this._data.files.length, this.config.maxElementCount)

		if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {
			this.ui.hideFileButton()
		} else {
			this.ui.showFileButton()
		}
	}
}
