import React from 'react';
import HubspotForm from 'react-hubspot-form';

const Contact = ({ title, loading }) => (
    <section className="contact-area section-padding" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="title text-center">
                        <h2>{title}</h2>
                        <div className="separate"><span className="separate-icon"></span></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="contact-form">
                    <HubspotForm
                        portalId="7228931"
                        formId="77d53777-1d41-40c0-8d9a-cae73ea4fcca"
                        loading={<div>{loading}</div>}
                    />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default Contact;