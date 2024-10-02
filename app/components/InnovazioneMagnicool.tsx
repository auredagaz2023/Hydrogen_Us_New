import React from 'react';
import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';

import Magnicool1_Img from '~/assets/Brand/bg-magnicool.jpg';
import Magnicool2_Img from '~/assets/Brand/materasso-magnicool1.jpg';

export const InnovazioneMagnicool = React.forwardRef<HTMLDivElement, any>(
  (props: {keyframe: Keyframes}, ref) => {
    const {keyframe} = props;

    return (
      <div ref={ref}>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <div className="px-3 sm:container	box-border py-8 text-text text-gold uppercase lg:text-xl mb-5">
            <div className="max-w-7xl mx-auto">MAGNICOOL</div>
          </div>
          <div
            className="w-full h-[430px] md:h-[550px] lg:h-[770px] bg-cover bg-center"
            style={{backgroundImage: `url("${Magnicool1_Img}")`}}
          ></div>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-1/3 xxl:w-1/4">
                  <h3 className="font-semibold mb-6 text-cusSubheading lg:text-3xl">
                    Do you find yourself too hot at night?
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12 text-text lg:text-xl">
                  The innovative Magnicool fabric provides a unique sensation of
                  freshness. Like a gentle breeze, it promises an awakening as
                  sweet and fresh as a cloud
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="py-16 md:py-24 lg:py-28 bg-f7">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container text-center text-174860">
              <div className="max-w-7xl mx-auto">
                <div className="w-full lg:px-3">
                  <h3 className="text-cusSubheading font-semibold xl:text-3xl mb-12">
                    The benefits of sleeping cool
                  </h3>
                </div>
                <div className="w-full xl:w-10/12 mx-auto md:flex justify-center">
                  <div className="py-4 pr-5 pl-7 border border-dark-blue mb-5 rounded-full mx-2 flex items-center justify-between">
                    Easier time falling asleep
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0"
                      viewBox="0.5 -3 25 25"
                    >
                      <path
                        fill="#0e9f1a"
                        d="M25.443 1.537a1.53 1.53 0 0 0-2.525-.704L8.864 14.887 3.149 9.173a1.53 1.53 0 0 0-2.2-.035c-.293.293-.455.693-.449 1.108a1.53 1.53 0 0 0 .483 1.093l6.797 6.797a1.53 1.53 0 0 0 1.083.449c.406.001.796-.161 1.083-.449L25.083 2.998c.368-.39.505-.944.36-1.461z"
                      />
                    </svg>
                  </div>
                  <div className="py-4 pr-5 pl-7 border border-dark-blue mb-5 rounded-full mx-2 flex items-center justify-between">
                    Uninterrupted sleep cycles
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0"
                      viewBox="0.5 -3 25 25"
                    >
                      <path
                        fill="#0e9f1a"
                        d="M25.443 1.537a1.53 1.53 0 0 0-2.525-.704L8.864 14.887 3.149 9.173a1.53 1.53 0 0 0-2.2-.035c-.293.293-.455.693-.449 1.108a1.53 1.53 0 0 0 .483 1.093l6.797 6.797a1.53 1.53 0 0 0 1.083.449c.406.001.796-.161 1.083-.449L25.083 2.998c.368-.39.505-.944.36-1.461z"
                      />
                    </svg>
                  </div>
                  <div className="py-4 pr-5 pl-7 border border-dark-blue mb-5 rounded-full mx-2 flex items-center justify-between">
                    Increased metabolism
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0"
                      viewBox="0.5 -3 25 25"
                    >
                      <path
                        fill="#0e9f1a"
                        d="M25.443 1.537a1.53 1.53 0 0 0-2.525-.704L8.864 14.887 3.149 9.173a1.53 1.53 0 0 0-2.2-.035c-.293.293-.455.693-.449 1.108a1.53 1.53 0 0 0 .483 1.093l6.797 6.797a1.53 1.53 0 0 0 1.083.449c.406.001.796-.161 1.083-.449L25.083 2.998c.368-.39.505-.944.36-1.461z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="flex flex-wrap text-174860 md:h-[770px]">
              <div className="w-full lg:w-6/12 self-center">
                <div className="max-w-md my-0 mx-auto px-3">
                  <h3 className="text-cusSubheading xl:text-3xl font-semibold pb-8">
                    Introducing the New Magnicool Fabric:
                  </h3>
                  <p className="relative pl-16 pr-4 pb-4 text-text xl:text-xl before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3">
                    <strong>Thermo-regulation:</strong> This fabric ensures a
                    cool and dry slumber.
                  </p>
                  <p className="relative pl-16 pr-4 pb-4 text-text xl:text-xl before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3">
                    <strong>Freshness:</strong> Experience instant freshness
                    upon contact.
                  </p>
                  <p className="relative pl-16 pr-4 pb-4 text-text xl:text-xl before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3">
                    <strong>High Breathability:</strong> Enjoy excellent
                    breathability for maximum comfort.
                  </p>
                </div>
              </div>
              <div className="w-full h-[300px] lg:h-full lg:w-6/12 bg-[url('../assets/Brand/bg-tessuto-magnicool.jpg')] bg-cover bg-center"></div>
            </div>
          </Fade>
        </section>
        <section>
          <Fade duration={1000} triggerOnce>
            <div className="border-b border-neutral-300">
              <div className="px-3 sm:container">
                <div className=" max-w-7xl mx-auto text-174860">
                  <img
                    src={Magnicool2_Img}
                    className="inline w-full"
                    alt="dualcore image 5"
                  />
                  <div className="flex items-end justify-between py-8 flex-wrap">
                    <div className="inline-block">
                      <h3 className="text-subheading font-semibold pr-6 inline-block">
                        Magnicool
                      </h3>
                      <p className="text-text lg:text-lg inline-block mb-2 lg:mb-0">
                        Mattress with <strong>Thermoregulating</strong>{' '}
                        technology
                      </p>
                    </div>
                    <a
                      className="mb-2 lg:mb-0 font-bold bg-174860 text-white px-10 py-4 pointer uppercase text-xs hover:bg-2f88b1 float-right inline-block whitespace-nowrap"
                      href="/mattresses/magnicool?product=magnicool-10-soft"
                    >
                      Discover the product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    );
  },
);
