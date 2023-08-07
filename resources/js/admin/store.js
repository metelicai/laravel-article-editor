import { defineStore } from 'pinia'

import { useToken } from './storeCompositions/token'
import { useErrors } from './storeCompositions/errors'
import { useSucceses } from './storeCompositions/successes'
import { usePages } from './storeCompositions/pages'
import { useBlockTypes } from './storeCompositions/blockTypes'
import { useUser } from './storeCompositions/user'

export const useStore = defineStore('main', () => {
	return {
		...useToken(),
		...useErrors(),
		...useSucceses(),
		...usePages(),
		...useBlockTypes(),
		...useUser()
	}
})
