import { http, httpPetition } from 'utils'

/* Current API for the app */
const api = {
	/* Authentication petitions */
	auth: {
		login: async credentials =>
			await httpPetition('/login', http().post, credentials),
	},
	/* Wallets petitions */
	wallets: {
		getWalletList: async () => await httpPetition('/wallets', http().get),

		getWalletDetail: async id =>
			await httpPetition(`/wallets/details/${id}`, http().get),

		getWalletTransactionDetail: async hash =>
			await httpPetition(`/blockchain/transaction/${hash}`, http().get),
	},
}

export default api
