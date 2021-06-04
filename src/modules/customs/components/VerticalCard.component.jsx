//react import
import React, { useState } from 'react'
//icon import
import { FaArrowCircleRight } from 'react-icons/fa'

/**
 *component to show vertical cards in a row
 * @param {React.Component} icon - icon to show on the card header
 * @param {String} twIcon - tailwind styles for the icon
 * @param {String} content - text below the icon
 * @param {String} twContent - tailwind styles for the content
 * @param {String} twButton - tailwind styles for the button in the footer
 * @param {String} hiddenContent - text to show in the hidden card
 * @param {String} className - custom tailwind styles
 * @returns {React.FunctionComponent}
 */
const VerticalCard = ({
	icon = null,
	twIcon = '',
	content = '',
	twContent = '',
	twButton = '',
	hiddenContent = '',
	className = '',
}) => {
	const [hiddenState, setHiddenState] = useState('opacity-0')

	const toggleHiddenState = () =>
		setHiddenState(
			hiddenState === 'opacity-0' ? 'opacity-100' : 'opacity-0'
		)

	return (
		<>
			<div className={`VerticalCard relative flex ${className}`}>
				<span
					className={`px-8 lg:px-0 py-24 lg:pb-12 lg:pt-20 ${twIcon}`}>
					{icon}
				</span>
				<div
					className='flex flex-col md:flex-row lg:flex-col 
				flex-1 justify-center items-center text-center lg:block'>
					<p className={`overflow-ellipsis max-w-full ${twContent}`}>
						{content}
					</p>
					<button
						style={{ outline: 'none' }}
						className={`relative max-w-max self-center p-4 lg:py-12 lg:px-20 ${twButton}`}>
						<FaArrowCircleRight />
					</button>
				</div>
				{/* Hidden card to show when button clicked */}
				<div
					className={`HiddenCard bg-gray-800 ${hiddenState}`}
					onClick={toggleHiddenState}>
					<div className='flex flex-col w-full justify-center items-center pt-4'>
						<span
							className='hidden lg:block text-6xl text-yellow-400 lg:pt-20 lg:pb-3'
							style={{ fill: '#facc15' }}>
							{icon}
						</span>
						<p className={`${twContent}`}>{content}</p>
					</div>
					<div className='flex flex-grow text-center items-center w-full justify-around'>
						<span
							className='block lg:hidden text-6xl text-yellow-400 px-4 lg:pt-20 lg:pb-3'
							style={{ fill: '#facc15' }}>
							{icon}
						</span>
						<p
							className='text-gray-200 text-sm sm:text-lg 
						text-right w-2/3 lg:w-auto lg:text-center px-5'>
							{hiddenContent}
						</p>
					</div>
				</div>
			</div>

			<div
				className='Separator relative place-self-center lg:place-self-auto 
			lg:top-20 z-10 bg-yellow-400 w-60 h-1 lg:w-1 lg:h-40'
			/>
		</>
	)
}

export default React.memo(VerticalCard)
