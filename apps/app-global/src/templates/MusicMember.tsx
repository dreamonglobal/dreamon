import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import MusicHeader from '../components/music-collective/music-header'
import MusicCollectiveVideos from '../components/music-collective/music-collective-videos'
import MusicCollectiveEvents from '../components/music-collective/music-collective-events'
import { Link } from 'gatsby'
import { AllMarkdownRemark, Data, MarkdownRemark, Musician } from '../types'

const MusicMember = ({
  data: {
    markdownRemark: {
      frontmatter: { name, videos, facebook, instagram, youtube, spotify },
      html,
    },
    allMarkdownRemark: { nodes },
  },
}: {
  data: { markdownRemark: MarkdownRemark; allMarkdownRemark: AllMarkdownRemark }
}) => {
  const events: MarkdownRemark[] = nodes.filter(
    (event: MarkdownRemark) => new Date(event.frontmatter.date) >= new Date()
  )
  return (
    <>
      <Seo title={name} />
      <MusicHeader
        title={name as Musician}
        socials={{ facebook, instagram, youtube, spotify }}
      />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <div className="col-md-12">
              <Link to="/book" className="tem-btn nav-link move-eff">
                <span>book</span>
              </Link>
              <MusicCollectiveVideos videos={videos} />
              <MusicCollectiveEvents events={events} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MusicMember
export const musicMemberQuery = graphql`
  query ($path: String!) {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      nodes {
        html
        frontmatter {
          title
          photo
          date
          location
          buy
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        order
        name
        photo
        videos
        facebook
        instagram
        youtube
        spotify
      }
    }
  }
`
