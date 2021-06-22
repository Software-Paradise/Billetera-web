//react import
import React from 'react'
import { Route, Switch } from 'react-router-dom'
//view imports
import { Landing } from 'views'

export default function AppRoutes() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Landing />
				</Route>
				{/* route to test react lyfe cicle */}
				<Route exact path='/xenofixion'>
					<p>hello there</p>
				</Route>
			</Switch>
		</>
	)
}
