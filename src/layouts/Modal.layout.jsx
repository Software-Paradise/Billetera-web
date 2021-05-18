import React from 'react'
import { Modal } from 'modules/customs'
import { FiXCircle } from 'react-icons/fi'

/**
 * Layout to print a modal with a close confirmation
 * @param {String} className - style to be applied on 'div' wrapper inside the modal
 * @param {Boolean} isOpen - modal open state
 * @param {Function} toClose - to execute when close action is needed
 * @param {React.FunctionComponent} children - to be printed
 * @returns {React.FunctionComponent}
 */
function ModalLayout({
	className = '',
	isOpen = false,
	toClose = () => {},
	children = null,
}) {
	return (
		<Modal isOpen={isOpen}>
			<div
				className={`ModalLayout bg-black rounded-lg border border-yellow-500 p-1 max-w-full ${className}`}>
				<div className='m-2 flex justify-end'>
					<i
						className='text-red-500 hover:text-red-600 text-2xl cursor-pointer'
						onClick={toClose}>
						<FiXCircle />
					</i>
				</div>
				{children}
			</div>
		</Modal>
	)
}

export default React.memo(ModalLayout)
