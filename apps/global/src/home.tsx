import Seo from "./components/common/seo";
import Header from "./components/header/header";
import Blog from "./components/home/blog";
import BrandSlider from "./components/home/brand-slider";
import CallToAction from "./components/home/call-to-action";
import CampaignBlock from "./components/home/campaign-block";
import CampaignBlock2 from "./components/home/campaign-block2";
import ContactUs from "./components/home/contact-us";
//import Counter from "./components/home/counter";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
import HowCanHelpBlock from "./components/home/how-can-help-block";
import IntroAction from "./components/home/intro-action";
import IntroVideo from "./components/home/intro-video";
import Team from "./components/home/team";
import Footer from "./components/home/footer";

const home = () => {
  return (
    <div className="pattern-bg-one">
      <Seo pageTitle="Home" />

      {/* <!--  =============================================
        Theme Header4 Menu
        ============================================== 	--> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      {/* 
        =============================================
        Feature Section Fourteen
        ============================================== 
        */}
      <div className="fancy-feature-fourteen position-relative">
        <div className="container">
          <div className="row center-feature">
            <Features />
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Fifteen
        ============================================== 
        */}
      <div className="fancy-feature-fifteen  mt-140 lg-mt-70">
        <img
          src="/images/shape/shape_76.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="container">
          <IntroAction />
          <IntroVideo />
        {/*<Counter />*/}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Sixteen
        ============================================== 
        */}
      <div className="fancy-feature-sixteen position-relative pt-120 pb-80 mt-225 mb-150 lg-mt-130 lg-pt-80 lg-pb-50 lg-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-style-six text-center " data-aos="fade-up">
                <div className="sc-title" style={{ color: "##cc446c" }}>
                  Featured Causes
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  You can help lots of people by donating little.
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
        </div>
        {/* End container */}

        <div className="inner-wrapper pt-50 lg-pt-10">
          <div className="row">
            <CampaignBlock />
          </div>
        </div>
        {/* /.inner-wrapper */}

        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between text-center text-md-start mt-100 md-mt-50">
            <div>
              <div className="ins-title">See all Campaign</div>
              <h3 className="tx-dark">Click the button see all causes</h3>
            </div>
            <a href="#" className="btn-one fw-500 sm-mt-20">
              See all campaign
            </a>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Seventeen
        ============================================== 
        */}
      <HowCanHelpBlock />

      {/*
        =====================================================
        Feature Section Eighteen
        =====================================================
        */}
      <div
        className="fancy-feature-eighteen mt-160 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="d-sm-flex">
          <CampaignBlock2 />
        </div>
      </div>

      {/*
		=====================================================
        Team Section One
        =====================================================
        */}
      <div className="team-section-one position-relative mt-150 pb-200 lg-mt-100 lg-pb-100">
        <img
          src="/images/shape/shape_81.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_82.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6" data-aos="fade-right">
              <div className="title-style-six text-center text-md-start">
                <h2 className="main-title fw-500 tx-dark">
                  Our Dedicated volunteer.
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
            {/* End .col-lg-5 */}

            <div
              className="col-lg-7 col-md-6 text-center text-md-end"
              data-aos="fade-left"
            >
              <a href="#" className="btn-nine border3 fw-500 sm-mt-10">
                More about team
              </a>
            </div>
            {/* End .col-lg-7 */}
          </div>
          {/* /.row */}

          <div className="row gx-xxl-5 pt-40 lg-pt-10">
            <Team />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>

      {/*
        =====================================================
        Fancy Short Banner Six
        =====================================================
        */}
      <div className="fancy-short-banner-six d-lg-flex">
        <div className="block-wrapper left-side d-flex justify-content-center justify-content-lg-end align-items-center">
          <div className="inner-wrapper" data-aos="fade-right">
            <div className="row">
              <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="title-style-six">
                  <h2 className="main-title fw-500 text-white">
                    Do you want to help the poor?
                  </h2>
                </div>
                {/* /.title-style-six */}
                <p className="m0 text-white text-lg pt-50 lg-pt-30 md-pt-10">
                  Fill the form &amp; becaome a part of us.
                </p>
              </div>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* /.block-wrapper */}

        <div className="block-wrapper right-side d-flex justify-content-center justify-content-lg-start align-items-center">
          <div className="inner-wrapper md-pt-50 md-pb-90" data-aos="fade-left">
            <div className="row">
              <div className="col-xxl-10 col-lg-11 ms-auto">
                <h3 className="form-title tx-dark mb-50 lg-mb-30">Join Now!</h3>
                <div className="form-style-one">
                  <ContactUs />
                </div>
                {/* /.form-style-one */}
              </div>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* /.block-wrapper */}
      </div>

      {/*
        =====================================================
        Blog Section Two
        =====================================================
        */}
      <div className="blog-section-two mt-170 lg-mt-100">
        <div className="container">
          <div
            className="title-style-six text-center mb-50 lg-mb-10"
            data-aos="fade-up"
          >
            <div className="sc-title" style={{ color: "##cc446c" }}>
              Our News
            </div>
            <h2 className="main-title fw-500 tx-dark">Our latest News</h2>
          </div>
          {/* /.title-style-six */}

          <div className="row">
            <Blog />
          </div>
          {/* /.row */}
        </div>
      </div>

      {/* 
			=============================================
				Partner Section Three
			============================================== 
			*/}
      <div className="partner-section-three position-relative pt-170 lg-pt-100">
        <div className="container">
          <div className="title tx-dark text-uppercase text-center mb-55 lg-mb-30">
            Over <span>200+</span> partner currently have us
          </div>
          <div className="partner_slider_one row">
            <BrandSlider />
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*
			=====================================================
				CalltoActions Banner Seven
			=====================================================
			*/}
      <CallToAction />

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <Footer />
    </div>
    // End page wrapper
  );
};

export default home;
