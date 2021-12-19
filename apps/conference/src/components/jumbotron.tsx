import React from 'react'

const Jumbotron = () => {
  return (
    <div className="pt-32 sm:pt-32 lg:pt-24 lg:pb-32 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block drop-shadow-2xl">
                  Dream On: Conference 2022
                </span>
              </h1>
              <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl mt-8">
                February 19, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Jumbotron
