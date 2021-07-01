import { createSlice } from '@reduxjs/toolkit'

/* Initial state for 'loading' state */
const initialState = {
	isStarting: true,
}

/* 'loader' reducers slice */
const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		AppStarted: state => {
			state.isStarting = false
		},
	},
})

export const { AppStarted } = loaderSlice.actions

/* Get 'loader' state */
export const selectLoader = state => state.loader

/* Get 'loader' reducer */
export default loaderSlice.reducer
