import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Frontmatter } from '../../types'

const formatDate = (date: string) => (
  new Date(date).toDateString()
)

const EventPreview = ({
  event: { path, name, photo, title, buy, location, date },
  html,
}: {
  event: Frontmatter
  html: string
}) => (
  <div className="col">
    <article className="news-info">
      <Link to={path}>
        <h2 className="text-center">{name}</h2>
        <div className="news-img">
          <img src={photo} alt={name + ' - Dream On: Events'} />
        </div>
      </Link>

      <h3 className="text-center">{title}</h3>
      <h4 className="text-center">
        {formatDate(date)} - {location}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>

      {buy ? (
        <OutboundLink href={buy} className="tem-btn nav-link move-eff">
          Register
        </OutboundLink>
      ) : (
        <></>
      )}
    </article>
    <hr />
  </div>
)
export default EventPreview
