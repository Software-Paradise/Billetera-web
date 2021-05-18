import React, { useMemo, useState } from 'react'
import { randomKey } from 'utils'
import { TextField } from '..'

/**
 * Custom component to list
 * @param {String} label - title of the list
 * @param {String} placeholder - user hint to filter
 * @param {Array} data - list to be filtered and printed
 * @param {React.FunctionComponent} View - to print for each list item
 * @param {Function} onFilter - to manage filter, return the item && keyword
 * @param {React.FunctionComponent} Alternative - to print when filtered items return an empty list
 * @param {String} className - to be applied at component wrapper
 * @param {String} itemClassName - to be applied at item component wrapper
 * @param {Function} onSelectedItem - to get the current item when click on it
 * @param {String} prefixItem - key to every item printed on current list
 * @returns {React.FunctionComponent}
 */
function List({
	label = '',
	placeholder = '',
	data = null,
	View = null,
	onFilter = null,
	Alternative = null,
	className = '',
	itemClassName = '',
	onSelectedItem = null,
	prefixItem = randomKey(),
}) {
	/* Keyword to filter table rows */
	const [keyword, setKeyword] = useState('')
	/* const { listView } = useSelector(selectLanguage) */

	/* const listRef = useRef(null)

	const listScroll = ({ top = 0 }) =>
		listRef?.current?.scroll({
			top,
			behavior: 'smooth',
		}) */

	const filteredData = useMemo(() => {
		/* listScroll({}) */
		if (!data) return data
		if (!onFilter) return data

		return data.filter(item => onFilter(item, keyword))
	}, [keyword, data, onFilter])

	return (
		<div className={`List flex flex-col ${className}`}>
			<TextField
				onChange={event => setKeyword(event?.target?.value)}
				value={keyword}
				type='search'
				label={label}
				className='m-2'
				placeholder={placeholder}
			/>

			<div className='overflow-y-auto flex-grow' /* ref={listRef} */>
				{View && filteredData?.length > 0
					? filteredData?.map((item, index) => (
							<View
								key={`${prefixItem}_${index}`}
								item={item}
								className={itemClassName}
								onSelectedItem={onSelectedItem}
							/>
					  ))
					: Alternative && <Alternative />}
			</div>

			{/* {filteredData.length > 3 && (
				<Tooltip
					text={listView.toTop}
					position='left'
					className='max-w-max self-end mx-2'>
					<Button
						type='button'
						className='text-yellow-400 text-2xl'
						onClick={listScroll}>
						<FiArrowUpCircle />
					</Button>
				</Tooltip>
			)} */}
		</div>
	)
}

export default React.memo(List)
