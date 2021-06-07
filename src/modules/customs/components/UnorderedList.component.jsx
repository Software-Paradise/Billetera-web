//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'

/**
 *
 * @param {String} className - tailwind styles for the ul tag
 * @param {Array} items - array of srings to show individually as unordered items
 * @returns {React.FunctionComponent}
 */
const UnorderedList = ({
	className = '',
	items = ['first', 'second', 'third'],
}) => {
	const rkey = randomKey()

	return (
		<ul className={`UnorderedList ${className}`}>
			{items.map((item, index) => (
				<li
					className='UnorderedItem leading-loose flex items-center'
					key={`${rkey}_${index}`}>
					<div
						style={{
							background:
								'linear-gradient(90deg,rgba(250, 204, 21, 1) -100%,rgba(250, 204, 21, 0) 80%)',
						}}
						className='w-10 h-6 mr-4 rounded-full'
					/>
					{item}
				</li>
			))}
		</ul>
	)
}

export default React.memo(UnorderedList)
