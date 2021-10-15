import React from 'react';

const MusicVideo = ({video}) => (
  <div className="col-md-6">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={video} title="Dream On: Music Collective Video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
)

const MusicCollectiveVideos = ({videos}) => {
  const Videos = videos
    ? videos.map((video, i) => 
      <MusicVideo key={i} video={video} />
      )
    : null
  return (
    <>
      {Videos
        ? <>
            <h2>Videos</h2>
            <hr />
            {Videos}
            <div className="clearfix"></div>
          </>
        : null}
    </>
  )
}
export default MusicCollectiveVideos;