//react import
import React from 'react'
import { render } from '@testing-library/react'
//redux and store imports
import { Provider } from 'react-redux'
import { store } from './app/store'
//app import
import App from './App'

test('renders learn react link', () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	)

	expect(getByText(/learn/i)).toBeInTheDocument()
})
