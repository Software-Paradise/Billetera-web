//react import
import React from 'react'
//component imports
import { Title } from 'modules/customs'

function Currency() {
	return (
		<section name='CurrencyScreen' className='CurrencyScreen min-h-screen'>
			<article>
				<Title
					title='Monedas AlyPay'
					highlight={['AlyPay']}
					highlightStyle='font-bold'
					className='text-gray-200 pl-11 py-11 absolute top-0'
				/>
				<Title
					title='TRABAJAMOS CON LAS PRINCIPALES CRIPTOMONEDAS DEL MERCADO'
					highlight={['CRIPTOMONEDAS']}
					highlightStyle='font-bold text-yellow-400'
					className='text-gray-200 py-11 pl-11'
				/>
			</article>
			<article>article 2sssssssss</article>
		</section>
	)
}

export default React.memo(Currency)
