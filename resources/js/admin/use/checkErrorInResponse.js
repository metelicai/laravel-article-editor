import { useStore } from "../store";

export function useCheckErrorInResponse(response) {
	const store = useStore();

	if (response?.status?.code >= 300) {
		store.addError(response?.error?.message || response.status.message);

		return true;
	}

	return false;
}
