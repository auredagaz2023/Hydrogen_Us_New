import {keyframes} from '@emotion/react';
import {Fade} from 'react-awesome-reveal';
import {CollectionLinks} from '~/components/CollectionLinks';
import WorldMap from '~/components/worldmap';
import Ricarica_first_Img from '~/assets/Brand/bg-benessere-notte.jpg'
import Ricarica1_Img from '~/assets/Brand/bg-dual-core.jpg';
import Ricarica2_Img from '~/assets/Brand/benessere-notte.jpg';
import Ricarica3_Img from '~/assets/Brand/benessere-risveglio.jpg';
import Ricarica4_Img from '~/assets/Brand/bg-magnistretch.jpg';
import Ricarica6_Img from '~/assets/Brand/img-big.jpg';
import Ricarica7_Img from '~/assets/Brand/img-bighour.jpg';

const keyframe = keyframes`
  from {
    opacity: 0;
    transform: translate3D(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
`;

export default function Ricarica() {
  return (
    <>
      <section className="justify-center text-174860 center px-0 lg:pl-0 lg:pr-0 text-center ">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28 text-174860 h-full">
          <h1 className="text-[28px] md:text-3xl xl:text-5xl md:mt-10 lg:mt-28 text-center font-semibold">
            A recharge of well-being
          </h1>
          <h3 className="text-[1.1rem] lg:text-xl pb-5 md:pb-16 lg:pb-24 mt-6 ">
            Choosing Magniflex is the best way to ensure an excellent quality of
            life.
          </h3>
        </div>
        <div
          className="pb-[110%] md:pb-[80%] lg:pb-[70%] bg-cover bg-center"
          style={{backgroundImage: `url("${Ricarica1_Img}")`}}
        ></div>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28 text-174860">
            <div className="flex flex-row flex-wrap justify-between items-start">
              <div className="w-full lg:w-1/3 xl:w-1/4">
                <h3 className="text-[28px] font-semibold mb-6 lg:mb-0 lg:px-3">
                  Recharge of well-being.
                </h3>
              </div>
              <div className="w-full lg:w-1/3 lg:px-3 text-[1.1rem] lg:text-xl">
                Recharging while you sleep is, of course, a pleasure, but above
                all, it is a basic necessity of our organism.
              </div>
              <div className="w-full lg:w-1/3 xxl:w-5/12 lg:px-3 text-[1.1rem] lg:text-xl">
                Magniflex dedicates its experience to providing true
                regenerating rest by making mattresses, bed bases, pillows, and
                accessories that offer the ultimate comfort.
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="flex flex-col-reverse md:flex-row text-174860">
            <img className="w-full object-cover pb-[65%] md:pb-0 md:w-1/2 bg-cover" src={Ricarica_first_Img}></img>
            <div className="w-full md:w-1/2 text-lg">
              <div className="w-full md:w-[50%] lg:w-[66%] mx-auto">
                <img
                  src={Ricarica2_Img}
                  alt="ricarica image 2"
                  className="hidden md:block md:w-full"
                />
                <p className="text-cusSubheading font-semibold lg:text-3xl mt-12 max-w-md px-3 lg:px-0">
                  It is during the night that the day takes shape.
                </p>
                <div className="py-12 lg:py-16 flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 84 42"
                    width="45"
                  >
                    <path
                      d="M42.2 41.7C19.3 41.7.7 23.1.7.2h1c0 22.3 18.2 40.5 40.5 40.5S82.7 22.5 82.7.2h1c0 22.8-18.6 41.5-41.5 41.5z"
                      fill="#b09987"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 84 43"
                    width="45"
                  >
                    <path
                      d="M83.9 42.2h-1c0-22.3-18.2-40.5-40.5-40.5S1.9 19.9 1.9 42.2h-1C.9 19.3 19.5.7 42.4.7s41.5 18.6 41.5 41.5z"
                      fill="#174860"
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
          <div className="flex flex-col md:flex-row text-174860 md:h-[770px]">
            <div className="w-full md:w-1/2 text-lg">
              <div className="w-full md:w-10/12 md:max-w-[500px] mx-auto">
                <img
                  src={Ricarica3_Img}
                  alt="ricarica image 2"
                  className="hidden md:block md:w-full"
                />
                <p className="text-[1.1rem] lg:text-lg mt-10 mb-10 lg:mb-0 px-3 lg:max-w-md lg:px-0">
                  For Magniflex, getting a good night's sleep does not mean
                  going into standby mode, but on the contrary, recharging. So
                  every time you wake up you will be full of energy, to tackle
                  all the day's projects with vitality and enthusiasm you have
                  never felt before.
                </p>
              </div>
            </div>
            <div className="w-full pb-[65%] md:pb-0 md:w-1/2 bg-[url('../assets/Brand/bg-benessere-risveglio.jpg')] bg-cover bg-center"></div>
          </div>
        </Fade>
      </section>
      <section className="justify-center text-174860 center lg:pl-0 lg:pr-0 text-center my-32">
        <Fade duration={1000} triggerOnce>
          <div
            className="pb-[110%] bg-cover bg-center md:pb-[80%] lg:pb-[60%]"
            style={{backgroundImage: `url("${Ricarica4_Img}")`}}
          ></div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container pb-16 md:pb-24 lg:pb-28">
            <div className="w-full lg:w-8/12 xl:w-1/2">
              <h4 className="text-cusSubheading font-semibold mb-6 text-dark-blue">
                To be active during the day, you have to sleep well at night.
              </h4>
              <p className="text-[1.1rem] lg:text-xl">
                A truly good night's sleep is essential for recharging the mind
                and body. During sleep, our brain fixes information and
                recollections in its long-term memory, the nervous system
                regenerates, and the skin and muscles strengthen. This awareness
                is the inspiration behind Magniflex's goal: to use all its
                experience to ensure a restful night's sleep, manufacturing
                excellent products that offer people the utmost comfort, and
                wellbeing and improve their vital energy.This is because resting
                is not just a pleasure, but essential for living a healthy life
                full of zest, and for enjoying what we love to do most.
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container pb-16 md:pb-24 lg:pb-28">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-8/12 xl:w-6/12 text-dark-blue">
                <h4 className="text-cusSubheading font-semibold mb-6 lg:mb-0">
                  This is because resting is not just a pleasure, but essential
                  for living a healthy life full of zest, and for enjoying what
                  we love to do most.
                </h4>
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/4 xl:ml-12 xxl:ml-24">
                <p className="mb-6 text-[1.1rem] lg:text-xl">
                  Discover our tips, trivia, and insights for your daily energy
                  recharge.
                </p>
                <div className="w-full flex">
                  <a
                    className="text-white bg-dark-blue text-xs uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
                    href="https://www.magniflex.com/en/blog"
                  >
                    GO TO BLOG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="w-full h-[430px] lg:h-[768px] relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 max-w-none min-h-[100%] min-w-[100%] -translate-x-1/2 -translate-y-1/2"
            >
              <source
                src="https://storage.coverr.co/videos/Nv4Gqow7scn9XalkdfhPSLNjwNWrYYpE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjMzMzkzNjUzfQ.EElJb38kbaq_0OTzJpPnInZjpR8pLDoxwLGskhuoBBc"
                type="video/mp4"
              />
            </video>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28 flex justify-between flex-wrap text-174860">
            <div className="w-full lg:w-4/12">
              <h4 className="text-cusSubheading lg:text-3xl font-semibold">
                Research. Innovation. The only ones that never sleep.
              </h4>
            </div>
            <div className="w-full lg:w-8/12 xl:w-7/12">
              <p className="text-[1.1rem] lg:text-lg">
                Magniflex products are the result of continuous research and
                innovation in the fields of technology, design, and the
                selection of excellent raw materials. All with a reduced
                environmental impact thanks to the company's eco-friendly
                policies.
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="grid grid-cols-2 gap-4 text-174860">
            <div>
              <img src={Ricarica6_Img} alt="ricarica image 6" />
            </div>
            <div>
              <img src={Ricarica7_Img} alt="ricarica image 7" />
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="bg-f7">
            <div className="px-3 sm:container py-16 md:py-24 lg:py-28 flex justify-between flex-wrap text-174860">
              <div className="w-full lg:w-4/12 flex flex-col lg:justify-between">
                <h4 className="text-cusSubheading lg:text-3xl font-semibold mb-6">
                  Magniflex quality is certified worldwide.
                </h4>
                <div className="flex">
                  <a
                    className="font-bold bg-174860 text-white px-14 py-4 pointer uppercase text-xs hover:bg-2f88b1"
                    href="/certifications"
                  >
                    DISCOVER
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-8/12 xl:w-7/12 mt-6 lg:mt-0">
                <p className="text-[1.1rem] lg:text-lg">
                  Magniflex quality control begins with the selection of materials and the choice of suppliers for products Designed in Italy, continuing through the entire production cycle, which is checked at 9 separate stages. Close collaboration with various international certification institutes – such as the ACA (American Chiropractic Association), AJA E UKAS, the University of Florence, and the Institute for Ethical and Environmental Certification – guarantees the company’s dedication to quality. Among the most relevant certifications received are those that focus on sustainability, such as OEKO-TEX® and GOTS (Global Organic Textile Standard).
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <WorldMap keyframe={keyframe} />
      <CollectionLinks />
    </>
  );
}
