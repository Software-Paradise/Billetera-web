import { useState } from 'react'

/**
 * Custom hook to manage modal
 * @param {Boolean} state - current state for the modal
 * @returns {Array} - [isOpen, openModal, closeModal, toggleModal]
 */
export default function useModal(state = false) {
	const [isOpen, setIsOpen] = useState(state)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const toggleModal = () => {
		setIsOpen(!isOpen)
	}

	return [isOpen, openModal, closeModal, toggleModal]
}
