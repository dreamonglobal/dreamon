import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/seo';
import MusicHeader from '../components/music-collective/music-header';
import MusicCollectiveVideos from '../components/music-collective/music-collective-videos';
import MusicCollectiveEvents from '../components/music-collective/music-collective-events';
import { Link } from 'gatsby';

const MusicMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const socials = {
    facebook: frontmatter.facebook,
    instagram: frontmatter.instagram,
    youtube: frontmatter.youtube,
    spotify: frontmatter.spotify
  }
  const events = data.allMarkdownRemark.nodes
    .filter(event => new Date(event.frontmatter.date) >= new Date())
  return (
    <>
      <Seo title={frontmatter.name} />
      <MusicHeader title={frontmatter.name} socials={socials} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: html }}></div>
            <div className="col-md-12">
              <Link to="/book" className="tem-btn nav-link move-eff"><span>book</span></Link>
              <MusicCollectiveVideos videos={frontmatter.videos} />
              <MusicCollectiveEvents events={events} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MusicMember;
export const musicMemberQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
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