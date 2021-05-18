import { logo } from 'assets'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { selectLanguage } from 'utils/language.util'
import { Button, DropDown, SelectLanguage, TextField, Tooltip } from '..'
import { FiArrowLeftCircle, FiLogOut, FiSettings } from 'react-icons/fi'
import { useAuth } from 'modules/authentication'
import { selectWallets, setCurrentWallet } from 'modules/wallets'

/**
 * Custom component for header navigation
 * @param {String} className - style to be applied on 'section' wrapper
 * @returns {React.FunctionComponent}
 */
function Navbar({ className = '' }) {
	const { currentWallet } = useSelector(selectWallets)
	const { navView } = useSelector(selectLanguage)
	const { logout } = useAuth()
	const dispatch = useDispatch()
	const history = useHistory()

	return (
		<section
			className={`Navbar flex ${
				currentWallet !== null
					? 'flex-row items-center justify-between'
					: 'flex-col'
			} sticky top-0 p-0 md:p-1 bg-black z-10 md:flex-row rounded-b-lg ${className}`}>
			{currentWallet !== null && (
				<Tooltip
					text={navView.actions.back}
					className='max-w-max block lg:hidden'>
					<Button
						type='button'
						className='text-yellow-400 text-2xl'
						onClick={() => {
							dispatch(setCurrentWallet(null))
						}}>
						<FiArrowLeftCircle />
					</Button>
				</Tooltip>
			)}

			<img
				src={logo}
				alt='AlyPay - El futuro ¡Ahora!'
				className='cursor-pointer w-32 my-2 mx-auto md:w-32 md:my-0 md:mx-4'
				onClick={() => history.push('/home')}
			/>

			<div
				className={`flex sm:flex-row justify-center items-center ${
					currentWallet !== null ? 'md:flex-grow' : 'flex-grow'
				}`}>
				<div className='flex-grow mx-4 hidden md:block'>
					<TextField
						type='search'
						placeholder={navView.source.placeholder}
						className='max-w-md mx-auto'
					/>
				</div>

				<div className={`flex flex-row justify-between items-center`}>
					<nav
						className={`${
							currentWallet !== null ? 'hidden lg:flex' : 'flex'
						} flex-row border max-w-max flex-grow border-yellow-500 rounded-full p-0.5 mx-auto sm:mx-4 items-center`}>
						<NavLink
							to='/home'
							className='navlink'
							activeClassName='navlink-active'>
							{navView.actions.init}
						</NavLink>

						<NavLink
							to='/alypay'
							className='navlink'
							activeClassName='navlink-active'>
							{navView.actions.alypay}
						</NavLink>

						<NavLink
							to='/commerces'
							className='navlink'
							activeClassName='navlink-active'>
							{navView.actions.commerces}
						</NavLink>
					</nav>

					<DropDown
						component={
							<i className='text-yellow-400 p-1 border border-yellow-500 rounded-full text-xl'>
								<FiSettings />
							</i>
						}
						iconPosition='hidden'
						verticalAlignment='right'
						className='mx-2 lg:mx-4'
						closeOnSelected={false}
						options={[
							{
								content: <SelectLanguage zoom={0.75} />,
							},
							{
								event: closeOptions => {
									closeOptions()
									logout()
								},
								content: (
									<div className='flex flex-row items-center justify-center'>
										<span className='mx-1'>
											{navView.actions.logout}
										</span>
										<i className='mx-1'>
											<FiLogOut />
										</i>
									</div>
								),
							},
						]}
					/>
				</div>
			</div>
		</section>
	)
}

export default React.memo(Navbar)
