/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ribbonRed: "#e40046",
				sanMarino: "#4565ac",
				gigasPurple: "#59358a",
				mulBerry: "#b94e96",
				silver: "#cccccc",
				charcoal: "#4d4d4d",
				mineShaft: "#262626",
				casablanca: "#fabc43",
				pictonBlue: "#5bc4f1",
			},

			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: false,
	},
};

