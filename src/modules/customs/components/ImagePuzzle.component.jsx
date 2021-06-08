//react import
import React from 'react'

/**
 *
 * @returns {React.FunctionComponent}
 */
const ImagePuzzle = ({ className = '' }) => {
	return <div className={`ImagePuzzle ${className}`}></div>
}

export default React.memo(ImagePuzzle)
