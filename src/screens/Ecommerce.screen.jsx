//react import
import React from 'react'
//component imports
import { Title, UnorderedList, PhoneCarousel, Button } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//image imports
import {
	imagen1,
	imagen2,
	imagen3,
	imagen4,
	imagen5,
	phone1,
	phone2,
	phone3,
	phone4,
	phone5,
} from '../assets'

function Ecommerce() {
	const { ecommerceScreen } = useSelector(selectLanguage)
	return (
		<section
			name='EcommerceScreen'
			className='EcommerceScreen min-h-screen'>
			<article className='EcommerceScreen__LeftSide flex-1 relative flex flex-col justify-center'>
				<h2 className='font-light text-yellow-400 text-4xl pt-11 px-11'>
					{ecommerceScreen.title}
				</h2>
				<p className='text-gray-200 text-xl pt-11 pl-11 pr-11 md:pr-32'>
					{ecommerceScreen.content}
				</p>
				<h3 className='font-light text-yellow-400 text-3xl px-7 md:px-11 pt-24'>
					<Title
						title={ecommerceScreen.bottomContent.question}
						highlight={['AlyPay', 'Ecommerce']}
						highlightStyle='font-bold'
					/>
				</h3>
				<UnorderedList
					items={ecommerceScreen.bottomContent.sections}
					className='text-gray-200 text-xl py-7 px-7 md:px-11'
				/>
				<div className='flex flex-col justify-center lg:flex-row mb-4'>
					<a
						className='mx-4 self-center'
						href='https://play.google.com/store/apps/details?id=com.alypay_ecommerce&hl=es_NI&gl=US'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							label={ecommerceScreen.bottomContent.appButton}
							variant='outline'
							className='capitalize text-xl border-4 border-gray-200 px-4 py-2 my-2 lg:my-0
						transition duration-150 hover:bg-gray-200 rounded-full'
							twLabel='text-gray-200 group-hover:text-gray-900'
						/>
					</a>
					<a
						className='mx-4 self-center'
						href='https://www.alypay-ecommerce.com'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							label={ecommerceScreen.bottomContent.webButton}
							variant='outline'
							className='capitalize text-xl border-4 border-gray-200 px-4 py-2 my-2 lg:my-0
						transition duration-150 hover:bg-gray-200 rounded-full'
							twLabel='text-gray-200 group-hover:text-gray-900'
						/>
					</a>
				</div>
			</article>
			<article
				className='EcommerceScreen__RigthSide min-h-screen flex-1 relative flex flex-col justify-center items-center
			 bg-gray-200'>
				<PhoneCarousel
					className='items-center mt-4'
					leftImages={[phone1, phone2, phone3, phone4, phone5]}
					rightImages={[imagen2, imagen3, imagen4, imagen5, imagen1]}
				/>
				<h2 className='text-gray-800 text-3xl text-center mt-4 mb-8'>
					<Title
						title={ecommerceScreen.support}
						highlight={['24/7']}
						highlightStyle='font-bold'
					/>
				</h2>
			</article>
		</section>
	)
}

export default React.memo(Ecommerce)
