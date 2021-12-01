const sponsorLogos = [
  //   {
  //     name: 'Swartz Contracting',
  //     image: '',
  //   },
]

const Sponsors = () => {
  return (
    <div>
      {sponsorLogos.length > 0 ? (
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                It's How We Do It
              </h2>
              <p className="my-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Conference Sponsors
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              {sponsorLogos.map(
                (sponsor: { name: string; image: string }, i: number) => (
                  <div
                    key={i}
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img
                      className="max-h-12"
                      src={sponsor.image}
                      alt={sponsor.name}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default Sponsors
