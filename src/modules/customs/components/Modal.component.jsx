import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Custom component to print a modal
 * @param {String} className - style to be applied on 'section' wrapper
 * @param {Boolean} isOpen - modal open state
 * @param {Function} toClose - to execute when overlay is clicked
 * @param {React.FunctionComponent} children - to be printed
 * @returns {React.FunctionComponent}
 */
function Modal({
	className = '',
	isOpen = false,
	toClose = () => {},
	children = null,
}) {
	return ReactDOM.createPortal(
		<>
			{isOpen && (
				<section
					className={`Modal fixed inset-0 z-20 bg-black bg-opacity-60 flex justify-center items-center w-full p-2 ${className}`}
					onClick={toClose}>
					{children}
				</section>
			)}
		</>,
		document.getElementById('modal')
	)
}

export default React.memo(Modal)
