import { ref } from 'vue'

export function useSucceses() {
	let succeses = ref([]);

	const hasSuccesses = () => {
		return succeses.value.length && true;
	}

	const addSuccess = (message) => {
		succeses.value.push(message);
	};

	const getSuccesses = () => {
		return succeses.value;
	}

	const removeSuccess = (index) => {
		succeses.value.splice(index, 1);
	};

	const forgetSuccesses = () => {
		succeses.value = [];
	};

	return { succeses, addSuccess, getSuccesses, removeSuccess, forgetSuccesses, hasSuccesses }
}
