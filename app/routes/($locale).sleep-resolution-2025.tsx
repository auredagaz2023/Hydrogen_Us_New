import { FormEvent, useRef, useState } from 'react';
import { type MetaFunction } from '@shopify/remix-oxygen';
import emailjs from '@emailjs/browser';
import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import FadeIn from '~/components/FadeIn';
import desktopHeader from '../assets/sleep-resolution-2025/Desktop/Header/magniflex-us-the-great-sleep-resolution-header-desktop.jpg'
import desktopHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar-mobile-A.gif'
import mobileHeader from '../assets/sleep-resolution-2025/Mobile/Header/magniflex-us-the-great-sleep-resolution-header-mobile.jpg'
import mobileHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar-mobile-A.gif'
import dolcevitapng from '../assets/sleep-resolution-2025/Desktop/Products/Images/02-dolce-vita.jpg'
import dolcevitapng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/02-dolce-vita.jpg'
import mobileDolcevitapng from '../assets/sleep-resolution-2025/Mobile/Products/02-dolce-vita.jpg'

import magnicoolpng from '../assets/sleep-resolution-2025/Desktop/Products/Images/03-magnicool.jpg'
import magnicoolpng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/03-magnicool.jpg'
import mobileMagnicoolpng from '../assets/sleep-resolution-2025/Mobile/Products/03-magnicool.jpg'

import magnistretchpng from '../assets/sleep-resolution-2025/Desktop/Products/Images/04-magnistretch.jpg'
import magnistretchpng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/04-magnistretch.jpg'
import mobileMagnistretchpng from '../assets/sleep-resolution-2025/Mobile/Products/04-magnistretch.jpg'

import magnificopng from '../assets/sleep-resolution-2025/Desktop/Products/Images/05-magnifico.jpg'
import magnificopng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/05-magnifico.jpg'
import mobileMagnificopng from '../assets/sleep-resolution-2025/Mobile/Products/05-magnifico.jpg'

import classicopng from '../assets/sleep-resolution-2025/Desktop/Products/Images/06-classico.jpg'
import classicopng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/06-classico.jpg'
import mobileClassicopng from '../assets/sleep-resolution-2025/Mobile/Products/06-classico.jpg'

import firenzepng from '../assets/sleep-resolution-2025/Desktop/Products/Images/01-firenze-base.jpg'
import firenzepng_roll from '../assets/sleep-resolution-2025/Desktop/Products/Roll/01-firenze-base.jpg'
import mobileFirenzepng from '../assets/sleep-resolution-2025/Mobile/Products/01-firenze-base.jpg'

import CirculationIcon from '../assets/sleep-resolution-2025/Icons/01-icon-circulation.png'
import SnoozeIcon from '../assets/sleep-resolution-2025/Icons/02-icon-snooze.png'
import PositionIcon from '../assets/sleep-resolution-2025/Icons/03-icon-position.png'
import FitIcon from '../assets/sleep-resolution-2025/Icons/04-icon-fit.png'
import SupportIcon from '../assets/sleep-resolution-2025/Icons/05-icon-support.png'
import ArrowIcon from '../assets/sleep-resolution-2025/Icons/arrow.svg'
import { RxChevronDown } from 'react-icons/rx';

