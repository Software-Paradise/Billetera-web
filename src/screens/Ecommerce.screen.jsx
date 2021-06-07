//react import
import React from 'react'
//component imports
import { Title, UnorderedList } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Ecommerce() {
	const { ecommerceScreen } = useSelector(selectLanguage)
	return (
		<section
			name='EcommerceScreen'
			className='EcommerceScreen min-h-screen'>
			<article className='EcommerceScreen__LeftSide flex-1 relative flex flex-col justify-center'>
				<h2 className='font-light text-yellow-400 text-4xl px-11'>
					{ecommerceScreen.title}
				</h2>
				<p className='text-gray-200 text-xl pt-11 pl-11 pr-32'>
					{ecommerceScreen.content}
				</p>
				<h3 className='font-light text-yellow-400 text-3xl px-11 pt-24'>
					<Title
						title={ecommerceScreen.bottomContent.question}
						highlight={['AlyPay', 'E-Commerce']}
						highlightStyle='font-bold'
					/>
				</h3>
				<UnorderedList
					items={ecommerceScreen.bottomContent.sections}
					className='text-gray-200 text-xl pt-11 px-11'
				/>
			</article>
			<article
				className='EcommerceScreen__RigthSide flex-1 relative flex flex-col justify-center
			 bg-gray-200'>
				<h2 className='text-gray-800 text-3xl text-center'>
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
