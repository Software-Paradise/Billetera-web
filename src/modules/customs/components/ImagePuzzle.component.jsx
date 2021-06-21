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
	separation = 3,
}) => {
	const columns = 3,
		rows = 3
	//how many cells are going to be showing at once
	const imageAmount =
		images.length < rows * columns ? images.length : rows * columns

	const [upperLimit, setUpperLimit] = useState(imageAmount)
	const [bottomLimit, setBottomLimit] = useState(0)
	const [activeCellClass, setActiveCellClass] = useState('')
	const [expandCellCLass, setExpandCellClass] = useState('')
	const [flag, setFlag] = useState(false)

	//filter set of images between upper and bottom limits
	const filteredImageArray = images.filter(
		({ image }, index) => index < upperLimit && index >= bottomLimit
	)

	//array of cells to expand
	const [expandedSrc, setExpandedSrc] = useState(images[0].image)
	const [expandedColor, setExpandedColor] = useState(images[0].bgColor)

	//Cells array with skipped and filled cells
	const imagePack = () => {
		//cells with filtered images
		const mapedCells = filteredImageArray.map(
			({ image, bgColor, expand }, index) => {
				return (
					<div
						key={`mappedCell_${index}`}
						style={{
							margin: `${separation}%`,
						}}
						className={`ImageCell ${
							index === 0 ? expandedColor : bgColor
						} ${activeCellClass} ${
							index === 0 ? expandCellCLass : ''
						} flex items-center rounded-lg shadow-md overflow-hidden`}>
						<img
							key={`mappedImage_${index}`}
							alt={`commerce_${index}`}
							src={index === 0 ? expandedSrc : image}
						/>
					</div>
				)
			}
		)
		return [...mapedCells]
	}

	useEffect(() => {
		let memory = true
		const nextCells = async () => {
			//cells appear from rigth
			await new Promise(resolve =>
				setTimeout(() => {
					if (memory) setActiveCellClass('active-cell')
					resolve()
				}, 50)
			)
			setExpandedColor(filteredImageArray[0].bgColor)
			setExpandedSrc(filteredImageArray[0].image)

			//expand topleft cell
			await new Promise(resolve =>
				setTimeout(() => {
					if (memory) setExpandCellClass('expand-active')
					resolve()
				}, 3000)
			)

			//iterate over expand cells
			for (let i = 1; i < filteredImageArray.length; i++) {
				//hide cells after previous image time has ended
				await new Promise(resolve =>
					setTimeout(() => {
						if (memory) setExpandCellClass('expand-inactive')
						if (memory) setActiveCellClass('')
						resolve()
					}, filteredImageArray[i - 1].expand.time * 1000)
				)
				//change src of image element and background of cell
				await new Promise(resolve =>
					setTimeout(() => {
						if (memory)
							setExpandedColor(filteredImageArray[i].bgColor)
						if (memory) setExpandedSrc(filteredImageArray[i].image)
						resolve()
					}, 100)
				)
				//show cells with changed image source
				await new Promise(resolve =>
					setTimeout(() => {
						if (memory) setExpandCellClass('expand-active')
						resolve()
					}, 100)
				)
			}
			//cells dissapear after 5 sec
			await new Promise(resolve =>
				setTimeout(() => {
					if (memory) setExpandCellClass('expand-inactive')
					if (memory) setActiveCellClass('')
					resolve()
				}, 5000)
			)
			//bottom and upper limits get updated, expanded class resets
			await new Promise(resolve =>
				setTimeout(() => {
					if (memory)
						setBottomLimit(
							upperLimit >= images.length ? 0 : upperLimit
						)
					if (memory)
						setUpperLimit(
							upperLimit >= images.length
								? imageAmount
								: upperLimit + imageAmount
						)
					if (memory) setExpandCellClass('')
					if (memory) setFlag(!flag)
					resolve()
				}, 100)
			)
		}

		//execute the previously declared function
		nextCells()
		return () => {
			memory = false
		}
	}, [imageAmount, images, upperLimit, flag])

	return (
		<div
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr )`,
				gridTemplateRows: `repeat(${rows}, 1fr )`,
				...style,
			}}
			className={`ImagePuzzle grid ${className}`}>
			{imagePack()}
		</div>
	)
}

export default React.memo(ImagePuzzle)
