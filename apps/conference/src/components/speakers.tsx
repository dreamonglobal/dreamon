import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image'
import React from 'react'
import { speakers } from '@dreamon/conference-speakers'

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "speakers" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const findSpeaker = (slug: string): ImageDataLike =>
    data.images.edges.find(
      (edge) => edge.node.relativePath === `speakers/${slug}.jpg`
    )?.node

  const image = (slug: string): IGatsbyImageData => getImage(findSpeaker(slug))

  return (
    <div id="speakers" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          Who You'll Hear
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Conference Speakers
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          The Conference will feature speakers from the Dream On Team and the
          Dream On: Speaker Collective
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight pt-6">
                      {speaker.name}
                    </h3>
                    {image(speaker.slug) ? (
                      <GatsbyImage
                        className="inline-block h-48 w-48 rounded-full"
                        image={image(speaker.slug)}
                        alt={speaker.name}
                      />
                    ) : null}
                    <p className="mt-5 text-base text-gray-500">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Speakers
