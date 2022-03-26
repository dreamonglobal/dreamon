const FilmVideo = ({ video, title }: { video: string, title: string }) => (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={video}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
)
export default FilmVideo