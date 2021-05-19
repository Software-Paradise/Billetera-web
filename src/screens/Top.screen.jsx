//react import
import React from 'react'
//layout import
import { TopLayout } from 'layouts'

function Top() {
	return (
		<div className='TopScreen'>
			<TopLayout>
				<div className='BottomDiv items-center flex-grow flex flex-col justify-center'>
					<h1 className='font-light text-gray-200 text-6xl text-center py-16'>
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
				</div>
			</TopLayout>
		</div>
	)
}

export default React.memo(Top)
