import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  About,
  CTA,
  Footer,
  Jumbotron,
  Navigation,
  Schedule,
  Speakers,
  Sponsors,
} from '../components'

const backgroundImageStyles = {
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat-y',
  backgroundSize: 'cover',
}

export default function Index() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "conference-jumbo-background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <BackgroundImage
            fluid={data.image.childImageSharp.fluid}
            style={backgroundImageStyles}
            backgroundColor={'#000000'}
          >
            <Navigation />
            <Jumbotron />
          </BackgroundImage>

          <About />

          <Speakers />

          <hr />

          <Schedule />

          <Sponsors />

          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
