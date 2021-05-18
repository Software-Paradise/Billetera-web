import { configureStore } from '@reduxjs/toolkit'
import { languageReducer } from 'utils'

export const store = configureStore({
	reducer: {
		language: languageReducer,
	},
})
