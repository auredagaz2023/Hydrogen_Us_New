import {type MetaFunction} from '@shopify/remix-oxygen';
import SleepResolutionLanding from './($locale).sleep-resolution-2025';
import desktopHeader from '../assets/spring-into-sleep-promo/magniflex-us-the-spring-into-sleep-event-header-desktop.jpg';
import mobileHeader from '../assets/spring-into-sleep-promo/magniflex-us-the-spring-into-sleep-event-header-mobile.jpg';
import desktopBenefitBar from '../assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-desktop.gif';
import mobileBenefitBar from '../assets/spring-into-sleep-promo/magniflex-landing-benefit-bar-mobile-A.gif';

export const handle = {
  seo: {
    title: 'Spring Into Sleep Event 2026 - Magniflex Collections',
    titleTemplate: 'Spring Into Sleep Event 2026 - Magniflex Collections',
    description:
      "Explore and shop Magniflex's premium mattress collections, elevating your sleep experience with luxurious comfort and uncompromising quality",
    handle: '@shopify',
    url: `https://magniflex.us/spring-into-sleep-event-2026`,
  },
};

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Spring Into Sleep Event 2026 - Magniflex Collections',
    },
  ];
};

export default function SpringIntoSleepEvent2026() {
  return (
    <SleepResolutionLanding
      desktopHeaderImage={desktopHeader}
      mobileHeaderImage={mobileHeader}
      desktopBenefitBarImage={desktopBenefitBar}
      mobileBenefitBarImage={mobileBenefitBar}
      introTitle="This spring, invest in rest that helps you recharge"
      introBody={
        <>
          With any Magniflex mattress purchase, you can enhance your sleep
          system with the <span className="font-bold">Firenze Adjustable Base</span> starting
          at <span className="font-bold">$199</span>. Designed for personalized comfort and
          support, this bundle allows you to <span className="font-bold">save up to $1,799</span>
        </>
      }
    />
  );
}
