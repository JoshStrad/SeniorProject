/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GameWinningStats`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scrapeddata`,
        path: `${__dirname}/scrapeddata/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
