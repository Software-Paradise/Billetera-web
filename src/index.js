//react import
import React from 'react'
import ReactDOM from 'react-dom'
//style import
import './index.css'
//app import
import App from './App'
//redux and store imports
import { store } from './app/store'
import { Provider } from 'react-redux'
//serviceworker
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.register()
