//react import
import React from 'react'
//layout import
import { BottomLayout } from 'layouts'

function Bottom() {
	return (
		<div className='TopScreen'>
			<BottomLayout>
				<div>Bottom screen</div>
			</BottomLayout>
		</div>
	)
}

export default React.memo(Bottom)