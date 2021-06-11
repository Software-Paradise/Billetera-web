//react import
import { Title } from 'modules/customs'
import React from 'react'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Perks() {
	const { perksScreen } = useSelector(selectLanguage)
	return (
		<div
			name='PerksScreen'
			style={{ minHeight: '34rem' }}
			className='PerksScreen'>
			<h2 className='absolute left-11 top-11 text-gray-200 text-4xl'>
				<Title title={perksScreen.title} />
			</h2>
			<div className='flex relative flex-1 rounded-lg shadow-lg mx-1 xl:mx-11 mb-5 xl:mb-11 mt-28'>
				<div className='grid absolute p-11 gap-8'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						{perksScreen.table.leftSide.title}
					</p>
					<p className='text-gray-200 text-xl lg:text-3xl xl:text-2xl xl:px-11'>
						{perksScreen.table.leftSide.content}
					</p>
				</div>
				<div
					className='grid absolute p-11 bottom-0 xl:right-0 w-full xl:w-2/4 h-2/4 xl:h-full
				rounded-lg shadow-xl bg-gray-900 gap-8'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						{perksScreen.table.rightSide.title}
					</p>
					<p className='text-gray-200 text-xl lg:text-3xl xl:text-2xl xl:px-11'>
						{perksScreen.table.rightSide.content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(Perks)
