//react import
import React from 'react'
//assets import
import { logo } from 'assets'

const NavBar = () => {
	return (
		<section className='NavBar bg-gray-900 md:flex py-5'>
			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className='w-64 mx-auto md:mx-4 mb-5 md:mb-0'
			/>
			<div className='flex sm:flex-row justify-center items-center flex-grow'>
				<nav className='flex text-white max-w-max flex-grow p-0.5 mx-auto sm:mx-4 items-center'>
					links
				</nav>
			</div>
		</section>
	)
}

export default React.memo(NavBar)
