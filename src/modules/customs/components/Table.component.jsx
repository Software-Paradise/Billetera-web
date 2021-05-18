import React, { useMemo, useRef, useState } from 'react'
import { randomKey } from 'utils'
import { TextField, Button, Tooltip, Select } from '..'
import { FiSkipBack, FiSkipForward } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 * Custom component for table
 * @param {String} className - css class to apply at 'div' container
 * @param {Array} titles - for columns headers
 * @param {Array} data - to be printed on table
 * @param {Function} transformer - to transform unordered data to ordered data
 * @param {Array} allowPerPage - to limit the rows per page
 * @param {Boolean} numerable - show or hide number for each row
 * @param {String} numerableTitle - column name for numerable column
 * @param {String} prefixTitle - for custom key on columns titles
 * @param {String} prefixRow - for custom key on every row
 * @param {Boolean} selectable - get the row value when click
 * @param {Function} onSelectedRow - handle the selected row value
 * @param {Function} onFilter - handle the filter text
 * @param {String} label - name of the table to show at top
 * @param {String} placeHolder - text to show a user hint on search
 * @returns {React.FunctionComponent}
 */
function Table({
	className = '',
	titles = [],
	data = null,
	transformer = null,
	allowPerPage = [5, 10, 15, 20],
	numerable = false,
	numerableTitle = '#',
	prefixTitle = randomKey(),
	prefixRow = randomKey(),
	selectable = false,
	onSelectedRow = null,
	onFilter = null,
	label = '',
	placeholder = '',
}) {
	const { tableView } = useSelector(selectLanguage)

	const tableRef = useRef(null)

	/* How many rows will be printed for each page */
	const [perPage, setPerPage] = useState(allowPerPage[0])

	/* Current page */
	const [page, setPage] = useState(1)

	/* Total pages to be printed */
	const [pages, setPages] = useState(1)

	/* Keyword to filter table rows */
	const [keyword, setKeyword] = useState('')

	/* nferior limit for actual page */
	const [inferior, setInferior] = useState(0)

	/* Method to scroll to top when table content change */
	const tableScroll = () =>
		tableRef?.current?.scroll({
			top: 0,
			behavior: 'smooth',
		})

	const filteredData = useMemo(() => {
		if (!data) return data

		const list = onFilter
			? data.filter(item => onFilter(item, keyword))
			: data

		//setting how many pages there are going to be
		const auxPages = list.length > 0 ? Math.ceil(list.length / perPage) : 1
		setPages(auxPages)

		//setting actual page
		if (page > auxPages) setPage(1)

		//setting superior and inferior limits for actual page
		const inf = perPage * page - perPage
		const sup = perPage * page - 1
		setInferior(inf)

		tableScroll()

		const list2 = list.filter((_, index) => index >= inf && index <= sup)

		return transformer ? list2.map(item => transformer(item)) : list2
	}, [perPage, page, keyword, data, onFilter, transformer])

	return (
		<div className={`Table flex flex-col ${className}`}>
			<TextField
				onChange={event => setKeyword(event?.target?.value)}
				value={keyword}
				type='search'
				label={label}
				className='mb-2 justify-between'
				afterAnother
				placeholder={placeholder}
			/>

			<div ref={tableRef} className='overflow-y-auto flex-grow'>
				<table className='border-collapse w-full'>
					<thead>
						<tr>
							{numerable && (
								<th className='p-1 text-left border-b-2 border-yellow-500 text-yellow-400 sticky top-0 pt-0 bg-black'>
									{numerableTitle}
								</th>
							)}

							{titles.map((title, index) => (
								<th
									className='p-1 text-left border-b-2 border-yellow-500 text-yellow-400 sticky top-0 pt-0 bg-black'
									key={`${prefixTitle}_${index}`}>
									{title}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{filteredData?.map((row, index) => (
							<tr
								key={`${prefixRow}_${index}`}
								className={`${
									index % 2 ? 'bg-black' : 'bg-gray-800'
								}${
									selectable
										? ' cursor-pointer hover:bg-gray-600'
										: ''
								}`}
								onClick={
									selectable && row?.hidden
										? () => onSelectedRow(row.hidden)
										: null
								}>
								{numerable && (
									<td className='text-yellow-50 p-1'>
										{index + inferior + 1}
									</td>
								)}
								{Object.keys(row).map(
									(row_key, rk_index) =>
										row_key !== 'hidden' && (
											<td
												className='text-yellow-50 p-1'
												key={`${prefixRow}_${index}_${rk_index}`}>
												{row[row_key]}
											</td>
										)
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='border-t-2 border-yellow-500 mt-1 flex flex-row py-1 justify-between'>
				<fieldset
					className='flex flex-row items-center'
					style={{
						zoom: 0.75,
					}}>
					<label className='text-white mr-1' htmlFor='perPage'>
						{tableView.pp}
					</label>

					<Select
						name='perPage'
						id='perPage'
						options={allowPerPage.map(allow => {
							return {
								label: allow,
								value: allow,
							}
						})}
						value={perPage}
						onChange={event => setPerPage(event?.target?.value)}
					/>
				</fieldset>

				{pages > 1 && (
					<div
						className='flex items-center'
						style={{
							zoom: 0.75,
						}}>
						<Tooltip
							text={tableView.previous}
							position='left'
							className='max-w-max'>
							<Button
								onClick={() => {
									setPage(page === 1 ? 1 : page - 1)
									tableScroll()
								}}
								disabled={page === 1}
								className='text-yellow-400 text-2xl'>
								<FiSkipBack />
							</Button>
						</Tooltip>

						<div className='mx-4'>
							<span className='text-white'>
								{page}/{pages}
							</span>
						</div>

						<Tooltip
							text={tableView.next}
							position='left'
							className='max-w-max'>
							<Button
								onClick={() => {
									setPage(page === pages ? pages : page + 1)
									tableScroll()
								}}
								disabled={page === pages}
								className='text-yellow-400 text-2xl'>
								<FiSkipForward />
							</Button>
						</Tooltip>
					</div>
				)}
			</div>
		</div>
	)
}

export default React.memo(Table)
