//react import
import React, { useEffect, useState } from 'react'

/**
 *
 * @returns {React.FunctionComponent}
 */
const PhoneCarousel = ({
	className = '',
	leftImages = [],
	rightImages = [],
}) => {
	const [activeCounter, setActiveCounter] = useState(0)

	useEffect(() => {
		const timer = setTimeout(
			() =>
				setActiveCounter(
					activeCounter === rightImages.length - 1
						? 0
						: activeCounter + 1
				),
			4000
		)
		return () => clearTimeout(timer)
	}, [activeCounter, rightImages])

	return (
		<div className={`PhoneCarousel flex ${className}`}>
			<div className='CellImageContainer flex justify-center items-center relative overflow-hidden'>
				{leftImages.map((image, index) => (
					<img
						alt={`cell_image_${index}`}
						key={`cellImage_${index}`}
						src={image}
						style={{ animation: 'none' }}
						className={`CellImage absolute ${
							activeCounter === index ? 'active' : ''
						}`}
					/>
				))}
			</div>
			<div className='ImageContainer flex justify-center items-center relative overflow-hidden'>
				{rightImages.map((image, index) => (
					<img
						alt={`image_${index}`}
						key={`Image_${index}`}
						src={image}
						className={`Image absolute ${
							activeCounter === index ? 'active' : ''
						}`}
					/>
				))}
			</div>
		</div>
	)
}

export default React.memo(PhoneCarousel)