export const handle = {
  seo: {
    title: 'Shop Magniflex Collections - Explore Our Premium Sleep Solutions',
    titleTemplate:
      'Shop Magniflex Collections - Explore Our Premium Sleep Solutions',
    description:
      "Explore and shop Magniflex's premium mattress collections, elevating your sleep experience with luxurious comfort and uncompromising quality",
    handle: '@shopify',
    url: `https://magniflex.us/collections`,
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
    description: "One mattress with 4 layers combinations and different comfort levels thanks to our Dual Core technology",
    bestfor: "couples with different sleep needs",
    fitness: "soft, medium-soft, medium-firm, firm",
    price: "$3,099",
    button: "shop dolce vita",
    link: "https://magniflex.us/mattresses/dolce-vita?product=dolcevita-dual-10",
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
    price: "$2,299",
    button: "Shop MAGNICOOL",
    link: "https://magniflex.us/mattresses/magnicool?product=magnicool-10-firm",
    mattress: true
  },
  {
    advance: "Ultimate SPINE RELIEF",
    advance_color: "#9AA8A9",
    img: magnistretchpng,
    roll_img: magnistretchpng_roll,
    mobile_img: mobileMagnistretchpng,
    name: "MagniStretch",
    description: "Its patented checkered design provides targeted support and gently stretches the spine to promote natural alignment",
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    price: "$2,699",
    button: "Shop MAGNISTRETCH",
    link: "https://magniflex.us/mattresses/magnistretch?product=magnistretch-12",
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
    price: "$2,899",
    button: "Shop Magnifico",
    link: "https://magniflex.us/mattresses/magnifico?product=toscana-cotton-lux-10",
    mattress: true
  },
  {
    advance: "Performance and essentiality",
    advance_color: "#5E5E5E",
    img: classicopng,
    roll_img: classicopng_roll,
    mobile_img: mobileClassicopng,
    name: "Classico",
    description: "The perfect combination of performance and essentiality for a mattress with built-in massaging system designed to meet every sleep need.",
    bestfor: "quality sleep lover, restorative sleep seekers",
    fitness: "medium-firm",
    price: "$1,799",
    button: "Shop Classico",
    link: "https://magniflex.us/mattresses/classico?product=classico-9",
    mattress: true
  },
]

export const meta: MetaFunction = () => {
  return [{
    title: 'Sleep Resolution 2025 - Magniflex Collections',
  }];
};

