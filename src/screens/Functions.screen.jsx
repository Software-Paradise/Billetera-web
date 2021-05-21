//react import
import React from 'react'
//component import
import { Title, CardDisplayer } from 'modules/customs'

function Functions() {
	return (
		<section
			name='FunctionsScreen'
			className='FunctionsScreen min-h-screen'>
			<Title
				title='Funciones de AlyPay'
				highlight={['AlyPay']}
				highlightStyle='font-bold'
			/>
			<CardDisplayer className='bg-gray-500'/>
		</section>
	)
}

export default React.memo(Functions)
