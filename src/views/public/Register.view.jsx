import React, { useState } from 'react'
import { logo, powered } from 'assets'
import {
	Button,
	DateField,
	SelectLanguage,
	TextField,
	TextGroup,
	Tooltip,
} from 'modules/customs'
import { useHistory } from 'react-router'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'
import { useForm } from 'react-hook-form'
import { useAuth } from 'modules/authentication'
import { notification } from 'utils'

/**
 * Public Register View
 * @returns {React.FunctionComponent}
 */
function RegisterView() {
	const history = useHistory()
	const { registerView } = useSelector(selectLanguage)

	const [birthDate, setBirthDate] = useState(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setError,
	} = useForm()

	const { signUp } = useAuth()

	const onSubmit = data => {
		if (!birthDate)
			return notification.notificationDanger({
				message: registerView.date.required,
			})
		signUp({ ...data, birthDate })
	}

	return (
		<main className='RegisterView min-h-screen flex flex-col items-center p-2'>
			<SelectLanguage className='self-end' zoom={0.75} />

			<div className='flex-grow flex flex-col justify-center items-center w-full max-w-xs md:max-w-3xl'>
				<img
					src={logo}
					alt='AlyPay - El futuro ¡Ahora!'
					className='w-48 md:w-64 lg:w-72'
				/>

				<form
					className='rounded-lg p-2 md:px-8 mx-2 my-4 bg-black w-full'
					onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-row my-4 items-center'>
						<Tooltip
							text={registerView.actions.back}
							className='max-w-max'>
							<Button
								type='button'
								className='text-yellow-400 text-2xl'
								onClick={() => history.push('/login')}>
								<FiArrowLeftCircle />
							</Button>
						</Tooltip>

						<TextGroup
							label={registerView.title}
							className='mx-auto'
						/>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<TextField
							label={registerView.name.title}
							placeholder={registerView.name.placeholder}
							register={register('name', {
								required: {
									value: true,
									message: registerView.name.required,
								},
							})}
							errorMessage={errors.name?.message}
						/>

						<TextField
							label={registerView.lastname.title}
							placeholder={registerView.lastname.placeholder}
							register={register('lastname', {
								required: {
									value: true,
									message: registerView.lastname.required,
								},
							})}
							errorMessage={errors.lastname?.message}
						/>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<DateField
							label={registerView.date.title}
							placeholder={registerView.date.placeholder}
							selected={birthDate}
							onChange={value => setBirthDate(value)}
							maxDate={new Date()}
						/>

						<TextField
							label={registerView.telephone.title}
							placeholder={registerView.telephone.placeholder}
							register={register('telephone', {
								required: {
									value: true,
									message: registerView.telephone.required,
								},
								pattern: {
									value: /(^[0-9]*)([0-9]$)/i,
									message: registerView.telephone.error,
								},
								minLength: {
									value: 7,
									message: registerView.telephone.atLeast,
								},
							})}
							errorMessage={errors.telephone?.message}
						/>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<TextField
							label={registerView.email.title}
							placeholder={registerView.email.placeholder}
							type='email'
							register={register('email', {
								required: {
									value: true,
									message: registerView.email.required,
								},
							})}
							errorMessage={errors.email?.message}
						/>

						<TextField
							label={registerView.username.title}
							placeholder={registerView.username.placeholder}
							register={register('username', {
								required: {
									value: true,
									message: registerView.username.required,
								},
							})}
							errorMessage={errors.username?.message}
						/>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<TextField
							label={registerView.password.title}
							placeholder={registerView.password.placeholder}
							type='password'
							register={register('password', {
								required: {
									value: true,
									message: registerView.password.required,
								},
								minLength: {
									value: 6,
									message: registerView.password.error,
								},
							})}
							errorMessage={errors.password?.message}
						/>

						<TextField
							label={registerView.repeatPassword.title}
							placeholder={
								registerView.repeatPassword.placeholder
							}
							type='password'
							register={register('repeatPassword', {
								required: {
									value: true,
									message:
										registerView.repeatPassword.required,
								},
								validate: {
									mismatch: value =>
										value === watch('password'),
								},
							})}
							errorMessage={
								errors.repeatPassword?.type === 'mismatch'
									? registerView.repeatPassword.error
									: errors.repeatPassword?.message
							}
						/>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<TextField
							label={registerView.country.title}
							placeholder={registerView.country.placeholder}
							register={register('country', {
								required: {
									value: true,
									message: registerView.country.required,
								},
							})}
							errorMessage={errors.country?.message}
						/>

						<div className='text-gray-200 flex flex-row items-center justify-center'>
							<input
								type='checkbox'
								name='conditions'
								id='conditions'
								className='m-1'
							/>
							<span className='hidden md:inline'>
								{registerView.actions.accept}
							</span>
							<Button
								label={registerView.actions.terms}
								type='button'
								className='underline text-yellow-400 inline'
							/>
						</div>
					</div>

					<div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 my-4'>
						<Button
							label={registerView.actions.register}
							type='submit'
							variant='filled'
							className='col-start-2'
						/>
					</div>
				</form>
			</div>

			<img
				src={powered}
				alt='Powered by AlySystem'
				className='w-32 md:w-40 m-4'
			/>
		</main>
	)
}

export default React.memo(RegisterView)
