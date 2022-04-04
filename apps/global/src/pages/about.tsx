import { graphql } from 'gatsby'
import React from 'react'
import About from '../components/about'
import PageHeader from '../components/page-header'
import Seo from '../components/seo'
import Team from '../components/team/team'
import PersonPreview from '../components/person-preview'
import { useTranslation } from '../hooks'
import { Edge, MarkdownRemark, Translations } from '../types'

const AboutPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: {
  data: MarkdownRemark
}) => {
  const { about: translations }: { about: Translations } = useTranslation()

  const TeamMembers = edges
    .filter((edge: Edge) => edge.node.frontmatter.category === 'Team')
    .map((edge: Edge) => (
      <PersonPreview key={edge.node.id} data={edge.node.frontmatter} />
    ))
  return (
    <>
      <Seo
        title={JSON.stringify(translations.pageTitle).replace(/['"]+/g, '')}
      />
      <PageHeader
        title={JSON.stringify(translations.pageTitle).replace(/['"]+/g, '')}
      />
      <About translations={translations} />
      <Team teamMembers={TeamMembers} title={translations.team.title} />
    </>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            name
            title
            photo
            facebook
            twitter
            instagram
            category
          }
        }
      }
    }
  }
`
