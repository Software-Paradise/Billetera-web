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
//video import
import { presentation } from 'assets'

/**
 *First screen to display in the landing page
 * @returns {React.FunctionComponent}
 */
function Top() {
	const { topScreen } = useSelector(selectLanguage)
	return (
		<div className='TopScreen h-screen'>
			<TopLayout>
				<div className='BottomDiv mt-20 relative items-center flex-grow flex flex-col justify-center'>
					<div className='flex w-full absolute top-0 h-3/5 items-center'>
						<VideoBackground videoSrc={presentation} />
						<div className='relative bg-gray-900 bg-opacity-80 h-full w-full flex'>
							<div className='relative flex flex-col justify-center items-center h-full w-full xl:w-1/3'>
								<SelectLanguage
									className='absolute top-5 z-10'
									zoom={0.9}
								/>
								<a
									href='https://play.google.com/store/apps/details?id=com.alypay&hl=es&gl=US&showAllReviews=true'
									target='_blank'
									rel='noopener noreferrer'>
									<Button
										label={topScreen.downloadButton}
										variant='outline'
										className='DownloadButton capitalize text-xl z-10 mt-3 mb-3 transition border-yellow-400 duration-100 hover:bg-yellow-400 border-4 px-4 py-2'
										twLabel='text-yellow-400 group-hover:text-gray-900 '
										twIcon='text-yellow-400 group-hover:text-gray-900'>
										<p className='text-4xl'>
											<DiAndroid />
										</p>
									</Button>
								</a>

								<p className='text-gray-200 text-2xl mx-3 font-light z-10 text-center'>
									{topScreen.bottomText.text}
									<a
										href='https://www.alypay-app.com/'
										target='_blank'
										rel='noopener noreferrer'
										className='text-yellow-400 
									font-bold text-3xl rounded-md'>
										{topScreen.bottomText.linkText}
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className='flex bg-black bg-opacity-50 justify-center w-full absolute bottom-0 h-2/5 items-center'>
						<h1 className='font-light z-10 text-gray-200 text-2xl md:text-4xl text-center py-4 md:py-16'>
							<Title
								title={topScreen.title.text}
								highlight={topScreen.title.highlight}
								highlightStyle='text-yellow-400 font-bold'
							/>
						</h1>
					</div>
				</div>
			</TopLayout>
		</div>
	)
}

export default React.memo(Top)
