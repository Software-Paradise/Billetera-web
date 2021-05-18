import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { randomKey } from 'utils'
import { format } from 'date-fns'
import { es, fr, enIN } from 'date-fns/locale'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 * Custom component for datepicker
 * @param {String} label - input's title to print
 * @param {Date} selected - current date selected
 * @param {String} className - css class to be applied to container 'div'
 * @param {String} errorMessage - error to print
 * @param {String} autoComplete - show sugested text on input field
 * @param {Func} inputRef - from react form hooks, must be used for validation
 * @param {String} idField - for the current field id to label
 * @param {String} placeholder - print a hint to user
 * @param {Boolean} afterAnother - print the input after the label
 * @param {...any} rest - others props for react-datepicker
 * @returns {React.FunctionComponent}
 */
function DateField({
	label = '',
	selected = null,
	className = '',
	errorMessage = '',
	autoComplete = 'off',
	inputRef = null,
	idField = randomKey(),
	placeholder = '',
	afterAnother = false,
	...rest
}) {
	const { code } = useSelector(selectLanguage)

	const locale = () => {
		switch (code) {
			case 'es':
				return es

			case 'en':
				return enIN

			case 'fr':
				return fr

			default:
				return enIN
		}
	}

	return (
		<fieldset
			className={`DateField flex ${
				afterAnother ? 'flex-row items-center' : 'flex-col'
			} ${className}`}>
			{label && (
				<label
					htmlFor={idField}
					className='text-yellow-400 text-base font-semibold m-1 cursor-pointer'>
					{label}
				</label>
			)}

			<div className='flex p-0 bg-gray-900 rounded-lg focus-within:bg-gray-800 focus-within:border-yellow-400 hover:bg-gray-800 text-gray-200 border border-gray-600'>
				<DatePicker
					id={idField}
					className='bg-transparent w-full px-2 text-sm'
					selected={selected}
					value={
						selected
							? format(selected, `d / MMMM / yyyy`, {
									locale: locale(),
							  })
							: null
					}
					locale={locale()}
					showYearDropdown
					showMonthDropdown
					ref={inputRef}
					autoComplete={autoComplete}
					placeholderText={placeholder}
					{...rest}
				/>
			</div>
			{errorMessage && (
				<p className='text-red-600 mt-1 font-light text-sm'>
					{errorMessage}
				</p>
			)}
		</fieldset>
	)
}

export default React.memo(DateField)
