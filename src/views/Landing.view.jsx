//react import
import React from 'react'
//component import
import {
	Button,
	SelectLanguage,
	TextField,
	TextGroup,
	BottomBar,
} from 'modules/customs'
//redux import
import { useSelector } from 'react-redux'
//utils
import { selectLanguage } from 'utils/language.util'
//screen imports
import {
	Affiliates,
	Currency,
	Ecommerce,
	Functions,
	Info,
	Perks,
	Top,
} from '../screens'

/**
 * Public Login View
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
			<BottomBar />
		</main>
	)
}

export default React.memo(Landing)
