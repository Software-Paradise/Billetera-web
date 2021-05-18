import React from 'react'

/**
 * Layout to print a list and detail
 * @param {String} className - style to be appied on 'main' wrapper
 * @param {React.FunctionComponent} list - to print on left side
 * @param {React.FunctionComponent} detail - to print on right side
 * @param {Boolean} selected - to print the right side component
 * @returns {React.FunctionComponent}
 */
function ListDetailLayout({
	className = '',
	list = null,
	detail = null,
	selected = false,
}) {
	return (
		<main
			className={`ListDetailLayout container flex-grow mx-auto overflow-hidden ${className}`}>
			<section
				className='flex flex-col p-1 h-full lg:p-2 lg:grid lg:gap-2'
				style={{
					gridTemplateColumns: '24rem 1fr',
				}}>
				<article className='bg-black rounded-lg overflow-hidden hidden lg:block'>
					{list}
				</article>

				<article className='bg-black rounded-lg overflow-hidden hidden lg:block'>
					{detail}
				</article>

				{selected ? (
					<article className='bg-black rounded-lg h-full overflow-hidden block lg:hidden'>
						{detail}
					</article>
				) : (
					<article className='bg-black rounded-lg h-full overflow-hidden block lg:hidden'>
						{list}
					</article>
				)}
			</section>
		</main>
	)
}

export default React.memo(ListDetailLayout)
