import { logo } from 'assets'
import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalStorage } from 'utils'
import { changeLanguage } from 'utils/language.util'
import { AppStarted, selectLoader } from 'utils/loader.util'

/**
 * Custom component for start application
 * @param {String} className - style to be applied on 'div' wrapper inside 'main' AppStartup
 * @param {React.FunctionComponent} children - to render when app is started
 * @returns {React.FunctionComponent}
 */
function AppStartup({ className = '', children }) {
	const dispatch = useDispatch()
	const { isStarting } = useSelector(selectLoader)

	useEffect(() => {
		/* Check the language code in local storage & store it by default in redux store */
		const language = getLocalStorage('language')
		dispatch(changeLanguage(language ? language : 'en'))

		/* Make the app already started */
		dispatch(AppStarted())
		return () => {}
	}, [dispatch])

	return (
		<>
			{isStarting ? (
				<main className='AppStartup h-screen flex flex-col justify-center items-center'>
					<div
						className={`flex-1 w-full flex flex-col justify-center items-center bg-black rounded-lg m-2 px-8 py-16 ${className}`}>
						<img
							src={logo}
							alt='AlyPay - El futuro ¡Ahora!'
							className='w-64 md:w-80 lg:w-96 pb-8'
						/>

						<Loader
							type='Grid'
							color='#D97706'
							height={100}
							width={100}
						/>
					</div>
				</main>
			) : (
				children
			)}
		</>
	)
}

export default React.memo(AppStartup)
