import { ref } from 'vue'
import { userCurrent } from '../sdk'

export function useUser() {
	let user = ref({});

	const getUser = () => {
		return user.value;
	};

	const loadUser = () => {
		userCurrent().then(response => {
			user.value = response.data.user;
		});
	}

	return { user, getUser, loadUser }
}
