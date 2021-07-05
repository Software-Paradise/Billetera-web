//react import
import React from 'react'
//component import
import { Title, CardDisplayer } from 'modules/customs'
//icon imports
import { FiCreditCard, FiRotateCw, FiShoppingCart } from 'react-icons/fi'
import { BiTransfer } from 'react-icons/bi'
import { ATM } from '../assets/index'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//assets import
import { logo } from 'assets'

function Functions() {
	const { functionsScreen } = useSelector(selectLanguage)
	const cardContents = [
		{
			text: functionsScreen.cards.deposit.title,
			icon: <FiRotateCw />,
			hidden: functionsScreen.cards.deposit.content,
		},
		{
			text: functionsScreen.cards.buy.title,
			icon: <FiShoppingCart />,
			hidden: functionsScreen.cards.buy.content,
		},
		{
			text: functionsScreen.cards.transfer.title,
			icon: <BiTransfer />,
			hidden: functionsScreen.cards.transfer.content,
		},
		{
			text: functionsScreen.cards.payment.title,
			icon: <FiCreditCard />,
			hidden: functionsScreen.cards.payment.content,
		},
		{
			text: functionsScreen.cards.withdraw.title,
			icon: <ATM />,
			hidden: functionsScreen.cards.withdraw.content,
		},
	]

	return (
		<section
			style={{ minHeight: '42rem' }}
			name='FunctionsScreen'
			className='FunctionsScreen lg:h-screen'>
			<h2 className='absolute block md:flex items-center left-11 top-11 text-gray-200 text-4xl font-light'>
				<Title
					title={functionsScreen.title}
					highlightStyle='font-bold'
				/>
				<img
					src={logo}
					alt='AlyPay logo'
					className='w-64 mx-auto md:mx-4'
				/>
			</h2>
			<CardDisplayer
				className='bg-gray-500 opacity-70'
				cardContents={cardContents}
			/>
		</section>
	)
}

export default React.memo(Functions)
