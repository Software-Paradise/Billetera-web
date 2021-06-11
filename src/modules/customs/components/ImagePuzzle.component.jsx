//react import
import React, { useEffect, useState } from 'react'

/**
 *
 * @returns {React.FunctionComponent}
 */
const ImagePuzzle = ({
	className = '',
	style = {},
	images = [],
	columns = 2,
	rows = 2,
	separation = 3,
	skip = 0,
}) => {
	//how many cells are going to be showing at once
	const imageAmount =
		images.length < rows * columns ? images.length : rows * columns - skip

	const [upperLimit, setUpperLimit] = useState(imageAmount)
	const [bottomLimit, setBottomLimit] = useState(0)
	const [activeCellClass, setActiveCellClass] = useState('')
	const [flag, setFlag] = useState(true)

	//Cells array with skipped and filled cells
	const imagePack = (imagesLength, imageAmount) => {
		let skipedCells = [],
			counter = 0

		//save empty divs to represent skipped cells
		counter = 0
		while (counter < skip) {
			skipedCells.push(
				<div
					key={`skippedCell_${counter}`}
					style={{ margin: `${separation}%`, opacity: 0 }}
				/>
			)
			counter++
		}

		//filter set of images between upper and bottom limits
		const filteredImageArray = images.filter(
			({ image }, index) => index < upperLimit && index >= bottomLimit
		)

		//cells with filtered images
		const mapedCells = filteredImageArray.map(
			({ image, bgColor, expand }, index) => {
				return (
					<div
						key={`mappedCell_${index}`}
						style={{
							margin: `${separation}%`,
							maxWidth: '11.414375rem',
							maxHeight: '11.414375rem',
						}}
						className={`ImageCell ${activeCellClass} ${bgColor} ${
							expand ? 'Expand' : ''
						} flex items-center rounded-lg shadow-md overflow-hidden`}>
						<img
							key={`mappedImage_${index}`}
							alt={`commerce_${index}`}
							src={image}
						/>
					</div>
				)
			}
		)

		return [...skipedCells, ...mapedCells]
	}

	useEffect(() => {
		const nextCells = async () => {
			await new Promise(resolve =>
				setTimeout(() => {
					resolve()
					setActiveCellClass('active-cell')
				}, 100)
			)
			await new Promise(resolve =>
				setTimeout(() => {
					resolve()
					setActiveCellClass('')
				}, 5000)
			)
			await new Promise(resolve =>
				setTimeout(() => {
					setBottomLimit(upperLimit >= images.length ? 0 : upperLimit)
					setUpperLimit(
						upperLimit >= images.length
							? imageAmount
							: upperLimit + imageAmount
					)
					resolve()
				}, 500)
			)
			setFlag(!flag)
		}
		nextCells()
		return () => {}
	}, [flag])

	return (
		<div style={style} className={`ImagePuzzle ${className}`}>
			<div
				style={{
					gridTemplateColumns: `repeat(${columns}, 1fr )`,
					gridTemplateRows: `repeat(${rows}, 1fr )`,
				}}
				className='grid'>
				{imagePack(images.length, imageAmount)}
			</div>
		</div>
	)
}

export default React.memo(ImagePuzzle)
