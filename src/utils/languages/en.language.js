/* Object for english language */
export const en = {
	code: 'en',
	/* Available languages */
	available: [
		{ lang: 'English', code: 'en' },
		{ lang: 'Spanish', code: 'es' },
	],
	/* Welcome */
	welcome: 'Welcome to AlyPay Web! Select a wallet to get started!',
	/* Login view */
	loginView: {
		email: {
			title: 'Email',
			placeholder: 'Enter email here',
			required: 'Email is required',
			error: 'Invalid email',
		},
		password: {
			title: 'Password',
			placeholder: 'Enter the password here',
			required: 'Password is required',
			error: '',
		},
		title: 'Log in',
		actions: {
			recovery: 'I forgot my password',
			register: 'Sign up',
			login: 'Log in',
			select: 'Select a language',
		},
	},
	/* RegisterView */
	registerView: {
		title: 'User register',
		name: {
			title: 'Name',
			placeholder: 'Enter name',
			required: 'The name is required',
			error: '',
		},
		lastname: {
			title: 'Last Name',
			placeholder: 'Enter the last name',
			required: 'The last name is requerid',
			error: '',
		},
		date: {
			title: 'Date of birth',
			placeholder: 'Enter date of birth',
			required: 'Date of birth is required',
			error: '',
		},
		telephone: {
			title: 'Telephone',
			placeholder: 'Enter the phone',
			required: 'The phone is required',
			error: 'The phone should only contain numbers',
			atLeast: 'The phone must contain at least 7 digits',
		},
		email: {
			title: 'Email',
			placeholder: 'Enter email',
			required: 'Email is required',
			error: '',
		},
		username: {
			title: 'Username',
			placeholder: 'Enter username',
			required: 'Username is required',
			error: '',
		},
		password: {
			title: 'Password',
			placeholder: 'Enter the password here',
			required: 'Password is required',
			error: 'Password must contain at least 6 characters',
		},
		repeatPassword: {
			title: 'Repeat password',
			placeholder: 'Repeat password',
			required: 'Password is required',
			error: 'Passwords do not match',
		},
		country: {
			title: 'Country',
			placeholder: 'Select country',
			required: 'The country is required',
			error: '',
		},
		actions: {
			accepted: 'I accept the',
			terms: 'Terms and Conditions',
			register: 'Sign up',
			back: 'Go back to login',
		},
	},
	/*Nav */
	navView: {
		source: {
			placeholder: 'Search hash',
			error: '',
		},
		actions: {
			back: 'Back to wallet list',
			init: 'Home',
			alypay: 'AlyPay',
			commerces: 'Commerces',
			logout: 'Log out',
		},
	},
	/*Wallet */
	walletView: {
		title: 'Wallet',
		placeholder: 'Search wallet',
		coin: {
			marketPrice: 'Market price',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
		},
	},
	/* Table */
	tableView: {
		previous: 'Previous page',
		next: 'Next page',
		pp: 'Per page',
	},
	/* List */
	listView: {
		toTop: 'Scroll to top',
	},
	/* ExecutiveView */
	executiveView: {
		title: 'Executive',
		/*Earnings */
		earnings: {
			title: 'Profit record',
			placeholder: 'Filter gain record',
			column: {
				commerce: 'Commerce',
				commission: 'Commission',
				earnings: 'Earnings',
			},
			actions: {
				retire: 'Retire',
			},
		},
		/*Historical */
		history: {
			title: 'Withdrawal history',
			placeholder: 'Filter withdrawal history',
			columns: {
				description: 'Description',
				hash: 'Hash',
				hour: 'Hour',
				date: 'Date',
				amount: 'Amount',
			},
		},
	},
	/**CommerceView */
	commerceView: {
		title: 'Commerce',
		lists: {
			title: 'Trade listing',
			placeholder: 'Filter business list',
			balanceUSD: 'Balance USD',
			address: 'Address',
		},
	},
	/*HistoricalTransactionView */
	historyView: {
		title: 'History',
		story: {
			title: 'Transaction history',
			placeholder: 'Filter transaction history',
			columns: {
				description: 'Description',
				hash: 'Hash',
				hashCopy: 'Hash was successful copied',
				hour: 'Hour',
				date: 'Date',
				amount: 'Amount',
			},
		},
		details: {
			title: 'Transaction detail',
			description: 'Description',
			hash: 'Hash',
			hashCopy: 'Hash was successful copied',
			hour: 'Hour',
			date: 'Date',
			amountTransaction: 'Transaction amount',
			amountUSD: 'Amount USD',
			currency: 'Currency',
			fee: 'Fee USD',
			total: 'Total USD',
			walletFrom: 'Wallet from',
			walletFromCopy: 'Wallet from  was successful copied',
			walletTo: 'Wallet to',
			walletToCopy: 'Wallet to  was successful copied',
		},
	},
	/**ReceiveView */
	receiveView: {
		title: 'Receive',
		information: {
			title: 'Receive funds',
			marketPrice: 'Market price',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
			address: 'Wallet address',
		},
		recharge: {
			title: 'Recharge wallet',
			address: 'Wallet address',
			amount: 'Amount',
			amountUSD: 'Amount (USD)',
			hash: 'Transaction hash',
		},
		actions: {
			confirm: 'Confirm',
		},
	},
	/**SendView */
	sendView: {
		title: 'Send',
		information: {
			title: 'Send funds',
			marketPrice: 'Market price',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
			address: 'Wallet address',
			amount: 'Amount',
			amountUSD: 'Amount (USD)',
		},
		retire: {
			title: 'Withdraw fondos',
			address: 'Wallet address',
			amount: 'Amount',
			amountUSD: 'Amount(USD) approx.',
		},
		action: {
			next: 'Next',
			confirm: 'Confirm',
		},
	},
}
