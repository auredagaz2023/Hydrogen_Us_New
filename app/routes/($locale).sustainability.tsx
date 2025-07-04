import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';
import EcovadisLogo from '~/assets/Brand/medal.png'
import Sost1_Img from '~/assets/Brand/oeko-tex.jpg';
import Sost2_Img from '~/assets/Brand/sustainable-development-goals-gray.png';
import Sost4_Img from '~/assets/Brand/article-thumb.jpg';
import {SostenibilitaSlider} from '~/components/SostenibilitaSlider';

export default function Sostenibilita(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <Section
        padding="x"
        className="justify-center bg-[url('../assets/Brand/bg-sustainable.jpg')] bg-center bg-cover text-white h-banner max-h-banner min-h-banner items-center center lg:pl-0 lg:pr-0 text-center relative"
      >
        <h1 className="text-[28px] md:text-3xl xl:text-5xl font-semibold text-center">
          Sustainability
        </h1>
        <img className='absolute w-[250px] right-[80px] bottom-[100px]' src={EcovadisLogo}/>
      </Section>
      <section className="py-16 lg:py-32">
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container flex flex-wrap justify-between max-w-7xl text-174860">
            <div className="w-full lg:w-5/12 xxl:w-1/3">
              <h4 className="text-cusSubheading lg:text-3xl font-semibold mb-6 text-B09987">
                Sustainability is about respecting the planet; there is no time
                to ignore it
              </h4>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[1.1rem] lg:text-xl">
              From the energy that powers our manufacturing plant—mainly sourced from renewable sources—to 
              the means of transport that significantly reduces our CO² emissions, the reuse of 95% of waste 
              materials, and our steadfast dedication to using recycled materials for most of our packaging, 
              these are just a few of the tangible commitments that Magniflex implements daily to showcase our 
              devotion to the environment.
              </p>
            </div>
          </div>
          <div className="px-3 sm:container flex flex-wrap justify-between text-174860 mt-10">
            <div className="w-full lg:w-5/12 xxl:w-4/12">
              {/* <h4 className="text-cusSubheading lg:text-3xl font-semibold text-B09987 mb-6">
                Respect for both the environment and health is paramount.
              </h4> */}
              <img
                src={Sost1_Img}
                alt="sostenibilit image 1"
                className="w-42"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-10">
              <p className="text-[1.1rem] lg:text-xl">
              Magniflex takes your health seriously. Our unwavering focus is acknowledged through two 
              certifications: OEKO-TEX® CLASS I, ensuring the absence of toxic and harmful substances in all 
              final product components, and GOTS, certifying that the woven fabrics in the Toscana line are 
              made from 100% organic materials.
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="bg-f7 py-16 lg:py-32">
            <div className="px-3 sm:container flex flex-wrap justify-between text-174860">
              <div className="w-full lg:w-1/3 xl:w-1/4 mb-12 lg:mb-0">
                <img src={EcovadisLogo} alt="Ecovadis-Logo image 2" />
              </div>
              <div className="w-full lg:w-7/12 xl:w-8/12">
                <h3 className="text-cusSubheading lg:text-3xl font-semibold mb-6">
                  A Podium Finish: Among the Medalists.
                </h3>
                <p className="text-[1.1rem] lg:text-lg">
                  For our performance in corporate sustainability, we have been awarded the bronze medal with EcoVadis. 
                </p>
                <p className="text-[1.1rem] lg:text-lg mt-20">
                  Magniflex reaches a scores that places it among the top 35% of companies with the best performance, according to EcoVadis. 
                </p>
                <p className="text-[1.1rem] lg:text-lg mt-10">
                  The valuation of EcoVadis examines 21 criteria of sustainability, divided into: Environment, Production Practices and Human Rights, Ethics and Sustainable Purchasing. 
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="py-16 lg:py-32">
            <div className="px-3 sm:container flex flex-wrap justify-between text-174860">
              <div className="w-full lg:w-1/3 xl:w-1/4 mb-12 lg:mb-0">
                <img src={Sost2_Img} alt="sostenibilit image 2" />
              </div>
              <div className="w-full lg:w-7/12 xl:w-8/12">
                <h3 className="text-cusSubheading lg:text-3xl font-semibold mb-6">
                  WE HAVE A DREAM. OR, TO BE PRECISE, 17.
                </h3>
                <p className="text-[1.1rem] lg:text-lg">
                  Magniflex has embraced the ambitious United Nations
                  Sustainable Development Goals project, striving to achieve 17
                  goals by 2023. These objectives are crucial in ensuring a
                  better and more sustainable future for all inhabitants of
                  Earth. This project involves various social and economic
                  sectors, aimed at improving living conditions and guaranteeing
                  access to resources while preserving the environment and
                  climate. The goal is for future generations to wake up each
                  day in a more hospitable world."
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <SostenibilitaSlider />
        </Fade>
      </section>
      {/* <section>
        <Fade duration={1000} triggerOnce>
          <div className="my-8 py-24">
            <div className="container flex justify-between text-174860 mb-16">
              <div>
                <h5 className="text-xl">SCORPI DI PIÙ SUL NOSTRO BLOG</h5>
              </div>
            </div>
            <div className="container">
              <div className="grid grid-cols-4 gap-8 justify-items-center">
                <div className="border pb-4 mb-4">
                  <img src={Sost4_Img} alt="sostenibilit image 4" />
                  <div className="p-4">
                    <div className="text-sm py-2">26 set 2023</div>
                    <h5 className="text-xl font-semibold text-174860 pb-4">
                      Una mobilità più sostenibile per combattere il climate
                      change
                    </h5>
                    <p className="pb-8">
                      Quello del riscaldamento globale e del suo impatto sul
                      pianeta e sulla vita dell’uomo è sicuramente uno dei
                      problemi più...
                    </p>
                    <div className="uppercase text-B09987 text-sm font-semibold text-right cursor-pointer pr-6 bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                      Leggi
                    </div>
                  </div>
                </div>
                <div className="border pb-4 mb-4">
                  <img src={Sost4_Img} alt="sostenibilit image 4" />
                  <div className="p-4">
                    <div className="text-sm py-2">26 set 2023</div>
                    <h5 className="text-xl font-semibold text-174860 pb-4">
                      Una mobilità più sostenibile per combattere il climate
                      change
                    </h5>
                    <p className="pb-8">
                      Quello del riscaldamento globale e del suo impatto sul
                      pianeta e sulla vita dell’uomo è sicuramente uno dei
                      problemi più...
                    </p>
                    <div className="uppercase text-B09987 text-sm font-semibold text-right cursor-pointer pr-6 bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                      Leggi
                    </div>
                  </div>
                </div>
                <div className="border pb-4 mb-4">
                  <img src={Sost4_Img} alt="sostenibilit image 4" />
                  <div className="p-4">
                    <div className="text-sm py-2">26 set 2023</div>
                    <h5 className="text-xl font-semibold text-174860 pb-4">
                      Una mobilità più sostenibile per combattere il climate
                      change
                    </h5>
                    <p className="pb-8">
                      Quello del riscaldamento globale e del suo impatto sul
                      pianeta e sulla vita dell’uomo è sicuramente uno dei
                      problemi più...
                    </p>
                    <div className="uppercase text-B09987 text-sm font-semibold text-right cursor-pointer pr-6 bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                      Leggi
                    </div>
                  </div>
                </div>
                <div className="border pb-4 mb-4">
                  <img src={Sost4_Img} alt="sostenibilit image 4" />
                  <div className="p-4">
                    <div className="text-sm py-2">26 set 2023</div>
                    <h5 className="text-xl font-semibold text-174860 pb-4">
                      Una mobilità più sostenibile per combattere il climate
                      change
                    </h5>
                    <p className="pb-8">
                      Quello del riscaldamento globale e del suo impatto sul
                      pianeta e sulla vita dell’uomo è sicuramente uno dei
                      problemi più...
                    </p>
                    <div className="uppercase text-B09987 text-sm font-semibold text-right cursor-pointer pr-6 bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                      Leggi
                    </div>
                  </div>
                </div>
                <div className="border pb-4 mb-4">
                  <img src={Sost4_Img} alt="sostenibilit image 4" />
                  <div className="p-4">
                    <div className="text-sm py-2">26 set 2023</div>
                    <h5 className="text-xl font-semibold text-174860 pb-4">
                      Una mobilità più sostenibile per combattere il climate
                      change
                    </h5>
                    <p className="pb-8">
                      Quello del riscaldamento globale e del suo impatto sul
                      pianeta e sulla vita dell’uomo è sicuramente uno dei
                      problemi più...
                    </p>
                    <div className="uppercase text-B09987 text-sm font-semibold text-right cursor-pointer pr-6 bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                      Leggi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section> */}
    </>
  );
}
