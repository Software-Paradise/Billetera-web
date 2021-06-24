//react import
import React from 'react'
import { Fragment } from 'react'
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
		//filter the words in highlight array if any is equal to the words in the title
		let filter = highlight.filter(
			highlightWord => highlightWord === word.replace(/[,?¿.]/g, '')
		)
		/* if there is any words in filter, then apply highlight styles to that word and 
		return it */

		/* check if there is some non alpha numeric character inside that word, if there is one or more then 
		return the first character before the highlighted word and the rest after */
		const nonAlphaNumericArray = [
			...word.replace(/[a-z0-9áéíóú'+/]+/gi, '').replace('-', ''),
		]
		const nonAlphaNumericIndexes = nonAlphaNumericArray.map(
			nonAlphaNumeric => word.indexOf(nonAlphaNumeric)
		)
		return nonAlphaNumericArray.length > 0 ? (
			filter.length > 0 ? (
				<Fragment key={`${rkey}_${index}`}>
					{nonAlphaNumericIndexes.find(value => value === 0) === 0
						? `${nonAlphaNumericArray.shift()}`
						: null}
					<span className={`${highlightStyle}`}>
						{`${word.replace(/[,?¿.]/g, '')}`}
					</span>
					{`${nonAlphaNumericArray} `}
				</Fragment>
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
	return <span className={`Title ${className}`}>{txtArray}</span>
}

export default React.memo(Title)
