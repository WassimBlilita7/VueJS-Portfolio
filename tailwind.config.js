/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#42b883',
        'primary-dark': '#00c896',
        secondary: '#22223b',
        'secondary-dark': '#e0e1dd',
        accent: '#ff6f3c',
        'accent-dark': '#ff8c42',
        glass: 'rgba(255,255,255,0.7)',
        'glass-dark': 'rgba(30,41,59,0.7)',
        'glass-border': 'rgba(66,184,131,0.15)',
        'glass-border-dark': 'rgba(66,184,131,0.25)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      backdropBlur: {
        lg: '16px',
      },
    },
  },
  plugins: [],
}

