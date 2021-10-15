import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import SpeakerPreview from '../components/speaker-collective/speaker-preview';
import { useTranslation } from '../hooks';

const SpeakersPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const { speakers: translations } = useTranslation();
  const SpeakerMembers = edges
    .filter(edge => edge.node.frontmatter.category === 'Speaker')
    .map(edge => 
      <SpeakerPreview key={edge.node.id} data={edge.node.frontmatter} /> 
    )
  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">{translations.meetTheCollectiveTitle}</h1>
                        <p>{translations.meetTheCollectiveDescription}</p>
                    </div>
                    {SpeakerMembers}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default SpeakersPage;
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
            path
            category
          }
        }
      }
    }
  }
`