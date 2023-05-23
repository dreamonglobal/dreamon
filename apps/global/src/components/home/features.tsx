const features = [
  {
    icon: '/images/icon/icon_45.svg',
    title: 'Get details about joining our next trip',
    color: '#FF5555',
    delay: 100,
  },
  {
    icon: '/images/icon/icon_44.svg',
    title: 'Learn more about our mission',
    color: '#36E0D1',
    delay: 200,
  },
  {
    icon: '/images/icon/icon_46.svg',
    title: 'We need your help changing the world',
    color: '#FFD94F',
    delay: 300,
  }
];

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div className="card-style-seven mb-30 text-center position-relative tran3s ">
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-35">{feature.title}</h4>
            <a href="#" className="read-btn tran3s">
              Read More
            </a>
            <span
              className="ribbon position-absolute"
              style={{ background: feature.color }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
