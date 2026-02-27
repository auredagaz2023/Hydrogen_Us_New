import { FormEvent, useRef, useState } from 'react';
import { type MetaFunction } from '@shopify/remix-oxygen';
import emailjs from '@emailjs/browser';
import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import FadeIn from '~/components/FadeIn';
import desktopHeader from '../assets/upgrade-your-rest-promo-2026/header/magniflex-us-national-sleep-awareness-month-header-desktop-02.jpg'
import desktopHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar.gif'
import mobileHeader from '../assets/upgrade-your-rest-promo-2026/header/magniflex-us-sleep-awareness-month-header-mobile-02.jpg'
import mobileHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar-mobile-A.gif'
import dolcevitapng from '../assets/upgrade-your-rest-promo-2026/desktop/01-dolce-vita.jpg'
import dolcevitapng_roll from '../assets/upgrade-your-rest-promo-2026/desktop/01-dolce-vita-roll.jpg'
import mobileDolcevitapng from '../assets/upgrade-your-rest-promo-2026/mobile/01-dolce-vita.jpg'

import magnicoolpng from '../assets/upgrade-your-rest-promo-2026/desktop/02-magnicool.jpg'
import magnicoolpng_roll from '../assets/upgrade-your-rest-promo-2026/desktop/02-magnicool-roll.jpg'
import mobileMagnicoolpng from '../assets/upgrade-your-rest-promo-2026/mobile/02-magnicool.jpg'

import magnistretchpng from '../assets/upgrade-your-rest-promo-2026/desktop/03-magnistretch.jpg'
import magnistretchpng_roll from '../assets/upgrade-your-rest-promo-2026/desktop/03-magnistretch-roll.jpg'
import mobileMagnistretchpng from '../assets/upgrade-your-rest-promo-2026/mobile/03-magnistretch.jpg'

import magnificopng from '../assets/upgrade-your-rest-promo-2026/desktop/04-magnifico.jpg'
import magnificopng_roll from '../assets/upgrade-your-rest-promo-2026/desktop/04-magnifico-roll.jpg'
import mobileMagnificopng from '../assets/upgrade-your-rest-promo-2026/mobile/04-magnifico.jpg'

import classicopng from '../assets/upgrade-your-rest-promo-2026/desktop/05-classico.jpg'
import classicopng_roll from '../assets/upgrade-your-rest-promo-2026/desktop/05-classico-roll.jpg'
import mobileClassicopng from '../assets/upgrade-your-rest-promo-2026/mobile/05-classico.jpg'


export const handle = {
  seo: {
    title: 'Upgrade Your Rest 2026 - Magniflex Collections',
    titleTemplate:
      'Upgrade Your Rest 2026 - Magniflex Collections',
    description:
      "Explore and shop Magniflex's premium mattress collections, elevating your sleep experience with luxurious comfort and uncompromising quality",
    handle: '@shopify',
    url: `https://magniflex.us/upgrade-your-rest-promo-2026`,
  },
};

const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';
const EMAILJS_SUBSCRIPTION_TEMPLATE_ID = 'mx-usa-form-subscription';

