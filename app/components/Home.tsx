import {Fade, Reveal} from 'react-awesome-reveal';
import {Button, Link, Text} from '~/components';
import {HomeHeroSlider} from './HomeHeroSlider';
import {CollectionLinks} from './CollectionLinks';
import {HomeCollectionsSlider} from './HomeCollectionsSlider';
import {HomeBestsellers} from './HomeBestsellers';
import {TestMattressWidget} from './TestMattressWidget';
import {OutdoorSlider} from './OutdoorSlider';
import {SocialSlider} from './SocialSlider';

import badge from '../assets/Home/magniflex-badge-60years.png';
import sustainable from '../assets/Home/sustainable-development-goals.png';
import raccontidivitasx from '../assets/Home/racconti-di-vita-sx.jpg';
import raccontidivitacenter from '../assets/Home/racconti-di-vita-center.jpg';
import raccontidivitadx from '../assets/Home/racconti-di-vita-dx.jpg';
import certificazioni from '../assets/Home/certificazioni.png';
import blog_1 from '../assets/Home/blog1.jpg';
import blog_2 from '../assets/Home/blog2.jpg';
import blog_3 from '../assets/Home/blog3.jpg';

export function Home() {
  return (
    <section className="bg-white">
      <Fade duration={1000}>
        <HomeHeroSlider />
      </Fade>
      <Fade duration={1000}>
        <CollectionLinks />
      </Fade>
      <Reveal duration={1000}>
        <div className="container pt-24">
          <h3 className="text-xl md:text-5xl text-174860 text-center font-semibold leading-tight">
            Buy the Magniflex collections,
            <br />
            masterpieces of comfort and relaxation.
          </h3>
          <p className="text-neutral-400 text-center py-4 text-xl">
            Discover the entire range of Magniflex products and let yourself be
            inspired.
          </p>
        </div>
      </Reveal>
      <Fade duration={1000}>
        <HomeCollectionsSlider />
      </Fade>
      <Fade duration={1000}>
        <HomeBestsellers />
      </Fade>
      <Fade duration={1000}>
        <TestMattressWidget />
      </Fade>
      <Reveal duration={1000} triggerOnce>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-4/12 xl:w-5/12 flex items-center pt-12 md:order-2 md:bg-174860">
            <img
              src={badge}
              alt="60 years"
              className="w-[130px] md:w-[330px] max-w-[100%] h-auto"
            />
          </div>
          <div className="w-full md:ml-[8%] md:w-7/12 lg:w-6/12 xl:w-5/12 self-center md:py-12 md:my-12 pb-12 md:order-1 text-center md:text-left mt-6 mx-[50px]">
            <span className="uppercase text-B09987 text-xl font-semibold border-b border-174860 pb-4">
              OUR ESSENCE
            </span>
            <h2 className="text-174860 font-semibold text-cusheading xl:text-5xl py-8 leading-tight ">
              At night, we bring life to your days
              <br />
              <span className="text-B09987">for over 60 years.</span>
            </h2>
            <p className="text-174860 text-xl pt-5 pb-5 mb-5 max-w-[590px]">
              Thanks to its ultra-performing technology, Magniflex offers you
              the experience of living your every day to the fullest
            </p>
            <Link
              to="/our-essence"
              className="uppercase text-174860 font-semibold text-sm border border-174860 py-3 px-9 transition hover:text-white hover:bg-174860"
            >
              Discover more
            </Link>
          </div>
        </div>
      </Reveal>
      <Fade duration={1000}>
        <div className='bg-[url("../assets/Home/bg-sustainable.jpg")] bg-cover bg-center py-[70px] md:py-[90px] 3xl:pt-20 3xl:pb-36'>
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full md:ml-[8%] md:w-7/12 lg:w-6/12 xl:w-5/12 self-center px-3">
              <div>
                <h3 className="font-semibold text-cusheading xl:text-[50px] text-white mb-2">
                  We build the world we dream of
                </h3>
                <div className="max-w-[260px] border-t border-[#dee2e6] mt-12 pt-4">
                  <p className="text-white text-xl py-5 mb-4">
                    choosing shared paths of sustainable growth
                    <br />
                    <br />
                    to leave a more livable world for future generations.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:ml-[8%] xl:w-5/12 px-3">
              <div className="flex flex-col justify-between items-center h-full mx-auto max-w-[280px] text-center">
                <div>
                  <img
                    src={sustainable}
                    alt="sustainable"
                    className="mx-auto mb-6"
                  />
                </div>
                <div className="py-5 mb-4 px-4">
                  <p className="text-white font-semibold uppercase text-lg">
                    We believe in a sustainable future
                  </p>
                  <div className="flex justify-center mt-6">
                    <Link
                      to="/sustainability"
                      className="uppercase text-white font-semibold text-xs border border-white py-3 px-9 transition hover:bg-2f88b1"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Reveal duration={1000} triggerOnce>
        <div className="flex flex-wrap justify-between">
          <div className=" hidden md:block w-full md:w-6/12 lg:w-5/12">
            <div>
              <img
                src={raccontidivitasx}
                alt="racconti-di-vita-sx"
                className="w-full"
              />
            </div>
            <div className="w-1/2 float-right px-3 md:px-0">
              {/* <p className="text-8c8c8c text-[16px] xl:text-xl my-5 font-medium mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate.
              </p> */}
              <div className="flex mt-5">
                <Link
                  to="/"
                  className="uppercase text-174860 font-semibold text-xs xl:text-sm border border-174860 py-3 px-3 md:px-9 transition hover:text-white hover:bg-174860"
                >
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-5/12 lg:w-4/12 p-12 pb-0">
            <h3 className="font-semibold text-cusheading xl:text-5xl text-174860">
              Your well-being recharged
            </h3>
            <div className="text-B09987 text-text xl:text-xl uppercase relative text-right w-full before:absolute before:bg-174860 before:w-full before:h-px before:left-0 before:top-3.5 mt-10 mb-12">
              <span className="pl-4 bg-white relative z-10">Life stories</span>
            </div>
            <div>
              <img
                src={raccontidivitacenter}
                alt="racconti-di-vita-center"
                className="w-full"
              />
            </div>
          </div>
          <div className=" hidden md:block w-full md:w-3/12">
            <div className="hidden lg:block">
              <img
                src={raccontidivitadx}
                alt="raccontidivitadx"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className='mt-4 md:mt-0 bg-[url("../assets/Home/bg-testimonial.jpg")] md:min-h-[360px] md:max-h-[770px] md:h-banner bg-cover text-center py-[70px] md:py-[90px]'>
          <div className="px-3 sm:container flex flex-col h-full justify-center items-center">
            <h3 className="font-semibold text-cusheading xl:text-5xl text-white leading-tight pb-8">
              Champions choose Magnistretch
            </h3>
            <Link
              to="/collections/magnistretch"
              className="uppercase text-white font-semibold text-xs border border-white py-3 px-9 transition hover:bg-2f88b1"
            >
              Discover more
            </Link>
          </div>
        </div>
      </Reveal>
      <Fade duration={1000}>
        <OutdoorSlider />
      </Fade>
      <Fade duration={1000} triggerOnce>
        <div className="bg-[url('../assets/world-map.jpg')] bg-center bg-no-repeat bg-cover mb-4 md:min-h-[360px] md:max-h-[770px] md:h-banner py-[70px] md:py-[90px] 3xl:pt-20 3xl:pb-36">
          <div className="px-3 sm:container h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <p className="text-subheading xl:text-4xl text-dark-blue">
                  <strong className="font-semibold">
                    Find the store near you
                  </strong>
                  {/*
                  <br />
                  Discover all the structures that have chosen the Magniflex
                  Outdoor line.
                */}
                </p>
                <div className="flex mt-6 justify-center">
                  <Link
                    to="/store-locator"
                    className="uppercase text-174860 font-semibold text-sm border border-174860 py-3 px-9 transition hover:text-white hover:bg-2f88b1"
                  >
                    Store Locator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={1000}></Fade>
      <Fade duration={1000}>{/* <QuotesSlider /> */}</Fade>
      <Fade duration={1000}>
        <div>
          <div className="px-3 sm:container pb-16 md:pb-24 lg:pb-28">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 p-0.5">
                <img src={blog_1} alt="racconti-di-vita-center" />
                <div className="p-4 lg:py-12">
                  <h4 className="text-174860 font-semibold text-xl pb-4 mx-4">
                    Afternoon nap: yes or no?
                  </h4>
                  <span className="text-8c8c8c block mx-4 text-[15px]">
                    Are you a fan of taking a nap after lunch? Have you ever
                    wondered if it’s good for you?
                  </span>
                  <br />
                  <Link to="https://www.slowsleep.it/en/afternoon-nap-yes-or-no">
                    <span className="text-8c8c8c border border-light-gray px-2 py-2 mx-4">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-0.5">
                <img src={blog_2} alt="racconti-di-vita-center" />
                <div className="p-4 lg:py-12">
                  <h4 className="text-174860 font-semibold text-xl pb-4 mx-4">
                    2023 trends for furnishing the bedroom
                  </h4>
                  <span className="text-8c8c8c block mx-4 text-[15px]">
                    It’s time to see in what direction 2023 is heading in terms
                    of furniture choices, particularly when it comes to the
                    bedroom.
                  </span>
                  <br />
                  <Link to="https://www.slowsleep.it/en/2023-trends-for-furnishing-the-bedroom">
                    <span className="text-8c8c8c border border-light-gray px-2 py-2 mx-4">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-0.5">
                <img src={blog_3} alt="racconti-di-vita-center" />
                <div className="p-4 lg:py-12">
                  <h4 className="text-174860 font-semibold text-xl pb-4 mx-4">
                    Sleep and the immune system
                  </h4>
                  <span className="text-8c8c8c block mx-4 text-[15px]">
                    Getting enough good sleep is important for our physical and
                    mental health, but it is also crucial for the proper
                    functioning of the immune system.
                  </span>
                  <br />
                  <Link to="https://www.slowsleep.it/en/sleep-and-the-immune-system">
                    <span className="text-8c8c8c border border-light-gray px-2 py-2 mx-4">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto flex justify-end py-4">
              <div className="flex flex-wrap justify-end">
                <h3 className="font-semibold text-subheading xl:text-5xl text-174860 mr-12 mb-2 whitespace-nowrap">
                  Slow Sleep Blog
                </h3>
                <Link to="https://www.slowsleep.it/en">Go to the blog</Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={1000}>
        <SocialSlider />
      </Fade>
      <Reveal duration={1000} triggerOnce>
        <div className="bg-f7 py-16">
          <div className="px-3 sm:container">
            <div className="max-w-7xl flex flex-wrap justify-between items-center mx-auto">
              <div className="w-full md:w-3/12">
                <h4 className="text-174860 font-semibold text-cusSubheading xl:text-3xl mb-4 md:mb-12 block pr-6 text-center md:text-left">
                  Our certifications
                </h4>
                <div className="flex justify-center md:justify-start">
                  <Link
                    to="/certifications"
                    className="uppercase text-174860 font-semibold text-sm border border-174860 py-3 px-9 transition hover:text-white hover:bg-2f88b1"
                  >
                    Discover more
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-9/12 mt-12 md:mt-0">
                <img
                  src={certificazioni}
                  alt="certificazioni"
                  className="w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
