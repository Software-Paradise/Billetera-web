//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'

/**
 *An h2 element wich can highlight mutiple words inside the text
 * @param {Array} highlight - array of strings to highlight
 * @param {String} highlightStyle - tailwind styles for the highlight
 * @param {String} title - text to show in the component
 * @param {String} className - for tailwind styles
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
		let filter = highlight.filter(
			highlightWord => highlightWord === word.replace(/[,?¿.]/g, '')
		)
		const nonAlphaNumeric = word.replace(/[a-z0-9áéíóú+]+/gi, '')
		return nonAlphaNumeric !== '' ? (
			filter.length > 0 ? (
				<>
					<span
						key={`${rkey}_${index}`}
						className={`${highlightStyle}`}>
						{`${word.replace(/[,?¿.]/g, '')}`}
					</span>
					{`${nonAlphaNumeric} `}
				</>
			) : (
				`${word} `
			)
		) : filter.length > 0 ? (
			<span key={`${rkey}_${index}`} className={`${highlightStyle}`}>
				{`${word} `}
			</span>
		) : (
			`${word} `
		)
	})
	return 
		(<span className={`Title max-w-max font-light ${className}`}>
			{txtArray}
		</span>)
}

export default React.memo(Title)
