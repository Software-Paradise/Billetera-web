/**
 * Util function to transform 'FormData' to 'Object'
 * @param {FormData} formData - to be transformed
 * @returns {Object} - obtained from formData
 */
export default function formDataToObject(formData) {
	const data = {}

	for (let p of formData) {
		data[p[0]] = p[1]
	}

	return data
}
