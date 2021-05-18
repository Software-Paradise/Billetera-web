import { empty } from 'assets'
import React from 'react'

/**
 * Custom component for empty state
 * @param {String} className - style to be applied on 'div' wrapper
 * @param {React.FunctionComponent} component - to print below the empty image
 * @returns {React.FunctionComponent}
 */
function Empty({ className = '', component = null }) {
	return (
		<div className={`Empty flex flex-col ${className}`}>
			<img src={empty} alt='Aly' className='w-full' />

			{component}
		</div>
	)
}

export default React.memo(Empty)
