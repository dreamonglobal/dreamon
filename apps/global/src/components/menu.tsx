import { Link } from 'gatsby'
import React, { ReactElement, useState } from 'react'
// import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useTranslation } from '../hooks'
import Modal from 'react-modal'
import { FeatureTranslations } from '../types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ChangeLanguageModal = (): ReactElement => (
  <>
    <h2 data-cy="updateLanguageTitle">Update Language</h2>
    <div>
      <p>
        The Dream On: Global website happily supports the following 3 languages
      </p>
      <a className="tem-btn nav-link move-eff" href="/" data-cy="englishBtn" >
        English (en)
      </a>
      <a className="tem-btn nav-link move-eff" href="/es" data-cy="spanishBtn">
        Spanish (es)
      </a>
      <a className="tem-btn nav-link move-eff" href="/pt" data-cy="portugueseBtn">
        Portuguese (pt)
      </a>
    </div>
  </>
)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Menu = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false)
  const { menu: translations }: { menu: FeatureTranslations } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const openModal = (): void => setModalIsOpen(true)
  const closeModal = (): void => setModalIsOpen(false)

  return (
    <div className="col-sm-9 col-xs-6">
      <div className="menu-part">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div
              className={
                show
                  ? 'collapse navbar-collapse main-menu collapse in'
                  : 'collapse navbar-collapse  main-menu'
              }
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link className="nav-link" to={translations.homeLink}>
                    {translations.home}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={translations.aboutLink}>
                    {translations.about}
                  </Link>
                </li>
                <li>
                  <OutboundLink className="nav-link" href={translations.missionsLink} target='_blank'>
                    {translations.missions}
                  </OutboundLink>
                </li>
                {/* <li>
                  <Link className="nav-link" to={translations.musicLink}>
                    {translations.music}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={translations.speakersLink}>
                    {translations.speakers}
                  </Link>
                </li> */}
                <li>
                  <Link className="nav-link" to={translations.filmsLink}>
                    {translations.films}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={translations.eventsLink}>
                    {translations.events}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={translations.contactLink}>
                    {translations.contact}
                  </Link>
                </li>
                <li>
                  <OutboundLink className="nav-link" target='_blank' href={translations.donateLink}>
                    {translations.donate}
                  </OutboundLink>
                </li>
                <li>
                  <button
                    className="nav-link button-icon"
                    onClick={openModal}
                    title="Change Language"
                    data-cy="changeLanguage"
                  >
                    <i className="fa fa-globe fa-2x"></i>
                  </button>
                </li>
                <Modal
                  isOpen={modalIsOpen}
                  contentLabel="Change Language"
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <ChangeLanguageModal />
                </Modal>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Menu
