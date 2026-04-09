/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEWS_API_KEY: 'fc8ff03794ef44769ace5b5f47bf12c7',
    SITE_URL: 'https://allnewsapp.com',
    SITE_NAME: 'AllNewsApp',
  },
}
module.exports = nextConfig
