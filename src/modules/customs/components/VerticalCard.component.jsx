//react import
import React from 'react'
//icon import
import { FiArrowRightCircle } from 'react-icons/fi'

/**
 *component to show vertical cards in a row
 * @param {React.Component} icon - icon to show on the card header
 * @param {String} twIcon - tailwind styles for the icon
 * @param {String} content - text below the icon
 * @param {String} twContent - tailwind styles for the content
 * @param {String} twButton - tailwind styles for the button in the footer
 * @param {String} className - custom tailwind styles
 * @returns {React.FunctionComponent}
 */
const VerticalCard = ({
	icon = null,
	twIcon = '',
	content = '',
	twContent = '',
    twButton = '',
	className = '',
}) => {
	return (
		<div className={`VerticalCard ${className}`}>
			<span className={twIcon}>{icon}</span>
			<p className={twContent}>{content}</p>
			<button className={twButton}>
				<FiArrowRightCircle />
			</button>
		</div>
	)
}

export default React.memo(VerticalCard)
