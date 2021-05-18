import React from 'react'
import ReactDOM from 'react-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

/**
 * Custom component for notifications
 * @returns {React.FunctionComponent}
 */
function Notification() {
	return ReactDOM.createPortal(
		<section className='Notification fixed inset-0 pointer-events-none z-40'>
			<ReactNotification />
		</section>,
		document.getElementById('notification')
	)
}

export default React.memo(Notification)
