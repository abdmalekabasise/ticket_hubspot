/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  images: {
    unoptimized: true,

    domains: ['seatgeek.com', 'images.gametime.co', 'd2o50i5c2dr30a.cloudfront.net', 'img.vggcdn.net'], // Add your local domain here
  },
};

module.exports = nextConfig;
