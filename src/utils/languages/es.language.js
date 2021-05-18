/* Object for spanish language */
export const es = {
	code: 'es',
	/* Available languages */
	available: [
		{ lang: 'Ingles', code: 'en' },
		{ lang: 'Español', code: 'es' },
	],
	/* Welcome */
	welcome:
		'¡Bienvenido a AlyPay Web! ¡Seleccione una billetera para comenzar!',
	/* Login view */
	loginView: {
		email: {
			title: 'Correo electrónico',
			placeholder: 'Ingrese el correo electrónico aquí',
			required: 'El correo electrónico es requerido',
			error: 'El correo electrónico invalido',
		},
		password: {
			title: 'Contraseña',
			placeholder: 'Ingrese la contraseña aquí',
			required: 'La contraseña es requerida',
			error: '',
		},
		title: 'Iniciar Sesión',
		actions: {
			recovery: 'Olvidé mi contraseña',
			register: 'Registrarse',
			login: 'Iniciar Sesión',
			select: 'Seleccione un idioma',
		},
	},
	/* RegisterView */
	registerView: {
		title: 'Registro de usuario',
		name: {
			title: 'Nombre',
			placeholder: 'Ingrese el nombre',
			required: 'El nombre es requerido',
			error: '',
		},
		lastname: {
			title: 'Apellido',
			placeholder: 'Ingrese el apellido',
			required: 'El apellido es requerido',
			error: '',
		},
		date: {
			title: 'Fecha de nacimiento',
			placeholder: 'Ingrese la fecha de nacimiento',
			required: 'La fecha de nacimiento es requerida',
			error: '',
		},
		telephone: {
			title: 'Teléfono',
			placeholder: 'Ingrese el teléfono',
			required: 'El teléfono es requerido',
			error: 'El teléfono solo debe contener números',
			atLeast: 'El teléfono debe contener al menos 7 dígitos',
		},
		email: {
			title: 'Correo electrónico',
			placeholder: 'Ingrese el correo electrónico',
			required: 'El correo electrónico es requerido',
			error: '',
		},
		username: {
			title: 'Nombre de usuario',
			placeholder: 'Ingrese el nombre de usuario',
			required: 'El nombre de usuario es requerido',
			error: '',
		},
		password: {
			title: 'Contraseña',
			placeholder: 'Ingrese la contraseña',
			required: 'La contraseña es requerida',
			error: 'La contraseña debe contener al menos 6 caracteres',
		},
		repeatPassword: {
			title: 'Repetir contraseña',
			placeholder: 'Repita la contraseña',
			required: 'La contraseña es requerida',
			error: 'Las contraseñas no coinciden',
		},
		country: {
			title: 'País',
			placeholder: 'Seleccione el país',
			required: 'El país es requerido',
			error: '',
		},
		actions: {
			accept: 'Accepto los',
			terms: 'Términos y condiciones',
			register: 'Registrarse',
			back: 'Regresar a Iniciar Sesión',
		},
	},
	/*Nav */
	navView: {
		source: {
			placeholder: 'Buscar Hash',
			error: '',
		},
		actions: {
			back: 'Volver a lista de billeteras',
			init: 'Inicio',
			alypay: 'AlyPay',
			commerces: 'Comercios',
			logout: 'Cerrar sesión',
		},
	},
	/*Wallet */
	walletView: {
		title: 'Billeteras',
		placeholder: 'Buscar billetera',
		coin: {
			marketPrice: 'Precio del mercado',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
		},
	},
	/* Table */
	tableView: {
		previous: 'Página anterior',
		next: 'Página siguiente',
		pp: 'Por página',
	},
	/* List */
	listView: {
		toTop: 'Regresar al inicio de la lista',
	},
	/* ExecutiveView */
	executiveView: {
		title: 'Ejecutivo',
		/*Earnings */
		earnings: {
			title: 'Registro de ganancias',
			placeholder: 'Filtrar registro de ganancias',
			colums: {
				commerce: 'Comercio',
				commission: 'Comisión',
				earnings: 'Ganancias',
			},
			actions: {
				retire: 'Retirar',
			},
		},
		/*Historical */
		history: {
			title: 'Historial de retiros',
			placeholder: 'Filtrar historial de retiros',
			colums: {
				description: 'Descripción',
				hash: 'Hash',
				hour: 'Hora',
				date: 'Fecha',
				amount: 'Monto',
			},
		},
	},
	/**CommerceView */
	commerceView: {
		title: 'Comercios',
		lists: {
			title: 'Listado de comercios',
			placeholder: 'Filtrar listado de comercios',
			balanceUSD: 'Balance USD',
			address: 'Dirección',
		},
	},
	/*HistoricalTransactionView */
	historyView: {
		title: 'Historial',
		story: {
			title: 'Historial de transacciones',
			placeholder: 'Filtrar historial de transacciones',
			columns: {
				description: 'Descripción',
				hash: 'Hash',
				hashCopy: 'El hash se copió correctamente',
				hour: 'Hora',
				date: 'Fecha',
				amount: 'Monto',
			},
		},
		details: {
			title: 'Detalles de transacciones',
			description: 'Descripción',
			hash: 'Hash',
			hashCopy: 'El hash se copió correctamente',
			hour: 'Hora',
			date: 'Fecha',
			amountTransaction: 'Monto de transacción',
			amountUSD: 'Monto USD',
			currency: 'Moneda',
			fee: 'Fee USD',
			total: 'Total USD',
			walletFrom: 'Billetera de origen',
			walletFromCopy: 'La billetera de origen se copió correctamente',
			walletTo: 'Billetera de destino',
			walletToCopy: 'La billetera de destino se copió correctamente',
		},
	},
	/**ReceiveView */
	receiveView: {
		title: 'Recibir',
		information: {
			title: 'Recibir fondos',
			marketPrice: 'Precio del mercado',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
			address: 'Dirección de la billetera',
		},
		recharge: {
			title: 'Recargar billetera',
			address: 'Dirección de la billetera',
			amount: 'Cantidad',
			amountUSD: 'Cantidad (USD)',
			hash: 'Hash de la transacción',
		},
		actions: {
			confirm: 'Confirmar',
		},
	},
	/**SendView */
	sendView: {
		title: 'Enviar',
		information: {
			title: 'Enviar fondos',
			marketPrice: 'Precio del mercado',
			balance: 'Balance',
			balanceUSD: 'Balance USD',
			address: 'Dirección de la billetera',
			amount: 'Monto',
			amountUSD: 'Monto (USD)',
		},
		retire: {
			title: 'Retirar fondos',
			address: 'Dirección de la billetera',
			amount: 'Monto',
			amountUSD: 'Monto(USD) aprox.',
		},
		action: {
			next: 'Siguiente',
			confirm: 'Confirmar',
		},
	},
}
