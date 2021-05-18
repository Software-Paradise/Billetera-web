const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.trueGray,
			yellow: colors.yellow,
			blue: colors.lightBlue,
			red: colors.red,
			green: colors.green,
			black: colors.black,
			white: colors.white,
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			translate: ['group-hover', 'group-focus'],
			rotate: ['active', 'group-hover', 'group-focus', 'focus-within'],
			opacity: ['disabled'],
			textColor: ['group-focus'],
		},
	},
	plugins: [],
}
