import { http, notification } from 'utils'

/* Make http petition to server */
export const httpPetition = async (url, method = http().get, body = null) => {
	try {
		const { data, status } = body
			? await method(url, body)
			: await method(url)

		if (data.error) {
			/* Print a warning message if error */
			notification.notificationWarning({ message: data.message })

			/* Return null if error */
			return { data: null, status }
		}

		return { data, status }
	} catch (error) {
		if (error.response) {
			const { data, status } = error.response

			/* Print a warning message if error */
			if (data.error)
				notification.notificationWarning({ message: data.message })

			return { data, status }
		}

		return { data: null, status: 401 }
	}
}
