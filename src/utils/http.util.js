import axios from 'axios'
import { getTokenStorage } from 'modules/authentication'
import { BASE_URL_SERVER } from './constans.util'

/**
 * Function util to configure axios
 * @returns {Object} - common http verbs
 */
export default function http() {
	return axios.create({
		baseURL: BASE_URL_SERVER,
		headers: {
			'x-auth-token': getTokenStorage(),
		},
	})
}
