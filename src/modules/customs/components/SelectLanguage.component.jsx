import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, selectLanguage } from 'utils/language.util'
import { Select } from '..'

/**
 * Custom component for select a lenguage
 * @param {String} className - style to be applied on 'div' wrapper
 * @param {Number} zoom - by default '1'
 * @param {Boolean} hideText - to hide the right text
 * @returns {React.FunctionComponent}
 */
function SelectLanguage({ className = '', zoom = 1, hideText = false }) {
	const { loginView, code, available } = useSelector(selectLanguage)
	const dispatch = useDispatch()

	return (
		<div
			className={`SelectLanguage flex flex-row items-center ${className}`}
			style={{ zoom }}>
			{!hideText && (
				<span className='text-gray-300 mr-2 font-semibold'>
					{loginView.actions.select}
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
			/>
		</div>
	)
}

export default React.memo(SelectLanguage)
