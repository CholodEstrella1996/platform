/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      's3-cloudlabas-dev.s3.amazonaws.com',
      's3-cloudlabas-dev.s3.us-east-1.amazonaws.com',
      'www.gstatic.com',
    ],
  },
}

module.exports = config
