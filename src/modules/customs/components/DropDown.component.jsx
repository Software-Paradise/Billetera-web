import React, { useEffect, useRef, useState } from 'react'
import {
	FiChevronUp,
	FiChevronDown,
	FiChevronRight,
	FiChevronLeft,
} from 'react-icons/fi'
import { randomKey } from 'utils'

/**
 * Custom component for drop down
 * @param {React.FunctionComponent} component - a mostrar para renderizar las opciones
 * @param {Number} position - 0: top, 1: right, 2: down, 3: left. Por defecto 2: down
 * @param {Array} options - A mostrar en el Drop Down contiene las props 'event' & 'content'
 * @param {Boolean} closeOnSelected - para cerrar el drop down al seleccionar una opción: Por defecto 'true'
 * @param {String} horizontalAlignment - Por defecto 'center'
 * @param {String} verticalAlignment - Por defecto 'center'
 * @param {String} maxWidth - Ancho máximo del Drop Down. Por defecto '50rem'
 * @param {String} maxHeight - Alto máximo del Drop Down. Por defecto '15rem'
 * @param {String} iconPosition - Posición del ícono de apertura y cierre del Drop Down 'left', 'right' & 'hidden'. Por defecto 'right'
 * @param {Boolean} manual - deshabilita el mostrar u ocultar del Drop Down cuando se da click sobre el componente, por defecto 'false'
 * @param {Function} onSelected - to excecute when option is selected
 * @param {String} className - to be applied at wrapper
 * @param {String} prefixOpt - key to every item printed on current list
 * @returns {React.FunctionComponent}
 */
function DropDown({
	component = null,
	position = 'bottom',
	options = [],
	closeOnSelected = true,
	horizontalAlignment = 'center',
	verticalAlignment = 'center',
	maxWidth = '50rem',
	maxHeight = '15rem',
	iconPosition = 'right',
	manual = false,
	onSelected = () => {},
	className = '',
	prefixOpt = randomKey(),
}) {
	const selfRef = useRef(null)
	const [isOptionsOpen, setIsOptionsOpen] = useState(false)

	/**
	 * Abre el Drop Down
	 */
	/* const openOptions = () => {
		if (!manual) setIsOptionsOpen(true)
	} */

	/**
	 * Cierra el Drop Down
	 */
	const closeOptions = () => {
		setIsOptionsOpen(false)
	}

	/**
	 * Alterna el estado del Drop Down
	 */
	const toggleOptions = () => {
		setIsOptionsOpen(!isOptionsOpen)
	}

	/**
	 * Mapea la lista de opciones
	 * @returns {React.FunctionComponent}
	 */
	const optionList = () => {
		const order = isOptionsOpen ? options : []

		return order.map((opt, index) => (
			<div
				key={`${prefixOpt}_${index}`}
				onClick={() => {
					if (opt?.event) opt.event(closeOptions)
					if (opt?.item && onSelected) onSelected(opt?.item)
					if (closeOnSelected) closeOptions()
				}}
				className='drop-down__opts--item select-none'>
				{opt.content}
			</div>
		))
	}

	/**
	 * Verifica si se realizó un click fuera del componente o se precionó la tecla de 'Esc' para cerrar el Drop Down
	 */
	useEffect(() => {
		const closeEsc = e => {
			if (e.keyCode === 27) {
				closeOptions()
				if (onSelected) onSelected(null)
			}
		}
		window.addEventListener('keydown', closeEsc)

		const closeClick = e => {
			if (selfRef.current && !selfRef.current.contains(e.target)) {
				closeOptions()
				if (onSelected) onSelected(null)
			}
		}
		window.addEventListener('mousedown', closeClick)
		return () => {
			window.removeEventListener('keydown', closeEsc)
			window.removeEventListener('mousedown', closeClick)
		}
	}, [])

	return (
		<div className={`DropDown drop-down ${className}`} ref={selfRef}>
			<div
				className={`drop-down__base ${isOptionsOpen ? 'active' : ''}`}
				style={{
					cursor: manual ? '' : 'pointer',
					padding: manual ? '' : '0.25rem 0.5rem',
				}}
				onClick={toggleOptions}>
				{iconPosition === 'hidden' ? null : position === 'left' ? (
					<i className='drop-down__base--icon left'>
						{isOptionsOpen ? <FiChevronRight /> : <FiChevronLeft />}
					</i>
				) : iconPosition === 'left' ? (
					position === 'top' ? (
						<i className='drop-down__base--icon left'>
							{isOptionsOpen ? (
								<FiChevronDown />
							) : (
								<FiChevronUp />
							)}
						</i>
					) : position !== 'right' ? (
						<i className='drop-down__base--icon left'>
							{isOptionsOpen ? (
								<FiChevronUp />
							) : (
								<FiChevronDown />
							)}
						</i>
					) : null
				) : null}
				​
				{component && (
					<div
						className={`drop-down__base--comp ${
							iconPosition === 'hidden'
								? ''
								: (iconPosition === 'left' &&
										position !== 'right') ||
								  position === 'left'
								? 'left'
								: 'right'
						}`}>
						{component}
					</div>
				)}
				{iconPosition === 'hidden' ? null : position === 'right' ? (
					<i className='drop-down__base--icon right'>
						{isOptionsOpen ? <FiChevronLeft /> : <FiChevronRight />}
					</i>
				) : iconPosition !== 'left' && position !== 'left' ? (
					position === 'top' ? (
						<i className='drop-down__base--icon right'>
							{isOptionsOpen ? (
								<FiChevronDown />
							) : (
								<FiChevronUp />
							)}
						</i>
					) : (
						<i className='drop-down__base--icon right'>
							{isOptionsOpen ? (
								<FiChevronUp />
							) : (
								<FiChevronDown />
							)}
						</i>
					)
				) : null}
			</div>

			<div
				className={`drop-down__opts${
					isOptionsOpen ? ` pos-${position} active` : ''
				}`}
				style={
					position === 'right' || position === 'left'
						? {
								top:
									horizontalAlignment === 'top'
										? 0
										: horizontalAlignment === 'center'
										? '50%'
										: '',
								transform:
									horizontalAlignment === 'center'
										? position === 'right'
											? 'translateY(-50%) translateX(100%)'
											: 'translateY(-50%) translateX(-100%)'
										: position === 'right'
										? 'translateX(100%)'
										: 'translateX(-100%)',
								bottom:
									horizontalAlignment === 'bottom' ? 0 : '',
								maxWidth,
						  }
						: {
								minWidth: 'max-content',
								left:
									verticalAlignment === 'left'
										? 0
										: verticalAlignment === 'center'
										? '50%'
										: '',
								transform:
									verticalAlignment === 'center'
										? position === 'top'
											? 'translateX(-50%) translateY(-100%)'
											: 'translateX(-50%) translateY(100%)'
										: position === 'top'
										? 'translateY(-100%)'
										: 'translateY(100%)',
								right: verticalAlignment === 'right' ? 0 : '',
								maxWidth,
								maxHeight,
						  }
				}>
				{optionList()}
			</div>
		</div>
	)
}

export default React.memo(DropDown)
