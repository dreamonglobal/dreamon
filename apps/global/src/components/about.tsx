import React, { ReactElement } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Translations } from '../types'

const About = ({
  translations: {
    mission,
    missionDescription,
    history,
    historyDescription,
    coreValues,
    coreValueListItems,
    join,
    joinDescription,
    give,
    giveDescription,
    partner,
    partnerDescription,
    buttons,
    links,
  },
}: {
  translations: Translations
}): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "about/dream-team.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  `)
  const image: IGatsbyImageData = getImage(data.aboutImage)

  return (
    <section className="about-area section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="title text-center">
              <h2>{mission}</h2>
              <div className="separate">
                <span className="separate-icon"></span>
              </div>
              <p>{missionDescription}</p>
            </div>
          </div>
        </div>
        <div className="row mb">
          <div className="col-sm-5">
            <div className="about-img">
              <GatsbyImage image={image} alt="Dream On: Global - Dream Team" />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="about-details">
              <h2>{history}</h2>
              <p>{historyDescription}</p>

              <h2>{coreValues}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(coreValueListItems).replace(
                    /['"]+/g,
                    ''
                  ),
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="service-content">
              <h3>{join}</h3>
              <div className="service-icon">
                <i className="fa fa-child" aria-hidden="true"></i>
              </div>
              <p>{joinDescription}</p>
              <Link to={links.join} className="tem-btn move-eff">
                <span>{buttons.learnMoreButton}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="service-content">
              <h3>{give}</h3>
              <div className="service-icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <p>{giveDescription}</p>
              <OutboundLink href={links.donate} className="tem-btn move-eff">
                <span>{buttons.learnMoreButton}</span>
              </OutboundLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="service-content mobile-auto">
              <h3>{partner}</h3>
              <div className="service-icon">
                <i className="fa fa-money" aria-hidden="true"></i>
              </div>
              <p>{partnerDescription}</p>
              <OutboundLink
                href={links.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="tem-btn nav-link move-eff"
              >
                <span>{buttons.donateNowButton}</span>
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
