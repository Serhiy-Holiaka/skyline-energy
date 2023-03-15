/** @type {import('tailwindcss').Config} */
const imageBasePath = process.env.APP_BASE_PATH ? `${process.env.APP_BASE_PATH}/images` : '/images';
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': `url(${imageBasePath}/home-hero-bg.webp)`,
                'about-bg': `url(${imageBasePath}/about-bg.webp)`,
                'areas-bg': `url(${imageBasePath}/areas-bg.webp)`,
                'market-bg': `url(${imageBasePath}/market-bg.webp)`,
                'about-hero-bg': `url(${imageBasePath}/about-hero-bg.webp)`,
                'strategy-goals-bg': `url(${imageBasePath}/strategy-goals-bg.webp)`,
                'what-we-do-bg': `url(${imageBasePath}/we-do-bg.webp)`,
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
