import React from 'react'
//component import
import { NavBar } from 'modules/customs'

/**
 * Layout to print the top screen
 * @param
 * @returns {React.FunctionComponent}
 */
function Top({ children }) {
	return (
		<div className='TopLayout min-h-screen'>
			<NavBar />
			{children}
		</div>
	)
}

export default React.memo(Top)
