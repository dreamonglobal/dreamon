import React, { ReactElement } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useTranslation } from '../hooks'
import { Translations } from '../types'
import { Link } from 'gatsby'

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
          style={{ background: "url('../images/banner/night-of-praise.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.five.title}</span>{' '}
                      {translations.five.subtitle}
                    </h1>
                    <p className="fadeIn animated animated-08s">
                      {translations.five.description}
                    </p>
                    <Link
                      to={translations.five.buttonLink}
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                      data-cy="sliderOneBtn"
                    >
                      <span>{translations.five.button}</span>
                    </Link>
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
          style={{ background: "url('../images/banner/missions.jpg')" }}
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
                    <OutboundLink
                      href={translations.two.buttonLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                      data-cy="sliderTwoBtn"
                    >
                      <span>{translations.two.button}</span>
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
          style={{ background: "url('../images/banner/brazil-cover.jpg')" }}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/night-of-praise.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                <div className="single-banner-con">
                  <div className="single-banner-txt">
                    <h1>
                      <span>{translations.five.title}</span>{' '}
                      {translations.five.subtitle}
                    </h1>
                    <p className="fadeIn animated animated-08s">
                      {translations.five.description}
                    </p>
                    <Link
                      to={translations.five.buttonLink}
                      className="tem-btn nav-link move-eff"
                      data-cy="sliderThreeBtnTwo"
                    >
                      <span>{translations.five.button}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="item">
        <div
          className="single-banner"
          style={{ background: "url('../images/banner/01.jpg')" }}
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
                    <OutboundLink
                      href={translations.two.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tem-btn nav-link move-eff"
                      data-cy="sliderOneBtn"
                    >
                      <span>{translations.two.button}</span>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
                      data-cy="sliderThreeBtn"
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
    </OwlCarousel>
  )
}
export default Slider
