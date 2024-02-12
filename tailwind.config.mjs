/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				robotop:['Roboto', "sans-serif"],
				titulos:['Protest Riot', "sans-serif"]
			},
			colors:{
				'titulo': {
				
					'600': '#d42a5b',
	
				},
			}
		},
	},
	plugins: [],
}
