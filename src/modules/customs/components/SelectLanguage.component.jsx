import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, selectLanguage } from 'utils/language.util'
import { Select } from '..'

/**
 * Custom component for select a lenguage
 * @param {String} className - style to be applied on 'div' wrapper
 * @param {Number} zoom - by default '1'
 * @param {Boolean} hideText - to hide the right text
 * @param {Boolean} afterAnother - print the input after the label
 * @returns {React.FunctionComponent}
 */
function SelectLanguage({
	className = '',
	zoom = 1,
	hideText = false,
	afterAnother = false,
}) {
	const { topScreen, code, available } = useSelector(selectLanguage)
	const dispatch = useDispatch()

	return (
		<div
			className={`SelectLanguage flex ${
				afterAnother ? 'flex-row items-center' : 'flex-col'
			} ${className}`}
			style={{ zoom }}>
			{!hideText && (
				<span className='text-gray-300 m-1 mr-2 font-semibold'>
					{topScreen.languageSelect}
				</span>
			)}

			<Select
				value={code}
				onChange={event =>
					dispatch(changeLanguage(event?.target?.value))
				}
				options={available.map(({ lang, code }) => {
					return { label: lang, value: code }
				})}
				className='min-w-min w-full'
			/>
		</div>
	)
}

export default React.memo(SelectLanguage)
