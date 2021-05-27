//react import
import { Title } from 'modules/customs'
import React from 'react'

function Perks() {
	return (
		<div name='PerksScreen' className='PerksScreen min-h-screen'>
			<Title title='Beneficios' className='text-gray-200 pb-11' />
			<div className='flex relative flex-1 rounded-lg shadow-lg'>
				<div style={{width: '51%'}} className='grid flex-1 p-11 gap-8 absolute h-full'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						Alypay
					</p>
					<p className='text-gray-200 text-2xl px-11'>
						De la mano con la tecnología blockchain AlyPay ofrece a
						los usuarios y comercios transacciones rápidas, seguras
						y una tasa fee muy baja en cada una de sus
						transferencias. Haciendo de las criptomonedas el mejor
						medio de pagos a nivel mundial.
					</p>
				</div>
				<div className='grid absolute right-0 w-2/4 h-full flex-1 p-11 rounded-lg shadow-xl bg-gray-900 gap-8'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						Alypay E-commerce
					</p>
					<p className='text-gray-200 text-2xl px-11'>
						Siendo parte de AlyPay E-Commerce a la hora de vender
						tus productos se le debitará un fee muy bajo por cada
						producto que cobre a través de nuestro sistema.
						Ayudándote a ahorrar en tus gastos.
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(Perks)
