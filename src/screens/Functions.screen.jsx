//react import
import React from 'react'
//component import
import { Title, CardDisplayer } from 'modules/customs'
//icon imports
import { FiCreditCard, FiRotateCw, FiShoppingCart } from 'react-icons/fi'
import { BiTransfer } from 'react-icons/bi'
import { ATM } from '../assets/index'

function Functions() {
	const cardContents = [
		{
			text: 'Recargas',
			icon: <FiRotateCw />,
			hidden: 'Ingreso externo de fondos hacia su wallet Alypay.',
		},
		{
			text: 'Compra Alycoin',
			icon: <FiShoppingCart />,
			hidden: 'Facilidad de comprar con sus fondos en criptomonedas, cuanto necesite de nuestra moneda fee, Alycoin para poder llevar a cabo sus transacciones.',
		},
		{
			text: 'Transferencia',
			icon: <BiTransfer />,
			hidden: 'Movimiento de fondos de un usuario a otro dentro del sistema',
		},
		{
			text: 'Pago',
			icon: <FiCreditCard />,
			hidden: 'Compra de productos y/o servicios con sus criptomonedas a traves de nuestra plataforma',
		},
		{
			text: 'Retirar',
			icon: <ATM />,
			hidden: 'Movimiento de fondos de su wallet Alypay a una de terceros',
		},
	]

	return (
		<section
			name='FunctionsScreen'
			className='FunctionsScreen min-h-screen'>
			<Title
				title='Funciones de AlyPay'
				highlight={['AlyPay']}
				highlightStyle='font-bold'
			/>
			<CardDisplayer
				className='bg-gray-500'
				cardContents={cardContents}
			/>
		</section>
	)
}

export default React.memo(Functions)
