//react import
import React from 'react'
import { HashRouter } from 'react-router-dom'
//import routes
import AppRoutes from 'app.routes'
//component imports
import { AppStartup } from 'modules/customs'

function App() {
	return (
		<>
			<HashRouter>
				<AppStartup>
					<AppRoutes />
				</AppStartup>
			</HashRouter>
		</>
	)
}

export default App
