module.exports = {
  // Set right publicPath for GitHub pages (see https://cli.vuejs.org/ru/guide/deployment.html#github-pages).
  // GitHub pages address is https://seregamatin.github.io/vue-showcase/ so right publicPath is '/vue-showcase/'.
  // GitHub pages deployment is done by TravicCI (see .travis.yml file at root of the repo).
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-showcase/'
    : '/'
};
