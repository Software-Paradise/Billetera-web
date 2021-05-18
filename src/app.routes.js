//react import
import React from 'react'
import { Route, Switch } from 'react-router-dom'
//view imports
import { Landing } from 'views'

export default function AppRoutes() {
	return (
		<>
			<Switch>
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
		</>
	)
}
