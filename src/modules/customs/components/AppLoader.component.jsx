import React from 'react'
import ReactDOM from 'react-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { useSelector } from 'react-redux'
import { selectLoader } from 'utils/loader.util'

/**
 * Custom component for loader
 * @param {String} className - style to be applied on 'section' wrapper
 * @returns {React.FunctionComponent}
 */
function AppLoader({ className = '' }) {
	const loader = useSelector(selectLoader)

	return ReactDOM.createPortal(
		<>
			{loader.isLoading && (
				<section
					className={`AppLoader fixed inset-0 z-30 bg-black bg-opacity-60 flex justify-center items-center ${className}`}>
					<Loader
						type='Grid'
						color='#D97706'
						height={100}
						width={100}
					/>
				</section>
			)}
		</>,
		document.getElementById('loader')
	)
}

export default React.memo(AppLoader)
