import { getLocalStorage, setLocalStorage, removeLocalStorage } from 'utils'

/**
 * Util function to store a token in local storage
 * @param {String} token - string token to store it encoded in local storage
 */
const setTokenStorage = token => {
	setLocalStorage('_alypay_tkn', token)
}

/**
 * Util function to get token stored in local storage
 * @returns {String} - decoded token from local storage
 */
const getTokenStorage = () => {
	return getLocalStorage('_alypay_tkn', null)
}

/**
 * Util function to check if a token exists in local storage
 * @returns {Boolean} - if a token exists
 */
const isTokenStorage = () => {
	return getTokenStorage() !== null
}

/**
 * Util function to delete a token in local storage
 * @returns {Boolean} - if the token was removed sucessfully
 */
const removeTokenStorage = () => {
	return removeLocalStorage('_alypay_tkn')
}

export { getTokenStorage, setTokenStorage, isTokenStorage, removeTokenStorage }
