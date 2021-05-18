import React from 'react'

/**
 * Layout to print the top screen
 * @param
 * @returns {React.FunctionComponent}
 */
function Bottom({ children }) {
	return <div className='BottomLayout'>{children}</div>
}

export default React.memo(Bottom)
