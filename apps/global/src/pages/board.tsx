import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import PageHeader from '../components/page-header'
import PersonPreview from '../components/person-preview'
import { useTranslation } from '../hooks'
import { Edge, FeatureTranslations, MarkdownRemark } from '../types'

const BoardPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: {
  data: MarkdownRemark
}) => {
  const { board: translations }: { board: FeatureTranslations } =
    useTranslation()
  const BoardMembers: JSX.Element[] = edges
    .filter((edge: Edge) => edge.node.frontmatter.category === 'Board')
    .map((edge: Edge) => (
      <PersonPreview key={edge.node.id} data={edge.node.frontmatter} />
    ))
  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />

      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-sm-8 col-sm-offset-2">
                <h1 className="text-center">
                  {translations.meetTheCollectiveTitle}
                </h1>
              </div>
              {BoardMembers}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BoardPage
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
