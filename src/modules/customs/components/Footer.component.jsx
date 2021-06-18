import React from 'react'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//icon imports
import {
	FiFacebook,
	FiInstagram,
	FiTwitter,
	FiYoutube,
	FiMapPin,
	FiUsers,
	FiHelpCircle,
	FiPlus,
	FiShare2,
} from 'react-icons/fi'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
//component imports
import Button from './Button.component'
import Title from './Title.component'

function Footer() {
	const year = new Date().getFullYear()
	const { footer } = useSelector(selectLanguage)
	return (
		<div
			style={{ height: '25.38rem' }}
			className='Footer flex flex-col bg-gray-900'>
			<div className='Footer__top flex-1 flex flex-col md:flex-row'>
				<div
					style={{ flex: '3' }}
					className='Section flex flex-col relative items-center'>
					<p className='text-yellow-400 w-4/5 flex justify-center items-center font-bold text-2xl py-8'>
						<FaMapMarkerAlt className='text-gray-200 text-4xl m-4' />
						{footer.contact.title}
					</p>
					<div className='pb-8 w-5/6'>
						<Button
							style={{
								justifyContent: 'start',
								alignItems: 'start',
							}}
							className='MapButton py-3 w-full'
							label={footer.contact.address1}
							twLabel='text-gray-200 text-base font-light text-left'
							twIcon='text-yellow-400 group-hover:text-emerald-700'>
							<FiMapPin className='text-2xl' />
						</Button>
						<Button
							style={{
								justifyContent: 'start',
								alignItems: 'start',
							}}
							className='MapButton py-3 w-full'
							label={footer.contact.address2}
							twLabel='text-gray-200 text-base font-light text-left'
							twIcon='text-yellow-400 group-hover:text-emerald-700'>
							<FiMapPin className='text-2xl' />
						</Button>
					</div>
				</div>
				<div
					style={{ alignSelf: 'center' }}
					className='Separator w-1 h-3/4 bg-yellow-400'
				/>
				<div
					style={{ flex: '2' }}
					className='Section flex flex-col items-center'>
					<p className='text-yellow-400 flex items-center justify-center font-bold text-2xl py-8 w-4/5'>
						<FiPlus className='text-gray-200 text-4xl m-4' />
						{footer.download.title}
					</p>
					<Button
						label={footer.download.button}
						variant='outline'
						className='DownloadButton mx-auto rounded-full capitalize text-xl z-10 mt-3 mb-3 transition border-yellow-400 duration-100 hover:bg-yellow-400 border-4 px-4 py-2'
						twLabel='text-yellow-400 group-hover:text-gray-900 '
						twIcon='text-yellow-400 group-hover:text-gray-900'>
						<p className='text-4xl'>
							<DiAndroid />
						</p>
					</Button>
					<p className='text-gray-200 text-base mx-3 font-light z-10 text-center'>
						{footer.download.text}
						<a
							href='#'
							className='text-yellow-400 
									font-bold text-xl rounded-md'>
							{footer.download.linkText}
						</a>
					</p>
				</div>
				<div
					style={{ alignSelf: 'center' }}
					className='Separator w-1 h-3/4 bg-yellow-400'
				/>
				<div
					style={{ flex: '2' }}
					className='Section flex flex-col items-center'>
					<p className='text-yellow-400 flex items-center font-bold text-2xl py-8 w-4/5'>
						<FiShare2 className='text-gray-200 text-4xl m-4' />
						{footer.support.title}
					</p>
					<Button
						className='transition duration-200 transform 
                        bg-gray-200 rounded-full my-4 py-3'
						label={footer.support.button}
						twLabel='text-gray-900 text-md'
						twIcon='text-gray-900 text-2xl'>
						<FaWhatsapp />
					</Button>
					<p className='font-light text-gray-200 w-4/6 text-center'>
						<Title
							title={footer.support.content}
							highlight={footer.support.highlight}
							highlightStyle='font-bold'
						/>
					</p>
				</div>
			</div>
			<div className='Footer__bottom'>
				<p className='font-light text-yellow-400 text-center p-4 text-sm'>
					© Copyright {year} AlySystem
				</p>
			</div>
		</div>
	)
}

export default React.memo(Footer)
