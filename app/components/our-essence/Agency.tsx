import {Keyframes} from '@emotion/react';
import Reveal, {Fade} from 'react-awesome-reveal';

import designImage from '~/assets/Agency/design-mattress.jpg';
import materialImage from '~/assets/Agency/materie-prime.jpg';
import paesaggioImage from '~/assets/Agency/paesaggio-toscana.jpg';

type TProps = {
  keyframe: Keyframes;
};

export function Agency({keyframe}: TProps) {
  return (
    <section id="agency">
      <section className="bg-f7">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex flex-wrap justify-between">
            <div className="px-3 w-full lg:w-4/12 xl:w-3/12 2xl:w-3/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-text text-gold uppercase mb-6 lg:text-xl">
                  I Numeri
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-4/12 xl:w-4/12 2xl:w-4/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-dark-blue mb-2 text-text lg:text-xl">
                  <strong> 60 years </strong> of history.
                  <br />A catalog of <strong> 170 products.</strong>
                  <br />
                  Present in <strong> 99 countries.</strong>
                  <br />
                  More than <strong> 4.000 retailers.</strong>
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-4/12 xl:w-4/12 2xl:w-5/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-dark-blue mb-2 text-text lg:text-xl">
                  More than <strong> 40 million clients</strong> worldwide.
                  <br />
                  <strong> 10.000 mattresses</strong> produced each day.
                  <br />
                  Present in more than <strong> 500 hotels.</strong>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-f7">
        <div className="sm:container">
          <p className="text-8xl text-light-gray font-bold text-center whitespace-nowrap lg:text-x-large">
            60 ANNI
          </p>
        </div>
      </section>
      <section className="bg-grya-200 relative z-10">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce>
          <div className="bg-[url('../assets/Agency/background.jpg')] h-banner max-h-banner min-h-banner bg-center bg-no-repeat bg-cover">
            <div className="px-3 sm:container h-full">
              <div className="h-full w-full lg:w-10/12 xl:w-7/12 2xl:w-6/12 flex items-end">
                <Reveal
                  keyframes={keyframe}
                  duration={1000}
                  delay={100}
                  triggerOnce
                >
                  <div className="bg-white h-full py-4 px-6 md:p-12 md:pb-6">
                    <div className="mt-12 md:m-12">
                      <p className="text-text text-gold mb-4 lg:text-xl lg:mt-0">
                        DESIGNED IN ITALY
                      </p>
                      <p className="text-subheading text-dark-blue text-lg font-semibold md:text-2xl">
                        The artisan sensibility and Italian ingenuity create unique products that make “<span className='font-bold'>Designed in Italy</span>” a guarantee of quality worldwide.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-white">
        <div className="px-3 sm:container">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-10/12 xl:w-7/12 2xl:w-6/12">
                <img
                  src={designImage}
                  alt="mattress image"
                  className="w-full"
                />
              </div>
              <div className="px-3 w-full lg:w-5/12 lg:ml-offset-1 xl:w-5/12 2xl:w-3/12">
                <p className="text-xl text-8c8c8c my-4">
                  Today, Magniflex is a leading international 
                  company, considered a spokesperson for 
                  restful sleep, <span className='font-bold'>Designed in Italy</span>, throughout the 
                  world. Our clients across the globe recognize the 
                  unparalleled passion and dedication Magniflex puts 
                  into designing mattresses.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-white">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div className="flex flex-wrap items-center">
              <div className="px-3 w-full lg:w-1/2 xl:w-5/12">
                <p className="text-subheading text-dark-blue font-semibold lg:text-3xl mb-6">
                  The quality of materials and skills at
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-2xl">
                  Magniflex is synonymous with excellence. 
                  The company's products have always been characterized by 
                  the real added value offered to clients – quality. 
                  This is possible because Magniflex products are inspired 
                  by <span className='font-bold'>Italian design and proudly manufactured in the USA.</span> 
                  Our skilled technicians and a team of over 180 professionals 
                  work side by side, <span className='font-bold'>combining Italian craftsmanship with American 
                  manufacturing,</span> sharing their passion and expertise to deliver 
                  the best sleep solutions.
                </p>
              </div>
              <div className="px-3 w-full lg:w-1/2 xl:w-6/12 xl:ml-offset-1">
                <img
                  src={materialImage}
                  alt="magniflex oggi image"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Fade triggerOnce duration={1000}>
        <section className="bg-[url('../assets/Agency/bg-tuscany-banner.jpg')] bg-center bg-no-repeat bg-cover mb-10">
          <div className="px-3 sm:container">
            <div className="flex flex-wrap items-center">
              <div className="px-3 w-full md:w-1/2 lg:w-5/12 xl:w-4/12 xl:ml-offset-1 2xl:w-3/12 py-12">
                <p className="text-subheading text-white font-semibold mb-6 lg:text-3xl">
                  Tuscany, the land of fascination
                </p>
                <p className="text-text text-white lg:text-xl">
                  Magniflex was born in Tuscany, a region blessed by nature,
                  where the beauty of the landscape has always inspired art and
                  artists. It is a type of richness that has positively
                  influenced our corporate culture because, without a doubt,
                  rest is an art too. Undoubtedly, getting the world to wake up
                  well is an art form.
                </p>
              </div>
              <div className="px-3 hidden md:block md:w-1/2 lg:w-1/2 lg:ml-offset-1 xl:w-5/12 2xl:w-4/12 2xl:ml-offset-2">
                <Reveal keyframes={keyframe} triggerOnce duration={1000}>
                  <img
                    src={paesaggioImage}
                    alt="paesaggio image"
                    className="mt-20 -mb-8"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </section>
  );
}
