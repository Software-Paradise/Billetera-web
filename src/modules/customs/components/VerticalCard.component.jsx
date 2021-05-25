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
			<div className={`VerticalCard relative ${className}`}>
				<span className={`${twIcon}`}>{icon}</span>
				<p className={`overflow-ellipsis max-w-full ${twContent}`}>
					{content}
				</p>
				<button
					style={{ outline: 'none' }}
					className={`relative py-12 px-20 ${twButton}`}>
					<FaArrowCircleRight />
				</button>

				{/* Hidden card to show when button clicked */}
				<div
					className={`HiddenCard bg-gray-800 ${hiddenState}`}
					onClick={toggleHiddenState}>
					<span
						className='text-6xl text-yellow-400 pt-20 pb-3'
						style={{ fill: '#facc15' }}>
						{icon}
					</span>
					<p className={`${twContent}`}>{content}</p>
					<div className='flex flex-grow items-center justify-center'>
						<p className='text-gray-200 text-lg px-5'>
							{hiddenContent}
						</p>
					</div>
				</div>
			</div>

			<div
				className='Separator'
				style={{
					background: '#facc15',
					width: '5px',
					height: '10rem',
					position: 'relative',
					top: '5rem',
					minWidth: '5px',
					zIndex: '1',
				}}></div>
		</>
	)
}

export default React.memo(VerticalCard)
