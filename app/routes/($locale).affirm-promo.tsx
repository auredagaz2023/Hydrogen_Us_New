import { type MetaFunction } from '@shopify/remix-oxygen';
import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import FadeIn from '~/components/FadeIn';
import desktopHeader from '../assets/affirm-promo/Header/magniflex-us-fall-into-savings-header-desktop.jpg'
import desktopHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar.gif'
import mobileHeader from '../assets/affirm-promo/Header/magniflex-us-fall-into-savings-header-mobile.jpg'
import mobileHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar-mobile-A.gif'
import shopImg from '~/assets/affirm-promo/svg/shop.png'
import approvalImg from '~/assets/affirm-promo/svg/approval.png'
import paymentsImg from '~/assets/affirm-promo/svg/payments.png'
import affirmSvg from '~/assets/affirm-promo/svg/affirm.svg'
import whiteAffirmSvg from '~/assets/affirm-promo/svg/whiteAffirm.svg'
import financingSvg from '~/assets/affirm-promo/svg/financing.svg'

import desktopMagnistrentchImage from '~/assets/affirm-promo/Desktop/03-magnistretch.jpg';
import mobileMagnistrentchImage from '~/assets/affirm-promo/Mobile/03-magnistretch.jpg';


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

export const meta: MetaFunction = () => {
  return [{
    title: 'Affirm Promo',
  }];
};

