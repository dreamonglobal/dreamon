import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image'
import React from 'react'

const features = [
  {
    name: 'Ben Swartz',
    slug: 'ben-swartz',
    description:
      'Ben is the Co-Founder and President of Dream On and Dream On: Speaker Collective Speaker',
  },
  {
    name: 'Ashley Powell',
    slug: 'ashley-powell',
    description:
      'Ashley is a Co-Host of the DO Moms Podcast and Dream On: Speaker Collective Speaker',
  },
  {
    name: 'Hanna Swartz',
    slug: 'hanna-swartz',
    description:
      'Hanna is a Co-Host of the DO Moms Podcast and Dream On: Speaker Collective Speaker',
  },
  {
    name: 'Daniel Lucien',
    slug: 'daniel-lucien',
    description:
      'Pastor Daniel Lucien serves as Lead Pastor at Fostoria Church of God and Dream On Event Coordinator',
  },
  {
    name: 'Lucas Gray',
    slug: 'lucas-gray',
    description:
      'Lucas Gray and his wife Lilli serve as the Worship Pastors at Lima First Church of God and a Dream On: Music Collective Artists',
  },
  {
    name: 'Lilli Gray',
    slug: 'lilli-gray',
    description:
      'Lilli Gray and her husband Lucas serve as the Worship Pastors at Lima First Church of God and a Dream On: Music Collective Artists',
  },
  {
    name: 'Derek Spencer',
    slug: 'derek-spencer',
    description:
      'Derek Spencer serves as the Student Pastor at Real Life Church in Bowling Green, Kentucky and a Dream On: Music Collective Artist',
  },
  {
    name: 'John Peak',
    slug: 'john-peak',
    description:
      'John Peak serves as the Director of Television & Media at Higher Ground Baptist Church in Bristol, Tennesse as well as the Director of Media at Dream On',
  },
  {
    name: 'Ty Watson',
    slug: 'ty-watson',
    description:
      'Ty Watson serves as a Pastor at New Life Church in Siloam Springs Arkansas and Dream On: Speaker Collective Speaker',
  },
  {
    name: 'Rob Kennedy',
    slug: 'rob-kennedy',
    description:
      'Rob Kennedy serves as the Senior Pastor at The Rock Community Church & Transformation Center in Saint Petersburg Florida as well as Dream On: Speaker Collective Speaker and Author',
  },
  {
    name: 'Judy Zircher',
    slug: 'judy-zircher',
    description:
      'Judy Zircher is the Abstinence Educator at Relationships Under Construction as well as the Founder of Purity Ally and Dream On: Speaker Collective Speaker and Author',
  },
  {
    name: 'Jason Harris',
    slug: 'jason-harris',
    description:
      'Jason Harris is the Host of the Forecast Podcast and a Dream On: Speaker Collective Speaker',
  },
  {
    name: 'Craig Flack',
    slug: 'craig-flack',
    description:
      'Craig Flack is the Senior Pastor of Celina First Church of God, Former School Board President and Author',
  },
]

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
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight pt-6">
                      {feature.name}
                    </h3>
                    {image(feature.slug) ? (
                      <GatsbyImage
                        className="inline-block h-48 w-48 rounded-full"
                        image={image(feature.slug)}
                        alt={feature.name}
                      />
                    ) : null}
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
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
