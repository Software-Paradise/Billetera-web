//react import
import React, { useEffect, useState } from 'react'
//util imports
import { randomKey } from 'utils'

/**
 *
 * @returns {React.FunctionComponent}
 */
const PhoneCarousel = ({
	className = '',
	style = {},
	leftImages = [],
	rigthImages = [],
}) => {
	const [activeCounter, setActiveCounter] = useState(0)
	const rkey = randomKey()

	useEffect(() => {
		setTimeout(
			() =>
				setActiveCounter(
					activeCounter === rigthImages.length - 1
						? 0
						: activeCounter + 1
				),
			4000
		)
	}, [activeCounter, rigthImages.length])

	return (
		<div style={style} className={`PhoneCarousel flex ${className}`}>
			<div className='CellImageContainer flex justify-center items-center relative overflow-hidden'>
				{leftImages.map((image, index) => (
					<img
						alt={`cell_image_${index}`}
						key={`${rkey}_cellImage${index}`}
						src={image}
						style={{ animation: 'none' }}
						className={`CellImage absolute ${
							activeCounter === index ? 'active' : ''
						}`}
					/>
				))}
			</div>
			<div className='ImageContainer flex justify-center items-center relative overflow-hidden'>
				{rigthImages.map((image, index) => (
					<img
						alt={`image_${index}`}
						key={`${rkey}_Image${index}`}
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
