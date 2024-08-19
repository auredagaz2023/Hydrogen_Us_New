import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';

import Sottovuoto1_Img from '../assets/Brand/signor-magniflex.jpg';
import Sottovuoto2_Img from '../assets/Brand/Sottovuoto-gif.gif';
import Slider from 'react-slick';
import React from 'react';

export const InnovazioneLavorazioni = React.forwardRef<HTMLDivElement, any>(
  (props: {keyframe: Keyframes}, ref) => {
    const {keyframe} = props;

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      fade: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: 'slick-dots px-3 sm:container d-flex',
    };

    return (
      <div ref={ref}>
        <section>
          <div className="px-3 sm:container	box-border py-8 text-text text-gold uppercase lg:text-xl mb-5">
            <div className="max-w-7xl mx-auto">
              MATTRESS LAYER MANUFACTURING PROCESS
            </div>
          </div>
        </section>
        <section id="innovationSlider">
          <Fade duration={1000} triggerOnce>
            <Slider {...settings}>
              <div className="item pb-40">
                <div className="bg-[url('../assets/Brand/bg-slide-lavorazione-traspirante.jpg')] bg-cover bg-center mb-8 w-full flex items-end h-[200px] md:h-[350px] 2xl:h-[450px]">
                  <div className="px-3 sm:container">
                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white p-4 md:px-12 md:py-6 w-full flex flex-col items-center text-center md:block md:text-left md:w-1/2 h-[180px] xl:h-[240px]">
                        <div className="text-gold w-24 pb-4 text-text xl:text-xl border-b border-174860">
                          <strong>01</strong>
                        </div>
                        <h3 className="text-cusSubheading xl:text-3xl font-semibold max-w-sm text-174860">
                          Breathable design with varying differentiated support
                          zones
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 sm:container relative z-10 pb-14">
                  <div className="max-w-7xl mx-auto">
                    <p className="text-174860 text-text xl:text-xl pt-4 pl-4 md:px-16 md:py-6 md:pb-14">
                      Thanks to the holes featured in the layer, this special
                      design ensures that the mattress delivers perfect
                      breathability and optimal dispersion of moisture and heat.
                      The constant air circulation inside the mattress and
                      pillow ensures ideal heat exchange between the layer, the
                      fabrics, and your body. In addition, since each part of
                      the body applies a different amount of pressure, the
                      mattress provides differentiated support to the different
                      parts of your body distributing and balancing the weight
                      in each part of the body to always offer the best support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item pb-40">
                <div className="bg-[url('../assets/Brand/bg-slide-lavorazione-massaggiante.jpg')] bg-cover bg-center mb-8 w-full flex items-end h-[200px] md:h-[350px] 2xl:h-[450px]">
                  <div className="px-3 sm:container grow">
                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white p-4 md:px-12 md:py-6 w-full flex flex-col items-center text-center md:block md:text-left md:w-1/2 h-[180px] xl:h-[240px]">
                        <div className="text-gold w-24 pb-4 text-text xl:text-xl border-b border-174860">
                          <strong>02</strong>
                        </div>
                        <h3 className="text-cusSubheading xl:text-3xl font-semibold max-w-sm text-174860">
                          Massaging processing
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 sm:container relative z-10 pb-14">
                  <div className="max-w-7xl mx-auto">
                    <p className="text-174860 text-text xl:text-xl pt-4 pl-4 md:px-16 md:py-6 md:pb-14">
                      The massaging process regenerates the microcirculation of
                      the body with a constant action during rest. The result is
                      a pleasant sensation of widespread well-being and
                      continuous comfort. This special workmanship also offers
                      differentiated support to the head, shoulders, back, legs
                      and ankles, guaranteeing perfect support for every part of
                      the body.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item pb-40">
                <div className="bg-[url('../assets/Brand/bg-slide-lavorazione-scacco.jpg')] bg-cover bg-center mb-8 w-full flex items-end h-[200px] md:h-[350px] 2xl:h-[450px]">
                  <div className="px-3 sm:container grow">
                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white p-4 md:px-12 md:py-6 w-full flex flex-col items-center text-center md:block md:text-left md:w-1/2 h-[180px] xl:h-[240px]">
                        <div className="text-gold w-24 pb-4 text-text xl:text-xl border-b border-174860">
                          <strong>03</strong>
                        </div>
                        <h3 className="text-cusSubheading xl:text-3xl font-semibold max-w-sm text-174860">
                          Massaging system
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 sm:container relative z-10 pb-14">
                  <div className="max-w-7xl mx-auto">
                    <p className="text-174860 text-text xl:text-xl pt-4 pl-4 md:px-16 md:py-6 md:pb-14">
                      The massaging feature in the mattress revitalizes the
                      body's microcirculation, working non-stop while you are
                      asleep. The result is a pleasant feeling of well-being and
                      continuous comfort. This special process also offers
                      differentiated support to the different parts of your
                      body.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item pb-40">
                <div className="bg-[url('../assets/Brand/bg-slide-lavorazione-canali.jpg')] bg-cover bg-center mb-8 w-full flex items-end h-[200px] md:h-[350px] 2xl:h-[450px]">
                  <div className="px-3 sm:container grow">
                    <div className="max-w-7xl mx-auto">
                      <div className="bg-white p-4 md:px-12 md:py-6 w-full flex flex-col items-center text-center md:block md:text-left md:w-1/2 h-[180px] xl:h-[240px]">
                        <div className="text-gold w-24 pb-4 text-text xl:text-xl border-b border-174860">
                          <strong>04</strong>
                        </div>
                        <h3 className="text-cusSubheading xl:text-3xl font-semibold max-w-sm text-174860">
                          Channel processing
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 sm:container relative z-10 pb-14">
                  <div className="max-w-7xl mx-auto">
                    <p className="text-174860 text-text xl:text-xl pt-4 pl-4 md:px-16 md:py-6 md:pb-14">
                      The channel processing favors the internal transpiration
                      of the slabs: the air, passing through the channels, helps
                      to dissipate the internal humidity, favoring the
                      maintenance of a dry environment, in favor of general
                      comfort. The 5 zones of the body (head, shoulders, back,
                      legs and ankles) have differentiated and personalized
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </Fade>
        </section>
      </div>
    );
  },
);
