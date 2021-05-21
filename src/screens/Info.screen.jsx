//react import
import React from 'react'
import { Button } from 'modules/customs'
//icon import
import { DiAndroid } from 'react-icons/di'

function Info() {
	return (
		<section name='InfoScreen' className='InfoScreen min-h-screen md:flex'>
			<article className='md:w-2/4 md:h-screen bg-gray-300 flex justify-center items-end'>
				<Button
					label='Descárgala ya'
					variant='outline'
					className='capitalize text-xl relative border-4 px-4 py-2 hover:bg-gray-900'
					twLabel='text-gray-900 group-hover:text-gray-200'
					twIcon='text-gray-900 group-hover:text-gray-200'>
					<p className='text-4xl'>
						<DiAndroid />
					</p>
				</Button>
			</article>
			<article
				className='md:w-2/4 md:h-screen text-center items-center 
			flex flex-col justify-center'>
				<h2 className='text-yellow-400 text-4xl font-light'>
					¿Qué es <span className='font-bold'>AlyPay</span>?
				</h2>
				<p className='text-gray-200 text-3xl font-light max-w-lg pt-24'>
					Es el sistema de{' '}
					<span className='font-bold'>AlySystem</span> para usuarios
					que le brinda la oportunidad de hacer uso de sus
					criptomonedas, utilizándolas como medio de pago en los
					distintos comercios afiliados a nivel mundial
				</p>
			</article>
		</section>
	)
}

export default React.memo(Info)
