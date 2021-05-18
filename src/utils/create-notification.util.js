import { store } from 'react-notifications-component'
/**
 * Function to create a new notification
 * @param {String} title
 * @param {String} message
 * @param {String} type
 */
export const createNotification = ({ title, message, type }) => {
	if (message)
		store.addNotification({
			title,
			message,
			type,
			container: 'top-center',
			dismiss: {
				duration: 2500,
				onScreen: true,
				pauseOnHover: true,
			},
		})
}
