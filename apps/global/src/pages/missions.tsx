import React from 'react'
import Seo from '../components/seo'
import PageHeader from '../components/page-header'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useTranslation } from '../hooks'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FeatureTranslations, Translations } from '../types'

const TripPreview = ({
  translations: trips,
}: {
  translations: Translations
}) => {
  const data = useStaticQuery(graphql`
    query {
      hondurasTripImage: file(
        relativePath: { eq: "news/honduras-missions.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1080, placeholder: BLURRED)
        }
      }
      brazilTripImage: file(relativePath: { eq: "news/brazil-missions.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1080, placeholder: BLURRED)
        }
      }
    }
  `)

  const hondurasImage: IGatsbyImageData = getImage(data.hondurasTripImage)
  const brazilImage: IGatsbyImageData = getImage(data.brazilTripImage)

  return (
    <div className="col-sm-12">
      {/* <article className="news-info">
        <OutboundLink href="https://dreamon.gomethod.app/!/#/23795/honduras-2022">
          <h2 className="text-center">{trips.brazil.country}</h2>
          <h4 className="text-center">{trips.brazil.date}</h4>
          <div className="news-img">
            <GatsbyImage image={brazilImage} alt="Dream On: Brazil" />
          </div>
        </OutboundLink>
      </article> */}
      <article className="news-info">
        <OutboundLink href={trips.brazil.link}>
          <h2 className="text-center">{trips.brazil.country}</h2>
          <h4 className="text-center">{trips.brazil.date}</h4>
          <div className="news-img">
            <GatsbyImage image={brazilImage} alt={trips.brazil.country} />
          </div>
        </OutboundLink>
      </article>
    </div>
  )
}

const MissionsPage = () => {
  const { missions: translations } = useTranslation()
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
                  {translations.upcomingTripsTitle}
                </h1>
                <hr />
                <p>{translations.upcomingTripsDescription}</p>

                <TripPreview translations={translations.trips} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MissionsPage
