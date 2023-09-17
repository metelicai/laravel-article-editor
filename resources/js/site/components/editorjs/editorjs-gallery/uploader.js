/**
 * Module for file uploading:
 */
export default class Uploader {
	/**
	 * @param {object} params - uploader module params
	 * @param {ImageConfig} params.config - image tool config
	 */
	constructor({ config }) {
		this.config = config
	}

	/**
	 * Handle clicks on the upload file button
	 */
	uploadSelectedFiles(maxElementCount, { onUpload }) {
		selectFiles({
			accept: this.config.types,
			multiple: true
		}).then(async (files) => {
			let loadedFiles = 0
			for (var i = 0; i < files.length; i++) {
				if (maxElementCount !== null && loadedFiles == maxElementCount) {
					break
				} else {
					loadedFiles++
				}

				let file = files[i]
				onUpload({ id: 'new', file })
			}
		})
	}
}

/**
 * Create an ephemeral input file field and return chosen files array
 *
 * @param {transportParams} config
 * @return {Promise<FileList>}
 */
function selectFiles(config = {}) {
	return new Promise((resolve, reject) => {
		let inputElement = document.createElement('INPUT')
		inputElement.type = 'file'
		inputElement.style.display = 'none'

		if (config.multiple) {
			inputElement.setAttribute('multiple', 'multiple')
		}

		if (config.accept) {
			inputElement.setAttribute('accept', config.accept)
		}

		document.body.appendChild(inputElement)

		inputElement.addEventListener('change', event => {
			const files = event.target.files

			// Return ready to be uploaded files array
			resolve(files)

			document.body.removeChild(inputElement)
		}, false)

		// Fire click event on «input file» field
		inputElement.click()
	})
};
