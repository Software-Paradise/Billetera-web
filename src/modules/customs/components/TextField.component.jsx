import React, { useRef, useState } from 'react'
import { FiEye, FiEyeOff, FiSearch } from 'react-icons/fi'
import { randomKey } from 'utils'

/**
 * Custom component with input+label and type reusability
 * @param {String} label - text title of input
 * @param {String} type - any other type than password will automatically turn to text
 * @param {String} className - class name for custom utilities
 * @param {String} errorMessage - message of input error
 * @param {String} autoComplete - off or on
 * @param {Function} inputRef - for util validation and stuff, will be override by register
 * @param {Object} register - for react-hook-form ^7
 * @param {String} idField - for the current field id to label
 * @param {Function} onSearch - for manual search on icon
 * @param {Boolean} afterAnother - print the input after the label
 * @param {...any} rest - others props for input tag
 * @returns {React.FunctionComponent}
 */
function TextField({
	label = '',
	type = 'text',
	className = '',
	errorMessage = '',
	autoComplete = 'off',
	inputRef = null,
	register = null,
	idField = randomKey(),
	onSearch = () => {},
	afterAnother = false,
	...rest
}) {
	const [showPassword, setShowPassword] = useState(false)
	const currentRef = useRef()
	const roundedStyle = type === 'search' ? 'rounded-3xl' : 'rounded-lg'

	const handleSearch = () => {
		if (inputRef) {
			if (inputRef?.current?.value) onSearch(inputRef?.current?.value)

			inputRef?.current?.focus()
		} else {
			if (currentRef?.current?.value) onSearch(currentRef?.current?.value)

			currentRef?.current?.focus()
		}
	}

	return (
		<fieldset
			className={`TextField flex ${
				afterAnother ? 'flex-row items-center' : 'flex-col'
			} ${className}`}>
			{
				// if label property is passed, render the label
				label && (
					<label
						htmlFor={idField}
						className='text-yellow-400 font-semibold m-1 cursor-pointer'>
						{label}
					</label>
				)
			}

			{/* ...rest assing other props passed into component invoke */}

			<div
				className={`flex flex-row p-0.5 bg-gray-900 focus-within:bg-gray-800 focus-within:border-yellow-400 hover:bg-gray-800 text-gray-200 border border-gray-600 ${roundedStyle}`}>
				<input
					id={idField}
					className='bg-transparent w-full px-2 text-sm'
					type={
						type === 'password'
							? showPassword
								? 'text'
								: 'password'
							: type
					}
					ref={inputRef ? inputRef : currentRef}
					{...register}
					autoComplete={autoComplete}
					{...rest}
				/>
				{
					//if type is password then show this icon
					type === 'password' ? (
						<i
							className='p-0.5 text-yellow-400 cursor-pointer'
							onClick={_ => setShowPassword(!showPassword)}>
							{showPassword ? <FiEyeOff /> : <FiEye />}
						</i>
					) : type === 'search' ? (
						<i
							className='p-0.5 text-yellow-400 cursor-pointer'
							onClick={handleSearch}>
							<FiSearch />
						</i>
					) : null
				}
			</div>
			{errorMessage && (
				<p className='text-red-600 mt-1 font-light text-sm'>
					{errorMessage}
				</p>
			)}
		</fieldset>
	)
}

export default React.memo(TextField)
