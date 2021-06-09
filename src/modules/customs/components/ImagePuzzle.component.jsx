//react import
import React, { useMemo } from 'react'

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
			counter = 0
		while (counter < skip) {
			skipedCells.push(
				<div style={{ margin: `${separation}%`, opacity: 0 }} />
			)
			counter++
		}

		const imageAmount = rows * columns - skip

		const imageArray = images.map((image, index) =>
			index < imageAmount ? (
				<div
					style={{ margin: `${separation}%` }}
					className={`${
						index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-200'
					} flex items-center rounded-lg shadow-md`}>
					<img alt={`commerce_${index}`} src={image} />
				</div>
			) : null
		)

		return [...skipedCells, ...imageArray]
	}, [images, separation, columns, rows, skip])

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
