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
	background,
	logo,
	powered,
	alyCoin,
	empty,
	cellphones,
	phone1,
	phone2,
	phone3,
	phone4,
	phone5,
	imagen1,
	imagen2,
	imagen3,
	imagen4,
	imagen5,
} from '../assets'

function Affiliates() {
	const { affiliatesScreen } = useSelector(selectLanguage)
	return (
		<section
			name='AffiliatesScreen'
			className='AffiliatesScreen min-h-screen'>
			<div className='flex absolute bottom-0 left-0 w-full md:w-2/4'>
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
				className='flex-1 flex items-center justify-center py-14 md:p-0 md:min-h-screen'>
				<ImagePuzzle
					style={{ width: '90%' }}
					columns={3}
					rows={3}
					skip={1}
					images={[
						{
							image: teen,
							bgColor: 'bg-blueGray-900',
							expand: true,
						},
						{
							image: almacenAN,
							bgColor: 'bg-gray-200',
							expand: true,
						},
						{ image: Novo, bgColor: 'bg-black', expand: true },
						{
							image: arthurs,
							bgColor: 'bg-gray-200',
							expand: true,
						},
						{ image: colon, bgColor: 'bg-blue-900', expand: true },
						{ image: patio, bgColor: 'bg-gray-200', expand: true },
						{ image: pena, bgColor: 'bg-amber-900', expand: true },
						{
							image: ledezma,
							bgColor: 'bg-yellow-500',
							expand: true,
						},
						
						{ image: logo, bgColor: '', expand: true },
						{ image: background, bgColor: '', expand: true },
						{ image: powered, bgColor: '', expand: true },
						{ image: alyCoin, bgColor: '', expand: true },
						{ image: empty, bgColor: '', expand: true },
						{ image: cellphones, bgColor: '', expand: true },

						{ image: phone1, bgColor: '', expand: true },
						{ image: phone2, bgColor: '', expand: true },
						{ image: phone3, bgColor: '', expand: true },
						{ image: phone4, bgColor: '', expand: true },
						{ image: phone5, bgColor: '', expand: true },
						{ image: imagen1, bgColor: '', expand: true },
					]}
					className='mb-14 md:m-0'
				/>
			</article>
		</section>
	)
}

export default React.memo(Affiliates)
