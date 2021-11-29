import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import PageHeader from '../components/page-header'
import EventPreview from '../components/events/event-preview'
import useTranslation from '../hooks/useTranslation'
import { Data, Edge, MarkdownRemark } from '../types'

const EventsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: {
  data: MarkdownRemark
}) => {
  const { events: translations } = useTranslation()
  const UpcomingEvents = edges
    .filter(
      (edge: Edge) =>
        edge.node.frontmatter.category === 'Events' &&
        new Date(edge.node.frontmatter.date) >= new Date()
    )
    .map((edge: Edge) => (
      <EventPreview
        key={edge.node.id}
        event={edge.node.frontmatter}
        html={edge.node.html}
      />
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
                <h1 className="text-center">{translations.pageTitle}</h1>
                {UpcomingEvents}
                {UpcomingEvents.length === 0 && (
                  <p className="text-center">{translations.noUpcomingEvents}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventsPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            category
            title
            photo
            path
            buy
            location
          }
        }
      }
    }
  }
`
