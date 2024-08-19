import {Keyframes} from '@emotion/react';
import Reveal, {Fade} from 'react-awesome-reveal';
import Logo_Img from '~/assets/Environment/logo.png';
import Nature_Img from '~/assets/Environment/rispetto-natura.jpg';
import Signor_img from '~/assets/Environment/signor-magniflex.jpg';

type TProps = {
  keyframe: Keyframes;
};
export function Environment({keyframe}: TProps) {
  return (
    <section id="environment">
      <section className="bg-white" id="ambiente">
        <Reveal keyframes={keyframe} triggerOnce duration={1000}>
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
            <div className="flex flex-wrap items-center">
              <div className="px-3 w-full lg:w-1/2">
                <p className="text-text text-gold uppercase mb-6 lg:text-xl">
                  ENVIRONMENT
                </p>
                <img src={Nature_Img} alt="nature image" />
              </div>
              <div className="px-3 lg:w-1/2 xl:w-5/12 xl:ml-offset-1">
                <p className="text-subheading lg:text-3xl font-semibold mb-3 text-dark-blue">
                  In a better world, we wake up better
                </p>
                <p className="text-text lg:text-xl text-dark-blue">
                  Magniflex has always worked in the name of environmental
                  responsibility, and the company has reduced CO2 emissions
                  thanks to the use of solar photovoltaic panels. Our constant
                  ecological commitment is also acknowledged by two
                  certifications: OEKO-TEX ® CLASS I, which guarantees the
                  absence of substances that are toxic and harmful to humans and
                  the environment in every component of the final product, and
                  GOTS, which certifies that the fabrics we use are made from
                  100% organic materials.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap pt-12 md:mt-12">
              <div className="px-3 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 xl:ml-offset-1">
                <p className="text-text lg:text-xl text-dark-blue">
                  Magniflex has also decided to embrace the UN's SDG project to
                  drive a clear and measurable environmental improvement
                  strategy company-wide.
                </p>
              </div>
              <div className="px-3 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 xl:ml-offset-1 2xl:w-3/12 2xl:ml-offset-1">
                <img src={Logo_Img} alt="sustainability logo image" />
                <button className="px-7 py-3 border text-xs border-dark-blue text-dark-blue uppercase mt-12">
                  FIND OUT MORE
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-f7">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <Reveal keyframes={keyframe} triggerOnce duration={1000}></Reveal>
          <div className="flex flex-wrap">
            <div className="px-3 w-full lg:w-5/12 xl:w-4/12 2xl:w-3/12 2xl:ml-offset-1">
              <p className="text-text text-gold mb-6 lg:text-xl">VACUUM</p>
              <p className="text-subheading text-dark-blue font-bold mb-6 lg:text-3xl">
                The vacuum-sealed system, a revolution by Magniflex
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-offset-1 xl:w-1/2 xl:ml-offset-2 2xl:w-1/2 2xl:ml-offset-2">
              <p className="text-text text-dark-blue lg:text-xl">
                The vacuum packaging, patented by the company in 1986, simply
                revolutionized the world of mattresses for the benefit of
                ecology and health. The vacuum, in fact, guarantees the perfect
                maintenance of the hygienic and qualitative state of the
                Magniflex mattresses. Additionally, their volume, through the
                elimination of air, is reduced by 90%. Consequently, with a
                single cubic meter, 13 mattresses can be sent instead of the 3
                packed with the traditional method. This means a lower number of
                trucks in circulation and therefore the reduction of polluting
                CO2 emissions.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 relative lg:-mt-24 overflow-hidden">
          <Fade triggerOnce duration={1000}>
            <span className="mt-28 bg-[url('../assets/Environment/bg-sottovuoto.jpg')] bg-cover bg-no-repeat bg-center h-4/6 absolute w-full top-auto bottom-0 left-0"></span>
          </Fade>
          <div className="px-3 sm:container relative">
            <Reveal keyframes={keyframe} duration={1000} triggerOnce>
              <div className="flex">
                <div className="w-8/12 md:w-1/2 lg:w-5/12">
                  <img
                    src={Signor_img}
                    alt="signore magniflex image"
                    className="w-full lg:mb-16"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </section>
  );
}
