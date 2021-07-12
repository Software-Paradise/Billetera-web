//react import
import React from 'react'
import { Button, Title, VideoBackground } from 'modules/customs'
//icon import
import { DiAndroid } from 'react-icons/di'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//assets imports
import { square, HOTEL_960x960, PLANE_960x960 } from 'assets'

function Info() {
	const { infoScreen } = useSelector(selectLanguage)
	return (
		<section
			style={{ minHeight: '40rem' }}
			name='InfoScreen'
			className='InfoScreen h-auto'>
			<article className='min-h-screen relative flex flex-1 justify-center items-center'>
				<VideoBackground
					videoArray={[square, HOTEL_960x960, PLANE_960x960]}
				/>
			</article>
			<article
				className='relative min-h-screen md:flex-1 text-center items-center 
			flex flex-col justify-center'>
				<h2 className='font-light text-yellow-400 text-4xl text-center mt-8'>
					<Title
						title={infoScreen.rightSide.title}
						highlight={['AlyPay']}
						highlightStyle='font-bold'
					/>
				</h2>
				<p className='text-gray-200 text-2xl mx-4 md:mx-0 md:text-3xl font-light max-w-lg my-24'>
					<Title
						title={infoScreen.rightSide.content}
						highlight={infoScreen.rightSide.highlight}
						highlightStyle='font-bold'
					/>
				</p>
				<a
					className='mb-8'
					href='https://play.google.com/store/apps/details?id=com.alypay&hl=es&gl=US&showAllReviews=true'
					target='_blank'
					rel='noopener noreferrer'>
					<Button
						label={infoScreen.leftSide.downloadButton}
						variant='outline'
						className='capitalize text-xl border-4 border-gray-200 px-4 py-2 hover:bg-gray-200'
						twLabel='text-gray-200 group-hover:text-gray-900'
						twIcon='text-gray-200 group-hover:text-green-700'>
						<p className='text-4xl'>
							<DiAndroid />
						</p>
					</Button>
				</a>
			</article>
		</section>
	)
}

export default React.memo(Info)
