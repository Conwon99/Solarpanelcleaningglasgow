import { PhoneLink } from "@/components/PhoneLink";

import { locations } from "@/data/locations";

import { services } from "@/data/services";

import { categories } from "@/data/categories";

import { brandName, business, citiesLabel } from "@/data/business";



export const Footer = () => {

  return (

    <section className="bg-[#323232] box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">

      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">

        <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8 md:gap-y-8">

          <div className="box-border caret-transparent flex flex-col gap-y-4">

            <div className="text-white text-lg font-semibold box-border caret-transparent mb-2">

              {brandName()}

            </div>

            <p className="text-white/80 text-sm box-border caret-transparent max-w-xs leading-relaxed">

              Solar panel cleaning specialists serving {citiesLabel()} and surrounding areas. Pure water cleaning, bird proofing and solar panel checks.

            </p>

            {business.facebookUrl && (
            <div className="box-border caret-transparent flex flex-col gap-3 mt-2">

              <div className="text-white text-sm font-semibold box-border caret-transparent">

                Follow Us

              </div>

              <div className="box-border caret-transparent flex gap-4 flex-wrap">

                <a

                  href={business.facebookUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#15803d] hover:decoration-transparent transition-colors duration-300"

                  aria-label={`${brandName()} on Facebook`}

                >

                  <img

                    src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f58e375e253beb4db0e54_facebook.svg"

                    alt=""

                    aria-hidden="true"

                    className="box-border caret-transparent h-5 max-w-full w-5"

                  />

                </a>

              </div>

            </div>
            )}

          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">

            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">

              Quick Links

            </div>

            <a href="/" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

              Home

            </a>

            <a href="/services" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

              Services

            </a>

            <a href="/about" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

              About

            </a>
            <a href="/guides" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">
              Guides
            </a>

            <a href="/contact" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

              Contact

            </a>

            <details className="group box-border caret-transparent mt-2">

              <summary className="text-white text-sm font-semibold box-border caret-transparent cursor-pointer hover:text-[#16a34a]">

                Services

              </summary>

              <div className="box-border caret-transparent flex flex-col gap-y-2 mt-3 pl-3">

                {categories.map((category) => (

                  <a key={category.slug} href={`/${category.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

                    {category.name}

                  </a>

                ))}

                <a href="/locations/hamilton/solar-panel-cleaning" className="text-white/60 text-xs box-border caret-transparent hover:text-[#16a34a] pl-3 transition-colors duration-300">Solar Panel Cleaning in Hamilton</a>

                <a href="/locations/paisley/solar-panel-cleaning" className="text-white/60 text-xs box-border caret-transparent hover:text-[#16a34a] pl-3 transition-colors duration-300">Solar Panel Cleaning in Paisley</a>

                <a href="/locations/east-kilbride/solar-panel-cleaning" className="text-white/60 text-xs box-border caret-transparent hover:text-[#16a34a] pl-3 transition-colors duration-300">Solar Panel Cleaning in East Kilbride</a>

                <a href="/locations/paisley/solar-panel-protection" className="text-white/60 text-xs box-border caret-transparent hover:text-[#16a34a] pl-3 transition-colors duration-300">Solar Panel Bird Proofing in Paisley</a>


                {services.filter((s) => s.slug !== "free-quotes").map((service) => (

                  <a key={service.slug} href={`/services/${service.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

                    {service.shortTitle}

                  </a>

                ))}

              </div>

            </details>

            <details className="group box-border caret-transparent mt-2">

              <summary className="text-white text-sm font-semibold box-border caret-transparent cursor-pointer hover:text-[#16a34a]">

                Locations

              </summary>

              <div className="box-border caret-transparent flex flex-col gap-y-2 mt-3 pl-3 max-h-48 overflow-y-auto">

                <a href="/locations" className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300 font-medium">

                  All Locations

                </a>

                {locations.map((location) => (

                  <a key={location.slug} href={`/locations/${location.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

                    {location.name}

                  </a>

                ))}

              </div>

            </details>

          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">

            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">

              Contact Us

            </div>

            <PhoneLink

              variant="footer"

              showIcon={false}

              className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300"

            />

            <a href={`mailto:${business.email}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#16a34a] hover:decoration-transparent transition-colors duration-300">

              {business.email}

            </a>



          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">

            <div className="text-white text-base font-semibold box-border caret-transparent mb-2 flex items-center gap-2">

              

              Service Area

            </div>

            <div className="box-border caret-transparent w-full h-48 rounded-lg overflow-hidden">

              <iframe

                src={`https://www.google.com/maps?q=${encodeURIComponent(business.primaryCity + ", Scotland")}&output=embed`}

                width="100%"

                height="100%"

                style={{ border: 0 }}

                allowFullScreen

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

                title={`${brandName()} service area map`}

                className="box-border caret-transparent w-full h-full"

              ></iframe>

            </div>



            <p className="text-white/80 text-sm box-border caret-transparent mt-1">

              Serving {citiesLabel()} and surrounding areas

            </p>

          </div>

        </div>

        

        <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 text-center">

          <p className="text-white/60 text-sm box-border caret-transparent">

            © {new Date().getFullYear()} {brandName()}. All rights reserved.

          </p>

        </div>

      </div>

    </section>

  );

};


