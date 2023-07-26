import { useStaticQuery, graphql } from 'gatsby'
import { useLocale } from './useLocale'

const query = graphql`
  query useTranslations {
    allFile(filter: { relativeDirectory: { eq: "translations" } }) {
      edges {
        node {
          name
          childrenTranslationsJson {
            home {
              slider {
                one {
                  title
                  subtitle
                  description
                }
                two {
                  title
                  subtitle
                  description
                  button
                  buttonLink
                }
                three {
                  title
                  subtitle
                  description
                  button
                  buttonLink
                  button2
                  button2Link
                }
                four {
                  title
                  subtitle
                  description
                  button
                  buttonLink
                }
                five {
                  title
                  subtitle
                  description
                  button
                  buttonLink
                }
                six {
                  title
                  subtitle
                  description
                  button
                  buttonLink
                }
              }
              bucket {
                one {
                  title
                  button
                  buttonLink
                }
                three {
                  title
                  button
                  buttonLink
                }
              }
              playVideo
            }
            about {
              pageTitle
              mission
              missionDescription
              history
              historyDescription
              coreValues
              coreValueListItems
              join
              joinDescription
              give
              giveDescription
              partner
              partnerDescription
              buttons {
                learnMoreButton
                donateNowButton
              }
              links {
                join
                donate
              }
              team {
                title
              }
            }
            missions {
              pageTitle
              upcomingTripsTitle
              upcomingTripsDescription
              trips {
                honduras {
                  country
                  date
                  link
                }
                brazil {
                  country
                  date
                  link
                }
              }
            }
            music {
              pageTitle
              meetTheCollectiveTitle
              meetTheCollectiveDescription
            }
            speakers {
              pageTitle
              meetTheCollectiveTitle
              meetTheCollectiveDescription
            }
            board {
              pageTitle
              meetTheCollectiveTitle
              meetTheCollectiveDescription
            },
            films {
              pageTitle
              meetTheSuenosCollectiveTitle
              meetTheSuenosCollectiveDescription
            }
            events {
              pageTitle
              noUpcomingEvents
            }
            contact {
              pageTitle
              contactUs
              loading
            }
            donate {
              pageTitle
              financialTransparency
              waysToGiveTitle
              addressTitle
              address
              paypal
              donateLink
            }
            fourZeroFour {
              pageTitle
              notFoundTitle
              notFoundDescription
            }
            book {
              pageTitle
              testimonialVideosTitle
            }
            join {
              pageTitle
              joinTheDreamTeamTitle
            }
            menu {
              home
              homeLink
              about
              aboutLink
              missions
              missionsLink
              music
              musicLink
              speakers
              speakersLink
              films
              filmsLink
              events
              eventsLink
              store
              storeLink
              contact
              contactLink
              donate
              donateLink
            }
            footer {
              copyright
              allRightsReserved
              privacyPolicy
              board
            }
          }
        }
      }
    }
  }
`

// This hook simplifies query response for current language.
const useTranslation = () => {
  const locale: string = useLocale()
  const { allFile } = useStaticQuery(query)

  // Extract all lists from GraphQL query response
  const queryList = allFile.edges.map((item) => {
    const currentFileTitle = Object.keys(item.node).filter(
      (item) => item !== 'name'
    )[0]

    return {
      name: item.node.name,
      ...item.node[currentFileTitle][0],
    }
  })

  // Return translation for the current locale
  return queryList.filter((lang) => lang.name === locale)[0]
}

export default useTranslation
