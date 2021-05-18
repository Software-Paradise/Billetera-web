import { createSlice } from '@reduxjs/toolkit'

/* Languages */
import { es } from './languages/es.language'
import { en } from './languages/en.language'
import { setLocalStorage } from 'utils'

/* Initial state for 'language' state */
const initialState = {
	lang: { ...en },
}

/* 'language' reducers slice */
const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		changeLanguage: (state, { payload }) => {
			switch (payload) {
				case 'en':
					setLocalStorage('language', 'en')
					state.lang = { ...en }
					break

				case 'es':
					setLocalStorage('language', 'es')
					state.lang = { ...es }
					break

				default:
					setLocalStorage('language', 'en')
					state.lang = { ...en }
					break
			}
		},
	},
})

/* Actions for 'language' state */
export const { changeLanguage } = languageSlice.actions

/* Get 'language' state */
export const selectLanguage = state => state.language.lang

/* Get 'language' reducer */
export default languageSlice.reducer
