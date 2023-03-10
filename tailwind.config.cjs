/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {		
		extend: {
			fontFamily: {
    			playfair: "'Playfair Display', serif",				
				gantari: "'Gantari', sans-serif",
				manrope: "'Manrope', sans-serif",
			},
		},
	},
	plugins: [],
}
