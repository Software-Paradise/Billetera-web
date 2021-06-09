//react import
import React, { useEffect, useMemo } from 'react'

/**
 *
 * @returns {React.FunctionComponent}
 */
const ImagePuzzle = ({
	className = '',
	images = [],
	columns = 2,
	rows = 2,
	separation = 5,
	skip = 0,
}) => {
	const mapedCells = useMemo(() => {
		let skipedCells = [],
			counter = 0,
			indexArray = []
		while (counter < skip) {
			skipedCells.push(
				<div style={{ margin: `${separation}%`, opacity: 0 }} />
			)
			counter++
		}
		counter = 0
		const imageAmount = rows * columns - skip

		while (counter < imageAmount) {
			let random = Math.floor(Math.random() * (imageAmount + 1))
			if (!indexArray.includes(random)) {
				indexArray.push(random)
				counter++
			}
		}

		const imageArray = images.map((image, index) => {
			return index < imageAmount ? (
				<div
					style={{ margin: `${separation}%` }}
					className={`${
						index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-600'
					} flex items-center rounded-lg shadow-md`}>
					<img
						alt={`commerce_${index}`}
						src={images[indexArray[index]]}
					/>
				</div>
			) : null
		})

		return [...skipedCells, ...imageArray]
	}, [images, separation, columns, rows, skip])

	useEffect(() => {
		setTimeout(() => {}, 3000)
	}, [])

	return (
		<div className={`ImagePuzzle ${className}`}>
			<div
				style={{
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
					gridTemplateRows: `repeat(${rows}, 1fr)`,
				}}
				className='grid'>
				{mapedCells}
			</div>
		</div>
	)
}

export default React.memo(ImagePuzzle)
