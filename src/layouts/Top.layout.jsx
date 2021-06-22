import React from 'react'
//component import
import { NavBar, NavLink } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//icon import
import { FaHome } from 'react-icons/fa'

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
		{ label: navBar.navLinks.contact, to: 'Footer' },
	]
	return (
		<div
			style={{ height: 'inherit', minHeight: 'inherit' }}
			className='TopLayout flex flex-col'>
			<NavBar className='' links={links} />
			<NavLink
				id='topScroll'
				icon={<FaHome />}
				className='fixed bg-yellow-400 text-gray-900 z-50
				flex justify-center p-2 w-14 text-3xl right-0 top-8 rounded-l-full'
				to='TopScreen'
				duration={400}
			/>
			{children}
		</div>
	)
}

export default React.memo(Top)
