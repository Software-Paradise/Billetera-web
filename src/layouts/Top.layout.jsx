import React from 'react'
//component import
import { NavBar } from 'modules/customs'

/**
 * Layout to print the top screen
 * @param
 * @returns {React.FunctionComponent}
 */
function Top({ children }) {
	const links = [
		{ label: 'AlyPay', to: 'InfoScreen' },
		{ label: 'Funciones', to: 'FunctionsScreen' },
		{ label: 'Moneda', to: 'CurrencyScreen' },
		{ label: 'Beneficios', to: 'PerksScreen' },
		{ label: 'E-commerce', to: 'EcommerceScreen' },
		{ label: 'Comercios', to: 'AffiliatesScreen' },
	]
	return (
		<div className='TopLayout min-h-screen flex flex-col'>
			<NavBar links={links} />
			{children}
		</div>
	)
}

export default React.memo(Top)
