//react import
import React from 'react'
//icon import
import { FaHome } from 'react-icons/fa'
//assets import
import { logo } from 'assets'
//component imports
import NavLink from './NavLink.component'
//util imports
import { randomKey } from 'utils'

/**
 *Nav bar on top of the first screen
 * @param {Array} links - array of objects, each of them has a "label" key and a "to" key
 * @returns {React.FunctionComponent}
 */
const NavBar = ({ links = [] }) => {
	const rkey = randomKey()
	return (
		<section className='NavBar'>
			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className='w-64 mx-auto md:mx-4'
			/>
			<div className='hidden mr-16 justify-end items-center overflow-x-auto'>
				{links.map(({ label, to }, index) => (
					<NavLink
						label={label}
						to={to}
						duration={200}
						key={`${rkey}_${index}`}
					/>
				))}
			</div>
			<NavLink
				id='topScroll'
				icon={<FaHome />}
				className='fixed bg-yellow-400 text-gray-900
				flex justify-center p-2 w-14 text-3xl right-0 top-8 rounded-l-full'
				to='TopScreen'
				duration={150}
			/>
		</section>
	)
}

export default React.memo(NavBar)
