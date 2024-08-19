import {Fade} from 'react-awesome-reveal';
import DATA from '~/data/our-essence';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function Banner() {
  return (
    <Fade
      triggerOnce
      className="bg-[url('../assets/home.jpg')] h-[434px] bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <p className="text-xl mb-6 font-medium">{DATA.banner.title}</p>
        <h1 className="text-[28px] leading-tight px-3 lg:text-5xl lg:leading-normal text-center font-semibold whitespace-pre-line">
          {DATA.banner.desc}
        </h1>
        <img
          src={DATA.banner.logoImage}
          alt="badge-logo"
          className="w-28 mt-2 md:mt-10"
        />
      </div>
    </Fade>
  );
}
