//react import
import { Title } from 'modules/customs'
import React from 'react'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Perks() {
	const { perksScreen } = useSelector(selectLanguage)
	return (
		<div name='PerksScreen' className='PerksScreen min-h-screen'>
			<h2 className='text-gray-200 text-4xl pb-11'>
				<Title title={perksScreen.title} />
			</h2>
			<div className='hidden md:flex relative flex-1 rounded-lg shadow-lg'>
				<div
					style={{ width: '51%' }}
					className='grid flex-1 p-11 gap-8 absolute h-full'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						{perksScreen.table.leftSide.title}
					</p>
					<p className='text-gray-200 text-2xl px-11'>
						{perksScreen.table.leftSide.content}
					</p>
				</div>
				<div className='grid absolute right-0 w-2/4 h-full flex-1 p-11 rounded-lg shadow-xl bg-gray-900 gap-8'>
					<p className='text-3xl text-center text-yellow-400 font-bold'>
						{perksScreen.table.rightSide.title}
					</p>
					<p className='text-gray-200 text-2xl px-11'>
						{perksScreen.table.rightSide.content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(Perks)
