import { ListDetailLayout } from 'layouts'
import { selectWallets, WalletList, WalletTabs } from 'modules/wallets'
import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Authenticated Home View
 * @returns {React.FunctionComponent}
 */
function HomeView() {
	const { currentWallet } = useSelector(selectWallets)

	return (
		<ListDetailLayout
			className='HomeView'
			list={<WalletList className='p-2 max-h-full' />}
			detail={<WalletTabs className='h-full max-h-full' />}
			selected={currentWallet}
		/>
	)
}

export default React.memo(HomeView)

/* Tabs overflow example */
/* 
				<Tabs
					className='px-2 h-full max-h-full'
					titles={['Tab 1', 'Tab 2']}
					tabs={[
						<div className='grid gap-2 grid-rows-2 h-full overflow-hidden'>
							<Table
								label='Tabla'
								titles={['Name', 'Lastname']}
								allowPerPage={[10]}
								data={[
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
								]}
								placeholder='Search in table'
								numerable
								className='px-2 py-0'
							/>
							<Table
								label='Tabla'
								titles={['Name', 'Lastname']}
								allowPerPage={[10]}
								data={[
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
									{ a1: 'Fulanito', a2: 'Pérez' },
								]}
								placeholder='Search in table'
								numerable
								className='px-2 py-0'
							/>
						</div>,
					]}
				/>
 */
