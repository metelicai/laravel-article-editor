import { ref } from 'vue'

export function useToken() {
	const token = ref('');

	const getToken = () => {
		if (token.value) {
			return token.value;
		}
	};

	const setToken = (newToken) => {
		token.value = newToken;

		localStorage.setItem('token', newToken);
	};

	const resetToken= () => {
		token.value = '';

		localStorage.removeItem('token');
	};

	return { token, getToken, setToken, resetToken }
}
