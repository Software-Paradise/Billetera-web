import { api } from 'api'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from 'utils/loader.util'
import {
	removeAuthData,
	removeTokenStorage,
	setAuthData,
	setTokenStorage,
} from '..'
import { useHistory } from 'react-router'

/**
 * Custom hook to manage authenticate
 * @returns {Object}
 */
export default function useAuth() {
	const dispatch = useDispatch()

	const history = useHistory()

	/**
	 * Method to login
	 * @param {String} email - user email for login
	 * @param {String} password - user password for login
	 */
	const login = ({ email, password }) => {
		dispatch(showLoader())

		api.auth
			.login({
				email,
				password,
			})
			.then(({ data, status }) => {
				dispatch(removeAuthData({ status }))
				if (data && Object.keys(data).length > 0) {
					setTokenStorage(data.token)
					const userData = { ...data }
					dispatch(setAuthData(userData))
					history.push('/home')
				}
			})
			.finally(() => dispatch(hideLoader()))
	}

	/**
	 * Method to logout
	 * @returns {Boolean} - if the logout was successful
	 */
	const logout = () => {
		dispatch(removeAuthData({ logout: true }))
		return removeTokenStorage()
	}

	const signUp = data => {
		console.log(data)
	}

	return {
		login,
		logout,
		signUp,
	}
}
