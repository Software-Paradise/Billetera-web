import { blobToFile } from './blob-to-file.util'
import { compressImage } from './compress-image.util'
import copyClipboard from './copy-clipboard.util'
import formDataToObject from './form-data-to-object.util'
import http from './http.util'
import randomKey from './random-key.util'
import {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
} from './storage.util'
import { decodeString, encodeString } from './string-cipher.util'
/* Util reducers */
import languageReducer from './language.util'
import notification from './notification.util'
import loaderReducer from './loader.util'
import { createNotification } from './create-notification.util'
import { httpPetition } from './http-petition.util'

export {
	blobToFile,
	compressImage,
	copyClipboard,
	formDataToObject,
	http,
	randomKey,
	getLocalStorage,
	setLocalStorage,
	decodeString,
	encodeString,
	languageReducer,
	notification,
	loaderReducer,
	createNotification,
	httpPetition,
	removeLocalStorage,
}
