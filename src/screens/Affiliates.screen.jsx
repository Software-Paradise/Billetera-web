//react import
import React from 'react'
//component imports
import { ImagePuzzle, Title } from 'modules/customs'
//language imports
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
//image imports
import {
	modelo,
	teen,
	almacenAN,
	arthurs,
	colon,
	patio,
	pena,
	ledezma,
	Novo,
} from '../assets'

function Affiliates() {
	const { affiliatesScreen } = useSelector(selectLanguage)

	return (
		<section
			name='AffiliatesScreen'
			style={{ minHeight: '40rem' }}
			className='AffiliatesScreen h-auto'>
			<div className='flex absolute z-20 bottom-0 left-0 w-full md:w-2/4'>
				<img
					alt='modelo'
					style={{ left: '-5%' }}
					className='absolute bottom-0'
					src={modelo}
				/>
			</div>
			<article className='flex-1 flex flex-col relative justify-items-start'>
				<h2 className='text-gray-800 text-4xl pt-11 px-11'>
					<Title
						title={affiliatesScreen.title.text}
						highlight={affiliatesScreen.title.highlight}
						highlightStyle='font-bold'
					/>
				</h2>
				<p className='text-gray-800 text-xl pt-11 px-11'>
					<Title
						title={affiliatesScreen.content.text}
						highlight={affiliatesScreen.content.highlight}
						highlightStyle='font-bold'
					/>
				</p>
			</article>
			<article
				style={{ minWidth: '50vw' }}
				className='PuzzleContainer flex-1 flex items-center justify-center py-14 pb-64 xl:p-0 h-screen'>
				<ImagePuzzle
					className='h-auto'
					images={[
						{
							image: teen,
							bgColor: 'bg-blueGray-900',
							expand: { time: 5 },
						},
						{
							image: almacenAN,
							bgColor: 'bg-gray-200',
							expand: { time: 5 },
						},
						{
							image: Novo,
							bgColor: 'bg-black',
							expand: { time: 5 },
						},
						{
							image: arthurs,
							bgColor: 'bg-gray-200',
							expand: { time: 5 },
						},
						{
							image: colon,
							bgColor: 'bg-blue-900',
							expand: { time: 5 },
						},
						{
							image: patio,
							bgColor: 'bg-gray-200',
							expand: { time: 5 },
						},
						{
							image: pena,
							bgColor: 'bg-amber-900',
							expand: { time: 5 },
						},
						{
							image: ledezma,
							bgColor: 'bg-yellow-500',
							expand: { time: 5 },
						},
					]}
				/>
			</article>
		</section>
	)
}

export default React.memo(Affiliates)
