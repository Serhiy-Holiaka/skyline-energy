/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    devIndicators: {
        buildActivity: false,
    },
    eslint: {
        dirs: ['src'],
    },
};

module.exports = nextConfig;
