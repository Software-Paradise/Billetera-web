//react import
import React from 'react'
import { Link } from 'react-scroll'

/**
 *
 * @param {*} param0
 * @returns
 */
const NavLink = ({
	label = '',
	to = '',
	className = '',
	duration = 300,
	onCLick = () => {},
	...rest
}) => {
	return (
		<Link
			className={`cursor-pointer ${className}`}
			to={to}
			smooth={true}
			duration={duration}>
			{label}
		</Link>
	)
}

export default React.memo(NavLink)
