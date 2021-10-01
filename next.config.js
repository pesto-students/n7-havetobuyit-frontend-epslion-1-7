/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return process.env.NODE_ENV === 'development'
      ? [
        {
          source: '/api/:slug*',
          destination: 'http://localhost:3019/:slug*'
        },
        {
          source: '/assets/:slug*',
          destination: 'http://localhost:3019/assets/:slug*'
        }
      ]
      : [];
  },
}
