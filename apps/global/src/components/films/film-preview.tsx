import { Link } from "gatsby"
import { Frontmatter } from "../../types"

const FilmPreview = ({
    film: { path, title, photo },
    html,
}: {
    film: Frontmatter
    html: string
}) => (
    <div className="col">
    <article className="news-info">
      <Link to={path}>
        <h2 className="text-center">{title}</h2>
        <div className="news-img">
          <img src={photo} alt={title + ' - Dream On: Films'} />
        </div>
      </Link>
    </article>
    <hr />
  </div>
)
export default FilmPreview;