import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'modules/authentication'
import { walletsReducer } from 'modules/wallets'
import { languageReducer, loaderReducer } from 'utils'

export const store = configureStore({
	reducer: {
		language: languageReducer,
		loader: loaderReducer,
		auth: authReducer,
		wallets: walletsReducer,
	},
})
