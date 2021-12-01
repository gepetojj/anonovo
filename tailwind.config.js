const plugin = require("tailwindcss/plugin");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		colors: {
			yellow: {
				main: "#f5db61",
			},
			black: {
				main: "#010100",
			},
			alt: {
				red: "#FF6961",
				green: "#77DD77",
				blue: "#89C1EC",
				white: "#F0F0F0",
			},
		},
		extend: {
			animation: {
				"pulse-1/2":
					"pulse 980ms cubic-bezier(0.4, 0, 0.6, 1) infinite;",
				"ping-1/2":
					"ping 970ms cubic-bezier(0, 0, 0.2, 1) 2ms infinite;",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			const newUtilities = {
				body: {
					"background-color": theme("colors.yellow.main"),
				},
				".balloon": {
					width: "10vmax",
					height: "10vmax",
					"border-radius": "100% 100% 15% 100%",
					border: "1px solid #00000015",
					margin: "0 0 0 25px",
					transform: "rotateZ(45deg)",
					position: "fixed",
					bottom: "calc(-1 * 15vmax)",
					left: "50%",
				},
				".balloon-string": {
					position: "absolute",
					width: "1px",
					height: "calc(15vmax * .6)",
					"transform-origin": "top center",
					transform: "rotateZ(-45deg)",
					top: "calc(10vmax - 6px)",
					left: "calc(10vmax - 8px)",
				},
			};
			addUtilities(newUtilities);
		}),
	],
};
