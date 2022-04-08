import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import SpeakerHeader from '../components/speaker-collective/speaker-header'
import SpeakerBooks from '../components/speaker-collective/speaker-books'
import { AllMarkdownRemark, Data, Locale, MarkdownRemark, Speaker } from '../types'
import { useLocale } from '../hooks'

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
  const locale: Locale = useLocale()
  const books: MarkdownRemark[] = nodes.filter(
    (book: MarkdownRemark) => book.frontmatter.author === name
  )
  .filter((book: MarkdownRemark) => book.frontmatter.locale === locale)
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
          locale
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
