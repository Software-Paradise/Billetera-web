import React from 'react'
import QRCode from 'qrcode.react'
import { encodeString } from 'utils'

/**
 * Custom component for Qr generation
 * @param {Object} toEncrypt - object with data to encrypt by AES
 * @param {String} keysecret - key to use on encrypt method
 * @param {String} className - for custom styles on parent div of QRCode component
 * @param {String} bgColor - background color for QRCode
 * @param {String} fgColor - color for the pattern
 * @param {String} level - Can be L, M, Q, H, in that order the complexity of the pattern increases
 * @param {Boolean} includeMargin - no idea, just another prop for the original component
 * @param {String} renderAs - Can be canvas or svg
 * @param {Number} size -size on px of QRCode
 * @param {Object} imageSettings - settings for the image to show inside the pattern
 * @returns {React.FunctionComponent}
 */
const Qr = ({
	toEncrypt = null,
	keysecret = '',
	className = '',
	bgColor = '#FACC15',
	fgColor = '#000000',
	level = 'L',
	includeMargin = false,
	renderAs = 'svg',
	imageSettings = {
		src: '',
		x: null,
		y: null,
		height: 0,
		width: 0,
		excavate: false,
	},
}) => {
	//encrypt data and append it with the keysecret in a single string separated with a comma
	const value = `${encodeString(
		JSON.stringify(toEncrypt),
		keysecret
	)},${keysecret}`

	return (
		<QRCode
			className={`Qr ${className}`}
			value={value}
			bgColor={bgColor}
			includeMargin={includeMargin}
			fgColor={fgColor}
			level={level}
			renderAs={renderAs}
			imageSettings={imageSettings}
		/>
	)
}

export default React.memo(Qr)