export default function AffirmPromo() {

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
            With <b>Affirm</b>, you can buy your dream Magniflex mattress and sleep essentials today and pay in easy monthly installments—with 0% <b>APR for up to 24 months</b>.
          </div>
        </div>
        <div className='bg-[#F2F2F4] text-[#000028] landing-[29px] rounded-[60px] text-center py-[30px] px-[20px] mb-[24px] md:mb-[55px]'>
          <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 py-[20px] px-[20px] mb-[15px] md:mb-[55px]'>
            How it works
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-0 items-start justify-center'>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>1</div>
              <div className='fot-bold text-[22px]'>Shop & select affirm</div>
              <img className='w-[70px] h-[70px]' src={shopImg} alt="" />
              <div>
                <span className='font-[22px] text-[#174860] max-w-[300px]'>Add your favorite Magniflex mattress and accessories to your cart. At checkout, simply select Affirm as your payment method.</span>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>2</div>
              <div className='fot-bold text-[22px]'>Get instant approval</div>
              <img className='w-[70px] h-[70px]' src={approvalImg} alt="" />
              <div>
                <span className='font-[22px] text-[#174860] max-w-[300px]'>Enter a few pieces of information for a real-time decision. Checking eligibility won't affect your credit score.</span>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>3</div>
              <div className='fot-bold text-[22px]'>Make easy monthly payments</div>
              <img className='w-[70px]' src={paymentsImg} alt="" />
              <div>
                <span className='font-[22px] text-[#174860] max-w-[300px]'>Choose the payment plan that works for you and enjoy your new mattress and accessories—pay over time, for up to 24 months at 0% APR.</span>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-10'>
            <a
              href="https://www.affirm.com/how-it-works" target="_blank" rel="noopener noreferrer"
              className='border-0 text-[#174860] text-[17px] lg:text-[13px] font-semibold px-10 py-3 bg-[#4A4AF4] hover:bg-[#4040e4] text-white uppercase'>
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center py-12 lg:py-24">
          <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 py-[24px] px-[20px] mb-[15px] md:mb-[55px] flex justify-center items-center w-full'>
            Why<img className='mt-[-17px] ml-3' src={affirmSvg} alt="" />?
          </div>
          <div className="sm:container grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
            <div className="border-E4E4E4 border-r border-b md:border-b-0 px-4 md:px-12 pt-8 md:pt-0">
              <span>
                <svg
                  id="Livello_1"
                  viewBox="0 0 40 40"
                  width="40px"
                  height="40px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="scale(0.313)"> {/* 40 / 127.9 ≈ 0.313 */}
                    <g>
                      <path
                        fill="#17485e"
                        d="M16.8,77.4c-6.3,0-11.5-5.2-11.5-11.5V29.5h107.3v-12.7c0-8.7-7.1-15.8-15.8-15.8H16.8C8.1,1,1,8.1,1,16.8v49.1
                      c0,8.7,7.1,15.8,15.8,15.8h79.3v-4.3H16.8ZM5.3,16.8c0-6.3,5.2-11.5,11.5-11.5h80c6.3,0,11.5,5.2,11.5,11.5v8.3H5.3v-8.3Z"
                      />
                      <path
                        fill="#17485e"
                        d="M112.7,65.9c0-1.2-.9-2.2-2.2-2.2s-2.2.9-2.2,2.2,0,1.1-.1,1.6h4.4c0-.5,0-1.1,0-1.6Z"
                      />
                    </g>
                    <path
                      fill="#17485e"
                      d="M126.4,59.7c-.5-1.6-1.5-3-2.7-4.1v-7.3c0-7.2-5.9-13.1-13.1-13.1s-13.1,5.9-13.1,13.1v7.3c-1.2,1.1-2.2,2.5-2.7,4.1
                    -.9,2.7-.6,5.7.8,8.2,2.3,4,6.8,8.5,13.5,13.3.4.3.9.5,1.5.5s1.1-.2,1.5-.5c6.7-4.8,11.3-9.3,13.6-13.3,1.4-2.5,1.7-5.5.8-8.2ZM110.5,38
                    c5.7,0,10.3,4.6,10.3,10.3v5.5c-.6-.3-1.3-.4-1.9-.5v-4.7c0-4.7-3.8-8.5-8.4-8.5s-8.5,3.8-8.5,8.5v4.7c-.6.1-1.2.3-1.9.5v-5.5
                    c0-5.7,4.6-10.3,10.3-10.3ZM110.5,56.7c-1.2-1.3-3.1-2.9-5.6-3.4v-4.7c0-3.1,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6v4.8
                    c-2.6.5-4.5,2.2-5.6,3.4Z"
                    />
                    <path
                      fill="#ffffff"
                      d="M108.6,64.6c1.6-1.7,4.5-.6,4.5,1.8s-.8,2.2-1.9,2.5v1.8c0,1-1.5,1-1.5,0v-1.8c-1.8-.5-2.5-2.8-1.1-4.3"
                    />
                  </g>
                </svg>
              </span>
              <div className="text-B09987 font-semibold text-lg md:text-base my-4">
                No hidden fees
              </div>
              <div
                className="relative flex justify-between"
              >
                <div className="text-174860 font-semibold text-sm">What you see is what you pay</div>
              </div>
            </div>
            <div className="border-E4E4E4 md:border-r border-b md:border-b-0 px-4 md:px-12 pt-8 md:pt-0">
              <span>
                <img src={financingSvg} alt='' />
              </span>
              <div className="text-B09987 font-semibold text-lg md:text-base my-4">
                0% APR financing
              </div>
              <div
                className="relative flex justify-between"
              >
                <div className="text-174860 font-semibold text-sm">Available for up to 24 months</div>
              </div>
            </div>

            <div className="border-E4E4E4 border-r border-b md:border-b-0 px-4 md:px-12 pt-8 md:pt-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Livello_1"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 40 40"
                  enableBackground="new 0 0 40 40"
                  xmlSpace="preserve"
                  fill="#174860"
                >
                  <path d="M25.4 22.3c-.7-1.1-1.8-1.8-3.1-2.1l-3.3-.6-.4-.5c.3-.3.5-.7.6-1.2s-.1-1-.4-1.5l-6.6-8.7H19a.65.65 0 0 1 .6.6v5.6c0 .5.3 1.1.8 1.3.5.3 1 .3 1.5.1l2-1 2 1c.5.2 1.1.2 1.5-.1.5-.3.8-.8.8-1.3V9.2c0-.4-.4-.8-.8-.8s-.8.4-.8.8v4.9L24.3 13a.91.91 0 0 0-1 0L21 14.1V8.5c0-.6-.2-1.1-.6-1.5s-1-.6-1.5-.6h-8l-.7-1c-.4-.5-1-.9-1.7-1-.6-.1-1.3.1-1.8.5L1.4 9c-.5.4-.9 1-1 1.7a2.27 2.27 0 0 0 .5 1.8l8.6 11.2c.3.4.8.7 1.3.8h.3c.2 0 .4 0 .6-.1l2.6 8.8c.1.3.2.6.4.9h-4c-.2 0-.5-.1-.6-.3-.2-.2-.3-.4-.3-.6v-7.6c0-.4-.4-.8-.8-.8s-.8.4-.8.8v7.6c0 .7.3 1.3.7 1.7a2.34 2.34 0 0 0 1.7.7h14c.6 0 1.2-.3 1.5-.8.4-.5.5-1.1.3-1.7l-1.6-4.7c.7.1 1.3.1 2-.1.6-.1 1.1-.6 1.3-1.2s0-1.3-.4-1.7l-2.3-3.1zm-14.2.5c-.1.1-.2.1-.3.1s-.2-.1-.3-.1L2.1 11.5c-.1-.2-.2-.4-.1-.6h0c0-.2.2-.5.3-.6l5.4-4.1c.1-.2.3-.2.5-.2h.1c.3 0 .5.1.7.3l8.5 11.2c.1.2.1.4-.1.5l-6.2 4.8zm15.4 3.9c0 .1-.1.1-.1.1-1.5.4-2.3-.4-2.4-.4-.3-.2-.7-.3-1-.1s-.4.6-.3.9l2.1 6.4v.3c-.1.1-.2.1-.3.1h-.7l-.7-2.3c-.1-.4-.6-.7-1-.5-.4.1-.7.6-.5 1l.6 1.9h-.8l-.8-2.6h0c-.2-.3-.5-.4-.9-.3s-.7.6-.5 1l.6 1.9H19l-.7-2.3c-.1-.4-.6-.7-1-.5-.4.1-.7.6-.5 1l.6 1.9c-.3 0-.6-.2-.9-.4s-.6-.6-.7-1L13 23.5l4.3-3.3.6.7c.1.1.3.2.5.3l3.6.7c.8.2 1.6.7 2.1 1.4l2.5 3.2v.2zM37.1 6H22.5c-.4 0-.8.4-.8.8s.4.8.8.8h14.6c.2 0 .5.1.6.3.2.1.3.3.3.6v24.7c0 .2-.1.5-.3.6-.2.2-.4.3-.6.3h-8.9c-.4 0-.8.4-.8.8s.4.8.8.8h8.9c.7 0 1.3-.3 1.8-.7.5-.5.7-1.1.7-1.8V8.5c0-.7-.3-1.3-.7-1.8-.5-.5-1.1-.7-1.8-.7z" />
                </svg>
              </span>
              <div className="text-B09987 font-semibold text-lg md:text-base my-4">
                Quick approval
              </div>
              <div
                className="relative flex justify-between"
              >
                <div className="text-174860 font-semibold text-sm">
                  get a real-time decision
                </div>
              </div>
            </div>

            <div className="border-E4E4E4 md:border-r border-b md:border-b-0 px-4 md:px-12 pt-8 md:pt-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Livello_1"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 40 40"
                  enableBackground="new 0 0 40 40"
                  xmlSpace="preserve"
                  fill="#174860"
                >
                  <path
                    d="M40 18.9c-.2-.6-.4-1.1-.8-1.6a4.61 4.61 0 0 0-2.6-1.5l-.1-.1V7.9c0-1.6-.6-3.1-1.8-4.2C33.6 2.6 32.1 2 30.5 2H10.9c-1.6 0-3.1.6-4.2 1.7-1.2 1.1-1.8 2.6-1.8 4.2v7.6c-.1.1-.1.3-.2.4-1 .2-1.8.8-2.5 1.5-.6.8-1 1.7-1 2.7v8.2c0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7h2.2c.5 0 .9-.2 1.3-.4.4-.3.7-.7.8-1.1.2-.7.7-1.3 1.2-1.7.6-.4 1.3-.6 2-.6h19.2c.7 0 1.4.2 2 .6s1 1 1.2 1.7c.1.5.4.8.8 1.1s.8.4 1.3.4h2.2c.6 0 1.2-.2 1.6-.7a3.04 3.04 0 0 0 .5-.7V18.9zM6.9 7.9c0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2h0 19.7c1.1 0 2.1.4 2.8 1.2.8.7 1.2 1.8 1.2 2.8v5.5c-2-1.7-4.6-2.5-7.3-2.2-2.6.3-5 1.6-6.6 3.7a9.44 9.44 0 0 0-6.5-3.7c-2.6-.3-5.2.5-7.2 2.1V7.9zm27.2 7.8H22.5c1.5-1.7 3.6-2.6 5.8-2.6 2.3 0 4.4 1 5.8 2.6zm-15.3 0H7.2c1.5-1.7 3.6-2.6 5.8-2.6s4.3 1 5.8 2.6zm19.1 12.9h-2.2c-.1 0-.2-.1-.2-.2-.3-1.1-1-2-2-2.7-.9-.7-2-1-3.2-1H11.1c-1.1 0-2.3.4-3.2 1-.9.7-1.6 1.6-2 2.7 0 .1-.1.2-.2.2H3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-8.2a2.34 2.34 0 0 1 .7-1.7c.4-.5 1-.7 1.7-.8h30.3c.6 0 1.2.3 1.7.8.4.4.7 1 .7 1.7v8.2h0c-.1.2-.2.3-.4.3z"
                    fill="#174860"
                  />
                </svg>
              </span>
              <div className="text-B09987 font-semibold text-lg md:text-base my-4">
                Full transparency
              </div>
              <div
                className="relative flex justify-between"
              >
                <div className="text-174860 font-semibold text-sm">
                  Total cost and monthly payment shown upfront
                </div>
              </div>
            </div>

            <div className="px-4 md:px-12 pt-8 border-r md:border-r-0 md:pt-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Livello_1"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 40 40"
                  enableBackground="new 0 0 40 40"
                  xmlSpace="preserve"
                  fill="#174860"
                >
                  <path
                    d="M.7 21.2H2c.2 1.5 1.7 2.7 3.5 2.7 2 0 3.6-1.4 3.6-3.1v-5.6c0-1.4-1.1-2.6-2.6-2.9.4-3 1.4-5.5 3.2-7.3 3.5-3.4 8.5-3.5 9.2-3.5h.1 0c.1 0 5.6-.1 9.3 3.5 1.9 1.8 2.9 4.3 3.2 7.3-1.5.4-2.6 1.5-2.6 2.9v5.6c0 1.5 1.2 2.6 2.8 3-.1 1.6-.9 6.3-5.6 8.3-.4-1.1-1.4-1.9-2.7-1.9h-2.9c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h2.9c1.4 0 2.5-1 2.8-2.4 5.8-2.2 6.7-8 6.9-9.8 1.5-.3 2.6-1.3 2.8-2.6h1.2a.68.68 0 0 0 .7-.7v-5a.68.68 0 0 0-.7-.7h-1.2c-.2-1.4-1.4-2.4-3-2.6-.4-3.4-1.6-6.2-3.7-8.3C25.1-.1 19.3 0 19 0S12.8-.1 8.7 3.9C6.5 6 5.4 8.8 5 12.2c-1.6.2-2.8 1.2-3 2.6H.7a.68.68 0 0 0-.7.7v5a.68.68 0 0 0 .7.7zm22.8 13.4h-2.9a1.54 1.54 0 0 1-1.5-1.5 1.54 1.54 0 0 1 1.5-1.5h2.9a1.54 1.54 0 0 1 1.5 1.5 1.54 1.54 0 0 1-1.5 1.5zm11.1-19.4v5.6c0 .9-1 1.7-2.2 1.7s-2.2-.7-2.2-1.7v-5.6c0-.9 1-1.7 2.2-1.7s2.2.8 2.2 1.7zm-31.3 0c0-.9 1-1.7 2.2-1.7s2.2.7 2.2 1.7v5.6c0 .9-1 1.7-2.2 1.7s-2.2-.7-2.2-1.7v-5.6z"
                    fill="#174860"
                  />
                </svg>
              </span>
              <div className="text-B09987 font-semibold text-lg md:text-base my-4">
                Millions of users
              </div>
              <div
                className="relative flex justify-between"
              >
                <div className="text-174860 font-semibold text-sm">
                  trust Affirm
                </div>
              </div>
            </div>
          </div>
        </div>
        <FadeIn>
          <img src={desktopMagnistrentchImage} loading='lazy' alt="header" className='w-full hidden md:block' />
          <img src={mobileMagnistrentchImage} loading='lazy' alt="header" className='w-full md:hidden' />
        </FadeIn>

        <div className="flex flex-col flex-wrap justify-center items-center py-12 lg:py-24 bg-[#F4EEE4] rounded-[60px] mt-10 px-[20px]">
          <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 py-[24px] px-[20px] mb-[10px] md:mb-[20px]'>
            Wondering What It Might Look Like?
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-5'>
            <div className='flex justify-center items-center'>
              <span className='text-174860 text-[17.5px]'>For example</span>
              <span className='px-5 p-2 bg-white rounded-full text-[#000028] text-[17.5px] mx-3'><span className='font-semibold text-[25px]'>$2000</span> purchase</span>
            </div>
            <div className='flex items-center'>
              <span className='text-174860 text-[17.5px]'>might cost</span>
              <div className='flex-1 px-5 p-2 rounded-full bg-[#000028] text-[17.5px] mx-3 text-white'>
                <span className='font-semibold text-[25px]'>$83.33</span>
                <span className='text-[17.5px]'>/month over 24 months at 0% APR.</span>
              </div>
            </div>
          </div>
          <div className='mt-[25px] md:mt-[50px]'>
            <span className='text-174860 text-[17.5px]'>No fees. No surprises. Just simple, affordable monthly payments.</span>
          </div>
          <div className='flex flex-row justify-center mt-10'>
            <a href="https://www.affirm.com/business/apr-calculator" target="_blank" rel="noopener noreferrer" className='border-0 text-[#174860] text-[17px] lg:text-[13px] font-semibold px-10 py-3 bg-[#212183] hover:bg-[#201F80] text-white uppercase'>
              Go to APR calculator
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center md:items-center py-12 lg:py-24 mt-10 px-[20px]">
          <span className='text-[45px] font-semibold mb-4'>FAQ</span>
          <span className='text-[17.5px] font-bold mt-4'>How can I manage my payments?</span>
          <span className='text-[17.5px] md:max-w-[800px]'>You can easily make payments online at Affirm.com or through the Affirm mobile app.
            Affirm will remind you via email and text before each due date - or simply enable AutoPay to have payments made automatically
          </span>
          <span className='text-[17.5px] font-bold mt-4'>Will checking my eligibility affect my credit score?</span>
          <span className='text-[17.5px]'>No. Affirm uses a soft credit check that won't impact your score.</span>
          <span className='text-[17.5px] font-bold mt-4'>Can I pay off early?</span>
          <span className='text-[17.5px]'>Yes! You can pay off your balance at any time with no penalties.</span>
          <span className='text-[17.5px] font-bold mt-4'>Are there any late or hidden fees?</span>
          <span className='text-[17.5px]'>No. Affirm never charges hidden or late fees.</span>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center bg-[#F2F2F4] rounded-[60px] mt-10">
          <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 pt-[30px] md:pt-[50px] pb-[15px] px-[20px] mb-[10px] md:mb-[20px]'>
            Better Sleep Doesn't Have to Wait
          </div>

          <div className='flex flex-row justify-center mt-10 mb-10 md:mb-0'>
            <a href="https://magniflex.us/category/mattresses" target="_blank" rel="noopener noreferrer" className='flex items-baseline border-0 text-[#174860] text-[13px] lg:text-[13px] font-semibold px-5 py-5 bg-[#B38E4A] hover:bg-[#B08040] text-white uppercase'>
              SHOP NOW AND PAY WITH
              <img className='mt-[-17px] ml-1' src={whiteAffirmSvg} alt="" />
            </a>
          </div>
          <div className='mt-[25px] md:mt-[50px] bg-white py-12 lg:py-24 px-[20px] flex items-center justify-center'>
            <span className='text-174860 text-[17.5px]'>
              DISCLOSURE: Rates from 0-36% APR. Payment options through Affirm are subject to an eligibility check and are provided by these lending partners: <a href="https://www.affirm.com/lenders" target="_blank" rel="noopener noreferrer" className='text-[#4A4AF4]' style={{ textDecoration: 'underline' }}>affirm.com/lenders</a>.
              Options depend on your purchase amount, and a down payment may be required.
              CA residents: Loans by Affirm Loan Services, LLC are made or arranged pursuant to a California Financing Law license.
              For licenses and disclosures, see <a href="https://www.affirm.com/licenses" target="_blank" rel="noopener noreferrer" className='text-[#4A4AF4]' style={{ textDecoration: 'underline' }}>affirm.com/licenses</a>. For example, a $800 purchase could be split into 12 monthly payments of $72.21 at 15% APR
            </span>
          </div>
        </div>
        <div className='flex flex-col mt-4 px-[30px] lg:p-4 pt-[40px] lg:pt-0'>
          <div className='lg:mt-[40px] mt-[208px] w-full flex justify-center hidden lg:block'>
            <img className='w-full h-auto' src={magniflexlogo} alt="" />
          </div>
          <hr className='text-[#0a2430] my-[20px] hidden lg:block border-[#888888]' />
          <div className='text-[12px] sm:text-[16px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 hidden lg:block'>At Night, We Bring Life to Your Days.</div>
          <div className='text-[12px] m-auto my-[40px] mt-[80px] sm:text-[16px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 pt-[80px] lg:hidden relative' style={{ width: 'fit-content' }}>
            <div className='absolute top-0'><img className='w-[400px] h-auto' src={magniflexlogo} alt="" /></div>
            At Night, We Bring Life to Your Days.
          </div>
        </div>
      </div>
    </>
  );
}
