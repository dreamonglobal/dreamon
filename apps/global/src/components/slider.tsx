import React, { ReactElement } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'
import { useTranslation } from '../hooks'
import { Translations } from '../types'

const Slider = (): ReactElement => {
  const {
    home: { slider: translations },
  }: { home: { slider: Translations } } = useTranslation()
  const items = 1
  return (
    <OwlCarousel
      id="home"
      items={items}
      className="banner-area"
      animateOut="slideOutLeft"
      animateIn="fadeIn"
      loop={true}
      dots={true}
      mouseDrag={false}
      autoPlay={true}
      navText={[
        `<i class="fa fa-angle-left" aria-hidden="true"></i>
            <div class="itemprebg"></div>`,
        `<div class="itemnextbg"></div>
            <i class="fa fa-angle-right" aria-hidden="true"></i>`,
      ]}
      nav
    >
      <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/conference.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.one.title}</span>{' '}
                      {translations.one.subtitle}
                    </h1>
                    <p className="fadeIn animated animated-08s">
                      {translations.one.description}
                    </p>
                    <OutboundLink
                      href={translations.one.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                    >
                      <span>{translations.one.button}</span>
                    </OutboundLink>
                    <OutboundLink
                      href={translations.one.buttonLink2}
                      className="tem-btn nav-link move-eff"
                    >
                      <span>{translations.one.button2}</span>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/brazil.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.two.title}</span>{' '}
                      {translations.two.subtitle}
                    </h1>
                    <p className="fadeIn animated animated-08s">
                      {translations.two.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/hes-here.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.three.title}</span>{' '}
                      {translations.three.subtitle}
                    </h1>
                    <p className="fadeIn animated animated-08s">
                      {translations.three.description}
                    </p>
                    <OutboundLink
                      href={translations.three.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                    >
                      <span>{translations.three.button}</span>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/02.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.four.title}</span>{' '}
                      {translations.four.subtitle}
                    </h1>
                    <p>{translations.four.description}</p>
                    <OutboundLink
                      href={translations.four.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                    >
                      <span>{translations.four.button}</span>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/05.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.four.title}</span>{' '}
                      {translations.four.subtitle}
                    </h1>
                    <p>{translations.four.description}</p>
                    <Link
                      to={translations.four.buttonLink}
                      className="tem-btn move-eff"
                    >
                      <span>{translations.four.button}</span>
                    </Link>
                    <Link
                      to={translations.four.button2Link}
                      className="tem-btn move-eff"
                    >
                      <span>{translations.four.button2}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </OwlCarousel>
  )
}
export default Slider
