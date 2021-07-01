//react import
import React, { useEffect, useState } from 'react'
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
const NavBar = ({ links = [], className = '' }) => {
	const rkey = randomKey()

	//state to check if the page is out of the top screen
	const [scrolled, setScrolled] = useState(false)

	//function to handle scrolling through window
	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 500) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<section
			className={`NavBar z-50 fixed ${className} ${
				scrolled && 'bg-opacity-50 shadow-none'
			}`}>
			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className={`w-40 mx-auto md:mx-4 transition duration-500 ${
					scrolled && 'opacity-0'
				}`}
			/>
			<div className='hidden mr-16 justify-end items-center overflow-x-auto'>
				{links.map(({ label, to }, index) => (
					<NavLink
						label={label}
						to={to}
						duration={400}
						key={`${rkey}_${index}`}
					/>
				))}
			</div>
		</section>
	)
}

export default React.memo(NavBar)
