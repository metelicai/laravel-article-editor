import { getConfig } from '../sdk'
import { ref } from 'vue'

export function useBlockTypes() {
	const blockTypes = ref([]);

	const getBlockTypeName = (type) => {
		return blockTypes.value.find(blockType => blockType.type == type)?.name;
	}

	const getBlockTypes = () => {
		return blockTypes.value;
	}

	const getBlockType = (index) => {
		return blockTypes.value[index];
	}

	const loadBlockTypes = () => {
		getConfig('blocks').then(response => {
			blockTypes.value = [];

			response.data.types.forEach(item => {
				blockTypes.value.push(item);
			});
		});
	}


	return { blockTypes, getBlockTypeName, getBlockTypes, getBlockType, loadBlockTypes }
}
