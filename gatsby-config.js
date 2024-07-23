module.exports = {
  siteMetadata: {
    title: "Capybara Visions",
    description: "A modern portfolio for Capybara Visions",
    author: "@wrekafekt",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `capybara-visions`,
        short_name: `capybara`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // Path to your favicon
      },
    },
  ],
  pathPrefix: "/capybaravisions",
}
