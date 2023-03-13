/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/home-hero-bg.webp')",
        'about-bg': "url('/images/about-bg.webp')",
        'areas-bg': "url('/images/areas-bg.webp')",
        'market-bg': "url('/images/market-bg.webp')",
       },
       colors: {
        black: 'var(--color-black)',
        'black-light': 'var(--color-black-light)',
        'border-color': 'var(--color-black-border)',
        grey: {
            DEFAULT: 'var(--color-gray)',
            light: 'var(--color-gray-light)',
            mid: 'var(--color-gray-mid)',
        },
        green: {
          DEFAULT: 'var(--color-green)',
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
