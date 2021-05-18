import Compress from 'compress.js'

/**
 * Util function to compress image
 * @param {File} image - orignal image to be compressed
 * @return {File} - compressed image
 */
export const compressImage = image =>
	new Promise(async (resolve, _) => {
		if (!image) {
			resolve(null)
			return
		}

		if (!/^image/.test(image.type)) {
			resolve(image)
			return
		}

		const _compress = new Compress()

		const compressOptions = {
			size: 2,
			quality: 0.75,
			maxWidth: 1080,
			maxHeight: 1080,
			resize: true,
		}

		const compressData = await _compress.compress(
			[image],
			compressOptions,
			false
		)

		const { data, ext: type, alt: filename } = compressData[0]

		const compressBlob = Compress.convertBase64ToFile(data, type)

		const _image = new File([compressBlob], filename, { type: type })

		resolve(_image)
	})
