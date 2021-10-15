import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import useTranslation from '../hooks/useTranslation';

const Footer = () => {
    const { footer: translations } = useTranslation();
    const date = new Date().getFullYear()
    return (
    <>
        <footer className="footer-area parallax">
            <div className="main-footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="copy-right">
                                <p>{translations.copyright} &copy; {date} <Link to="/">| Dream On: Global |</Link> {translations.allRightsReserved}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Helmet>
            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7228931.js"></script>
        </Helmet>
    </>
    )
}
export default Footer;