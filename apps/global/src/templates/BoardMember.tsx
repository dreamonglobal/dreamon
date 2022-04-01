import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import PageHeader from '../components/page-header'
import { AllMarkdownRemark, Data, MarkdownRemark, Board } from '../types'

const BoardMember = ({
  data: {
    markdownRemark: {
      frontmatter: { name, facebook, instagram },
      html,
    },
    allMarkdownRemark: { nodes },
  },
}: {
  data: { markdownRemark: MarkdownRemark; allMarkdownRemark: AllMarkdownRemark }
}) => {

  return (
    <>
      <Seo title={name} />
      <PageHeader
        title={name as Board}
      />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BoardMember
export const boardMemberQuery = graphql`
  query ($path: String!) {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          photo
          date
          author
          buy
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        videos
        title
        photo
        path
        name
        instagram
        facebook
      }
    }
  }
`