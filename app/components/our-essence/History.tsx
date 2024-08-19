import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import image_1 from '~/assets/StoriaBlock/storia-1.jpg';
import image_2 from '~/assets/StoriaBlock/storia-2.jpg';
import image_3 from '~/assets/StoriaBlock/storia-3.jpg';
import familyImage from '~/assets/StoriaBlock/magniflex-family.jpg';
import DATA from '~/data/our-essence';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'react-slick';

type TProps = {
  keyframe: Keyframes;
};
function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export function History({keyframe}: TProps) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section id="history" className="bg-white">
      <div className="essence-block">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex flex-wrap">
            <div className="px-3 w-full lg:w-1/3 xl:w-1/4 2xl:w-1/4 relative mb-6">
              <Reveal
                keyframes={keyframe}
                triggerOnce
                delay={50}
                duration={1000}
              >
                <div>
                  <span className="text-2xl font-semibold text-dark-blue max-w-xxs lg:text-4xl">
                    Our essence
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
              <Reveal
                keyframes={keyframe}
                triggerOnce
                delay={100}
                duration={1000}
              >
                <p className="mb-2 text-text lg:text-xl text-dark-blue">
                  Magniflex is defined by our unwavering commitment to providing
                  the ultimate sleep experience, driven by a passion for
                  innovation and an unwavering respect for the environment.
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-1/3 xl:w-1/3 2xl:w-5/12">
              <Reveal
                keyframes={keyframe}
                triggerOnce
                delay={150}
                duration={1000}
              >
                <p className="mb-2 text-text lg:text-xl text-dark-blue">
                  These core values are the very foundation that allows us to
                  fulfill our dream: offering you a rejuvenating slumber,
                  enabling you to replenish your energy and embrace each day and
                  life with unparalleled well-being.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="storia-images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-3">
        <Reveal keyframes={keyframe} triggerOnce delay={50} duration={1000}>
          <img src={image_1} className="w-full" alt="storia-image-1" />
        </Reveal>
        <Reveal keyframes={keyframe} triggerOnce delay={100} duration={1000}>
          <img src={image_2} className="w-full" alt="storia-image-2" />
        </Reveal>
        <Reveal keyframes={keyframe} triggerOnce delay={150} duration={1000}>
          <img
            src={image_3}
            className="w-full hidden md:block"
            alt="storia-image-3"
          />
        </Reveal>
      </div>
      <div className="laboratory px-3 sm:container bg-white pt-16 pb-4 md:pt-24 lg:pt-28">
        <Reveal keyframes={keyframe} triggerOnce duration={1000}>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="px-3 lg:w-1/2 xl:w-5/12 2xl:w-4/12">
              <p className="text-text text-gold mt-6 mb-4 lg:text-xl">1962</p>
              <p className="text-subheading text-dark-blue font-semibold leading-8 lg:text-3xl">
                In the 1960s, Giuliano Magni created his first mattresses in a
                small workshop. Since then, Magniflex has helped over 50 million
                people sleep.
              </p>
            </div>
            <div className="px-3 lg:w-1/2 xl:w-7/12 2xl:w-7/12 text-xl">
              <p className="text-text text-gold mt-6 mb-4 uppercase lg:text-md">
                THE ORIGINS
              </p>
              <p className="text-text text-dark-blue my-4 lg:text-md">
                In Prato, the world capital of fabrics, sophisticated
                craftsmanship was combined with the most innovative ideas on
                rest and well-being.
              </p>
              <p className="text-text text-dark-blue my-4 lg:text-md">
                Since then, Magniflex has helped more than 50 million people
                sleep well, and wake up even better, thanks to a range of
                solutions and models designed to meet the most varied needs for
                comfort, relaxation, and health.
              </p>
              <p className="text-text text-dark-blue my-4 lg:text-md">
                Over the last 60 years, the passion for research and the
                important investment in innovation, design, and state-of-the-art
                production systems have turned the name of Magniflex into the
                universal synonym of comfort and well-being.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <section className="bg-white">
        <Fade duration={1000}>
          <div
            id="EssenceSilder"
            className="px-3 sm:container bg-white py-16 md:py-24 lg:py-28"
          >
            <div id='HistorySlider'>
              <Slider
              {...settings}
              >
                {DATA.essenceSlider.map((sliderInfo, index) => (
                  <div key={index} className='pr-4'>
                    <div
                      className="pb-[70%] bg-cover bg-center"
                      style={{backgroundImage: `url('${sliderInfo.image}')`}}
                    ></div>
                    <p className="text-subheading text-174860 font-semibold pt-6 pb-2 lg:text-3xl">
                      {sliderInfo.title}
                    </p>
                    <p>{sliderInfo.desc}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Fade>
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28 bg-f7">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div className="flex flex-row flex-wrap justify-between">
              <div className="px-3 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mb-6 lg:mb-0">
                <p className="text-subheading text-dark-blue font-semibold lg:text-4xl">
                  Magniflex today
                </p>
                <p className="text-xl text-dark-blue mt-6">
                  Today, the company is present worldwide with more than 4,000
                  retailers in 99 international markets and is the supplier of
                  more than 500 great hotels. A young and determined management
                  team continues the development of the Magniflex brand along
                  the road traced by President Giuliano Magni, managing an
                  entrepreneurial system with deep territorial roots and an
                  increasingly oriented worldwide expansion.
                </p>
              </div>
              <div className="px-3 lg:w-7/12 xl:w-8/12 2xl:w-8/12">
                <img
                  src={familyImage}
                  alt="magniflex oggi image"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section>
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div>
              <p className="text-text text-gold uppercase lg:text-xl mb-5">
                SHOWROOM
              </p>
              <p className="text-subheading text-8c8c8c lg:text-3xl font-semibold">
                Florence - Tokyo - Cyprus - Dubai - Prague - Kiev - Milan -
                Manila - Sofia - Miami Bangalore - Osaka - Bucarest - Moscow -
                Nanjing - Dongguan - Shanghai - Beijing - Shenzhen - Sidney -
                Rome - Abidjan - Belgrade - Budapest - Bogota - Medellin - Accra
                Zagreb - Santo Domingo - Punta del Este - Buenos Aires -
                Johannesburg - Cape Town
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </section>
  );
}
