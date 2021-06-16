//react import
import React from 'react'
//layout import
import { TopLayout } from 'layouts'
//component import
import { Button, SelectLanguage, Title, VideoBackground } from 'modules/customs'
//icon import
import { DiAndroid } from 'react-icons/di'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 *First screen to display in the landing page
 * @returns {React.FunctionComponent}
 */
function Top() {
	const { topScreen } = useSelector(selectLanguage)
	return (
		<div className='TopScreen'>
			<TopLayout>
				<div className='BottomDiv relative items-center flex-grow flex flex-col justify-center'>
					<SelectLanguage
						className='absolute top-1 z-10'
						zoom={0.9}
					/>
					<div className='flex-1 flex flex-col w-full relative items-center'>
						<VideoBackground />
						<h1 className='font-light z-10 text-gray-200 text-3xl md:text-6xl text-center py-16 mt-16 mb-8'>
							<Title
								title={topScreen.title.text}
								highlight={topScreen.title.highlight}
								highlightStyle='text-yellow-400 font-bold'
							/>
						</h1>
					</div>
					<Button
						label={topScreen.downloadButton}
						variant='outline'
						className='capitalize text-xl z-10 mt-3 mb-3 hover:bg-yellow-400 border-4 px-4 py-2'
						twIcon='text-yellow-400 group-hover:text-gray-900'>
						<p className='text-4xl'>
							<DiAndroid />
						</p>
					</Button>
					<p className='text-gray-200 mb-8 z-10'>
						{topScreen.bottomText.text}
						<a href='#' className='text-yellow-400'>
							{topScreen.bottomText.linkText}
						</a>
					</p>
				</div>
			</TopLayout>
		</div>
	)
}

export default React.memo(Top)
