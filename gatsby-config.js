/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: ` `,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: {
          include: /assets/
        }
      }
    }
]
};