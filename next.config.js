/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['vercel.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig; 