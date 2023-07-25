module.exports = {
  siteMetadata: {
    title: `Dream On: Global`,
    description: `content="Dream On: Global - We are a group of young adults that have a calling to spark dreams and purposes back into the hearts of the world"`,
    author: `@jordanpowell88`,
  },
  plugins: [
    {
      resolve: require.resolve(`@nx/gatsby`),
      options: {
        path: __dirname,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/app.tsx`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/markdown-pages/team-members`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/src/markdown-pages/musicians`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `board`,
        path: `${__dirname}/src/markdown-pages/board`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakers`,
        path: `${__dirname}/src/markdown-pages/speakers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/src/markdown-pages/books`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/markdown-pages/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `films`,
        path: `${__dirname}/src/markdown-pages/films`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-89172717-1',
        head: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `i18n`,
        path: `${__dirname}/i18n`,
      },
    },
  ],
}
