import React, { ReactElement } from 'react'
import Video from '../components/video'

const Testimonials = ({ title }: { title: string }): ReactElement => (
  <div className="row">
    <h2 className="text-center">{title}</h2>
    <hr />
    <div className="col-sm-12">
      <Video
        url="https://www.youtube.com/embed/hdovhod9QXQ"
        title="Pastor Hughes Video Testimony"
      />
      <hr />
      <Video
        url="https://www.youtube.com/embed/YImXuNOC3Xg"
        title="Pastor Ty Watson Video Testimony"
      />
    </div>
  </div>
)
export default Testimonials
