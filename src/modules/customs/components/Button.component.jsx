import React, { useEffect, useState } from 'react'

/**
 * CUstom component for button
 * @param {String} label - text showing on button
 * @param {String} className - class name for custom utilities -width won't overwrite
 * @param {String} variant - type of button. Can be 'filled', 'outline' & 'text'
 * @param {Boolean} disabled - current state for the button
 * @param {Function} onClick - event function
 * @param {Object} children - children must be a react icon component
 * @param {Object} rest - others props for button tag
 * @returns {React.FunctionComponent}
 */
const Button = ({
	label = '',
	className = '',
	variant = '',
	disabled = false,
	onClick = () => {},
	children = null,
	...rest
}) => {
	const [baseStyle, setBaseStyle] = useState('')
	const [hoverStyle, setHoverStyle] = useState('')
	const [labelStyle, setLabelStyle] = useState('')

	useEffect(() => {
		switch (variant) {
			case 'filled':
				setBaseStyle('bg-yellow-400 text-base')
				setHoverStyle('hover:bg-yellow-500 active:bg-yellow-600')
				setLabelStyle('text-gray-900')
				break

			case 'outline':
				setBaseStyle(
					'bg-transparent border border-yellow-600 text-base'
				)
				setHoverStyle('hover:border-yellow-600 active:bg-transparent')
				setLabelStyle(
					'text-yellow-400 group-hover:text-gray-900 active:text-yellow-600'
				)
				break

			case 'text':
				setBaseStyle('text-base')
				setHoverStyle('')
				setLabelStyle(
					'text-yellow-400 hover:text-yellow-500 active:text-yellow-600'
				)
				break

			default:
				setBaseStyle('normal-case text-sm')
				setHoverStyle('')
				setLabelStyle(
					'text-gray-200 hover:text-gray-300 active:text-gray-400'
				)
				break
		}
	}, [variant])

	return (
		<button
			className={`Button group uppercase ${baseStyle} rounded-3xl flex flex-row py-1 px-2 items-center ${
				children && label ? 'justify-between' : 'justify-center'
			} ${
				disabled ? '' : hoverStyle
			} focus:outline-none disabled:opacity-40 hover:text-gray-900 active:text-gray-200 ${className}`}
			onClick={onClick}
			disabled={disabled}
			{...rest}>
			{children ? (
				<i
					className={
						label
							? 'transition duration-100 transform group-hover:text-gray-900 group-hover:-translate-x-2 pl-2 pr-2'
							: ''
					}>
					{children}
				</i>
			) : null}
			{label && (
				<span
					className={`truncate ${labelStyle} font-semibold ${
						children ? 'mr-2' : ''
					}`}>
					{label}
				</span>
			)}
		</button>
	)
}

export default React.memo(Button)
