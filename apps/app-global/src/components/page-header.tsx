import React, { ReactElement } from 'react'
import Breadcrumbs, { Breadcrumb } from './breadcrumbs'

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string
  breadcrumbs?: Breadcrumb[]
}): ReactElement => {
  return (
    <section className="page-title-area parallax">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <Breadcrumbs title={title} breadcrumbs={breadcrumbs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageHeader
