import React, { ReactElement } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const PlayVideo = (): ReactElement => (
  <section className="video-area parallax">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <OutboundLink
            className="wmBox video-btn hvr-ripple-out"
            href="https://www.youtube.com/watch?v=4767SJIoVNI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-play" aria-hidden="true"></i>
          </OutboundLink>
          <h2>play video</h2>
        </div>
      </div>
    </div>
  </section>
)
export default PlayVideo
