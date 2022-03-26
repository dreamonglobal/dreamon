import { graphql } from "gatsby"
import FilmPreview from "../components/films/film-preview"
import PageHeader from "../components/page-header"
import Seo from "../components/seo"
import { useTranslation } from "../hooks"
import { Edge, FeatureTranslations, MarkdownRemark } from "../types"

const FilmsPage = ({
  data: {
    allMarkdownRemark: { edges },
  }
}: {
  data: MarkdownRemark
}) => {
    const { films: translations }: { films: FeatureTranslations } = useTranslation();
    console.log(edges.map(edge => edge.node.frontmatter.category))
    const Films = edges.filter((edge: Edge) => edge.node.frontmatter.category === 'Films')
      .map((edge: Edge) => (
        <FilmPreview key={edge.node.id} film={edge.node.frontmatter} html={edge.node.html}  />
      ))
    return (
        <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />

      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-sm-8 col-sm-offset-2">
                <h1 className="text-center">
                  {translations.meetTheCollectiveTitle}
                </h1>
                <p>{translations.meetTheCollectiveDescription}</p>
              </div>
              {Films}
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default FilmsPage
export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        html
        frontmatter {
          path
          date
          title
          photo
          videos
          category
        }
      }
    }
  }
}
`