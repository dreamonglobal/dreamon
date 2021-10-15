import React from 'react';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import SpeakerHeader from '../components/speaker-collective/speaker-header';
import SpeakerBooks from '../components/speaker-collective/speaker-books';

const SpeakerMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark;
  const socials = {
    facebook: frontmatter.facebook,
    instagram: frontmatter.instagram,
  }
  const books = data.allMarkdownRemark.nodes
    .filter(book => book.frontmatter.author === frontmatter.name)
  return (
    <>
      <Seo title={frontmatter.name} />
      <SpeakerHeader title={frontmatter.name} socials={socials} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: html }}></div>
            <SpeakerBooks books={books} />
          </div>
        </div>
      </div>
    </>
  )
}
export default SpeakerMember;
export const speakerMemberQuery = graphql`
  query($path: String!) {
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
    markdownRemark(frontmatter: {path: {eq: $path}}) {
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
