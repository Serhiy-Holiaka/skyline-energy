/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.APP_BASE_PATH || '',
    assetPrefix: process.env.APP_BASE_PATH || '',
    devIndicators: {
        buildActivity: false,
    },
    eslint: {
        dirs: ['src'],
    },
};

module.exports = nextConfig;
