import React, { ReactElement } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useTranslation } from '../hooks'
import { Translations } from '../types'
import { Link } from 'gatsby'

const Buckets = (): ReactElement => {
  const {
    home: { bucket: translations },
  }: { home: { bucket: Translations } } = useTranslation()
  return (
    <section className="donate-wraper">
      <div className="single-donate-wraper donate-wraper-bg-one">
        <h2>{translations.one.title}</h2>
        <OutboundLink
          href={translations.one.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="joinBucketLink"
          className="tem-btn nav-link move-eff"
        >
          <span>{translations.one.button}</span>
        </OutboundLink>
      </div>
      <div className="single-donate-wraper donate-wraper-bg-two"></div>
      <div className="single-donate-wraper donate-wraper-bg-three">
        <h2>{translations.three.title}</h2>
        <Link
          to={translations.three.buttonLink}
          rel="noopener noreferrer"
          data-cy="donateBucketLink"
          className="tem-btn nav-link move-eff"
        >
          <span>{translations.three.button}</span>
        </Link>
      </div>
    </section>
  )
}
export default Buckets
