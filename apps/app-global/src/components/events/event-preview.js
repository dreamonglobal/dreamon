import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const EventPreview = ({
  data: {
    path,
    name,
    photo,
    title,
    buy,
    location,
    date
  },
  html
}) => (
  <div className="col">
    <article className="news-info">
      <Link to={path}>
        <h2 className="text-center">{name}</h2>
        <div className="news-img">
          <img src={photo} alt={name + " - Dream On: Events"} />      
        </div>        
      </Link>

      <h3 className="text-center">{title}</h3>
      <h4 className="text-center">{date} - {location}</h4>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>

      {buy
        ? <OutboundLink href={buy} className="tem-btn nav-link move-eff">Register</OutboundLink>
        : <></>
      }

    </article>
    <hr />
  </div>
)
export default EventPreview;