import React from 'react';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useTranslation } from '../hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TripPreview = ({ translations: trips }) => {
  const data = useStaticQuery(graphql`
    query {
      hondurasTripImage: file(relativePath: { eq: "news/honduras-missions.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1080,
            placeholder: BLURRED
          )
        }
      },
      brazilTripImage: file(relativePath: { eq: "news/brazil-missions.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1080,
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  const hondurasImage = getImage(data.hondurasTripImage);
  const brazilImage = getImage(data.brazilTripImage);
  
  return (
    <div className="col-sm-12">
      <article className="news-info">
        <OutboundLink href={trips.honduras.link}>
          <h2 className="text-center">{trips.honduras.country}</h2>
          <h4 className="text-center">{trips.honduras.date}</h4>
          <div className="news-img">
            <GatsbyImage image={hondurasImage} alt="Dream On: Honduras" />
          </div>
        </OutboundLink>
      </article>
      <article className="news-info">
        {/* <OutboundLink href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020"> */}
          <h2 className="text-center">{trips.brazil.country}</h2>
          <h4 className="text-center">{trips.brazil.date}</h4>
          <div className="news-img">
            <GatsbyImage image={brazilImage} alt="Dream On: Brazil" />
          </div>
        {/* </OutboundLink> */}
      </article>
    </div>
    )
} 

const MissionsPage = () => {
  const { missions: translations } = useTranslation();
  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">{translations.upcomingTripsTitle}</h1>
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
export default MissionsPage;