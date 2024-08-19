import React, {FormEvent, useState, useRef} from 'react';
import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {Link, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {Button} from '~/components';

import {Form} from '@remix-run/react';

import {StarsPartner} from '~/components/StarsPartner';
import {StarsQuotes} from '~/components/StarsQuotes';
import {StarsLocation} from '~/components/StarsLocation';
import {ContactOptions} from '~/components/ContactOptions';
import WorldMap from '~/components/worldmap';
import {CollectionLinks} from '~/components/CollectionLinks';

import testimonial_img from '~/assets/FiveStars/bg-testimonial.jpg';
import image_1 from '~/assets/FiveStars/miglior-comfort.jpg';
import image_2 from '~/assets/FiveStars/letto-hotel.jpg';
import image_3 from '~/assets/FiveStars/bg-letto-hotel.jpg';
import image_4 from '~/assets/FiveStars/bg-comfort-abordo.jpg';
import image_5 from '~/assets/FiveStars/materasso-yacht-1.jpg';
import image_6 from '~/assets/FiveStars/materasso-yacht-2.jpg';
import image_7 from '~/assets/FiveStars/materasso-yacht-3.jpg';
import image_8 from '~/assets/FiveStars/bg-benessere-spiaggia.jpg';

import logo_1 from '~/assets/FiveStars/Logo/club18.webp';
import logo_2 from '~/assets/FiveStars/Logo/club19.webp';
import logo_3 from '~/assets/FiveStars/Logo/club05.webp';
import logo_4 from '~/assets/FiveStars/Logo/club10.webp';
import logo_5 from '~/assets/FiveStars/Logo/justme.webp';
import logo_6 from '~/assets/FiveStars/Logo/penelope.webp';
import logo_7 from '~/assets/FiveStars/Logo/logo-wi-ki-woo.webp';
import logo_8 from '~/assets/FiveStars/Logo/club01.webp';
import logo_9 from '~/assets/FiveStars/Logo/club04.webp';
import logo_10 from '~/assets/FiveStars/Logo/Nassau.webp';
import logo_11 from '~/assets/FiveStars/Logo/club08.webp';
import logo_12 from '~/assets/FiveStars/Logo/club09.webp';
import logo_13 from '~/assets/FiveStars/Logo/CBBC.png';
import logo_14 from '~/assets/FiveStars/Logo/club11.webp';
import logo_15 from '~/assets/FiveStars/Logo/club13.webp';
import logo_16 from '~/assets/FiveStars/Logo/club015_1.webp';
import luxury_video from '~/assets/sleep-5-stars-welcome.mp4';

import Captcha from '~/assets/Contacts/recaptcha-placeholder.png';

import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_CONTACT_TEMPLATE_ID = 'mx-usa-form-order';
const EMAILJS_CONTACT_TEMPLATE_BILLING_ID = 'mx-usa-form-billing';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  city?: string;
  zip?: string;
  state?: string;
  topic?: string;
  message?: string;
}

export const handle = {
  seo: {
    title: '5-Star Luxury Sleep Experience | Discover Magniflex',
    titleTemplate: '5-Star Luxury Sleep Experience | Discover Magniflex.',
    description: 'Magniflex products designed for luxury hotels and resorts',
    handle: '@shopify',
    url: `https://magniflex.us/5-star-luxury-sleep`,
  },
};

