//react import
import React from 'react'
//layout import
import { TopLayout } from 'layouts'

function Top() {
	return (
		<div className='TopScreen'>
			<TopLayout>
				<div></div>
			</TopLayout>
		</div>
	)
}

export default React.memo(Top)
