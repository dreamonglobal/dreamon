import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useTranslation } from "../hooks"
 
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200,
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  const image = getImage(data.logoImage)
  const { menu: translations } = useTranslation();
  return (
    <div className="col-sm-3 col-xs-6">
      <div className="logo">
          <Link className="nav-link" to={translations.homeLink}>
            <GatsbyImage alt="Dream On: Global" image={image} />
          </Link>
      </div>
    </div>
  )
}

export default Logo