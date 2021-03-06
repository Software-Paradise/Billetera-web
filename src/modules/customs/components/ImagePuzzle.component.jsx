//react import
import React, { useEffect, useState } from 'react'

/**
 * Custom grid 3x3 where images are going to be shown in intervals of 9 images
 * @param {String} className - tailwind styles for the component
 * @param {Object} style - component styles
 * @param {Array} images - array of objects, each of them must contain keys "image" (src for image), "bgColor" (tailwind class for bg color) and "expand" (object with key "time" wich is going to be a number of seconds)
 * @param {Number} separation - margin in % between cells
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

	//array of cells to expand
	const [expandedSrc, setExpandedSrc] = useState(images[0].image)
	const [expandedColor, setExpandedColor] = useState(images[0].bgColor)

	//Cells array with skipped and filled cells
	const imagePack = () => {
		//filter set of images between upper and bottom limits
		const filteredImageArray = images.filter(
			(_, index) => index < upperLimit && index >= bottomLimit
		)
		//cells with filtered images
		const mapedCells = filteredImageArray.map(
			({ image, bgColor }, index) => {
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
		//boolean to know if the component has already been dismounted to avoid memory leak
		let isMounted = true
		//filter set of images between upper and bottom limits
		const filteredImageArray = images.filter(
			(_, index) => index < upperLimit && index >= bottomLimit
		)

		const nextCells = async () => {
			//cells appear from rigth
			await new Promise(resolve =>
				setTimeout(() => {
					if (isMounted) setActiveCellClass('active-cell')
					resolve()
				}, 50)
			)
			setExpandedColor(filteredImageArray[0].bgColor)
			setExpandedSrc(filteredImageArray[0].image)

			//expand topleft cell
			await new Promise(resolve =>
				setTimeout(() => {
					if (isMounted) setExpandCellClass('expand-active')
					resolve()
				}, 3000)
			)

			//iterate over expand cells
			//function to hide cells
			const hideCells = (resolve, index) => {
				setTimeout(() => {
					if (isMounted) setExpandCellClass('expand-inactive')
					if (isMounted) setActiveCellClass('')
					resolve()
				}, filteredImageArray[index - 1].expand.time * 1000)
			}
			//function to changue image source and background color of cell
			const changeCell = (resolve, index) => {
				setTimeout(() => {
					if (isMounted)
						setExpandedColor(filteredImageArray[index].bgColor)
					if (isMounted)
						setExpandedSrc(filteredImageArray[index].image)
					resolve()
				}, 100)
			}
			//function to show cells
			const showCells = resolve => {
				setTimeout(() => {
					if (isMounted) setExpandCellClass('expand-active')
					resolve()
				}, 100)
			}
			for (let i = 1; i < filteredImageArray.length; i++) {
				//hide cells after previous image time has ended
				await new Promise(resolve => hideCells(resolve, i))
				//change src of image element and background of cell
				await new Promise(resolve => changeCell(resolve, i))
				//show cells with changed image source
				await new Promise(resolve => showCells(resolve))
			}

			//cells dissapear after 5 sec
			await new Promise(resolve =>
				setTimeout(() => {
					if (isMounted) setExpandCellClass('expand-inactive')
					if (isMounted) setActiveCellClass('')
					resolve()
				}, 5000)
			)

			//bottom and upper limits get updated, expanded class resets
			await new Promise(resolve =>
				setTimeout(() => {
					if (isMounted)
						setBottomLimit(
							upperLimit >= images.length ? 0 : upperLimit
						)
					if (isMounted)
						setUpperLimit(
							upperLimit >= images.length
								? imageAmount
								: upperLimit + imageAmount
						)
					if (isMounted) setExpandCellClass('')
					if (isMounted) setFlag(!flag)
					resolve()
				}, 100)
			)
		}

		//execute the previously declared function
		nextCells()
		return () => {
			isMounted = false
		}
	}, [imageAmount, images, upperLimit, bottomLimit, flag])

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
