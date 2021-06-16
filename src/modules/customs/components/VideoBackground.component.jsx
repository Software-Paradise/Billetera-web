import { headerdark } from 'assets'
import React from 'react'

/**
 * Custom component to put a video background
 * @param {String} className - style to be applied on 'video'
 * @returns {React.FunctionComponent}
 */
function VideoBackground({ className = '' }) {
	return (
		<video
			src={headerdark}
			autoPlay
			loop
			muted
			className={`VideoBackground absolute inset-0 w-full h-full z-0 object-cover ${className}`}
		/>
	)
}

export default React.memo(VideoBackground)
