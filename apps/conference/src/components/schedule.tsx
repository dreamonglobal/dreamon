import { schedule } from '@dreamon/conference-schedule'
import { SpeakerName, speakers } from '@dreamon/conference-speakers'
import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image'
import React from 'react'

const Schedule = () => {
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

  const findSlug = (speaker: SpeakerName): string =>
    speakers.find((s) => s.name === speaker)?.slug

  const findSpeaker = (slug: string): ImageDataLike =>
    data.images.edges.find(
      (edge) => edge.node.relativePath === `speakers/${slug}.jpg`
    )?.node

  const image = (speaker: SpeakerName): IGatsbyImageData =>
    getImage(findSpeaker(findSlug(speaker)))

  return (
    <div
      id="schedule"
      className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative my-24"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            What You'll Do
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Conference Schedule
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Below is a schedule outlining the days events.
          </p>
        </div>
        <div className="text-left">
          <ul className="divide-y divide-gray-200 mt-12">
            {schedule.groups.map((group) =>
              group.sessions.map((session) => (
                <li key={session.id} className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-medium">{session.name}</h3>
                        <p className="text-sm text-gray-500">
                          {session.timeStart}
                        </p>
                      </div>
                      <span className="inline-block relative">
                        {session.speakerNames?.map((speaker: SpeakerName) =>
                          image(speaker) ? (
                            <GatsbyImage
                              key={findSlug(speaker)}
                              className="h-6 w-6 rounded-full"
                              image={image(speaker)}
                              alt={speaker}
                            />
                          ) : null
                        )}
                      </span>
                      <p className="text-sm text-gray-500">
                        {session.description}
                      </p>
                      <p className="text-sm">
                        <span className="inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {session.location}
                        </span>
                      </p>
                      {session.tracks.map((track) => (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Schedule
