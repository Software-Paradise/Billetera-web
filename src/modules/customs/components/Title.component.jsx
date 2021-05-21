//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'

/**
 *An h2 element wich can highlight mutiple words inside the text
 * @param {Array} highlight - array of strings to highlight
 * @param {String} highlightStyle - tailwind styles for the highlight
 * @param {String} title - text to show in the component
 * @param {String} className - fo tailwind styles
 * @returns {React.FunctionComponent}
 */
const Title = ({
	title = 'Title',
	highlight = [],
	highlightStyle = '',
	className = '',
}) => {
	const rkey = randomKey()
	const txtArray = title.split(' ').map((word, index) => {
		let filter = highlight.filter(highlightWord => highlightWord === word)
		return filter.length > 0 ? (
			<span
				key={`${rkey}_${index}`}
				className={`${highlightStyle}`}>{`${word} `}</span>
		) : (
			`${word} `
		)
	})
	return (
		<h2 className={`Title max-w-max text-4xl font-light ${className}`}>
			{txtArray}
		</h2>
	)
}

export default React.memo(Title)
