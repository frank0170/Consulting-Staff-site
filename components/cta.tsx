export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-orange-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Aplica acum!</h3>
                <p className="text-white text-lg opacity-75">Cu determinare și inovație, suntem gata să transformăm visele noastre în realitate și să obținem finanțarea necesară pentru a construi un viitor de succes!</p>
              </div>

              {/* CTA button */}
              <div>
              
                <a className="btn text-orange-600 bg-gradient-to-r from-blue-100 to-white" href="mailto:consulting.staff@yahoo.com">Contact</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}