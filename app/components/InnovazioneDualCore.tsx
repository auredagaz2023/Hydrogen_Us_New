import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import React, {useState} from 'react';
import Slider from 'react-slick';

import Ricarica1_Img from '~/assets/Brand/bg-dual-core.jpg';
import DualCore1_Img from '~/assets/Brand/materasso-firm-firm.jpg';
import DualCore2_Img from '~/assets/Brand/materasso-firm-soft.jpg';
import DualCore3_Img from '~/assets/Brand/materasso-soft-firm.jpg';
import DualCore4_Img from '~/assets/Brand/materasso-soft-soft.jpg';
import DualCore5_Img from '~/assets/Brand/materasso-magnicool1.jpg';
import DualCore6_Img from '~/assets/Brand/materasso-dolce-vita1.jpg';
import DualCore7_Img from '~/assets/Brand/Screenshot_1.png';

import thumb1 from '~/assets/Brand/thumb1.svg';
import thumb2 from '~/assets/Brand/thumb2.svg';
import thumb3 from '~/assets/Brand/thumb3.svg';
import thumb4 from '~/assets/Brand/thumb4.svg';
import ArrowRight from '~/assets/arrow-right.svg';
import ArrowLeft from '~/assets/arrow-left.svg';

const thumbs = [
  {thumb: thumb1, title: 'SOFT - SOFT'},
  {thumb: thumb2, title: 'SOFT - FIRM'},
  {thumb: thumb3, title: 'FIRM - SOFT'},
  {thumb: thumb4, title: 'FIRM - FIRM'},
];

export const InnovazioneDualCore = React.forwardRef<HTMLDivElement, any>(
  (props, ref) => {
    const {keyframe} = props;
    const [imgState2, setImgState1] = useState(false);

    const handleClickImage1 = () => {
      setImgState1(true);
    };
    const settings = {
      customPaging: (i: number) => {
        return (
          <a>
            <img src={thumbs[i].thumb} />
            <div style={{marginTop: 20, whiteSpace: 'nowrap'}}>
              {thumbs[i].title}
            </div>
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <img src={ArrowRight} alt="arrow-right" />,
      prevArrow: <img src={ArrowLeft} alt="arrow-left" />,
    };

    return (
      <div ref={ref}>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <div className="px-3 sm:container	box-border py-8 text-text text-gold uppercase lg:text-xl mb-5">
            <div className="max-w-7xl mx-auto">Dual core</div>
          </div>
          <div
            className="w-full h-[430px] md:h-[550px] lg:h-[770px] bg-cover bg-center"
            style={{backgroundImage: `url("${Ricarica1_Img}")`}}
          ></div>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-1/3 xxl:w-1/4">
                  <h3 className="font-semibold mb-6 text-cusSubheading lg:text-3xl">
                    Dual-core, comfort for each individual.
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12 text-text lg:text-xl">
                  We all possess distinct body types that dictate our ideal
                  support and comfort levels. In response, Magniflex presents
                  Dual Core. This revolutionary system we've created allows you
                  to share a mattress with your partner seamlessly, eliminating
                  the need for compromises. Through this innovation, the
                  mattress core of specific queen and king sizes is divided into
                  two sections, enabling easy flipping for a firmer comfort
                  choice on either side.
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto text-center text-174860">
                <h3 className="text-cusSubheading lg:text-3xl font-semibold pb-4">
                  Two Varied Comfort Levels within a Single Mattress
                </h3>
                <div className="text-text lg:text-xl font-medium pb-4 ">
                  Explore Combinations of Comfort
                </div>
                <div id="InnovazioneDualCore2">
                  <Slider {...settings}>
                    <img
                      src={DualCore1_Img}
                      className="inline w-3/5"
                      alt="dualcore image 1"
                    />
                    <img
                      src={DualCore2_Img}
                      className="inline "
                      alt="dualcore image 2"
                    />
                    <img
                      src={DualCore3_Img}
                      className="inline"
                      alt="dualcore image 3"
                    />
                    <img
                      src={DualCore4_Img}
                      className="inline"
                      alt="dualcore image 4"
                    />
                  </Slider>
                </div>
                <div className="flex flex-wrap justify-between max-w-5xl my-0 mx-auto">
                  <div className="text-text lg:text-xl w-full md:w-1/2 lg:w-4/12">
                    <p className="mt-6 mb-2 lg:p-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 84 42"
                        width="84"
                        className="mx-auto my-8"
                      >
                        <path
                          d="M42.2 41.7C19.3 41.7.7 23.1.7.2h1c0 22.3 18.2 40.5 40.5 40.5S82.7 22.5 82.7.2h1c0 22.8-18.6 41.5-41.5 41.5z"
                          fill="#b09987"
                        />
                      </svg>
                      <strong className="block mb-1 md:my-6">Side soft</strong>
                      for added plushness and coziness.
                    </p>
                  </div>
                  <div className="text-text lg:text-xl w-full md:w-1/2 lg:w-4/12">
                    <p className="mt-6 mb-2 lg:p-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 84 43"
                        width="84"
                        className="mx-auto my-8"
                      >
                        <path
                          d="M83.9 42.2h-1c0-22.3-18.2-40.5-40.5-40.5S1.9 19.9 1.9 42.2h-1C.9 19.3 19.5.7 42.4.7s41.5 18.6 41.5 41.5z"
                          fill="#174860"
                        />
                      </svg>
                      <strong className="block mb-1 md:my-6">Side firm</strong>
                      For a firmer and more supportive comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className=" max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-7/12 mb-12 lg:px-3">
                  <a
                    className="video-modal-btn video-image-btn relative"
                    onClick={() => handleClickImage1()}
                    role="button"
                  >
                    <img src={DualCore7_Img} alt="Magnistretch image 9" />
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
                          onClick={() => setImgState1(false)}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                              d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                              stroke="currentColor"
                              fill="none"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <iframe
                          className="w-full aspect-video"
                          src=" https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fb2c.magniflex.com%2F&source_ve_path=MTY0NTAz&feature=emb_share&v=jjIeKW9fDfU?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;loop=1"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-5/12 xxl-4/12 lg:px-3">
                  <p className="text-text lg:text-[20px]">
                    <p className="mb-6">
                      <strong className="block mb-1 md:my-2">
                        Double comfort action
                      </strong>
                      Each core side offers distinct comfort. Unzip the
                      mattress, flip the core to your side of the bed, and
                      choose your perfect comfort setting.
                    </p>
                    <p className="mb-6">
                      <strong className="block mb-1 md:my-2">
                        Separate and reversible cores
                      </strong>
                      Ideal for couples, eliminating the need for compromise.
                    </p>
                    <p className="mb-6">
                      <strong className="block mb-1 md:my-2">
                        Perfect harmony
                      </strong>
                      for couples, catering to their differing sleep needs.
                    </p>
                  </p>
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
                    src={DualCore6_Img}
                    className="inline w-full"
                    alt="dualcore image 5"
                  />
                  <div className="flex items-end justify-between py-8 flex-wrap">
                    <div className="inline-block">
                      <h3 className="text-subheading font-semibold pr-6 inline-block">
                        Dolce Vita
                      </h3>
                      <p className="text-text lg:text-lg inline-block mb-2 lg:mb-0">
                        Mattress with <strong>Dual Core</strong> technology
                      </p>
                    </div>
                    <a
                      className="mb-2 lg:mb-0 font-bold bg-174860 text-white px-10 py-4 pointer uppercase text-xs hover:bg-2f88b1 float-right inline-block whitespace-nowrap"
                      href="/mattresses/dolce-vita?product=dolce-vita-dual-10"
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
