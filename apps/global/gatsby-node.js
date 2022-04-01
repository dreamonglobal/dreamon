/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

const webpack = require('webpack')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const musicianTemplate = path.resolve(`src/templates/MusicMember.tsx`)
  const speakerTemplate = path.resolve(`src/templates/SpeakerMember.tsx`)
  const eventTemplate = path.resolve(`src/templates/Event.tsx`)
  const filmTemplate = path.resolve(`src/templates/Film.tsx`);
  const boardTemplate = path.resolve(`src/templates/BoardMember.tsx`)

  const markdownResults = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              order
              name
              photo
              facebook
              twitter
              instagram
              youtube
              spotify
              date
              author
              buy
              videos
              category
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (markdownResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  markdownResults.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.frontmatter.category === 'Musician')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: musicianTemplate,
        context: {},
      })
    })

  markdownResults.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.frontmatter.category === 'Board')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: boardTemplate,
        context: {},
      })
    })

  markdownResults.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.frontmatter.category === 'Speaker')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: speakerTemplate,
        context: {},
      })
    })

  markdownResults.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.frontmatter.category === 'Events')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: eventTemplate,
        context: {},
      })
    })

  markdownResults.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.frontmatter.category === 'Films')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: filmTemplate,
        context: {}
      })
    })
}

const locales = require('./i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // For each page, we’re deleting it, than creating it again for each
  // language passing the locale to the page context
  return new Promise((resolve) => {
    deletePage(page)

    Object.keys(locales).map((lang) => {
      const isDefault = locales[lang].default || false

      const localizedPath = isDefault
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          isDefault,
        },
      })
    })

    resolve()
  })
}
