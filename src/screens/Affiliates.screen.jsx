//react import
import React from 'react'
//component imports
import { ImagePuzzle, Title } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Affiliates() {
	const { affiliatesScreen } = useSelector(selectLanguage)
	console.log(affiliatesScreen.title.highlight)
	return (
		<section
			name='AffiliatesScreen'
			className='AffiliatesScreen min-h-screen'>
			<article className='flex-1 flex flex-col relative justify-items-start'>
				<h2 className='text-gray-800 text-4xl pt-11 px-11'>
					<Title
						title={affiliatesScreen.title.text}
						highlight={affiliatesScreen.title.highlight}
						highlightStyle='font-bold'
					/>
				</h2>
				<p className='text-gray-800 text-xl pt-11 px-11'>
					<Title
						title={affiliatesScreen.content.text}
						highlight={affiliatesScreen.content.highlight}
						highlightStyle='font-bold'
					/>
				</p>
			</article>
			<article className='flex-1 min-h-screen'>
				<ImagePuzzle />
			</article>
		</section>
	)
}

export default React.memo(Affiliates)
