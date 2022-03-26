import { graphql } from "gatsby"
import FilmVideo from "../components/films/film-video"
import PageHeader from "../components/page-header"
import Seo from "../components/seo"
import { AllMarkdownRemark, MarkdownRemark } from "../types"

const Film = ({
    data: {
        markdownRemark: {
            frontmatter: { title, videos, photo },
            html
        },
        allMarkdownRemark: { nodes },
    },
}: {
    data: { markdownRemark: MarkdownRemark, allMarkdownRemark: AllMarkdownRemark }
}) => {
    const breadcrumbs = [{ name: 'Films', link: '/films'}]
    return (
        <>
      <Seo title={title} />
      <PageHeader title={title} breadcrumbs={breadcrumbs} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FilmVideo video={videos.length > 0 ? videos[0] : ""} title={title} />
              <h4 className="text-center">About the Film</h4>
              <div className="text-center" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default Film
export const filmQuery = graphql`
  query($path: String) {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          html
          frontmatter {
            title
            photo
            videos
          }
        }
      }
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          date
          title
          photo
          videos
        }
      }
  }
`