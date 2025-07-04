import React, {useState} from 'react';
import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';

import Magnistretch1_Img from '../assets/Brand/bg-magnistretch.jpg';
import Magnistretch2_Img from '../assets/Brand/universidad-zaragoza.png';
import Magnistretch3_Img from '../assets/Brand/allungamento-schiena-a.jpg';
import Magnistretch4_Img from '../assets/Brand/allungamento-schiena-b.jpg';
import Magnistretch5_Img from '../assets/Brand/bg-lastra-elioform.jpg';
import Magnistretch6_Img from '../assets/Brand/lastra-elioform.jpg';
import Magnistretch7_Img from '../assets/Brand/american-chiroprastic.png';
import Magnistretch8_Img from '../assets/Brand/thumb-video-dQWbtc37ZRI.jpg';
import Magnistretch9_Img from '../assets/Brand/thumb-video-nsVK_xRqzhk.jpg';
import Magnistretch10_Img from '../assets/Brand/thumb-video-Lox5kCylvwQ.jpg';
import Magnistretch11_Img from '../assets/Brand/materasso-magnistretch.jpg';
import {Modal} from './Modal';

export const InnovazioneMagnistretch = React.forwardRef<HTMLDivElement, any>(
  (props: {keyframe: Keyframes}, ref) => {
    const {keyframe} = props;

    const [imgState1, setImgState1] = useState(false);
    const [imgState2, setImgState2] = useState(false);
    const [imgState3, setImgState3] = useState(false);

    const handleClickImage1 = () => {
      setImgState1(true);
    };

    const handleClickImage2 = () => {
      setImgState2(true);
    };

    const handleClickImage3 = () => {
      setImgState3(true);
    };

    return (
      <div ref={ref}>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <div className="px-3 sm:container	box-border py-8 text-text text-gold uppercase lg:text-xl mb-5">
            <div className="max-w-7xl mx-auto">Magnistretch</div>
          </div>
          <div
            className="w-full h-[430px] md:h-[550px] lg:h-[770px] bg-cover bg-center"
            style={{backgroundImage: `url("${Magnistretch1_Img}")`}}
          ></div>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-1/3 xxl:w-1/4">
                  <h3 className="font-semibold mb-6 text-cusSubheading lg:text-3xl">
                    Midnight stretching
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12 text-text lg:text-xl">
                  The MagniStretch technology lengthens the body and stretches
                  the spine from the lumbar area towards the neck and feet. It
                  redistributes weight and increases the space between the
                  vertebrae, meaning that you wake up full of energy and
                  vitality.
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-4/12 xxl:w-3/12">
                  <img
                    src={Magnistretch2_Img}
                    alt="Magnistretch image 2"
                    className="mb-6"
                  />
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12">
                  <p className="text-text text-xl">
                    Resting is not only a pleasure but also essential for living
                    a healthy life filled with zest and for enjoying what we
                    love to do the most.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="relative bg-cover bg-right md:min-h-[360px] md:max-h-[770px] md:h-banner bg-[url('../assets/Brand/testimonial-chiellini.jpg')]">
              <div className="flex items-center py-5 px-4 md:absolute md:right-0 md:h-full md:w-[60%] md:p-12 bg-[#174860b3] xxl:h-full xxl:w-[40%] xxl:px-12 xxl:py-7 2xl:right-[5%] 3xl:right-[10%] 3xl:width:[30%] 3xl:px-14 3xl:py-7">
                <div className="p-2 text-white">
                  <p className="text-cusSubheading font-semibold leading-[1.2] xl:text-[28px] mb-6">
                    Sleeping itself is a pleasure, and sleeping while stretching
                    your back can make waking up the next day a wonderful
                    experience. Once you try it, you'll never want to go back.
                  </p>
                  <hr className="mt-12 mb-7" />
                  <p className="text-cusSubheading font-semibold leading-[1.2] xl:text-[28px] mb-6">
                    Champs Choose MagniStretch
                  </p>
                  <p className="text-[16px] mb-4">
                    MagniStretch technology helps stretch the back while you
                    sleep at night. That's why it has been chosen by star
                    athletes like Giorgio Chiellini and Stefano Tonut.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap center text-174860 pb-16 md:pb-24 lg:pb-28">
                <div className="w-full sm:w-1/2 sm:px-3">
                  <img src={Magnistretch3_Img} alt="Magnistretch image 3" />
                </div>
                <div className="w-full sm:w-1/2 sm:px-3">
                  <img src={Magnistretch4_Img} alt="Magnistretch image 4" />
                </div>
              </div>
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between center text-174860">
                <div className="w-full lg:w-4/12 xxl:w-3/12">
                  <h3 className="text-cusSubheading xl:text-3xl font-semibold mb-6">
                    How it works
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12">
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    The special layers with inclined foam sections respond to
                    the pressure exerted by the body's weight.
                  </p>
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    The mattress applies subtle traction to your spinal column
                    and muscles throughout your body.
                  </p>
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    The space between the vertebrae increases, and the weight is
                    distributed more evenly.
                  </p>
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
                    The benefits of the Magnistretch line
                  </h3>
                </div>
                <div className="w-full xl:w-10/12 mx-auto md:flex justify-center">
                  <div className="py-4 pr-5 pl-7 border border-dark-blue mb-5 rounded-full mx-2 flex items-center justify-between">
                    Magnistretch helps soothe muscle tension and contractions.
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
                    It alleviates neck and back pain
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
                    It improves blood circulation.
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
        <section>
          <Fade duration={1000} triggerOnce>
            <div className="flex flex-col-reverse md:flex-row text-174860 md:h-[770px]">
              <div className="w-full pb-[65%] md:pb-0 md:w-1/2 bg-[url('../assets/Brand/bg-lastra-elioform.jpg')] bg-cover bg-center"></div>
              <div className="w-full md:w-1/2 text-lg">
                <div className="w-full md:w-10/12 md:max-w-[350px] mx-auto">
                  <img
                    src={Magnistretch6_Img}
                    alt="ricarica image 2"
                    className="hidden md:block md:w-full"
                  />
                  <p className="text-[1.1rem] lg:text-lg mt-10 mb-10 lg:mb-0 px-3 lg:max-w-md lg:px-0">
                    The layers in Elioform and Eliosoft are even more flexible,
                    thanks to the innovative Stretch system, which provides
                    ideal support to the spine.
                    <br />
                    The padding is made of Memoform, a soft and anatomical
                    material.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28 bg-f7">
          <Fade duration={1000} triggerOnce>
            <div className="flex flex-col md:flex-row text-174860 md:h-[770px]">
              <div className="w-full md:w-1/2 text-lg self-center">
                <div className="w-full md:w-10/12 md:max-w-[350px] mx-auto">
                  <p className="text-[1.1rem] lg:text-lg mt-10 mb-10 lg:mb-0 px-3 lg:max-w-md lg:px-0">
                    The cover combines soft natural viscose with Outlast®, a
                    temperature-regulating fabric that absorbs excess heat and
                    releases it when needed.
                    <br />
                    It features a micro-perforated and highly breathable side
                    panel for increased airflow
                  </p>
                </div>
              </div>
              <div className="w-full pb-[65%] md:pb-0 md:w-1/2 bg-[url('../assets/Brand/bg-rivestimento-materasso.jpg')] bg-cover bg-center"></div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28 bg-f7">
          <div className="px-3 sm:container">
            <Fade duration={1000} triggerOnce>
              <div className="max-w-7xl mx-auto flex justify-between flex-wrap">
                <div className="w-full lg:w-4/12 xxl:w-3/12">
                  <img
                    src={Magnistretch7_Img}
                    alt="Magnistretch image 7"
                    className="mb-6"
                  />
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12">
                  <p className="text-text text-174860 xl:text-xl">
                    In July 2017, the ACA (American Chiropractic Association),
                    the largest chiropractic association in the United States,
                    certified the beneficial effects of the Magnistretch
                    mattress, which stretches and relaxes your back
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28 bg-f7">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
                <div className="w-full sm:w-4/12 mb-4 sm:px-3">
                  <div>Why MagniStretch</div>
                  <a
                    className="video-modal-btn video-image-btn relative"
                    onClick={() => handleClickImage1()}
                    role="button"
                  >
                    <img
                      src={Magnistretch8_Img}
                      className="video-image"
                      alt="Magnistretch image 8"
                    />
                  </a>
                  {imgState1 && (
                    <div
                      className="video-modal z-50"
                      id="InnovazioneMagnistretchModal"
                    >
                      <div className="basis-6/12">
                        <button
                          type="button"
                          style={{
                            filter:
                              'invert(1) grayscale(100%) brightness(200%)',
                          }}
                          onClick={() => setImgState1(false)}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                              d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                              stroke="currentColor"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/bBxfAvlVYdA?rel=0&loop=0"
                          title="Tecnologia Dual Core Magniflex"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-4/12 mb-4 sm:px-3">
                  <div>How it works</div>
                  <a
                    className="video-modal-btn video-image-btn relative"
                    onClick={() => handleClickImage2()}
                    role="button"
                  >
                    <img src={Magnistretch9_Img} alt="Magnistretch image 9" />
                  </a>
                  {imgState2 && (
                    <div
                      className="video-modal z-50"
                      id="InnovazioneMagnistretchModal"
                    >
                      <div className="basis-6/12">
                        <button
                          type="button"
                          style={{
                            filter:
                              'invert(1) grayscale(100%) brightness(200%)',
                          }}
                          onClick={() => setImgState2(false)}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                              d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                              stroke="currentColor"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/FXDGX4Dc5K4?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;loop=1"
                          title="Tecnologia Dual Core Magniflex"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-4/12 mb-4 sm:px-3">
                  <div>Approved by Medical Professionals</div>
                  <a
                    className="video-modal-btn video-image-btn relative"
                    onClick={() => handleClickImage3()}
                    role="button"
                  >
                    <img src={Magnistretch10_Img} alt="Magnistretch image 10" />
                  </a>
                  {imgState3 && (
                    <div
                      className="video-modal z-50"
                      id="InnovazioneMagnistretchModal"
                    >
                      <div className="basis-6/12">
                        <button
                          type="button"
                          style={{
                            filter:
                              'invert(1) grayscale(100%) brightness(200%)',
                          }}
                          onClick={() => setImgState3(false)}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                              d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                              stroke="currentColor"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/WcMRRCPQFZ8?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;loop=1"
                          title="Tecnologia Dual Core Magniflex"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section>
          <Fade duration={1000} triggerOnce>
            <div className="border-b border-neutral-300 relative after:bg-f7 after:w-full after:h-1/3 after:absolute after:block after:top-0 after:-z-10">
              <div className="px-3 sm:container">
                <div className=" max-w-7xl mx-auto text-174860">
                  <img
                    src={Magnistretch11_Img}
                    className="inline w-full"
                    alt="dualcore image 5"
                  />
                  <div className="flex items-end justify-between py-8 flex-wrap">
                    <div className="inline-block">
                      <h3 className="text-subheading font-semibold pr-6 inline-block">
                        Magnistretch
                      </h3>
                    </div>
                    <a
                      className="mb-2 lg:mb-0 font-bold bg-174860 text-white px-10 py-4 pointer uppercase text-xs hover:bg-2f88b1 float-right inline-block whitespace-nowrap"
                      href="/mattresses/magnistretch?product=magnistretch-sport-10"
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
