import React from 'react';
import { Link } from 'gatsby';

const SpeakerPreview = ({
  data: {
    name,
    photo,
    path
  }
}) => (
  <div className="col-sm-6">
    <article className="news-info">
      <Link to={path}>
        <h2 className="text-center">{name}</h2>
        <div className="news-img">
          <img src={photo} alt={name + " - Dream On: Speaker Collective"} />
        </div>
      </Link>
    </article>
  </div>
)
export default SpeakerPreview;