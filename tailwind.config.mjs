// tailwind.config.js
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: '#3b82f6',            // color principal
				secondary: '#0ea5e9',          // color de acento o gradiente
				background: '#f7f9fc',         // fondo general
				backgroundAlt: '#e2e8f0',      // fondo secciones
				text: '#1e293b',               // texto principal
				textSecondary: '#475569',      // texto secundario
				white: '#ffffff',              // blanco
				border: '#cbd5e1',             // gris bordes
				accent: "#f5a623"
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
