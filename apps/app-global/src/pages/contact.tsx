import React from 'react'
import Contact from '../components/contact'
import PageHeader from '../components/page-header'
import Seo from '../components/seo'
import { useTranslation } from '../hooks'
import { FeatureTranslations } from '../types'

const ContactPage = () => {
  const { contact: translations }: { contact: FeatureTranslations } =
    useTranslation()

  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />
      <Contact title={translations.contactUs} loading={translations.loading} />
    </>
  )
}

export default ContactPage
