//react import
import React from 'react'
//util imports
import { randomKey } from 'utils'
//component imports
import { VerticalCard } from 'modules/customs'
//icon imports
import { FiRotateCw, FiShoppingCart } from 'react-icons/fi'
import { BiTransfer } from 'react-icons/bi'

/**
 *component to show vertical cards in a row
 * @param {String} className - custom tailwind styles
 * @returns {React.FunctionComponent}
 */
const CardDisplayer = ({ className = '' }) => {
	const rkey = randomKey()
	return (
		<section className={`CardDisplayer ${className}`}>
			<VerticalCard
				icon={<FiRotateCw />}
				content='Recargas'
				twIcon='text-6xl pb-12 pt-20'
				twContent='text-gray-100 text-xl font-bold'
				twButton=''
			/>
			<VerticalCard
				icon={<FiShoppingCart />}
				content='Compra AlyCoin'
				twIcon='text-6xl pb-12 pt-20'
				twContent='text-gray-100 text-xl font-bold'
			/>
			<VerticalCard
				icon={<BiTransfer />}
				content='Transferencia'
				twIcon='text-6xl pb-12 pt-20'
				twContent='text-gray-100 text-xl font-bold'
			/>
		</section>
	)
}

export default React.memo(CardDisplayer)
