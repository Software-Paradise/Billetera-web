//react import
import React from 'react'
//component imports
import { Title } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Ecommerce() {
	const { ecommerceScreen } = useSelector(selectLanguage)
	return (
		<section
			name='EcommerceScreen'
			className='EcommerceScreen min-h-screen'>
			<article className='EcommerceScreen__LeftSide flex-1 relative'>
				<h2 className='font-light text-yellow-400 text-4xl pl-11 pt-11'>
					{ecommerceScreen.title}
				</h2>
				<p className='text-gray-200 text-xl pt-11 pl-11 pr-32'>{ecommerceScreen.content}</p>
			</article>
			<article className='EcommerceScreen__RigthSide flex-1 relative'></article>
		</section>
	)
}

export default React.memo(Ecommerce)
