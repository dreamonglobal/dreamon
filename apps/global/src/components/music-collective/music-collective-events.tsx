import React from 'react'
import { Link } from 'gatsby'
import { Frontmatter, MarkdownRemark } from '../../types'

const MusicEventPreview = ({
  data: { path, name, photo, title, buy, location, date },
  html,
}: {
  data: Frontmatter
  html: string
}) => (
  <div className="col-sm-6">
    <article className="news-info">
      <Link to={path}>
        <h2 className="text-center">{name}</h2>
        <div className="news-img">
          <img src={photo} alt={name + ' - Dream On: Events'} />
        </div>
      </Link>

      <h3 className="text-center">{title}</h3>
      <h4 className="text-center">
        {date} - {location}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
    </article>
    <hr />
  </div>
)

const MusicCollectiveEvents = ({ events }: { events: MarkdownRemark[] }) => {
  const Events = events.map((event: MarkdownRemark, i: number) => (
    <MusicEventPreview key={i} data={event.frontmatter} html={event.html} />
  ))
  return (
    <>
      <h2>Events</h2>
      <hr />
      {Events}
      <div className="clearfix"></div>
    </>
  )
}
export default MusicCollectiveEvents
