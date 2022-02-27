/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: !debug ? '/nortalpretrainingweek' : "",
  assetPrefix: !debug ? '/nortalpretrainingweek/' : "",
}
