//react import
import React from 'react'
//redux import
import { useSelector } from 'react-redux'
//utils
import { selectLanguage } from 'utils/language.util'
//screen imports
import {
	Affiliates,
	Bottom,
	Currency,
	Ecommerce,
	Functions,
	Info,
	Perks,
	Top,
} from '../screens'

/**
 * Landind view
 * @returns {React.FunctionComponent}
 */
function Landing() {
	const { loginView } = useSelector(selectLanguage)

	return (
		<main className='LandingView'>
			<Top />
			<Info />
			<Functions />
			<Currency />
			<Perks />
			<Ecommerce />
			<Affiliates />
			<Bottom />
		</main>
	)
}

export default React.memo(Landing)
