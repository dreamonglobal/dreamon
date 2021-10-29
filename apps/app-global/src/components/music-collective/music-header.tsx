import React from 'react'
import Breadcrumbs from '../breadcrumbs'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Musician, Socials } from '../../types'

function getMusicianPageTitleArea(name: Musician) {
  switch (name) {
    case 'Zac Howard':
      return 'page-title-area-zac parralax'

    case 'Emily Howard':
      return 'page-title-area-emily parralax'

    case 'Lucas Gray':
      return 'page-title-area-lucas parralax'

    case 'Lilli Gray':
      return 'page-title-area-lilli parralax'

    case 'Blake Reynolds':
      return 'page-title-area-blake parralax'

    default:
      return 'page-title-area parralax'
  }
}

const MusicHeader = ({
  title,
  socials,
}: {
  title: Musician
  socials: Socials
}) => {
  const breadcrumbs = [{ name: 'Music Collective', link: '/music' }]
  return (
    <section className={getMusicianPageTitleArea(title)}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title">
              <div className="title">
                <h2>{title}</h2>
              </div>

              <Breadcrumbs title={title} breadcrumbs={breadcrumbs} />

              <div className="socials">
                {socials.facebook ? (
                  <OutboundLink
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-facebook-official fa-2x"
                      aria-hidden="true"
                    ></i>{' '}
                  </OutboundLink>
                ) : null}
                {socials.instagram ? (
                  <OutboundLink
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>{' '}
                  </OutboundLink>
                ) : null}
                {socials.youtube ? (
                  <OutboundLink
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-youtube-play fa-2x"
                      aria-hidden="true"
                    ></i>{' '}
                  </OutboundLink>
                ) : null}
                {socials.spotify ? (
                  <OutboundLink
                    href={socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-spotify fa-2x" aria-hidden="true"></i>{' '}
                  </OutboundLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MusicHeader
