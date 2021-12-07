import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const CTA = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "conference-audience-worship.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  `)
  const image: IGatsbyImageData = getImage(data.image)

  return (
    <div className="relative bg-gray-900">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <GatsbyImage
          className="w-full h-full object-cover"
          image={image}
          alt="Dream On: Conference Audience Worshipping"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            2nd Annual
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Dream On: Conference
          </p>
          <p className="mt-3 text-lg text-gray-500">
            Register today for Dream On: Conference 2022.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <OutboundLink
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
                href="https://www.eventbrite.com/e/dream-on-conference-tickets-224197650207"
              >
                Register
                <ChevronRightIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" />
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTA
