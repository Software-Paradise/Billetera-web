import { logo } from 'assets'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 * Custom component for welcome
 * @param {String} className - style to be applied on 'div' wrapper
 * @returns {React.FunctionComponent}
 */
function Welcome({ className = '' }) {
	const { welcome } = useSelector(selectLanguage)

	return (
		<div
			className={`Welcome flex flex-col items-center justify-center p-2 ${className}`}>
			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className='w-64 md:w-80 lg:w-96 pb-8'
			/>

			<h2 className='text-white text-lg font-semibold'>{welcome}</h2>
		</div>
	)
}

export default React.memo(Welcome)
