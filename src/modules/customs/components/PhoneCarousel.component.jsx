//react import
import React, { useEffect, useState } from 'react'

/**
 *
 *
 * @returns {React.FunctionComponent}
 */
const PhoneCarousel = ({ className = '', style = {} }) => {
	return (
		<div style={style} className={`PhoneCarousel flex ${className}`}>
			<div className='CellImage' />
			<div className='Image' />
		</div>
	)
}

export default React.memo(PhoneCarousel)
