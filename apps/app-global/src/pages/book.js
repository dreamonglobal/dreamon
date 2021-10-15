import React from 'react';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import HubspotForm from 'react-hubspot-form';
import Testimonials from '../components/testimonials';
import { useTranslation } from '../hooks';

const BookPage = () => {
  const { book: translations } = useTranslation();
  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />
      <section className="contact-area section-padding" id="contact">
          <div className="container">
              <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                      <div className="title text-center">
                          <h2>{translations.pageTitle}</h2>
                          <div className="separate"><span className="separate-icon"></span></div>
                      </div>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/R3CcGYBzWno?rel=0" title="About Dream On Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      </div>
                      <hr />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <HubspotForm
                      portalId="7228931"
                      formId="3e3d29ba-748f-49ea-bbf5-d640e590d7b5"
                      loading={<div>Loading...</div>}
                    />

                    <hr />
                    <Testimonials title={translations.testimonialVideosTitle} />
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
export default BookPage;
