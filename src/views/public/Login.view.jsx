import React from 'react'
import { background, logo, powered } from 'assets'
import { Button, SelectLanguage, TextField, TextGroup } from 'modules/customs'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useAuth } from 'modules/authentication'
import { useSelector } from 'react-redux'
import { selectLanguage } from 'utils/language.util'

/**
 * Public Login View
 * @returns {React.FunctionComponent}
 */
function LoginView() {
	const history = useHistory()
	const { loginView } = useSelector(selectLanguage)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const { login } = useAuth()

	const onSubmit = data => {
		login({
			email: data.email,
			password: data.password,
		})
	}

	return (
		<main
			className='LoginView min-h-screen flex flex-col items-center p-2'
			style={{
				background: `linear-gradient(145deg, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.9) 60%), url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<SelectLanguage className='self-end' zoom={0.75} />

			<div className='flex-grow flex flex-col justify-center items-center w-full max-w-sm'>
				<img
					src={logo}
					alt='AlyPay - El futuro ¡Ahora!'
					className='w-64 md:w-80'
				/>

				<form
					className='rounded-lg p-2 md:px-8 m-2 w-full focus-within:bg-black focus-within:bg-opacity-25'
					onSubmit={handleSubmit(onSubmit)}>
					<TextGroup
						label={loginView.title}
						className='my-4 mx-auto max-w-min'
					/>

					<TextField
						label={loginView.email.title}
						placeholder={loginView.email.placeholder}
						type='email'
						className='my-4'
						register={register('email', {
							required: {
								value: true,
								message: loginView.email.required,
							},
						})}
						errorMessage={errors.email?.message}
					/>

					<TextField
						label={loginView.password.title}
						placeholder={loginView.password.placeholder}
						type='password'
						className='my-4'
						register={register('password', {
							required: {
								value: true,
								message: loginView.password.required,
							},
						})}
						errorMessage={errors.password?.message}
					/>

					<div className='my-4 flex flex-row justify-center'>
						<Button
							label={loginView.actions.recovery}
							type='button'
						/>
					</div>

					<div className='grid grid-cols-2 my-4 gap-4'>
						<Button
							label={loginView.actions.register}
							type='button'
							variant='text'
							onClick={() => history.push('/register')}
						/>
						<Button
							label={loginView.actions.login}
							type='submit'
							variant='filled'
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

export default React.memo(LoginView)
