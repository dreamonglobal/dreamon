import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "derek-and-becky-johnson.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
  `)
  const image: IGatsbyImageData = getImage(data.image)

  return (
    <div id="about" className="relative bg-gray-100 pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            It's Where It All Started
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            About The Conference
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-700">
            5 Year's ago Dream On: Global was founded and kicked off their
            ministry with the Dream On: Conference. Since then, the Dream On
            team has ministered to thousands of people all across the globe
            about God's plans and purposes their lives. The Dream On team is
            excited to announce that they will be hosting another Dream On:
            Conference on Saturday February 19, 2022
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-32">
          <GatsbyImage
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            image={image}
            alt="Derek & Becky Johnson at the Dream On: Conference"
          />
        </div>
      </div>
    </div>
  )
}
export default About
