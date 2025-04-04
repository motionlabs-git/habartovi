import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/_components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

			fontFamily: {
				oswald: 'var(--font-oswald)',
			},

			colors: {
				secondary: '#A6B37D',
				secondaryAccent: '#C0C78C',
				background: '#fefae0',
				backgroundAccent: '#ebebba',
				golden: '#dda753',
				goldenAccent: '#efc583',
				orange: '#e67508',
				orangeAccent: '#ed8c2d',
				green1: '#425c44',
				green2: '#082d35',
			},

			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
			},
		},
	},
	plugins: [require('@xpd/tailwind-3dtransforms')],
}
export default config
