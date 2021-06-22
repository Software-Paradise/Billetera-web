import { createSlice } from '@reduxjs/toolkit'

/* Initial state for 'loading' state */
const initialState = {
	isLoading: false,
	isStarting: true,
}

/* 'loader' reducers slice */
const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		showLoader: state => {
			state.isLoading = true
		},
		hideLoader: state => {
			state.isLoading = false
		},
		AppStarted: state => {
			state.isStarting = false
		},
	},
})

export const { showLoader, hideLoader, AppStarted } = loaderSlice.actions

/* Get 'loader' state */
export const selectLoader = state => state.loader

/* Get 'loader' reducer */
export default loaderSlice.reducer
