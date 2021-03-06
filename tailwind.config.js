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
			orange: colors.orange,
			amber: colors.amber,
			lime: colors.lime,
			emerald: colors.emerald,
			cyan: colors.cyan,
			violet: colors.violet,
			purple: colors.purple,
			lightBlue: colors.lightBlue,
			blueGray: colors.blueGray,
			teal: colors.teal,
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			translate: ['group-hover', 'group-focus'],
			rotate: ['active', 'group-hover', 'group-focus', 'focus-within'],
			opacity: ['disabled'],
			textColor: [
				'responsive',
				'focus',
				'hover',
				'active',
				'group-focus',
			],
			outline: ['active'],
		},
	},
	plugins: [],
}
