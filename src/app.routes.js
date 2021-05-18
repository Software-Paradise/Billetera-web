import { selectAuth } from 'modules/authentication'
import { Navbar } from 'modules/customs'
import { useWallets } from 'modules/wallets'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { LoginView, RegisterView, HomeView } from 'views'

export default function AppRoutes() {
	const auth = useSelector(selectAuth)
	const [isLogin, setIsLogin] = useState(false)
	const { getWalletList } = useWallets()
	const history = useHistory()

	/* Prevent the default browser go back */
	window.addEventListener('popstate', _ => {
		history.go(1)
	})

	useEffect(() => {
		if (auth.email !== '' && auth.username !== '') {
			getWalletList()
			setIsLogin(true)
		} else {
			setIsLogin(false)
		}
	}, [auth])

	return (
		<>
			{isLogin && <Navbar />}

			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>

				<Route exact path='/login'>
					{!isLogin ? <LoginView /> : <Redirect to='/home' />}
				</Route>

				<Route exact path='/register'>
					{!isLogin ? <RegisterView /> : <Redirect to='/home' />}
				</Route>

				<Route exact path='/home'>
					{isLogin ? <HomeView /> : <Redirect to='/login' />}
				</Route>
			</Switch>
		</>
	)
}
