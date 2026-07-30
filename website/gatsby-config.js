module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.langdev.org',
  },
  trailingSlash: 'never',
  jsxRuntime: 'automatic',
  graphqlTypegen: {
    generateOnBuild: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Preserve the URL used by the previous plugin version.
        output: '/sitemap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/../posts`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
