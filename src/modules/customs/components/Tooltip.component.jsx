import React from 'react'

/**
 * Custom component to show a Tooltip when hover
 * @param {String} text - to print when hover
 * @param {String} position - position of the Tooltip
 * @param {String} className - css styles applied to 'div' container
 * @param {React.FunctionComponent} children - component to be printed
 * @returns {React.FunctionComponent}
 */
const Tooltip = ({
	text = '',
	position = 'right',
	className = '',
	children = null,
}) => {
	return (
		<div className={`Tooltip tooltip w-full ${className}`}>
			{children}
			<span
				className={`tooltiptext ${position} min-w-max pointer-events-none`}>
				{text}
			</span>
		</div>
	)
}

export default React.memo(Tooltip)
