import { store } from 'react-notifications-component'

/**
 * Copy string to clipboard
 * @param {String} str - string to be copied
 * @param {String} message - message to show when copy success
 */
export default function copyClipboard(str = '', message = '') {
	let input = document.createElement('input')

	input.setAttribute('value', str)
	document.body.appendChild(input)
	input.select()

	let result = document.execCommand('copy')
	document.body.removeChild(input)

	if (result && message) {
		/* Success copy */
		store.addNotification({
			message,
			container: 'top-center',
			type: 'success',
			dismiss: {
				duration: 2500,
				onScreen: true,
				pauseOnHover: true,
			},
		})
	}
}
