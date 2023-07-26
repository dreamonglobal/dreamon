import React from 'react'
import PageHeader from '../components/page-header'
import Seo from '../components/seo'
import { useTranslation } from '../hooks'
import { FeatureTranslations } from '../types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const DonatePage = () => {
  const { donate: translations }: { donate: FeatureTranslations } =
    useTranslation()

  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />

      <section className="about-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="title text-center">
              <h2>{translations.pageTitle}</h2>
              <div className="separate">
                <span className="separate-icon"></span>
              </div>
              <p>{translations.financialTransparency}</p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <h3 className="text-center">{translations.waysToGiveTitle}</h3>
                <hr />
            <div className="row text-center">
                <div className="col-sm-12 col-md-6">
                    <div className="col-sm-2">
                        <h5 className="donate-number">1</h5>
                    </div>
                    <div className="col-sm-10">
                        <h4>{translations.addressTitle}</h4>
                        <p dangerouslySetInnerHTML={{ __html: translations.address }}></p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="col-sm-2">
                        <h5 className="donate-number">2</h5>
                    </div>
                    <div className="col-sm-10">
                        <h4>{translations.paypal}</h4>
                    </div>
                <OutboundLink
                    href={translations.donateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tem-btn nav-link move-eff"
                    data-cy="aboutPartnerButton"
                >
                    <span>{translations.pageTitle}</span>
              </OutboundLink>
            </div>
            </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default DonatePage