const products = [
  {
    advance: "ultimate dual comfort",
    advance_color: "#AC9695",
    img: dolcevitapng,
    roll_img: dolcevitapng_roll,
    mobile_img: mobileDolcevitapng,
    name: "dolce vita",
    description: "One mattress with 4 layer combinations and different comfort levels thanks to our Dual Core technology",
    bestfor: "couples with different sleep needs",
    fitness: "soft, medium-soft, medium-firm, firm",
    original_price: "$4,399",
    price: "$3,599",
    button: "shop dolce vita",
    link: "https://magniflex.us/mattresses/dolce-vita?product=dolcevita-dual-10",
    bottom: "save up to $2,499",
    mattress: true
  },
  {
    advance: "ultimate coolness",
    advance_color: "#839BB1",
    img: magnicoolpng,
    roll_img: magnicoolpng_roll,
    mobile_img: mobileMagnicoolpng,
    name: "magnicool",
    description: "The innovative mattress, designed with premium materials and cover fabrics, delivers unmatched freshness and superior air circulation",
    bestfor: "cool night lovers",
    fitness: "medium-soft, medium-firm",
    original_price: "$3,299",
    price: "$2,699",
    button: "Shop MAGNICOOL",
    link: "https://magniflex.us/mattresses/magnicool?product=magnicool-10-firm",
    bottom: "Save up to $1,799",
    mattress: true
  },
  {
    advance: "Ultimate SPINE RELIEF",
    advance_color: "#9AA8A9",
    img: magnistretchpng,
    roll_img: magnistretchpng_roll,
    mobile_img: mobileMagnistretchpng,
    name: "MagniStretch",
    description: "Its patented checkered and stretching construction ensures differentiated zone support and stretching of the spine",
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$3,999",
    price: "$3,199",
    button: "Shop MAGNISTRETCH",
    link: "https://magniflex.us/mattresses/magnistretch?product=magnistretch-12",
    bottom: "Save up to $2,099",
    mattress: true
  },
  {
    advance: "Ultimate COMFORT",
    advance_color: "#A6682C",
    img: magnificopng,
    roll_img: magnificopng_roll,
    mobile_img: mobileMagnificopng,
    name: "Magnifico",
    description: "The excellence of traditional materials combined with the innovation of new technologies to produce timeless comfort",
    bestfor: "discerning sleepers seeking ultimate comfort",
    fitness: "super-soft, medium-soft, medium-firm",
    original_price: "$3,999",
    price: "$3,299",
    button: "Shop Magnifico",
    link: "https://magniflex.us/mattresses/magnifico?product=toscana-cotton-lux-10",
    bottom: "Save up to $3,999",
    mattress: true
  },
  // {
  //   advance: "Performance and essentiality",
  //   advance_color: "#5E5E5E",
  //   img: classicopng,
  //   roll_img: classicopng_roll,
  //   mobile_img: mobileClassicopng,
  //   name: "Classico",
  //   description: "The perfect combination of performance and essentiality for a mattress with built-in massaging system designed to meet every sleep need",
  //   bestfor: "quality sleep lover, restorative sleep seekers",
  //   fitness: "medium-firm",
  //   original_price: "$3,499",
  //   price: "$2,999",
  //   button: "Shop Classico",
  //   link: "https://magniflex.us/mattresses/classico?product=classico-9",
  //   bottom: "Save up to $500",
  //   mattress: true
  // },
]

const Classico = {
  advance: "Performance and essentiality",
  advance_color: "#5E5E5E",
  img: classicopng,
  roll_img: classicopng_roll,
  mobile_img: mobileClassicopng,
  name: "Classico",
  description: "The perfect combination of performance and essentiality for a mattress with built-in massaging system designed to meet every sleep need",
  bestfor: "quality sleep lover, restorative sleep seekers",
  fitness: "medium-firm",
  original_price: "$2,499",
  price: "$2,099",
  button: "Shop Classico",
  link: "https://magniflex.us/mattresses/classico?product=classico-essential-10",
  bottom: "Save up to $1,199",
  mattress: true
}

export const meta: MetaFunction = () => {
  return [{
    title: 'Upgrade Your Rest 2026 - Magniflex Collections',
  }];
};

