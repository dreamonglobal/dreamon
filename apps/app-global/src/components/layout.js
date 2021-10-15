import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import { useLocale } from '../hooks/useLocale';

const Layout = ({ children, locale, isDefault }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { changeLocale } = useLocale();

  // Every time url changes we update our context store
  useEffect(() => {
    changeLocale(locale);
  }, [locale, changeLocale]);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  isDefault: PropTypes.bool.isRequired
}

export default Layout
