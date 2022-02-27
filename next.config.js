const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  basePath: !debug ? '/intrtoreactnextjs' : "",
  assetPrefix: !debug ? '/intrtoreactnextjs/' : "",
}
