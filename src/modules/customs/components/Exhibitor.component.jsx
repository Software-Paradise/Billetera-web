//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'

/**
 * @param {Array} elements - array of items with their 'image' key and 'title' key
 * @param {String} twTitles - tailwind styles for the titles
 * @param {String} twImagesExhibitor - tailwind styles for the images exhibitor
 * @returns {React.FunctionComponent}
 */
const Exhibitor = ({
	elements = [],
	twTitles = '',
	twImagesExhibitor = '',
}) => {
	const rkey = randomKey()
	return (
		<div className='Exhibitor mx-16'>
			<div
				className={`ImagesExhibitor flex justify-between h-32 p-4 ${twImagesExhibitor}`}>
				{elements.map(({ image, title }, index) => (
					<img
						alt={title}
						src={image}
						key={`${rkey}_${index}`}
						className='h-24 w-24'
					/>
				))}
			</div>
			<div className='TitlesExhibitor flex justify-between pt-1 px-4'>
				{elements.map(({ title }) => (
					<p
						className={`w-24 text-center ${twTitles}`}
						key={`${rkey}_${title}`}>
						{title}
					</p>
				))}
			</div>
		</div>
	)
}

export default React.memo(Exhibitor)
