/**
 * Util function to transform 'blob' to 'file'
 * @param {Blob} blob - to transform
 * @param {String} fileName - name for the new file
 * @returns {File} - created from blob
 */
export const blobToFile = (blob, fileName) => {
	return new File([blob], fileName, { type: blob.type })
}
