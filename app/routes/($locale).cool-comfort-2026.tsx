import {type MetaFunction} from '@shopify/remix-oxygen';
import SleepResolutionLanding from './($locale).sleep-resolution-2025';
import desktopHeader from '../assets/cool-comfort-2026/Desktop/Header/magniflex-us-cool-comfort-event-header-desktop.jpg';
import mobileHeader from '../assets/cool-comfort-2026/Mobile/Header/magniflex-us-cool-comfort-event-header-mobile.jpg';
import desktopBenefitBar from '../assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-desktop.gif';
import mobileBenefitBar from '../assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-mobile-A.gif';
import desktopFirenze from '../assets/cool-comfort-2026/Desktop/Products/Images/01-firenze-base.jpg';
import desktopFirenzeRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/01-firenze-base-roll.jpg';
import desktopDolceVita from '../assets/cool-comfort-2026/Desktop/Products/Images/02-dolce-vita.jpg';
import desktopDolceVitaRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/02-dolce-vita-roll.jpg';
import desktopMagnicool from '../assets/cool-comfort-2026/Desktop/Products/Images/03-magnicool.jpg';
import desktopMagnicoolRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/03-magnicool-roll.jpg';
import desktopMagnistretch from '../assets/cool-comfort-2026/Desktop/Products/Images/04-magnistretch.jpg';
import desktopMagnistretchRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/04-magnistretch-roll.jpg';
import desktopMagnifico from '../assets/cool-comfort-2026/Desktop/Products/Images/05-magnifico.jpg';
import desktopMagnificoRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/05-magnifico-roll.jpg';
import desktopClassico from '../assets/cool-comfort-2026/Desktop/Products/Images/06-classico.jpg';
import desktopClassicoRoll from '../assets/cool-comfort-2026/Desktop/Products/Roll/06-classico-roll.jpg';
import mobileFirenze from '../assets/cool-comfort-2026/Mobile/Products/01-firenze-base.jpg';
import mobileDolceVita from '../assets/cool-comfort-2026/Mobile/Products/02-dolce-vita.jpg';
import mobileMagnicool from '../assets/cool-comfort-2026/Mobile/Products/03-magnicool.jpg';
import mobileMagnistretch from '../assets/cool-comfort-2026/Mobile/Products/04-magnistretch.jpg';
import mobileMagnifico from '../assets/cool-comfort-2026/Mobile/Products/05-magnifico.jpg';
import mobileClassico from '../assets/cool-comfort-2026/Mobile/Products/06-classico.jpg';

export const handle = {
  seo: {
    title: 'Cool Comfort 2026 - Magniflex Collections',
    titleTemplate: 'Cool Comfort 2026 - Magniflex Collections',
    description:
      "Explore and shop Magniflex's premium mattress collections, elevating your sleep experience with luxurious comfort and uncompromising quality",
    handle: '@shopify',
    url: `https://magniflex.us/cool-comfort-2026`,
  },
};

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Cool Comfort 2026 - Magniflex Collections',
    },
  ];
};

export default function CoolComfort2026() {
  return (
    <SleepResolutionLanding
      desktopHeaderImage={desktopHeader}
      mobileHeaderImage={mobileHeader}
      desktopBenefitBarImage={desktopBenefitBar}
      mobileBenefitBarImage={mobileBenefitBar}
      desktopFirenzeImage={desktopFirenze}
      desktopFirenzeRollImage={desktopFirenzeRoll}
      mobileFirenzeImage={mobileFirenze}
      productDesktopImages={[
        desktopDolceVita,
        desktopMagnicool,
        desktopMagnistretch,
        desktopMagnifico,
        desktopClassico,
      ]}
      productDesktopRollImages={[
        desktopDolceVitaRoll,
        desktopMagnicoolRoll,
        desktopMagnistretchRoll,
        desktopMagnificoRoll,
        desktopClassicoRoll,
      ]}
      productMobileImages={[
        mobileDolceVita,
        mobileMagnicool,
        mobileMagnistretch,
        mobileMagnifico,
        mobileClassico,
      ]}
      productPrices={['$3,299', '$2,485', '$2,969', '$2,959', '$1,979']}
      emphasizeMobileFirenzePrice
      centerMobileFirenzeTableText
      greyNewsletterFooter
      introTitle="Elevate your sleep experience with tailored posture and comfort."
      introBody={
        <>
          Purchase a select Magniflex mattress and get the advanced{' '}
          <span className="font-bold">Firenze Adjustable Base</span> from just{' '}
          <span className="font-bold">$199</span>.<br />
          Fine-tune your position for reading, relaxing, or sleeping while{' '}
          <span className="font-bold text-[#ED1C24]">saving up to $1,799</span>.
        </>
      }
      productDetailLabel="Firmness"
    />
  );
}
