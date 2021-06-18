//react import
import React from 'react'
import { Button, Title, VideoBackground } from 'modules/customs'
//icon import
import { DiAndroid } from 'react-icons/di'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//assets imports
import { cellphones, square } from '../assets/index'

function Info() {
	const { infoScreen } = useSelector(selectLanguage)
	return (
		<section name='InfoScreen' className='InfoScreen md:min-h-screen'>
			<article className='min-h-screen relative flex justify-center items-center'>
				<VideoBackground videoSrc={square} />
				<div
					className='z-10 relative flex flex-col w-4/5 h-4/5 rounded-3xl
					justify-center items-center bg-gray-300 bg-opacity-90 overflow-hidden'>
					<img alt='AlyPay on movile' src={cellphones} />
					<Button
						label={infoScreen.leftSide.downloadButton}
						variant='outline'
						className='capitalize text-xl border-4 border-gray-900 px-4 py-2 hover:bg-gray-900'
						twLabel='text-gray-900 group-hover:text-gray-200'
						twIcon='text-gray-900 group-hover:text-green-700'>
						<p className='text-4xl'>
							<DiAndroid />
						</p>
					</Button>
				</div>
			</article>
			<article
				className='min-h-screen md:flex-1 text-center items-center 
			flex flex-col justify-center'>
				<h2 className='font-light text-yellow-400 text-4xl text-center'>
					<Title
						title={infoScreen.rightSide.title}
						highlight={['AlyPay']}
						highlightStyle='font-bold'
					/>
				</h2>
				<p className='text-gray-200 text-2xl mx-4 md:mx-0 md:text-3xl font-light max-w-lg pt-24'>
					<Title
						title={infoScreen.rightSide.content}
						highlight={infoScreen.rightSide.highlight}
						highlightStyle='font-bold'
					/>
				</p>
			</article>
		</section>
	)
}

export default React.memo(Info)
