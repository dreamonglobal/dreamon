import React, { ReactElement } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useTranslation } from '../hooks'
import { Translations } from '../types'

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
          className="tem-btn nav-link move-eff"
        >
          <span>{translations.one.button}</span>
        </OutboundLink>
      </div>
      <div className="single-donate-wraper donate-wraper-bg-two"></div>
      <div className="single-donate-wraper donate-wraper-bg-three">
        <h2>{translations.three.title}</h2>
        <OutboundLink
          href={translations.three.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="tem-btn nav-link move-eff"
        >
          <span>{translations.three.button}</span>
        </OutboundLink>
      </div>
    </section>
  )
}
export default Buckets
