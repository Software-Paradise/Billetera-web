//react import
import React from 'react'
//layout import
import { TopLayout } from 'layouts'
//component import
import { Button } from 'modules/customs'
//icon import
import { DiAndroid } from 'react-icons/di'

function Top() {
	return (
		<div className='TopScreen'>
			<TopLayout>
				<div className='BottomDiv items-center flex-grow flex flex-col justify-center'>
					<h1 className='font-light text-gray-200 text-3xl md:text-6xl text-center py-16 md:my-8'>
						LA MANERA MÁS{' '}
						<span className='text-yellow-400 font-bold'>FÁCIL</span>
						,{' '}
						<span className='text-yellow-400 font-bold'>
							RÁPIDA
						</span>{' '}
						Y SEGURA DE HACER NEGOCIOS CON{' '}
						<span className='text-yellow-400 font-bold'>
							CRIPTOMONEDAS
						</span>
					</h1>
					<Button
						label='Descárgala ya'
						variant='outline'
						className='capitalize text-xl mb-3 hover:bg-yellow-400 border-4 px-4 py-2'
						twIcon='text-yellow-400 group-hover:text-gray-900'>
						<p className='text-4xl'>
							<DiAndroid />
						</p>
					</Button>
					<p className='text-gray-200 mb-8'>
						Para usuarios ios y web ingresar{' '}
						<a href='#' className='text-yellow-400'>
							aquí
						</a>
					</p>
				</div>
			</TopLayout>
		</div>
	)
}

export default React.memo(Top)
