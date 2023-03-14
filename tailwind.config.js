/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': "url('/images/home-hero-bg.webp')",
                'about-bg': "url('/images/about-bg.webp')",
                'areas-bg': "url('/images/areas-bg.webp')",
                'market-bg': "url('/images/market-bg.webp')",
                'about-hero-bg': "url('/images/about-hero-bg.webp')",
                'strategy-goals-bg': "url('/images/strategy-goals-bg.webp')",
                'what-we-do-bg': "url('/images/we-do-bg.webp')",
            },
            colors: {
                black: {
                    DEFAULT: 'var(--color-black)',
                    light: 'var(--color-black-light)',
                    border: 'var(--color-black-border)',
                },
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
};
