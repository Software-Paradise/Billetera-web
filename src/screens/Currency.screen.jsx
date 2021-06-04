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
		<section
			name='CurrencyScreen'
			className='CurrencyScreen xl:min-h-screen'>
			<h2 className='text-gray-200 text-4xl absolute top-11 left-11'>
				<Title
					title={currencyScreen.title}
					highlight={['AlyPay']}
					highlightStyle='font-bold'
				/>
			</h2>
			<article className='flex flex-col relative justify-center items-center'>
				<div className='grid gap-8 px-2 md:px-7 xl:px-11 absolute'>
					<div className='flex items-center bg-gray-900 border-4 border-yellow-400'>
						<img
							alt='Alycoin'
							src={ALY}
							className='h-32 xl:h-24 p-2'
						/>
						<div className='grid h-32 xl:h-auto py-4 xl:p-0 md:flex md:flex-1 items-center text-center'>
							<p className='text-yellow-400 text-4xl md:text-5xl font-bold'>
								Alycoin
							</p>
							<span className='hidden md:block text-yellow-400 text-xl font-light px-1'>
								|{' '}
							</span>
							<p className='text-gray-200 text-xl md:text-3xl xl:text-2xl font-light'>
								{currencyScreen.badge}
							</p>
						</div>
					</div>
					<p className='Info p-7 text-gray-200 font-normal rounded-lg'>
						<Title
							title={currencyScreen.info.text}
							highlight={currencyScreen.info.highlight}
							highlightStyle='font-bold'
						/>
					</p>
				</div>
			</article>
			<article className='flex flex-col min-h-screen'>
				<h2
					className='block text-gray-200 text-2xl md:text-5xl xl:text-4xl 
				md:pb-12 pt-40 md:pt-56 xl:pt-14 px-4 xl:px-11 xl:mx-16 text-center flex-1'>
					<Title
						title={currencyScreen.cryptoTitle.text}
						highlight={currencyScreen.cryptoTitle.highlight}
						highlightStyle='font-bold text-yellow-400'
						className='inline-block'
					/>
				</h2>
				<div className='xl:flex-1 pb-11 md:pb-24 xl:pb-11'>
					<Exhibitor
						elements={elementsTop}
						twTitles='text-yellow-400 text-xl md:text-3xl'
					/>
					<Exhibitor
						elements={elementsBottom}
						twTitles='text-yellow-400 text-xl md:text-3xl'
					/>
				</div>
			</article>
		</section>
	)
}

export default React.memo(Currency)
