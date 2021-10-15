import React from 'react';
import Seo from "../components/seo";
import TeamPreview from '../components/team/team-preview';
import { graphql } from "gatsby";

const Team = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const TeamMembers = edges
    .filter(edge => !!edge.node.frontmatter.order)
    .map(edge =>
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} />
    )
  return (
    <>
      <Seo title="Team" />
      {TeamMembers}
    </>
  )
}

export default Team;

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