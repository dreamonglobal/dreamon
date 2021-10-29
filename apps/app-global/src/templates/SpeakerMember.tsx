import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import SpeakerHeader from '../components/speaker-collective/speaker-header'
import SpeakerBooks from '../components/speaker-collective/speaker-books'
import { AllMarkdownRemark, Data, MarkdownRemark, Speaker } from '../types'

const SpeakerMember = ({
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
  const books: MarkdownRemark[] = nodes.filter(
    (book: MarkdownRemark) => book.frontmatter.author === name
  )
  return (
    <>
      <Seo title={name} />
      <SpeakerHeader
        title={name as Speaker}
        socials={{ facebook, instagram }}
      />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <SpeakerBooks books={books} />
          </div>
        </div>
      </div>
    </>
  )
}
export default SpeakerMember
export const speakerMemberQuery = graphql`
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
