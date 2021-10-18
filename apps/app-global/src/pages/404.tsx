import React from 'react'
import PageHeader from '../components/page-header'

import Seo from '../components/seo'
import useTranslation from '../hooks/useTranslation'
import { FeatureTranslations } from '../types'

const NotFoundPage = () => {
  const { fourZeroFour: translations }: { fourZeroFour: FeatureTranslations } =
    useTranslation()
  return (
    <>
      <Seo title={translations.pageTitle} />
      <PageHeader title={translations.pageTitle} />
      <h1>{translations.notFoundTitle}</h1>
      <p>{translations.notFoundDescription}</p>
    </>
  )
}
export default NotFoundPage
