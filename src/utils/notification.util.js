import { createNotification } from 'utils'

const notification = {
	notificationSuccess: ({ title, message }) => {
		createNotification({
			title,
			message,
			type: 'success',
		})
	},
	notificationDanger: ({ title, message }) => {
		createNotification({
			title,
			message,
			type: 'danger',
		})
	},
	notificationInfo: ({ title, message }) => {
		createNotification({
			title,
			message,
			type: 'info',
		})
	},
	notificationWarning: ({ title, message }) => {
		createNotification({
			title,
			message,
			type: 'warning',
		})
	},
	notificationDefault: ({ title, message }) => {
		createNotification({
			title,
			message,
			type: 'default',
		})
	},
}

export default notification
