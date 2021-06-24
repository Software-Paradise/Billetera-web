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
	FiPlus,
	FiShare2,
} from 'react-icons/fi'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
//component imports
import Button from './Button.component'

function Footer() {
	const year = new Date().getFullYear()
	const { footer } = useSelector(selectLanguage)
	return (
		<div
			name='Footer'
			className='Footer flex flex-col h-auto lg:h-96 bg-gray-900'>
			<div className='Footer__top flex-1 flex flex-col lg:flex-row'>
				<div
					style={{ flex: '3' }}
					className='Section flex flex-col relative items-center'>
					<p className='text-yellow-400 w-4/5 flex justify-center items-center font-bold text-2xl py-14'>
						<FaMapMarkerAlt className='text-gray-200 text-4xl mr-2' />
						{footer.contact.title}
					</p>
					<div className='pb-8 w-5/6'>
						<a
							href='https://www.google.com/maps/place/Alysystem/@12.1015006,-86.2649082,780m/data=!3m2!1e3!4b1!4m5!3m4!1s0x8f7155c52876b13f:0x7cfb58a482bb87cf!8m2!3d12.1014954!4d-86.2627195?hl=es'
							target='_blank'
							rel='noopener noreferrer'>
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
						</a>
						<a
							href='https://www.google.com/maps/place/Torres+Paseo+Col%C3%B3n,+Paseo+Col%C3%B3n,+Pitahaya,+San+Jos%C3%A9,+Costa+Rica/@9.9344833,-84.0918153,1091m/data=!3m1!1e3!4m5!3m4!1s0x8fa0e3576360eda1:0xa2f68cab641baa21!8m2!3d9.9356356!4d-84.0909722'
							target='_blank'
							rel='noopener noreferrer'>
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
						</a>
					</div>
				</div>
				<div style={{ alignSelf: 'center' }} className='Separator' />
				<div
					style={{ flex: '2' }}
					className='Section flex flex-col items-center'>
					<p className='text-yellow-400 flex items-center justify-center font-bold text-2xl py-14 w-4/5'>
						<FiPlus className='text-gray-200 text-4xl mr-2' />
						{footer.download.title}
					</p>
					<a
						href='https://play.google.com/store/apps/details?id=com.alypay&hl=es&gl=US&showAllReviews=true'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							label={footer.download.button}
							variant='outline'
							className='DownloadButton mx-auto my-3 rounded-full capitalize 
						text-xl z-1 transition border-yellow-400 duration-100 hover:bg-yellow-400 
						border-4 px-4 py-2'
							twLabel='text-yellow-400 group-hover:text-gray-900 '
							twIcon='text-yellow-400 group-hover:text-gray-900'>
							<p className='text-4xl'>
								<DiAndroid />
							</p>
						</Button>
					</a>

					<p className='text-gray-200 text-base mx-3 mb-14 font-light z-10 text-center'>
						{footer.download.text}
						<a
							href='https://www.alypay-alysystem.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-yellow-400 
									font-bold text-xl rounded-md'>
							{footer.download.linkText}
						</a>
					</p>
				</div>
				<div style={{ alignSelf: 'center' }} className='Separator' />
				<div
					style={{ flex: '2' }}
					className='Section flex flex-col items-center'>
					<p className='text-yellow-400 flex items-center justify-center font-bold text-2xl py-14 w-4/5'>
						<FiShare2 className='text-gray-200 text-4xl mr-2' />
						{footer.support.title}
					</p>
					<p className='flex w-full justify-evenly my-4'>
						<a
							href='https://www.facebook.com/AlySystemTechnology'
							target='_blank'
							rel='noopener noreferrer'>
							<Button
								variant='outline'
								className='transition duration-100 transform hover:scale-75'
								twIcon='text-4xl text-yellow-400'>
								<FiFacebook />
							</Button>
						</a>
						<a
							href='https://www.instagram.com/alysystem_1/?hl=es'
							target='_blank'
							rel='noopener noreferrer'>
							<Button
								variant='outline'
								className='transition duration-100 transform hover:scale-75'
								twIcon='text-4xl text-yellow-400'>
								<FiInstagram />
							</Button>
						</a>
						<a
							href='https://twitter.com/AlySystem_1'
							target='_blank'
							rel='noopener noreferrer'>
							<Button
								variant='outline'
								className='transition duration-100 transform hover:scale-75'
								twIcon='text-4xl text-yellow-400'>
								<FiTwitter />
							</Button>
						</a>
						<a
							href='https://www.youtube.com/channel/UC-A2j357_2-G4FET7fVGm1g'
							target='_blank'
							rel='noopener noreferrer'>
							<Button
								variant='outline'
								className='transition duration-100 transform hover:scale-75'
								twIcon='text-4xl text-yellow-400'>
								<FiYoutube />
							</Button>
						</a>
					</p>
					<a
						href='https://wa.link/yi8r8z'
						target='_blank'
						rel='noopener noreferrer'>
						<Button
							variant='outline'
							className='transition duration-200 capitalize text-xl mx-auto my-3
						border-4 border-gray-200 px-4 py-2 hover:bg-gray-200
						rounded-full'
							label={footer.support.button}
							twLabel='text-gray-200 group-hover:text-gray-900'
							twIcon='text-gray-200 group-hover:text-gray-900'>
							<FaWhatsapp className='text-4xl' />
						</Button>
					</a>
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
