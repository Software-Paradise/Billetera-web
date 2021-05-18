import React from 'react'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
import { format } from 'date-fns'
import { es, fr, enIN } from 'date-fns/locale'

/**
 * Custom component for date string
 * @param {String} className - style to be applied on 'span' wrapper
 * @param {Date} date - new Date to be formatter
 * @param {String} dateFormat - format string to be applied on'date'
 * @returns {React.FunctionComponent}
 */
function FormatDate({
	className = '',
	date = null,
	dateFormat = 'd/MMMM/yyyy',
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
		<span className={`FormatDate text-gray-200 ${className}`}>
			{format(date, dateFormat, {
				locale: locale(),
			})}
		</span>
	)
}

export default React.memo(FormatDate)
