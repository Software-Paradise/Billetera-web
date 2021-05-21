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
					className='capitalize text-xl border-gray-900 relative 
					 2xl:px-12 2xl:py-5'>
					<p className='text-4xl'>
						<DiAndroid />
					</p>
				</Button>
			</article>
			<article className='md:w-2/4 md:h-screen'>
				<h2></h2>
				<p></p>
			</article>
		</section>
	)
}

export default React.memo(Info)
