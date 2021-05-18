import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage, removeLocalStorage } from 'utils'
import { removeTokenStorage } from '..'

/* Initial state for 'auth' state */
const initialState = {
	birthday: null,
	email: '',
	executive: null,
	fee: {
		exchange: [],
		retirement: [],
		transaction: [],
	},
	first_name: '',
	id: null,
	id_country: null,
	kyc_type: null,
	last_name: '',
	username: '',
}

/* 'auth' reducers slice */
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData: (state, { payload }) => {
			setLocalStorage('_alypay_auth', { ...payload, token: '' })
			state.birthday = payload.birthday
			state.email = payload.email
			state.executive = payload.executive
			state.fee.exchange = payload.fee.exchange
			state.fee.retirement = payload.fee.retirement
			state.fee.transaction = payload.fee.transaction
			state.first_name = payload.first_name
			state.id = payload.id
			state.id_country = payload.id_country
			state.kyc_type = payload.kyc_type
			state.last_name = payload.last_name
			state.username = payload.username
		},
		removeAuthData: (state, { payload }) => {
			if (payload.status === 401 || payload.logout) {
				removeLocalStorage('_alypay_auth')
				removeTokenStorage()
				state.birthday = null
				state.email = ''
				state.executive = null
				state.fee.exchange = []
				state.fee.retirement = []
				state.fee.transaction = []
				state.first_name = ''
				state.id = null
				state.id_country = null
				state.kyc_type = null
				state.last_name = ''
				state.username = ''
			}
		},
	},
})

/* Actions for 'auth' state */
export const { setAuthData, removeAuthData } = authSlice.actions

/* Get 'auth' state */
export const selectAuth = state => state.auth

/* Get 'auth' reducer */
export default authSlice.reducer
