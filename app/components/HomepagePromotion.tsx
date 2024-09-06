import {useEffect, useState} from 'react';
import {ContentfulHomePromotion} from '~/routes/types';
import promoSvg from '~/assets/homepage-promo.svg';
import {Link} from './Link';

const HomepagePromotion = () => {
  const [homePromotion, setHomePromotion] = useState<
    ContentfulHomePromotion | undefined
  >(undefined);

  useEffect(() => {
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN =
      'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

    const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.name,fields.description,fields.promoInHomepage&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;
    (async () => {
      await fetch(activePromotionsEndpoint)
        .then((res) => res.json())
        .then((res) => {
          setHomePromotion(res as ContentfulHomePromotion);
        });
    })();
  }, []);

  if (!homePromotion?.items[0]?.fields.promoInHomepage) {
    return <></>;
  }

  return (
    <section className="bg-[#CFBCA7] w-[100vw]">
      <div className="block md:hidden my-6">
        <div className="relative">
          <video autoPlay muted className="w-full h-auto">
            <source src="https://cdn.shopify.com/videos/c/o/v/17c9968850de4cbc8c4569b17405fd78.mp4" />
          </video>
          <div className="absolute w-full flex flex-col items-center gap-2 -bottom-6">
            <svg
              className=""
              width="25"
              height="31"
              viewBox="0 0 25 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2965 20.8573H18.4445V23.3471H13.5772C13.7378 24.78 14.678 25.5754 16.0703 26.1202C15.874 26.3327 15.7193 26.5452 15.517 26.7032C15.3147 26.8612 15.0767 27.0355 14.8327 27.0846C14.2317 27.2099 14.0592 27.5749 13.9223 28.0707C13.6605 29.0187 13.0893 29.8522 12.4942 30.3044C11.8456 29.7596 11.4529 29.0732 11.1614 28.3213C11.0424 28.0217 11.0602 27.6403 10.8579 27.4115C10.6615 27.1935 10.251 27.1336 9.9475 26.9865C9.53693 26.7849 9.16802 26.5343 8.98951 26.1093C10.7567 25.1722 11.3756 24.4694 11.3994 23.3526H6.54394V20.8627H8.70389C8.63249 19.8003 8.44208 18.8251 7.60309 18.0678C6.7998 17.3432 5.55619 17.3977 4.84216 17.7137C4.15787 18.0133 3.87226 18.6017 3.81276 19.261C3.7711 19.675 3.84846 20.1 3.87226 20.5413C2.94997 20.5467 2.09907 20.2798 1.38504 19.675C-0.542853 18.0351 -0.447649 14.7063 1.6052 13.208C3.00947 12.1892 4.58629 12.1565 6.18692 12.7667C7.68639 13.3388 8.65034 14.4175 9.31082 15.7414C10.0546 17.2506 10.2867 18.8578 10.3283 20.4923C10.3283 20.5958 10.3283 20.6993 10.3283 20.83H11.3934C11.3994 20.7538 11.4172 20.672 11.4172 20.5958C11.3875 17.8281 10.9948 15.1258 9.75114 12.5651C9.23347 11.4918 8.85265 10.375 8.69794 9.2036C8.48968 7.63997 8.7872 6.14717 9.45363 4.70884C10.1796 3.13976 11.2566 1.77227 12.4645 0.491943C12.5002 0.497392 12.5299 0.491943 12.5418 0.50284C13.9818 2.00109 15.1957 3.62465 15.8918 5.53697C16.6475 7.60728 16.4512 9.63401 15.6419 11.6553C15.1659 12.8484 14.6423 14.0361 14.2674 15.2565C13.7319 17 13.601 18.8033 13.5891 20.6121C13.5891 20.6829 13.601 20.7538 13.601 20.8409H14.6482C14.678 20.3724 14.6958 19.8984 14.7375 19.4244C14.8565 18.0297 15.154 16.6731 15.868 15.42C16.7487 13.8618 18.0518 12.7613 20.0035 12.4453C22.4372 12.053 24.5733 13.4695 24.9303 15.7142C25.1445 17.0817 24.8827 18.3402 23.895 19.419C23.169 20.2035 22.211 20.5358 21.1162 20.5522C21.1519 20.1654 21.2292 19.8003 21.2114 19.4353C21.1638 18.6453 20.8722 17.9534 19.9975 17.6483C18.986 17.2996 17.8792 17.5448 17.2545 18.2149C16.5523 18.9668 16.3738 19.8712 16.3084 20.8518"
                fill="white"
              />
            </svg>
            <span className="text-white bg-[#030c2a] py-4 px-8 rounded-full text-sm">
              ANNIVERSARY SALE
            </span>
          </div>
        </div>
        <div className="bg-[#030c2a] py-6 lg:py-14 pl-3 lg:pl-7 pr-8 lg:pr-16 text-center text-white">
          <h2 className="text-cusSubheading lg:text-3xl">Save up to $960</h2>
          <p className="text-sm">on the new mattress collections</p>
          <h2 className="text-cusSubheading lg:text-3xl mt-3">+ Save 20%</h2>
          <p className="text-sm mb-5 lg:mb-8">on the selected pillows</p>
          <Link
            to={'/mattresses'}
            className="bg-[#3162C6] px-7 py-[13px] text-white uppercase inline-block"
          >
            Shop sale
          </Link>
          <p className="mt-2 text-sm">Valid until October 23rd</p>
        </div>
      </div>
      <div className="px-5 sm:container py-6 md:h-[500px] md:mb-36">
        <div className=" max-w-7xl mx-auto h-full flex justify-between items-center">
          <div className="flex shrink-0 flex-col justify-between h-full mr-5">
            <div className="hidden md:block mb-7">
              <p className="text-[#030C2A] text-xs uppercase mb-2 font-bold">
                Anniversary sale 2023
              </p>
              <h1 className="text-cusSubheading text-white lg:text-4xl font-semibold">
                Welcome to Magniflex
                <br />
                Anniversary Sale:
              </h1>
              <p className="text-white text-sm lg:text-lg mt-3 max-w-[350px] font-medium">
                in 61 years we helped over 50 millions families sleep better,
                and we are happy to celebrate this milestone with you.
              </p>
            </div>
            <div>
              <div className="mb-5 flex items-center">
                <img src={promoSvg} alt="home page promo" className="mr-2" />
                <span className="font-medium text-white text-sm lg:text-lg">
                  10-Year Warranty
                </span>
              </div>
              <div className="mb-5 flex items-center">
                <img src={promoSvg} alt="home page promo" className="mr-2" />
                <span className="font-bold text-white text-sm lg:text-lg">
                  100-Night Trial
                </span>
              </div>
              <div className="mb-5 flex items-center">
                <img src={promoSvg} alt="home page promo" className="mr-2" />
                <span className="font-medium text-white text-sm lg:text-lg">
                  Free Shipping & Returns
                </span>
              </div>
              <div className="flex items-cent er">
                <img src={promoSvg} alt="home page promo" className="mr-2" />
                <span className="font-bold text-white text-sm lg:text-lg">
                  Financing Available
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full grow-1 relative top-20">
            <video autoPlay muted>
              <source src="https://cdn.shopify.com/videos/c/o/v/17c9968850de4cbc8c4569b17405fd78.mp4" />
            </video>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-[#030C2A75] py-6 lg:py-14 pl-3 lg:pl-7 pr-8 lg:pr-16 text-center text-white">
              <h2 className="text-cusSubheading lg:text-3xl">
                Save up to $960
              </h2>
              <p className="text-sm">on the new mattress collections</p>
              <h2 className="text-cusSubheading lg:text-3xl mt-3">
                + Save 20%
              </h2>
              <p className="text-sm mb-5 lg:mb-8">on the selected pillows</p>
              <Link
                to={'/mattresses'}
                className="bg-[#3162C6] px-7 py-[13px] text-white uppercase inline-block"
              >
                Shop sale
              </Link>
              <p className="mt-2 text-sm">Valid until October 23rd</p>
            </div>
            <div className="absolute right-0 translate-x-1/2 top-40 -rotate-90 flex items-center bg-[#CFBCA7] rounded-full px-5 py-7 origin-center">
              <svg
                className="rotate-90"
                width="25"
                height="31"
                viewBox="0 0 25 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2965 20.8573H18.4445V23.3471H13.5772C13.7378 24.78 14.678 25.5754 16.0703 26.1202C15.874 26.3327 15.7193 26.5452 15.517 26.7032C15.3147 26.8612 15.0767 27.0355 14.8327 27.0846C14.2317 27.2099 14.0592 27.5749 13.9223 28.0707C13.6605 29.0187 13.0893 29.8522 12.4942 30.3044C11.8456 29.7596 11.4529 29.0732 11.1614 28.3213C11.0424 28.0217 11.0602 27.6403 10.8579 27.4115C10.6615 27.1935 10.251 27.1336 9.9475 26.9865C9.53693 26.7849 9.16802 26.5343 8.98951 26.1093C10.7567 25.1722 11.3756 24.4694 11.3994 23.3526H6.54394V20.8627H8.70389C8.63249 19.8003 8.44208 18.8251 7.60309 18.0678C6.7998 17.3432 5.55619 17.3977 4.84216 17.7137C4.15787 18.0133 3.87226 18.6017 3.81276 19.261C3.7711 19.675 3.84846 20.1 3.87226 20.5413C2.94997 20.5467 2.09907 20.2798 1.38504 19.675C-0.542853 18.0351 -0.447649 14.7063 1.6052 13.208C3.00947 12.1892 4.58629 12.1565 6.18692 12.7667C7.68639 13.3388 8.65034 14.4175 9.31082 15.7414C10.0546 17.2506 10.2867 18.8578 10.3283 20.4923C10.3283 20.5958 10.3283 20.6993 10.3283 20.83H11.3934C11.3994 20.7538 11.4172 20.672 11.4172 20.5958C11.3875 17.8281 10.9948 15.1258 9.75114 12.5651C9.23347 11.4918 8.85265 10.375 8.69794 9.2036C8.48968 7.63997 8.7872 6.14717 9.45363 4.70884C10.1796 3.13976 11.2566 1.77227 12.4645 0.491943C12.5002 0.497392 12.5299 0.491943 12.5418 0.50284C13.9818 2.00109 15.1957 3.62465 15.8918 5.53697C16.6475 7.60728 16.4512 9.63401 15.6419 11.6553C15.1659 12.8484 14.6423 14.0361 14.2674 15.2565C13.7319 17 13.601 18.8033 13.5891 20.6121C13.5891 20.6829 13.601 20.7538 13.601 20.8409H14.6482C14.678 20.3724 14.6958 19.8984 14.7375 19.4244C14.8565 18.0297 15.154 16.6731 15.868 15.42C16.7487 13.8618 18.0518 12.7613 20.0035 12.4453C22.4372 12.053 24.5733 13.4695 24.9303 15.7142C25.1445 17.0817 24.8827 18.3402 23.895 19.419C23.169 20.2035 22.211 20.5358 21.1162 20.5522C21.1519 20.1654 21.2292 19.8003 21.2114 19.4353C21.1638 18.6453 20.8722 17.9534 19.9975 17.6483C18.986 17.2996 17.8792 17.5448 17.2545 18.2149C16.5523 18.9668 16.3738 19.8712 16.3084 20.8518"
                  fill="white"
                  fill-opacity="0.55"
                />
              </svg>
              <span className="text-white text-xs tracking-[5px] ml-3">
                ANNIVERSARY SALE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePromotion;
