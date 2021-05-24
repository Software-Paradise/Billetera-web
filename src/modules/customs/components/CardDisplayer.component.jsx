//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'
//component imports
import { VerticalCard } from 'modules/customs'
//icon imports
import { FiShoppingCart } from 'react-icons/fi'

/**
 *component to show vertical cards in a row
 * @param {String} className - custom tailwind styles
 * @param {Array} cardContents - array of objects with "text", "icon" and "hidden" keys, text being a string and icon a react icon component, hidden is a string for the text to show in the hidden card
 * @returns {React.FunctionComponent}
 */
const CardDisplayer = ({
	className = '',
	cardContents = [
		{ text: 'Card 1', icon: <FiShoppingCart /> },
		{ text: 'Card 2', icon: <FiShoppingCart /> },
		{ text: 'Card 3', icon: <FiShoppingCart /> },
	],
}) => {
	const rkey = randomKey()
	return (
		<section className={`CardDisplayer ${className}`}>
			{cardContents.map(({ text, icon, hidden }, index) => (
				<VerticalCard
					icon={icon}
					content={text}
					hiddenContent={hidden}
					key={`${rkey}_${index}`}
					twIcon='text-6xl pb-12 pt-20'
					twContent='text-gray-100 text-xl font-bold'
					twButton='text-gray-300 text-3xl'
				/>
			))}
		</section>
	)
}

export default React.memo(CardDisplayer)
