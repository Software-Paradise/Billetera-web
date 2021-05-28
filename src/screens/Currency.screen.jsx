//react import
import React from 'react'
//component imports
import { Exhibitor, Title } from 'modules/customs'
//icon imports
import { BTC, DASH, DOGE, ETH, LTC, USDT, ALY } from '../assets/index'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

function Currency() {
	//language selector
	const { currencyScreen } = useSelector(selectLanguage)

	//cyptos in exhibitor
	const elementsTop = [
		{ image: BTC, title: 'Bitcoin' },
		{ image: ETH, title: 'Ethereum' },
		{ image: LTC, title: 'Litecoin' },
	]
	const elementsBottom = [
		{ image: DASH, title: 'Dash' },
		{ image: USDT, title: 'Tether' },
		{ image: DOGE, title: 'Dogecoin' },
	]
	return (
		<section name='CurrencyScreen' className='CurrencyScreen min-h-screen'>
			<article>
				<Title
					title={currencyScreen.title}
					highlight={['AlyPay']}
					highlightStyle='font-bold'
					className='text-gray-200 absolute top-11 left-11'
				/>
				<div className='grid gap-8 px-5 xl:px-24 absolute'>
					<div className='flex items-center bg-gray-900 border-4 border-yellow-400'>
						<img alt='Alycoin' src={ALY} className='h-24 p-2' />
						<p className='text-yellow-400 text-4xl font-bold'>
							Alycoin
						</p>
						<span className='text-yellow-400 text-xl font-light px-4'>
							|{' '}
						</span>
						<p className='text-gray-200 text-xl font-light'>
							{currencyScreen.badge}
						</p>
					</div>
					<Title
						title={currencyScreen.info.text}
						highlight={currencyScreen.info.highlight}
						highlightStyle='font-bold'
						className='p-7 text-gray-200 font-normal rounded-lg'
					/>
				</div>
			</article>
			<article>
				<Title
					title={currencyScreen.cryptoTitle.text}
					highlight={currencyScreen.cryptoTitle.highlight}
					highlightStyle='font-bold text-yellow-400'
					className='text-gray-200 pt-10 px-11 mx-16 text-center flex-1'
				/>
				<div className='flex-1 pb-11'>
					<Exhibitor
						elements={elementsTop}
						twTitles='text-yellow-400 text-xl'
					/>
					<Exhibitor
						elements={elementsBottom}
						twTitles='text-yellow-400 text-xl'
					/>
				</div>
			</article>
		</section>
	)
}

export default React.memo(Currency)