export default function BlackFriday2025() {
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
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email format validation
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
      <div className="px-3 py-16 md:py-24 lg:py-28" style={{ lineHeight: 1.5 }}>
        <div className='bg-white text-[#174860] landing-[29px] text-[17.5px] text-center pb-[64px] md:pb-[45px] px-[30px] md:px-[20%]'>
          <div style={{ marginBottom: '25px' }}>
            <span className='font-bold text-[25px] mb-4'>Better sleep starts with the right foundation.</span><br /><br />
            <span className='text-[17.5px]'>
              With any Magniflex mattress purchase, you can elevate your rest with the <span className='font-bold'>Firenze adjustable base</span> starting at $199,<br />
              blending advanced comfort with refined design while <span className='font-bold'>saving up to $1,799</span>.
            </span>
          </div>
        </div>

        <div className="px-12 mb-20 relative hidden lg:block">
          <div className='relative'>
            <img className='hidden lg:block w-full' style={{ visibility: 'hidden' }} src={firenzepng} alt="" />
            <img
              src={firenzepng_roll}
              alt="product_img"
              className='hidden lg:block absolute top-0 left-0'
              style={{
                objectFit: 'cover',
                opacity: hoveredIndex === 4 ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            />
            <img
              src={firenzepng}
              alt="product_img"
              className='hidden lg:block w-full absolute top-0 left-0 '
              style={{
                objectFit: 'cover',
                opacity: hoveredIndex !== 4 ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            />
          </div>
          <div className='absolute w-[30%] top-[50px] md:top-[100px] left-[8%] xl:left-[6%] z-100'>
            <a href='https://magniflex.us/bed-bases/details?product=firenze' className='text-[#174860] text-[18px] xl:text-[22px] landing-[35px] hover:underline font-bold mb-4'>
              FIRENZE<br />
              ADJUSTABLE BASE</a>
            <div className='text-[12px] xl:text-[13px] landing-[25px] mt-[16px] text-[#174860] mb-2'>
              <span>Get it <span className='font-bold'>starting at</span> <span className='line-through'>$1,099</span> <span className='font-bold text-[#ED1C24] text-[15px]'>$199</span><br />
                with the purchase of a King, Queen,<br />
                or Twin XL mattress
              </span>
            </div>
            <div className='flex flex-col w-fit mt-5 mb-5'>
              <a onMouseOver={() => handleHover(4)} onMouseOut={handleUnhover} className='w-full text-center py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[17.5px] lg:text-[13px] font-semibold' href="https://magniflex.us/collections/firenze">Shop FIRENZE BASE</a>
              <div className='text-[#174860] text-[8px] text-center xl:text-[13px] landing-[30px] font-semibold mt-[20px] font-[600px]'>Save up to $1,799</div>
            </div>
          </div>
          <div className='mt-[2px] bg-[#F2ECD6] flex justify-center items-center flex-col'>
            <div className='bg-white w-[100px] h-[30px] flex justify-center items-center' style={{ borderRadius: '0px 0px 20px 20px' }}>
              <RxChevronDown
                className='h-6 w-6'
              />
            </div>
            <div className='mt-5 bg-transparent text-[#174860] landing-[29px] text-[17.5px] text-center pb-[64px] md:pb-[48px] px-[30px] md:px-[20%]'>
              <div style={{ marginBottom: '25px' }}>
                <span className='font-bold text-[25px] mb-4'>Don't just sleep, restore. </span><br /><br />
                <span className='text-[17.5px]'>
                  The Firenze Adjustable Base is the foundation<br />
                  for a truly restorative night, and day.
                </span>
              </div>
              <div className='grid grid-cols-2 gap-[1px] rounded-[50px] overflow-hidden'>
                <div className='bg-white flex items-center justify-center px-5 min-h-[70px] mb-[2px] mr-[2px] text-[#000028] font-bold text-center'>Do you experience some of these issues?</div>
                <div className='bg-white flex text-left items-center px-5 justify-center min-h-[70px] mb-[2px] text-[#000028] font-bold text-center'>How Firenze Adjustable Base will help:</div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[100px] mr-[2px]'>
                  <div className='mr-5'>Do you wake up<br /> feeling stiff or achy?</div>
                  <img width={78} src={CirculationIcon} alt="" />
                  <img src={ArrowIcon} className='absolute right-[-16px]' alt="" />
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[100px]'>
                  <div>Independently elevate your head<br />
                    and legs <span className='font-semibold'>to relieve muscle pressure</span><br />
                    and promote <span className='font-semibold'>better circulation</span>
                  </div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[100px] mr-[2px]'>
                  <div className='mr-5'>Tired of disruptive snoring<br />
                    or poor posture in bed?
                  </div>
                  <img width={78} src={SnoozeIcon} alt="" />
                  <img src={ArrowIcon} className='absolute right-[-16px]' alt="" />
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[100px]'>
                  <div>Ideal for <span className='font-semibold'>reducing strain, mitigating snoring</span>,<br />
                    and <span className='font-semibold'>improving overall spinal alignment</span>
                  </div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[100px] mr-[2px]'>
                  <div className='mr-5'>Are you constantly searching<br />
                    for the "just right" position?</div>
                  <img width={78} src={PositionIcon} alt="" />
                  <img src={ArrowIcon} className='absolute right-[-16px]' alt="" />
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[100px]'>
                  <div>Find the perfect angle for superior comfort<br />
                    and support thanks to a <span className='font-semibold'>powerful, silent motor</span></div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[100px] mr-[2px]'>
                  <div className='mr-5'>Worried an adjustable base<br />
                    won't fit your current frame?</div>
                  <img width={78} src={FitIcon} alt="" />
                  <img src={ArrowIcon} className='absolute right-[-16px]' alt="" />
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[100px]'>
                  <div><span className='font-semibold'>Zero-clearance structure</span> fits discreetly<br />
                    within most existing bed frames</div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[100px] mr-[2px]'>
                  <div className='mr-5'>Need a base that supports watching<br />
                    TV, reading, and even working?</div>
                  <img width={78} src={SupportIcon} alt="" />
                  <img src={ArrowIcon} className='absolute right-[-16px]' alt="" />
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[100px]'>
                  <div>it <span className='font-semibold'>supports all your in-bed activities</span><br />
                    while maximizing mattress benefits.</div>
                </div>
              </div>
              <div className='pt-[50px]'>
                <a className='text-center py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[12px] sm:text-[15px] lg:text-[13px] font-semibold' href={'https://magniflex.us/bed-bases/details?product=firenze'}>Shop FIRENZE BASE</a>
                <div className='pt-[25px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>SAVE UP TO $1,799</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 mb-20 relative block lg:hidden">
          <div className='relative bg-[#F2ECD6] pb-5'>
            <img src={mobileFirenzepng}
              alt="product_img"
              className='lg:hidden'
            />
            <div className='flex flex-col items-center px-12'>
              <a href='https://magniflex.us/bed-bases/details?product=firenze' className='hover:underline mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center'>FIRENZE ADJUSTABLE BASE</a>
              <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] text-center'>
                <span>Get it <span className='font-bold'>starting at</span> <span className='line-through'>$1,099</span> <span className='font-bold text-[#ED1C24] text-[15px]'>$199</span><br />
                  with the purchase of a King, Queen,<br />
                  or Twin XL mattress
                </span>
              </div>

              <a className='text-center mt-[30px] py-4 px-8 uppercase border border-[#174860] bg-[#174860] hover:bg-transparent text-white hover:text-[#174860] text-[17.5px] lg:text-[13px] font-semibold' href="https://magniflex.us/bed-bases/details?product=firenze">Shop FIRENZE BASE</a>
              <div className='mt-[15px] mb-[30px] uppercase text-[#174860] text-[17px] lg:text-[13px] font-semibold'>SAVE UP TO $1,799</div>
            </div>
          </div>
          <div className='mt-[2px] bg-[#F2ECD6] flex justify-center items-center flex-col'>
            <div className='bg-white w-[100px] h-[30px] flex justify-center items-center' style={{ borderRadius: '0px 0px 20px 20px' }}>
              <RxChevronDown
                className='h-6 w-6'
              />
            </div>
            <div className='mt-5 bg-transparent text-[#174860] landing-[29px] text-[17.5px] text-center pb-[64px] md:pb-[32px] px-[30px] md:px-[20%]'>
              <div style={{ marginBottom: '50px' }}>
                <span className='font-bold text-[25px] mb-4'>Don't just sleep, restore. </span><br /><br />
                <span className='text-[17.5px]'>
                  The Firenze Adjustable Base is the foundation<br />
                  for a truly restorative night, and day.
                </span>
              </div>
              <div className='grid grid-cols-2 gap-[1px] rounded-[50px] overflow-hidden'>
                <div className='bg-white flex items-center justify-center px-5 min-h-[80px] mb-[2px] mr-[2px] text-[#000028] font-bold text-center'>Do you experience some of these issues?</div>
                <div className='bg-white flex text-left items-center px-5 justify-center min-h-[80px] mb-[2px] text-[#000028] font-bold text-center'>How Firenze Adjustable Base will help:</div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[140px] mr-[2px]'>
                  <div className='mr-5'>Feeling stiff<br />or achy?</div>
                  <div className='absolute right-[-39px] flex flex-col justify-center items-center'>
                    <img width={75} src={CirculationIcon} alt="" />
                    <img width={30} src={ArrowIcon} alt="" />
                  </div>
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[140px]'>
                  <div>Relieve pressure<br />
                    and improve<br />
                    circulation
                  </div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[140px] mr-[2px]'>
                  <div className='mr-5'>Disruptive<br />
                    snoring or poor <br />
                    posture?<br />
                  </div>
                  <div className='absolute right-[-39px] flex flex-col justify-center items-center'>
                    <img width={78} src={SnoozeIcon} alt="" />
                    <img width={30} src={ArrowIcon} alt="" />
                  </div>
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[140px]'>
                  <div>Reduce snoring <br />
                    and improve<br />
                    spinal alignment<br />
                  </div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[140px] mr-[2px]'>
                  <div className='mr-5'>Can’t find<br />
                    the “just right”<br />
                    position?
                  </div>
                  <div className='absolute right-[-39px] flex flex-col justify-center items-center'>
                    <img width={75} src={PositionIcon} alt="" />
                    <img width={30} src={ArrowIcon} alt="" />
                  </div>
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[140px]'>
                  <div>Perfect<br />
                    positioning,<br />
                    effortless comfort
                  </div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[140px] mr-[2px]'>
                  <div className='mr-5'>Worried it<br />
                    won’t fit your<br />
                    bed frame?
                  </div>
                  <div className='absolute right-[-39px] flex flex-col justify-center items-center'>
                    <img width={75} src={FitIcon} alt="" />
                    <img width={30} src={ArrowIcon} alt="" />
                  </div>
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[140px]'>
                  <div>Designed to fit most frames</div>
                </div>
                <div className='relative bg-white flex items-center justify-end text-right px-5 min-h-[140px] mr-[2px]'>
                  <div className='mr-5'>Need support<br />
                    for TV, reading,<br />
                    or work?
                  </div>
                  <div className='absolute right-[-39px] flex flex-col justify-center items-center'>
                    <img width={75} src={SupportIcon} alt="" />
                    <img width={30} src={ArrowIcon} alt="" />
                  </div>
                </div>
                <div className='pl-10 bg-white flex text-left items-center px-5 justify-start min-h-[140px]'>
                  <div>Supports all in-bed activities</div>
                </div>
              </div>
              <div className='pt-[50px]'>
                <a className='text-center py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[12px] sm:text-[15px] lg:text-[13px] font-semibold' href={'https://magniflex.us/bed-bases/details?product=firenze'}>Shop FIRENZE BASE</a>
                <div className='pt-[25px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>SAVE UP TO $1,799</div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white text-[#174860] text-center leading-1 py-[24px] px-[20px] mb-[24px] md:mb-[55px]' style={{ marginBottom: '55px' }}>
          <div className='mb-5'>
            <span className='text-[35px] font-semibold'>Explore our collections</span>
          </div>
          <span className='text-[17px]' style={{ lineHeight: 1 }}>
            Choose your mattress and, for <span className='font-bold'>an extra $199</span>,<br />
            upgrade your comfort with a <span className='font-bold'>Firenze adjustable base</span>.
          </span>
        </div>

        <div className='flex flex-col flex-wrap lg:flex-row mb-[70px]'>
          {
            products.map((product: any, index) => {
              return (
                <div key={index} className='px-[32px] md:px-12 pb-32 relative m-auto w-full lg:w-1/2'>
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
                        transition: '0.3s all ease' // Apply a smooth transition effect
                      }}
                    />
                  </div>
                  <div className='flex flex-col items-center px-0 md:px-12'>
                    <div style={{ color: product.advance_color, marginTop: '24px' }} className={`mt-[24px] lg:mt-[38px] text-[17px] lg:text-[13px] text-[${product.advance_color}] uppercase text-center font-bold`}>{product.advance}</div>
                    <a href={product.link} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >{product.name}</a>
                    <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]' />
                    <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] md:text-center'>{product.description}</div>
                    <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] md:text-center w-full'>
                      {product.features && (
                        <>
                          <span className='text-[#839BB1]'>Features: </span>
                          <span className='text-[rgb(23,72,96)] text-[15px]'>{product.features}</span>
                          <br />
                        </>
                      )}
                      {product.bestfor && <><span className='text-[#839BB1]'>Best for:</span> <span className='text-[rgb(23,72,96)] text-[15px]'>{product.bestfor}</span>
                        <br /></>}
                      {product.fitness && <><span className='text-[#839BB1]'>Benefits:</span> <span className='text-[#174860] text-[15px]'>{product.fitness}</span></>}
                    </div>
                    <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
                      Starting at&nbsp;&nbsp;
                      <br className='hidden md:block' />
                      <span className='text-[22px] landing-[27.5px] font-semibold'>{product.price}</span>
                    </div>
                    <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-transparent hover:text-white text-[#174860] text-[12px] sm:text-[15px] lg:text-[13px] font-semibold' href={product.link}>{product.button}</a>
                    {product.bottom && <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>{product.bottom}</div>}
                  </div>
                </div>
              )
            })
          }
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
            <img className='w-full h-auto' src={magniflexlogo} alt="" />
          </div>
          <hr className='text-[#0a2430] my-[20px] hidden lg:block border-[#888888]' />
          <div className='text-[12px] sm:text-[16px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 hidden lg:block'>At Night, We Bring Life to Your Days.</div>
          <div className='lg:hidden w-full text-[19px] my-[40px] mt-[80px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 pt-[53px] md:pt-[80px] relative'>
            <img className='w-full h-auto mb-2' src={magniflexlogo} alt="" />
            At Night, We Bring Life to Your Days.
          </div>
        </div>
      </div >
    </>
  );
}
