//react import
import React from 'react'
import { Link } from 'react-scroll'

/**
 *
 * @param {String} label - text for the link to show
 * @param {String} to - name of the component to scroll to
 * @param {String} className - for more custom styles
 * @param {Number} duration - time on millisecons to reach destiny
 * @param {React.Component} icon - if icon is given
 * @returns {React.FunctionComponent}
 */
const NavLink = ({
	label = '',
	to = '',
	className = '',
	duration = 300,
	icon = null,
}) => {
	return (
		<Link
			className={`NavLink ${className}`}
			to={to}
			smooth={true}
			duration={duration}>
			{label && <span>{label}</span>}
			{icon}
		</Link>
	)
}

export default React.memo(NavLink)
