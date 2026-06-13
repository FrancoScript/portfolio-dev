// tailwind.config.js
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#111827",
				primaryDark: "#030712",

				secondary: "#6b7280",

				background: "#f3f4f6",
				backgroundAlt: "#ffffff",

				text: "#111827",
				textSecondary: "#6b7280",

				border: "#e5e7eb",

				accent: "#22c55e",
			},
			keyframes: {
				'fade-up-pop': {
					'0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
			},
			animation: {
				'fade-up-pop': 'fade-up-pop 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards',
			},
		},
	},
	plugins: [],
};
