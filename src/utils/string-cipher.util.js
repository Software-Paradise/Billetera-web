import CryptoJS from 'crypto-js'

/* Encode && decode key */
const KEY = 'p8b0we0ccecd423eb287d9a4b1b9078c'

/**
 * Util function to encode a 'String'
 * @param {String} text - string to be encode
 * @return {String} - encoded string
 * */
function encodeString(text) {
	return text ? CryptoJS.AES.encrypt(text, KEY).toString() : ''
}

/**
 * Util function to decode an encoded 'String'
 * @param {String} text - string to be decoded
 * @return {String} - decoded string
 * */
function decodeString(text) {
	return text
		? CryptoJS.AES.decrypt(text, KEY).toString(CryptoJS.enc.Utf8)
		: ''
}

export { encodeString, decodeString }
