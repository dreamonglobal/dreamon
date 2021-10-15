import React from 'react';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import HubspotForm from 'react-hubspot-form';
import { useTranslation } from '../hooks';

const JoinPage = () => {
    const { join: translations } = useTranslation();
    return (
    <>
        <Seo title={translations.pageTitle} />
        <PageHeader title={translations.pageTitle} />
        <section className="contact-area section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="title text-center">
                            <h2>{translations.joinTheDreamTeamTitle}</h2>
                            <div className="separate"><span className="separate-icon"></span></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <div className="contact-form">
                        <HubspotForm
                            portalId="7228931"
                            formId="efdcf5d0-6f5b-4800-988b-7b10dea2487c"
                            loading={<div>Loading...</div>}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default JoinPage;
