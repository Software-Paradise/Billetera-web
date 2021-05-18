import React from 'react'
import copy from 'utils/copy-clipboard.util'
import { FiClipboard } from 'react-icons/fi'
import { Tooltip } from '..'

/**
 * Custom component to print a text with title and secondary text
 * @param {String} label - title to print
 * @param {String} value - text to be printed
 * @param {String} className - to be applied at the wrapper
 * @param {Boolean} copyClipboard - to perform a copy to clipboard when click on value text
 * @param {String} copyHint - text to print on notification when copy is success
 * @param {Boolean} textOverflow - to show a '...' when text is so long
 * @param {String} align - text align
 * @param {String} secondaryText - a span text be printed
 * @param {Boolean} showTooltip - show a tooltip for overflow texts
 * @returns {React.FunctionComponent}
 */
const TextGroup = ({
	label = '',
	value = '',
	className = '',
	copyClipboard = false,
	copyHint = '',
	textOverflow = false,
	align = 'left',
	secondaryText = '',
	showTooltip = false,
}) => {
	const handleClick = () => {
		if (!copyClipboard) return
		copy(value, copyHint)
	}

	const stylePointer = {
		textAlign: align,
		cursor: 'copy',
	}

	const labelComponent = (
		<h3
			style={{ textAlign: align }}
			className={'my-1 text-yellow-400 text-lg font-semibold truncate'}>
			{label}
		</h3>
	)

	const valueComponent = (
		<p
			onClick={handleClick}
			style={copyClipboard ? stylePointer : { textAlign: align }}
			className={`text-gray-200 my-0.5 truncate ${
				copyClipboard ? ' hover:text-blue-400' : ''
			} ${textOverflow ? 'truncate' : ''}`}>
			{copyClipboard && (
				<i className='inline-block'>
					<FiClipboard className='inline-flex mr-1' />
				</i>
			)}

			{value}

			{secondaryText && (
				<span className='text-gray-300'>{secondaryText}</span>
			)}
		</p>
	)

	return (
		<div className={`TextGroup flex flex-col ${className}`}>
			{label && (
				<>
					{showTooltip ? (
						<Tooltip
							text={label}
							position={
								align === 'left'
									? 'right'
									: align === 'center'
									? 'bottom'
									: 'left'
							}
							className={
								align === 'left'
									? 'self-start'
									: align === 'center'
									? 'self-center'
									: 'self-end'
							}>
							{labelComponent}
						</Tooltip>
					) : (
						<>{labelComponent}</>
					)}
				</>
			)}

			{value && (
				<>
					{showTooltip ? (
						<Tooltip
							text={value}
							position={
								align === 'left'
									? 'right'
									: align === 'center'
									? 'top'
									: 'left'
							}
							className={
								align === 'left'
									? 'self-start'
									: align === 'center'
									? 'self-center'
									: 'self-end'
							}>
							{valueComponent}
						</Tooltip>
					) : (
						<>{valueComponent}</>
					)}
				</>
			)}
		</div>
	)
}

export default React.memo(TextGroup)
