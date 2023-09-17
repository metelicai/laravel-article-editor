import api from './api'

export default {
	upload(formData) {
		return api.request('api/image/upload', formData)
	},
}