export default function UpgradeYourRestPromo2026() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showEmailError, setShowEmailError] = useState(false);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  }
  const handleUnhover = () => {
    setHoveredIndex(-1);
  };

  const sendEmail = async () => {
    setLoading(true);
    setError(undefined);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_SUBSCRIPTION_TEMPLATE_ID,
        formRef.current || '',
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.text == 'OK') {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          }
        },
        (error) => {
          console.log(error);
          setError(error.text);
        },
      );
  };

  const validateEmail = (email: any) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    if (!validateEmail(email)) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
      await sendEmail();
      const emailInput = document.getElementById('email') as HTMLInputElement | null;
      if (emailInput) {
        emailInput.value = '';
      }
    }
  };

  return (
    <>
      <FadeIn>
        <img src={desktopHeader} loading='lazy' alt="header" className='w-full hidden md:block' />
        <img src={mobileHeader} loading='lazy' alt="header" className='w-full md:hidden' />
        <div className='flex overflow:hidden px-[32px] text-[13px] landing-[34px] justify-center items-start md:items-center flex-col md:flex-row md:space-x-nav bg-[#f9f9f9] w-100 text-white md:h-[50px] py-2'>
          <img src={desktopHeaderBottom} loading='lazy' alt="header" className='hidden md:block' />
          <img src={mobileHeaderBottom} loading='lazy' alt="header" className='md:hidden' />
        </div>
      </FadeIn>
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28" style={{ lineHeight: 1.5 }}>
        <div className='bg-white text-[#174860] landing-[29px] text-[17.5px] text-center pb-[64px] md:pb-[32px] px-[30px] md:px-[20%]'>
          <div style={{ marginBottom: '25px' }}>
            <span className='font-bold'>Great sleep changes everything.</span><br /><br />
            To celebrate <span className='font-bold'>National Sleep Awareness Month</span>, we're making it easier
            to elevate your nights with <span className='font-bold'>exclusive size upgrades</span>—so you can enjoy more space,
            more comfort, and more restorative rest, while <span className='font-bold text-red-600'>saving up to $3,999</span>.
          </div>
        </div>
        <div className='bg-white text-[#174860] text-[35px] font-bold text-center leading-1 py-[24px] px-[20px] mb-[24px] md:mb-[55px]' style={{ marginBottom: '55px' }}>
          Explore our collections
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-[70px]'>
          {
            products.map((product: any, index) => {
              return (
                <div key={index} className='px-[32px] md:px-12 pb-32 relative'>
                  <div className='relative h-auto'>
                    <img
                      src={product.roll_img}
                      onMouseOver={() => handleHover(index)}
                      onMouseOut={handleUnhover}
                      alt="product_img"
                      className='hidden md:block absolute'
                      style={{
                        objectFit: 'cover',
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                      }}
                    />
                    <img
                      src={product?.img}
                      onMouseOver={() => handleHover(index)}
                      onMouseOut={handleUnhover}
                      alt="product_img"
                      className='hidden md:block absolute'
                      style={{
                        objectFit: 'cover',
                        opacity: hoveredIndex !== index ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                      }}
                    />
                    <img
                      src={product?.img}
                      onMouseOver={() => handleHover(index)}
                      onMouseOut={handleUnhover}
                      alt="product_img"
                      className='hidden md:block'
                      style={{
                        visibility: 'hidden'
                      }}
                    />
                    <img src={product.mobile_img}
                      onMouseOver={() => handleHover(index)}
                      onMouseOut={handleUnhover}
                      alt="product_img"
                      className='md:hidden'
                      style={{
                        transition: '0.3s all ease'
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-center px-0 md:px-12'>
                    <div style={{ color: product.advance_color, marginTop: '24px' }} className={`mt-[24px] lg:mt-[38px] text-[17px] lg:text-[13px] text-[${product.advance_color}] uppercase text-center font-bold`}>{product.advance}</div>
                    <a href={product.link} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >{product.name}</a>
                    <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]' />
                    <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] md:text-center'>{product.description}</div>
                    <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] md:text-center w-full'>
                      <span className='text-[#839BB1]'>Best for:</span> <span className='text-[rgb(23,72,96)] text-[15px]'>{product.bestfor}</span>
                      <br />
                      <span className='text-[#839BB1]'>Firmness:</span> <span className='text-[#174860] text-[15px]'>{product.fitness}</span>
                    </div>
                    <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
                      King starting at
                      <br className='hidden md:block' />
                      <span className='line-through'>{product.original_price}</span> <span className='text-red-600 text-[22px] landing-[27.5px]'>{product.price}</span>
                    </div>
                    <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[12px] sm:text-[15px] lg:text-[13px] font-semibold' href={product.link}>{product.button}</a>
                    <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>{product.bottom}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='lg:w-[50%] w-full m-auto'>
          <div className='px-[32px] md:px-12 pb-32 relative'>
            <div className='relative h-auto'>
              <img
                src={Classico.roll_img}
                onMouseOver={() => handleHover(4)}
                onMouseOut={handleUnhover}
                alt="product_img"
                className='hidden md:block absolute'
                style={{
                  objectFit: 'cover',
                  opacity: hoveredIndex === 4 ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <img
                src={Classico?.img}
                onMouseOver={() => handleHover(4)}
                onMouseOut={handleUnhover}
                alt="product_img"
                className='hidden md:block absolute'
                style={{
                  objectFit: 'cover',
                  opacity: hoveredIndex !== 4 ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <img
                src={Classico?.img}
                onMouseOver={() => handleHover(4)}
                onMouseOut={handleUnhover}
                alt="product_img"
                className='hidden md:block'
                style={{
                  visibility: 'hidden'
                }}
              />
              <img src={Classico.mobile_img}
                onMouseOver={() => handleHover(4)}
                onMouseOut={handleUnhover}
                alt="product_img"
                className='md:hidden'
                style={{
                  transition: '0.3s all ease'
                }}
              />
            </div>
            <div className='flex flex-col items-center px-0 md:px-12'>
              <div style={{ color: Classico.advance_color, marginTop: '24px' }} className={`mt-[24px] lg:mt-[38px] text-[17px] lg:text-[13px] text-[${Classico.advance_color}] uppercase text-center font-bold`}>{Classico.advance}</div>
              <a href={Classico.link} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >{Classico.name}</a>
              <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]' />
              <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] md:text-center'>{Classico.description}</div>
              <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] md:text-center w-full'>
                <span className='text-[#839BB1]'>Best for:</span> <span className='text-[rgb(23,72,96)] text-[15px]'>{Classico.bestfor}</span>
                <br />
                <span className='text-[#839BB1]'>Firmness:</span> <span className='text-[#174860] text-[15px]'>{Classico.fitness}</span>
              </div>
              <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
                King starting at
                <br className='hidden md:block' />
                <span className='line-through'>{Classico.original_price}</span> <span className='text-red-600 text-[22px] landing-[27.5px]'>{Classico.price}</span>
              </div>
              <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[12px] sm:text-[15px] lg:text-[13px] font-semibold' href={Classico.link}>{Classico.button}</a>
              <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>{Classico.bottom}</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-4 px-[30px] lg:p-4 pt-[40px] lg:pt-0'>
          <form onSubmit={(e) => handleSubmit(e)} ref={formRef} className='flex flex-col items-center lg:py-8'>
            <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9999 14.4738C49.9284 13.9068 50.0795 14.4993 49.9788 14.907C49.8718 15.3083 49.4688 15.2574 49.4688 15.2574C49.4688 15.2574 43.8028 14.1426 25.9798 29.4888C28.6491 33.2664 30.6826 39.1781 28.945 40.1528C27.2137 41.1274 25.1739 35.7126 21.875 34.7188C18.5698 33.7251 18.5698 33.4957 10.1903 40.9045C2.72998 46.6187 5.78336 39.0953 9.10117 36.4771C12.419 33.8652 16.807 29.5143 17.1344 27.9153C17.4555 26.3036 14.3077 24.5645 14.9813 19.5128C15.082 18.9522 15.0694 18.9203 15.3464 18.2769C16.486 15.6077 17.0085 18.6464 18.7083 21.0162C20.5907 23.6471 21.9128 24.1568 21.9128 24.1568C21.9128 24.1568 35.4421 15.99 46.0062 14.4611" fill="#174860" />
              <path d="M14.5789 27.7684C14.5789 27.7684 -9.58376 12.4859 4.30443 1.49701C14.6985 -4.62492 17.0216 10.0078 17.0216 10.0078C17.0216 10.0078 22.4925 -0.783586 29.1093 3.67567C36.4437 8.62545 26.5532 17.2892 22.2533 20.3278C21.7119 19.557 27.7116 13.7281 24.929 11.5303C22.2659 9.44086 20.1191 12.3075 17.0972 15.9004C15.4792 17.8179 13.7416 6.28115 8.85618 9.02678C4.55625 11.4475 8.44696 19.1748 13.8486 25.8255C14.9378 27.2015 14.5789 27.762 14.5789 27.762" fill="#174860" />
              <path d="M14.6412 27.7052C14.6412 27.7052 -7.63274 9.81715 5.4559 1.1853C16.0578 -4.19129 18.2235 10.9001 18.2235 10.9001C18.2235 10.9001 23.6818 -0.834109 29.883 4.09019C36.7515 9.54323 26.9303 17.8566 22.5108 20.5831C22.026 19.774 28.6365 13.1106 26.049 10.7281C23.5748 8.45389 19.3567 12.6838 17.5184 15.302C16.083 17.3469 14.7042 5.70189 9.72435 8.09715C5.34258 10.2057 9.18922 18.7102 14.0558 25.7303C15.0316 27.1828 14.6412 27.7115 14.6412 27.7115" fill="#DA0613" />
            </svg>
            <div className='text-[23px] landing-[24px] font-semibold text-center mt-[12px] lg:mt-0'>Don't miss out on Magniflex sales!</div>
            <div className='text-[16px] landing-[24px] pt-1'>Sign up for our newsletter</div>
            {success &&
              <p className="text-xxs text-gold mb-4 mt-6">
                Thanks for your subscribing our newsletter.
              </p>
            }
            {
              showEmailError && <p className='text-xxs mb-4 mt-6 text-red-400'>Please enter the valid Email.</p>
            }
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter e-mail'
              style={{ outline: 'none', boxShadow: 'none' }}
              className='w-full md:w-[400px] text-center text-[16px] font-[24px] bg-[#F6F6F6] border border-t-0 border-l-0 border-r-0 border-b-1 border-[#174860] my-[20px] outline-none' />
            <br />
            <button type='submit' className='border border-[#556268] text-[#174860] text-[17px] lg:text-[13px] font-semibold px-6 py-3 hover:bg-[#174860] hover:text-white uppercase'>subscribe</button>
          </form>
          <div className='lg:mt-[40px] mt-[208px] w-full flex justify-center hidden lg:block'>
            <img className='w-full h-auto max-w-[900px]' src={magniflexlogo} alt="" />
          </div>
          <hr className='text-[#0a2430] my-[20px] hidden lg:block border-[#888888]' />
          <div className='text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 hidden lg:block'>At Night, We Bring Life to Your Days.</div>
          <div className='text-[16px] m-auto my-[40px] mt-[80px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 pt-[80px] lg:hidden relative' style={{ width: 'fit-content' }}>
            <div className='absolute top-0'><img className='w-[500px] h-auto' src={magniflexlogo} alt="" /></div>
            At Night, We Bring Life to Your Days.
          </div>
        </div>
      </div>
    </>
  );
}
