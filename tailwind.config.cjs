const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				"custom-light-sky": "#7cd5ff",
				"custom-light-blue": "#6ecbf5",
				"custom-purple": "#c252e1",
				"custom-dark-purple": "#7700a6",
				"custom-gray": "#e0d9f6",
				"custom-blue": "#586ae2",
				"custom-midnight": "#2a2356",
				"custom-red": "#ff888d",
				"custom-darkred": "rgb(169,16,0, 0.7)",
			},
			fontFamily: {
				"custom-bartkey": ["bartkey", ...defaultTheme.fontFamily.sans],
				"custom-neuro": ["neuro", ...defaultTheme.fontFamily.sans],
				"custom-zekton": ["zekton", ...defaultTheme.fontFamily.sans],
				"custom-generis": ["generis", ...defaultTheme.fontFamily.sans],
				"custom-inconsolata": ['Inconsolata', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
