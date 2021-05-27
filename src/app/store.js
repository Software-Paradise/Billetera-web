import { configureStore } from '@reduxjs/toolkit'
import { languageReducer, loaderReducer } from 'utils'

export const store = configureStore({
	reducer: {
		language: languageReducer,
		loader: loaderReducer,
	},
})