export default function Contatti(props: {keyframe: Keyframes}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [policyCheck, setPolicyCheck] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    setError(undefined);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
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
          console.error(error);
          setError(error.text);
        },
      );
    // emailjs
    //   .sendForm(
    //     EMAILJS_SERVICE_ID,
    //     EMAILJS_CONTACT_TEMPLATE_BILLING_ID,
    //     formRef.current || '',
    //     EMAILJS_PUBLIC_KEY,
    //   )
    //   .then(
    //     (result) => {
    //       if (result.text == 'OK') {
    //         setLoading(false);
    //         setSuccess(true);
    //         setTimeout(() => {
    //           setSuccess(false);
    //         }, 3000);
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //       setError(error.text);
    //     },
    //   );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (policyCheck) await sendEmail();
    else setShowError(true);
  };
  /*
  export default function FiveStars(props: {keyframe: Keyframes}) {
    const {keyframe} = props;
    const [contactUsFor, setContactUsFor] = useState();
*/
  return (
    <>
      <section className="h-banner max-h-banner min-h-banner relative overflow-hidden bg-174860">
        <div className="container h-full">
          <div className="flex items-center relative z-10 h-full w-full justify-center">
            <div>
              <h1 className="text-[28px] md:text-3xl xl:text-5xl font-semibold text-white text-center pb-4">
                5-star luxury sleep
              </h1>
              <p className="text-center text-white text-xl">With Magniflex</p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] max-w-none"
            src={luxury_video}
          ></video>
        </div>
      </section>
      <section className="bg-f7 py-4 lg:py-6 sticky top-[55px] sm:top-[63px] xxl:top-[118px] z-50">
        <ul
          id="pageSubNav"
          className="justify-center uppercase text-sm text-174860 flex"
        >
          <li className="px-6">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              key="Hotel"
              to="Hotel"
              activeClass="active"
              offset={-70}
              className="cursor-pointer text-10 lg:text-sm xl:text-md"
            >
              Hotel
            </Link>
          </li>
          <li className="px-6">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              key="Yacht"
              to="Yacht"
              offset={-70}
              activeClass="active"
              className="cursor-pointer text-10 lg:text-sm xl:text-md"
            >
              Yacht
            </Link>
          </li>
          <li className="px-6">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              key="Beach Club"
              to="BeachClub"
              offset={-70}
              activeClass="active"
              className="cursor-pointer text-10 lg:text-sm xl:text-md"
            >
              Beach Club
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex gap-1 justify-center">
            <img src="/star.svg" className="w-5" />
            <img src="/star.svg" className="w-5" />
            <img src="/star.svg" className="w-5" />
            <img src="/star.svg" className="w-5" />
            <img src="/star.svg" className="w-5" />
          </div>
          <div className="text-cusSubheading lg:text-3xl max-w-[1050px] mx-auto text-174860 text-center font-semibold pt-12 justify-content-around">
            Whether it's for leisure or business, Magniflex ensures that every
            night and day you spend away from home is characterized by a higher
            level of comfort. This is made possible through our range of
            products designed for luxury hotels, both indoors and outdoors.
          </div>
        </div>
      </section>
      <section id="Hotel">
        <Fade duration={1000}>
          <div
            className="hidden md:block md:h-[770px] bg-cover bg-center"
            style={{backgroundImage: `url("${testimonial_img}")`}}
          ></div>
        </Fade>
      </section>

      <Fade duration={1000}>
        <section className="bg-f7">
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28 flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3">
              <h4 className="text-B09987 text-[20px] lg:text-xl">
                SLEEP WELL WHEREVER YOU ARE
              </h4>
              <h3 className="text-174860 my-6 font-semibold text-cusSubheading lg:text-3xl">
                Never give up the pleasure of a regenerating night's rest.
              </h3>
            </div>
            <div className="w-full lg:w-7/12 text-[20px] text-174860 font-medium lg:text-xl leading-normal">
              This is especially true when catering to customers who seek utmost
              satisfaction during their stays away from home. In collaboration
              with the world's finest hotels, Magniflex is dedicated to gently
              lulling you to sleep anywhere. Our applied technologies, quality
              materials, elegant fabrics, and natural fibers guarantee the
              ultimate comfort.
            </div>
          </div>
        </section>
      </Fade>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="flex flex-col md:flex-row text-174860 md:h-[770px]">
            <div className="w-full md:w-1/2 text-lg">
              <div className="w-full md:w-10/12 md:max-w-[350px] mx-auto">
                <img
                  src={image_1}
                  alt="ricarica image 2"
                  className="hidden md:block md:w-full"
                />
                <div className="relative">
                  <p className="text-cusSubheading font-semibold lg:text-3xl my-12 max-w-md px-3 lg:px-0">
                    Experience ultimate comfort <br /> wherever you may be
                  </p>
                  <svg
                    version="1.1"
                    className="absolute top-0 right-4 md:-right-16 md:bottom-4 md:top-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="59px"
                    height="81px"
                    viewBox="0 0 59 81"
                    enableBackground="new 0 0 59 81"
                    xmlSpace="preserve"
                  >
                    <path
                      id="Path"
                      fill="#B09987"
                      d="M56.025,40.603c-7.911-12.636-21.678-2.055-23.527,8.938c-1.13,6.678-2.362,3.699-1.541-1.232
                      c0.822-4.623,3.391-11.403,8.219-16.335c4.828-4.931,4.623-6.781,1.027-14.794c-1.951-4.418-8.424-14.28-10.684-16.54
                      c-2.26,2.26-8.732,12.123-10.685,16.54c-3.596,8.013-3.802,9.966,1.027,14.794c4.931,4.931,7.5,11.712,8.219,16.335
                      c0.822,4.93-0.411,7.91-1.541,1.232C24.69,38.549,10.923,27.967,3.013,40.603c-6.883,10.889,5.855,21.78,15.411,13.356
                      c4.109-3.596-2.671-1.951-3.904-2.568c-3.595-1.85-2.362-6.576,1.335-7.705c4.52-1.439,9.966,4.52,8.013,8.938
                      c-1.027,2.363-3.595,1.541-4.623,3.904c-0.72,1.645,2.877,1.645,2.877,2.465c0,0.104-6.473,3.803-7.192,4.623
                      c-2.877,3.699,7.5,4.008,8.219-0.82c0.616-4.109,6.781-3.289,1.027,2.979c-0.409,0.41-4.313,7.602-0.307,5.547
                      c0.719-0.309,3.082-3.699,3.699-3.494c0.822,0.412-3.699,9.658-2.671,10.479c0.616,0.412,4.315,1.953,4.726,2.057
                      c0.411-0.104,4.109-1.645,4.725-2.057c1.027-0.82-3.595-10.066-2.671-10.479c0.616-0.309,2.979,3.082,3.699,3.494
                      c4.006,2.055,0.103-5.035-0.411-5.65c-5.855-6.268,0.309-6.986,1.027-2.98c0.72,4.828,11.198,4.52,8.219,0.822
                      c-0.72-0.822-7.192-4.52-7.192-4.623c0-0.822,3.596-0.822,2.877-2.467c-1.026-2.465-3.595-1.541-4.623-3.902
                      c-1.951-4.418,3.493-10.377,8.014-8.939c3.596,1.131,4.931,5.855,1.336,7.705c-1.336,0.617-8.014-1.025-3.904,2.568
                      C50.17,62.383,62.807,51.492,56.025,40.603L56.025,40.603z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="w-full pb-[65%] md:pb-0 md:w-1/2 bg-cover bg-center"
              style={{backgroundImage: `url("${image_2}")`}}
            ></div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="flex flex-col-reverse md:flex-row text-174860 md:h-[770px]">
            <div
              className="w-full pb-[65%] md:pb-0 md:w-1/2 bg-cover bg-center"
              style={{backgroundImage: `url("${image_3}")`}}
            ></div>
            <div className="w-full md:w-1/2 text-lg md:flex md:flex-col md:h-full md:justify-center">
              <div className="w-full md:w-10/12 md:max-w-[350px] mx-auto">
                <img
                  src={image_2}
                  alt="ricarica image 2"
                  className="hidden md:block md:w-full"
                />
                <p className="text-[1.1rem] lg:text-lg mt-10 mb-10 lg:mb-0 px-3 lg:max-w-md lg:px-0">
                  Magniflex's exclusive range, developed specifically for
                  hotels, boasts a unique balance between padding and
                  upholstery. This ensures the comfort of even the most
                  discerning guests, offering them the same level of comfort as
                  their own beds at home.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section id="Yacht" className="pt-32">
        <div className="container max-w-7xl">
          <h4 className="text-B09987 text-[1.1rem] lg:text-xl mb-6 lg:my-12">
            ENJOY COMFORT EVEN ON BOARD
          </h4>
        </div>
        <div
          className="h-[440px] bg-cover bg-center"
          style={{backgroundImage: `url("${image_4}")`}}
        ></div>
        <Fade duration={1000}>
          <section className="py-32">
            <div className="container max-w-7xl flex flex-wrap justify-between">
              <div className="w-full lg:w-4/12 xl:w-1/4">
                <h3 className="text-174860 font-semibold text-cusSubheading lg:text-3xl">
                  Mangusta Yacht
                </h3>
              </div>
              <div className="w-full lg:w-7/12 text-174860 font-medium text-[1.1rem] lg:text-xl leading-normal">
                When performance and ergonomics unite in the realm of high seas
                and elegance, Mangusta stands out. The brand synonymous with
                nautical style has chosen our mattresses to furnish the
                relaxation zones of models such as 72/50, 94/05, 110/03, 80/75,
                and 130/08, along with the exquisite Gransport 54 and the
                incredible Oceano 46. Cradled by the sea, embraced by Magniflex
                comfort, both crew and guests will indulge in unforgettable
                comfort anywhere in the world."
              </div>
            </div>
          </section>
        </Fade>
      </section>
      <section className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <img src={image_5} />
        <img src={image_6} />
        <img src={image_7} className="hidden lg:block" />
      </section>
      <section id="BeachClub" className="pt-12">
        <div className="container max-w-7xl">
          <h4 className="text-B09987 text-[1.1rem] lg:text-xl mb-6">
            EXPERIENCE WELL-BEING, EVEN ON THE BEACH
          </h4>
        </div>
        <div
          className="h-[430px] sm:h-[770px] bg-cover bg-center"
          style={{backgroundImage: `url("${image_8}")`}}
        >
          {' '}
        </div>
        <Fade duration={1000}>
          <section className="py-32">
            <div className="container max-w-7xl text-center">
              <h3 className="text-174860 font-semibold text-cusSubheading lg:text-3xl mb-6 lg:mb-0">
                Daydreamer, because you deserve rejuvenation wherever you go
              </h3>
              <div className="text-174860 font-medium text-[1.1rem] lg:text-xl leading-normal py-0 lg:py-8">
                For Magniflex, comfort and well-being transcend mere mission;
                they embody a sophisticated lifestyle. Hence, our offerings now
                extend to an outdoor collection. Marrying Magniflex's hallmark
                quality with contemporary luxury, we present mattresses and
                pillows for sunbeds, resorts, and pools. These cater to those
                who seek absolute and exclusive comfort and entertainment.
                Notably, this collection graces the new location of the Cala
                Bassa Beach Club in Ibiza."
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-16 items-center gap-6">
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_1} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_2} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_3} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_4} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_5} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_6} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_7} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_8} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_9} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_10} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_11} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_12} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_13} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_14} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_15} className="max-w" />
                </div>
                <div className="text-center p-4 flex justify-center h-32">
                  <img src={logo_16} className="max-w" />
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </section>
      <Fade duration={1000}>
        <StarsLocation />
      </Fade>
      <Fade duration={1000}>
        <section>
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28 flex flex-wrap justify-between">
            <div className="w-full lg:w-4/12">
              <h3 className="text-B09987 font-semibold text-cusSubheading lg:text-3xl mb-6 lg:mb-0">
                A Global Presence
              </h3>
            </div>
            <div className="w-full lg:w-7/12 text-174860 font-medium text-[20px] lg:text-xl leading-normal">
              For some time now, Magniflex has partnered with various beach
              clubs and tourism professionals worldwide. Our shared philosophy
              centers around the belief that quality sleep is key to a vibrant
              life. From Ibiza to Dubai, Formentera to Sardinia, numerous
              residences and hotels have chosen our company's commitment to
              luxury slumber.
            </div>
          </div>
        </section>
      </Fade>
      <Fade duration={1000}>
        <section>
          <div className="px-3 sm:container pb-16 md:pb-24 lg:pb-28 flex flex-wrap justify-between">
            <div className="w-full lg:w-4/12">
              <h3 className="text-B09987 font-semibold text-cusSubheading lg:text-3xl mb-6 lg:mb-0">
                Uniquely Customizable Style
              </h3>
            </div>
            <div className="w-full lg:w-7/12 text-174860 font-medium text-[20px] lg:text-xl leading-normal">
              Magniflex's outdoor line presents a range of products boasting an
              unmistakable style. Meticulous attention to shapes and the use of
              top-quality materials ensure absolute relaxation and comfort.
              Designed for full customization with client logos, this mattress
              line is available in various sizes.
            </div>
          </div>
        </section>
      </Fade>
      <section>
        <ContactOptions />
      </section>
      <section id="form-contact" className="bg-f7 mt-20 pt-20 pb-36 mb-4">
        <div className="container max-w-[880px]">
          <div className="flex flex-wrap pt-5 lg:pt-16">
            <h3 className="w-full lg:w-1/2 text-174860 font-semibold text-cusSubheading lg:text-3xl mb-2 lg:mb-12">
              Are You a Hotel Manager or Yacht Owner?
            </h3>
            <p className="w-full lg:w-1/2 text-174860 text-[1.1rem] lg:text-xl my-2 lg:mb-12">
              Complete the form, and our consultants will reach out to determine
              the tailored solution that suits your needs.{' '}
            </p>
          </div>
          <h3 className="mt-12 mb-6 uppercase text-B09987 text-[1.1rem] lg:text-xl">
            INFORMATIONS
          </h3>
          <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div className="mt-3">
                <input
                  type="text"
                  id="title"
                  name="title"
                  autoComplete="family-name"
                  placeholder="title"
                  aria-label="title"
                  defaultValue="MX-USA 5 Stars Luxury Sleeping - A new web site message from"
                  className="hidden"
                />
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Name*"
                  aria-label="Name"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name*"
                  aria-label="Last name"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email*"
                  aria-label="Email"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="company"
                  placeholder="Company"
                  aria-label="Company"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="zip"
                  name="zip"
                  type="text"
                  autoComplete="province"
                  placeholder="ZIP"
                  aria-label="ZIP"
                />
              </div>
              <div className="mt-3">
                <select
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="state"
                  name="state"
                  autoComplete="state"
                  placeholder="State"
                  aria-label="State"
                >
                  <option>State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="mt-3">
                <select
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="topic"
                  name="topic"
                  autoComplete="topic"
                  placeholder="Topic"
                  aria-label="Topic"
                >
                  <option value="">How you know us?</option>
                  <option value="search engines">Search engines</option>
                  <option value="social networks">Social networks</option>
                  <option value="faris or events">Trade faris or events</option>
                  <option value="advertising">Advertising</option>
                  <option value="magazines">Magazines</option>
                  <option value="TV">TV</option>
                  <option value="Radio">Radio</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mt-5">
                <textarea
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none resize-none"
                  rows={4}
                  id="message"
                  name="message"
                  autoComplete="message"
                  placeholder="Your message"
                  aria-label="Message"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    name="agreePrivacy"
                    value="agreePrivacy"
                    onChange={() => setPolicyCheck(!policyCheck)}
                    // required
                  />
                  <label
                    htmlFor="agreePrivacy"
                    className="text-8c8c8c pl-4 text-sm"
                  >
                    {' '}
                    I agree with the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-174860 hover:text-B09987"
                    >
                      Privacy policy
                    </a>
                  </label>
                </div>
                {showError && (
                  <div className="text-red-500">
                    You should agree to the policy to submit.
                  </div>
                )}
                <div className="flex place-content-end">
                  <button
                    type="submit"
                    className="mt-4 text-center text-sm text-2f88b1 uppercase border border-2f88b1 font-semibold px-8 py-2 hover:bg-2f88b1 hover:text-white disabled:opacity-30 whitespace-nowrap"
                    disabled={loading}
                  >
                    {loading ? 'Loading ...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
            {success && (
              <div className="w-full bg-green-600 flex justify-center items-center text-white text-sm py-2 mt-3">
                Contact email sent successfully!
              </div>
            )}
            {error && (
              <div className="w-full bg-red-600 flex justify-center items-center text-white text-sm py-2 mt-3">
                Unknown error, please try again later!
              </div>
            )}
          </form>
        </div>
      </section>
      <WorldMap keyframe={''} />
      <CollectionLinks />
    </>
  );
}
