//react import
import React from 'react'
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll,
	scrollSpy,
	scroller,
} from 'react-scroll'
//assets import
import { logo } from 'assets'
//component imports
import NavLink from './NavLink.component'

/**
 *
 * @param {*} param0
 * @returns
 */
const NavBar = ({ links = [] }) => {
	return (
		<section className='NavBar bg-gray-900 md:flex py-5'>
			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className='w-64 mx-auto md:mx-4 mb-5 md:mb-0'
			/>
			<div className='flex sm:flex-row justify-center items-center flex-grow'>
				<nav className='flex max-w-max flex-grow p-0.5 mx-auto sm:mx-4 items-center'>
					<NavLink
						label='AlyPay'
						className='text-yellow-400 font-semibold'
						to='InfoScreen'
						duration={200}
					/>
				</nav>
			</div>
		</section>
	)
}

export default React.memo(NavBar)
