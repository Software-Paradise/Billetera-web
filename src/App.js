import AppRoutes from 'app.routes'
import { AppLoader, AppStartup, Notification } from 'modules/customs'
import React from 'react'
import { HashRouter } from 'react-router-dom'

function App() {
	return (
		<>
			<HashRouter>
				<AppStartup>
					<AppRoutes />
				</AppStartup>
			</HashRouter>
			<AppLoader />
			<Notification />
		</>
	)
}

export default App
