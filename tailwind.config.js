/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/home-hero-bg.webp')",
       },
       colors: {
        black: 'var(--color-black)',
        'black-light': 'var(--color-black-light)',
        'border-color': 'var(--color-black-border)',
        grey: {
            DEFAULT: 'var(--color-gray)',
        },
        white: 'var(--color-white)',
        orange: {
            DEFAULT: 'var(--color-orange)', 
        },
        yellow: {
            DEFAULT: 'var(--color-yellow)',
        },
    },
    },
  },
  plugins: [],
}
