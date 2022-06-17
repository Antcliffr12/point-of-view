/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  assetPrefix: isProd ? '/point-of-view/' : ''
}

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


module.exports = nextConfig
