/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Théâtre du Petit Pierre`,
    description: `Le Théâtre du Petit Pierre a été créer par Francis L. Kagenaar. Il écrit et interprète de nombreuses pièces qui rassemblent humour, poésie et musique à destination des petits et des grands`,
    keywords: `Théâtre, Spectacles pour enfants, petit chaperon rouge, Francis Kagenaar, Les trois petits cochons, Lily et le loup, loire-atlantique, écoles, nantes, saint-nazaire, redon`,
    author: `@devDurable`,
    siteUrl: `https://theatredupetitpierre.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal-with-new-react`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bulma-starter`,
        short_name: `bulma`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
