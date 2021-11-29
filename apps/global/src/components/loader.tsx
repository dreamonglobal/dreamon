import React, { ReactElement } from 'react'

const Loader = (): ReactElement => (
  <div className="preloader">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
)

export default Loader
