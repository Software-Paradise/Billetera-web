import { blobToFile } from './blob-to-file.util'
import { compressImage } from './compress-image.util'
import copyClipboard from './copy-clipboard.util'
import formDataToObject from './form-data-to-object.util'
import randomKey from './random-key.util'
import {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
} from './storage.util'
import { decodeString, encodeString } from './string-cipher.util'
/* Util reducers */
import languageReducer from './language.util'

export {
	blobToFile,
	compressImage,
	copyClipboard,
	formDataToObject,
	randomKey,
	getLocalStorage,
	setLocalStorage,
	decodeString,
	encodeString,
	languageReducer,
	removeLocalStorage,
}
