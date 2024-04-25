/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    domains: ['seatgeek.com', 'images.gametime.co', 'd2o50i5c2dr30a.cloudfront.net', 'img.vggcdn.net'], // Add your local domain here
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
