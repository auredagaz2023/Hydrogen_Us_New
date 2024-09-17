import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';

import {InnovazioneDualCore} from '~/components/InnovazioneDualCore';
import {InnovazioneMagnistretch} from '~/components/InnovazioneMagnistretch';
import {InnovazioneMagnicool} from '~/components/InnovazioneMagnicool';
import {InnovazioneSottovuoto} from '~/components/InnovazioneSottovuoto';
import {InnovazioneLavorazioni} from '~/components/InnovazioneLavorazioni';
import {useRef} from 'react';

export default function Innovazione(props: {keyframe: Keyframes}) {
  const {keyframe} = props;
  const dualCoreRef = useRef<null | HTMLDivElement>(null);
  const magnistretchRef = useRef<null | HTMLDivElement>(null);
  const magnicoolRef = useRef<null | HTMLDivElement>(null);
  const sottovuotochRef = useRef<null | HTMLDivElement>(null);
  const lavorazioniRef = useRef<null | HTMLDivElement>(null);

  const handleClickDualCore = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dualCoreRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickMagnistret = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    magnistretchRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickMagnicool = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    magnicoolRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickSottovuoto = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    sottovuotochRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickLavorazioni = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    lavorazioniRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <Section
        padding="x"
        className="justify-center bg-[url('../assets/Brand/bg-innovation-banner.jpg')] text-white h-banner max-h-banner min-h-banner bg-cover items-center center lg:pl-0 lg:pr-0 text-center"
      >
        <div>
          <div className="text-uppercase text-xl pb-4">
            INNOVATION AND TECHNOLOGY
          </div>
          <h1 className="text-cusheading font-semibold text-center">
            Innovation never sleeps
          </h1>
        </div>
      </Section>
      <section className="px-3 bg-f7 text-center text-174860 uppercase py-2 text-10 lg:py-6 lg:text-sm flex flex-wrap gap-x-5 gap-y-2 lg:gap-10 place-content-center sticky top-[56px] md:top-[67px] xxl:top-[118px] z-10">
        <a href="#" onClick={handleClickDualCore}>
          Dual core
        </a>
        <a href="#" onClick={handleClickMagnistret}>
          Magnistretch
        </a>
        <a href="#" onClick={handleClickMagnicool}>
          Magnicool
        </a>
        <a href="#" onClick={handleClickSottovuoto}>
          VACUUM PACKED
        </a>
        <a href="#" onClick={handleClickLavorazioni}>
          LAYER MANUFACTURING PROCESS
        </a>
      </section>
      <section className="px-3 sm:container">
        <div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-28">
          <Fade duration={1000} triggerOnce>
            <div className="text-[1rem] lg:text-[20px] text-174860 text-center">
              Constant and Boundless Research: Our commitment knows no rest or
              limits. Our goal is to discover ever-advancing technologies,
              enhancing our products and precisely addressing the unique needs
              of each individual. Our aim is to provide the means for them to
              recharge every night.
            </div>
            <div className="w-px h-24 block bg-174860 mx-auto my-12"></div>
          </Fade>
        </div>
      </section>
      <InnovazioneDualCore ref={dualCoreRef} />
      <InnovazioneMagnistretch ref={magnistretchRef} />
      <InnovazioneMagnicool ref={magnicoolRef} />
      <InnovazioneSottovuoto ref={sottovuotochRef} />
      <InnovazioneLavorazioni ref={lavorazioniRef} />
    </>
  );
}
