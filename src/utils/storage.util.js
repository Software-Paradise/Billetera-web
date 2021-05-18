/**
 * Util function to store an object in local storage
 * @param {String} key - to store object on local storage
 * @param {Object} value - JSON object to store in local storage
 */
function setLocalStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value))
	} catch (e) {
		console.error(e)
	}
}

/**
 * Util function to get an object stored in local storage
 * @param {String} key - to get an object stored in local storage
 * @param {Object} value - to get by default
 * @returns {Object} - by default return 'null'
 */
function getLocalStorage(key, value = '') {
	try {
		const item = localStorage.getItem(key)

		return item ? JSON.parse(item) : value
	} catch (e) {
		console.error(e)
		return value
	}
}

function removeLocalStorage(key) {
	try {
		localStorage.removeItem(key)
		return !localStorage.getItem(key) ? true : false
	} catch (e) {
		console.error(e)
		return false
	}
}

export { setLocalStorage, getLocalStorage, removeLocalStorage }
