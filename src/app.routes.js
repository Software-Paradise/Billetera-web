//react import
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
//view imports
import { Landing } from 'views'

export default function AppRoutes() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Landing />
				</Route>
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</>
	)
}
