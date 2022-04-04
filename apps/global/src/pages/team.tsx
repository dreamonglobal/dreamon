import React from 'react'
import Seo from '../components/seo'
import TeamPreview from '../components/person-preview'
import { graphql } from 'gatsby'
import { Edge, MarkdownRemark } from '../types'

const Team = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: {
  data: MarkdownRemark
}) => {
  const TeamMembers: JSX.Element[] = edges
    .filter((edge: Edge) => !!edge.node.frontmatter.order)
    .map((edge: Edge) => (
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} />
    ))
  return (
    <>
      <Seo title="Team" />
      {TeamMembers}
    </>
  )
}

export default Team

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
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
          }
        }
      }
    }
  }
`
