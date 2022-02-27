/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: !debug ? '/intrtoreactnextjs' : "",
  assetPrefix: !debug ? '/intrtoreactnextjs/' : "",
}
