import React, { useState } from 'react'
import { randomKey } from 'utils'

/**
 * Custom component for tabs
 * @param {String} className - style to be applied on 'div' wrapper
 * @param {Array} titles - of the tabs
 * @param {String} titlesPrefix - for the key on every tab title
 * @param {Array} tabs - components to be tabbed
 * @param {String} alignment - to justify the titles, can be 'center, 'start' & 'end'
 * @param {Number} defaultTab - current selected tab, by default '0'
 * @returns {React.FunctionComponent}
 */
function Tabs({
	className = '',
	titles = [],
	titlesPrefix = randomKey(),
	tabs = [],
	alignment = 'center',
	defaultTab = 0,
}) {
	const [currentTab, setCurrentTab] = useState(defaultTab)

	return (
		<div className={`Tabs flex flex-col ${className}`}>
			<div
				className={`flex flex-row ${
					alignment === 'start'
						? 'justify-start'
						: alignment === 'end'
						? 'justify-end'
						: 'justify-center'
				}`}>
				<div className='flex flex-row border max-w-max border-yellow-500 rounded-full p-0.5 items-center'>
					{titles.map((title, index) => (
						<button
							key={`${titlesPrefix}_${index}`}
							onClick={() => setCurrentTab(index)}
							className={`navlink focus:outline-none ${
								currentTab === index ? 'navlink-active' : ''
							}`}>
							{title}
						</button>
					))}
				</div>
			</div>

			{tabs[currentTab]}
		</div>
	)
}

export default React.memo(Tabs)
