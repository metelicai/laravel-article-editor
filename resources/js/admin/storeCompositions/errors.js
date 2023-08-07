import { ref } from 'vue'

export function useErrors() {
	let errors = ref([]);

	const hasErrors = () => {
		return errors.value.length && true;
	}

	const addError = (message) => {
		errors.value.push(message);
	};

	const getErrors = () => {
		return errors.value;
	}

	const removeError = (index) => {
		errors.value.splice(index, 1);
	};

	const forgetErrors = () => {
		errors.value = [];
	};

	return { errors, addError, getErrors, removeError, forgetErrors, hasErrors }
}
