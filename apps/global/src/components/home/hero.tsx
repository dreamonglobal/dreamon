import Link from 'next/link';
import paintShape from '../../../public/images/shape/shape_71.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-banner-five text-center position-relative">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-10 m-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h1 className="hero-heading text-white mb-50 md-mb-30">
              <span className="position-relative">
                Raise <Image src={paintShape} alt="shape" />
              </span>
              <br /> Your Helping Hands
            </h1>
            <h5 className="tx-light fw-normal mt-40">
              We aren&apos;t able to do any of the things we do without the
              support of people just like you.
            </h5>
            <br />
          </div>
        </div>
        {/* End .row */}

        <Link
          href="/contact"
          className="donate-btn fw-500 tran3s mt-150"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          Donate now
        </Link>
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
