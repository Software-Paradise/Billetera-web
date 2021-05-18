import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { randomKey } from 'utils'

/**
 * Custom component with input+label and type reusability
 * @param {Array} options - array of objects with label and value keys
 * @param {String} label - text title of input
 * @param {String} className - class name for custom utilities
 * @param {String} errorMessage - message of input error
 * @param {Function} inputRef - for util validation and stuff, will be override by register
 * @param {String} register - for react-hook-form ^7
 * @param {String} placeholder - string to show as placeholder
 * @param {String} idField - for the current field id to label
 * @param {String} optionPrefix - for the current option key
 * @param {Boolean} afterAnother - print the input after the label
 * @param {...any} rest - others props for input tag
 * @returns {React.FunctionComponent}
 */
function Select({
	options = [],
	label = '',
	className = '',
	errorMessage = '',
	inputRef = null,
	register = null,
	placeholder = '',
	idField = randomKey(),
	optionPrefix = randomKey(),
	afterAnother = false,
	...rest
}) {
	return (
		<fieldset
			className={`Select flex ${
				afterAnother ? 'flex-row items-center' : 'flex-col'
			} ${className}`}>
			{
				// if label property is passed, render the label
				label && (
					<label
						htmlFor={idField}
						className='text-yellow-400 text-base font-semibold m-1 cursor-pointer'>
						{label}
					</label>
				)
			}

			{/* ...rest assing other props passed into component invoke */}

			<div className='relative flex items-center group p-0.5 bg-gray-900 focus-within:bg-gray-800 focus-within:border-yellow-400 hover:bg-gray-800 text-gray-200 rounded-lg border border-gray-600'>
				<select
					id={idField}
					className='relative bg-transparent w-full px-2 pr-6 text-sm'
					ref={inputRef}
					{...register}
					{...rest}>
					{placeholder && (
						<option
							className='hidden'
							key='placeholder'
							value=''
							disabled>
							{placeholder}
						</option>
					)}
					{options.map(({ label, value }, index) => (
						<option
							className='bg-gray-900 text-gray-200'
							key={`${optionPrefix}_${index}`}
							value={value}>
							{label}
						</option>
					))}
				</select>
				<i
					className='absolute right-0 top-2/4 transform -translate-x-2 
					pointer-events-none -translate-y-2/4 text-yellow-400 
					transition duration-500 group-hover:-rotate-180'>
					<FiChevronDown />
				</i>
			</div>
			{errorMessage && (
				<p className='text-red-600 mt-1 font-light text-sm'>
					{errorMessage}
				</p>
			)}
		</fieldset>
	)
}

export default React.memo(Select)
