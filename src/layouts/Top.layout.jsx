import React from 'react'
//component import
import { NavBar } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 * Layout to print the top screen
 * @param children - children will be placed under the navbar
 * @returns {React.FunctionComponent}
 */
function Top({ children }) {
	const { navBar } = useSelector(selectLanguage)

	const links = [
		{ label: navBar.navLinks.alypay, to: 'InfoScreen' },
		{ label: navBar.navLinks.functions, to: 'FunctionsScreen' },
		{ label: navBar.navLinks.currency, to: 'CurrencyScreen' },
		{ label: navBar.navLinks.perks, to: 'PerksScreen' },
		{ label: navBar.navLinks.ecommerce, to: 'EcommerceScreen' },
		{ label: navBar.navLinks.afilliates, to: 'AffiliatesScreen' },
	]
	return (
		<div className='TopLayout min-h-screen flex flex-col'>
			<NavBar links={links} />
			{children}
		</div>
	)
}

export default React.memo(Top)
