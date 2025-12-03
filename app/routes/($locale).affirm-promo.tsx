import { type MetaFunction } from '@shopify/remix-oxygen';
import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import FadeIn from '~/components/FadeIn';
import desktopHeader from '../assets/affirm-promo/Header/magniflex-us-fall-into-savings-header-desktop.jpg'
import mobileHeader from '../assets/affirm-promo/Header/magniflex-us-fall-into-savings-header-mobile.jpg'
import desktopHeaderBottom from '../assets/labor-day-promo-2025/header/magniflex-landing-benefit-bar.gif'
import mobileHeaderBottom from '../assets/affirm-promo/Header/magniflex-landing-benefit-bar-mobile.gif'
import shopImg from '~/assets/affirm-promo/svg/shop.png'
import approvalImg from '~/assets/affirm-promo/svg/approval.png'
import paymentsImg from '~/assets/affirm-promo/svg/payments.png'
import affirmSvg from '~/assets/affirm-promo/svg/affirm.svg'
import whiteAffirmSvg from '~/assets/affirm-promo/svg/whiteAffirm.svg'
import aprFinancingImg from '~/assets/affirm-promo/png/02-apr-financing.png'
import feesImg from '~/assets/affirm-promo/png/01-fees.png'
import quickApprovalImg from '~/assets/affirm-promo/png/03-quick-approval.png'
import trasparencyImg from '~/assets/affirm-promo/png/04-trasparency.png'
import millionsUserImg from '~/assets/affirm-promo/png/05-millions-users.png'

import Slider from 'react-slick';

import desktopCarousel_1 from '~/assets/affirm-promo/Desktop/01-dolce-vita.jpg'
import desktopCarousel_2 from '~/assets/affirm-promo/Desktop/02-magnicool.jpg'
import desktopCarousel_3 from '~/assets/affirm-promo/Desktop/03-magnistretch.jpg'
import desktopCarousel_4 from '~/assets/affirm-promo/Desktop/04-magnifico.jpg'
import desktopCarousel_5 from '~/assets/affirm-promo/Desktop/05-classico.jpg'
import mobileCarousel_1 from '~/assets/affirm-promo/Mobile/01-dolce-vita.jpg'
import mobileCarousel_2 from '~/assets/affirm-promo/Mobile/02-magnicool.jpg'
import mobileCarousel_3 from '~/assets/affirm-promo/Mobile/03-magnistretch.jpg'
import mobileCarousel_4 from '~/assets/affirm-promo/Mobile/04-magnifico.jpg'
import mobileCarousel_5 from '~/assets/affirm-promo/Mobile/05-classico.jpg'

const products = [
  {
    desktopImage: desktopCarousel_1,
    mobileImage: mobileCarousel_1,
    title: "Dolce Vita",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/dolce-vita?product=dolcevita-dual-10",
    bottom: "save up to $860"
  },
  {
    desktopImage: desktopCarousel_2,
    mobileImage: mobileCarousel_2,
    title: "MagniCool",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnicool?product=magnicool-10-firm",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_3,
    mobileImage: mobileCarousel_3,
    title: "MagniStretch",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch?product=magnistretch-12",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_4,
    mobileImage: mobileCarousel_4,
    title: "Magnifico",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnifico?product=toscana-cotton-lux-10",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_5,
    mobileImage: mobileCarousel_5,
    title: "Classico",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/classico?product=classico-9",
    bottom: "Save up to $860"
  },
]

const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div className='text-12 font-semibold text-[#174860] lg:text-white absolute left-2 lg:left-4 top-[50%] z-[200]' style={style} onClick={onClick}>
      {'<'}
    </div>
  )
}

const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div className='text-12 font-semibold text-[#174860] lg:text-white absolute right-2 lg:right-4 top-[50%] z-[200] ' onClick={onClick} style={style}>
      {'>'}
    </div>
  )
}


const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      <div className='bg-white text-[#174860] landing-[29px] text-[17.5px] text-center pb-[64px] px-[30px] pt-20 md:px-[20%]'>
        <div>
          With <b>Affirm</b>, you can buy your dream Magniflex mattress and sleep essentials today and pay in easy monthly installments—with 0% <b>APR for up to 24 months</b>.
        </div>
      </div>
      <div className='bg-[#F2F2F4] text-[#000028] landing-[29px] rounded-[60px] text-center py-[30px] px-[20px]'>
        <div className='text-[#000028] text-[35px] font-semibold text-center leading-1 py-[20px] px-[20px] mb-[12px] md:mb-[20px]'>
          How it works
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 items-start justify-center'>
          <div className='flex flex-col items-center justify-center gap-[10px]'>
            <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>1</div>
            <div className='font-bold text-[22px] text-[#000028]'>Shop & select Affirm</div>
            <img className='w-[70px] h-[70px]' src={shopImg} alt="" />
            <div>
              <span className='font-[22px] text-[#174860] max-w-[300px]'>Add your favorite Magniflex mattress and accessories to your cart. At checkout, simply select Affirm as your payment method.</span>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-[10px]'>
            <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>2</div>
            <div className='font-bold text-[22px] text-[#000028]'>Get instant approval</div>
            <img className='w-[70px] h-[70px]' src={approvalImg} alt="" />
            <div>
              <span className='font-[22px] text-[#174860] max-w-[300px]'>Enter a few pieces of information for a real-time decision. Checking eligibility won't affect your credit score.</span>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-[10px]'>
            <div className='text-[22px] text-[#4242CF] rounded-[4px] font-bold bg-[#E2E2FF] w-[42px] h-[42px] flex items-center justify-center'>3</div>
            <div className='font-bold text-[22px] text-[#000028]'>Make easy monthly payments</div>
            <img className='w-[70px]' src={paymentsImg} alt="" />
            <div>
              <span className='font-[22px] text-[#174860] max-w-[300px]'>Choose the payment plan that works for you and enjoy your new mattress and accessories—pay over time, for up to 24 months at 0% APR.</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center mt-10 mb-10'>
          <a
            href="https://www.affirm.com/how-it-works" target="_blank" rel="noopener noreferrer"
            className='border-0 text-[#174860] text-[17px] lg:text-[13px] font-semibold px-10 py-3 bg-[#4A4AF4] hover:bg-[#212183] text-white uppercase'>
            Learn more
          </a>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center py-12 lg:py-24">
        <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 py-[24px] px-[20px] mb-[15px] md:mb-[55px] flex justify-center items-center w-full'>
          Why<img className='mt-[-19px] ml-3' src={affirmSvg} alt="" />?
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 w-full">
          <div className="border-E4E4E4 border-r border-b lg:border-b-0 px-4 lg:px-12 pt-8 lg:pt-0 pb-2">
            <span>
              <img src={feesImg} className="h-[45px]" alt='' />
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
          <div className="border-E4E4E4 lg:border-r border-b lg:border-b-0 px-4 lg:px-12 pt-8 lg:pt-0 pb-2">
            <span>
              <img src={aprFinancingImg} className="h-[45px]" alt='' />
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

          <div className="border-E4E4E4 border-r border-b lg:border-b-0 px-4 lg:px-12 pt-8 lg:pt-0 pb-2">
            <span>
              <img src={quickApprovalImg} className="h-[45px]" alt='' />
            </span>
            <div className="text-B09987 font-semibold text-lg md:text-base my-4">
              Quick approval
            </div>
            <div
              className="relative flex justify-between"
            >
              <div className="text-174860 font-semibold text-sm">
                Get a real-time decision
              </div>
            </div>
          </div>

          <div className="border-E4E4E4 lg:border-r border-b lg:border-b-0 px-4 lg:px-12 pt-8 lg:pt-0 pb-2">
            <span>
              <img src={trasparencyImg} className="h-[45px]" alt='' />
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

          <div className="px-4 lg:px-12 pt-8 border-r lg:border-r-0 lg:pt-0 pb-2">
            <span>
              <img src={millionsUserImg} className="h-[45px]" alt='' />
            </span>
            <div className="text-B09987 font-semibold text-lg md:text-base my-4">
              Trusted worldwide
            </div>
            <div
              className="relative flex justify-between"
            >
              <div className="text-174860 font-semibold text-sm">
                Millions of users trust Affirm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-full mb-5'>
        {/* <div className='absolute hidden lg:flex justify-center items-center  text-center rounded-3xl lg:-rotate-90 bottom-[0px] lg:left-[-70px] lg:top-[18.5%] bg-[#eef2f2] w-[155px] h-[55px] lg:h-[65px] z-[50] text-[17.5px] leading-[30px] text-[#D50613] '>
                  20% OFF
                </div> */}
        <Slider {...settings} className="landing-carousel relative">
          {
            products.map(product => {
              return (
                <div key={product.title}>
                  <a href={product.link} target='__blank' rel="noopener noreferrer">
                    <div className='hidden lg:block'>
                      <img className='w-full h-[535px]' src={product.desktopImage} alt="" />
                    </div>
                    <div className='block lg:hidden py-[50px] md:py-[30px]'>
                      <img className='w-full h-auto aspect-auto' src={product.mobileImage} alt="" />
                    </div>
                  </a>
                </div>
              )
            })
          }
        </Slider>
      </div>
      {/* <FadeIn>
        <img src={desktopMagnistrentchImage} loading='lazy' alt="header" className='w-full hidden md:block' />
        <img src={mobileMagnistrentchImage} loading='lazy' alt="header" className='w-full md:hidden' />
      </FadeIn> */}

      <div className="flex flex-col flex-wrap justify-center items-center py-12 lg:py-24 bg-[#F4EEE4] rounded-[60px] mt-[60px] px-[20px]">
        <div className='text-[#000028] text-[35px] font-semibold text-center leading-1 py-[24px] px-[20px] mb-[10px] md:mb-[20px]'>
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
        <div className='mt-[25px] md:mt-[50px] text-center'>
          <span className='text-174860 text-[17.5px]'>No fees. No surprises. Just simple, affordable monthly payments.</span>
        </div>
        <div className='flex flex-row justify-center mt-12 mb-4'>
          <a href="https://www.affirm.com/business/apr-calculator" target="_blank" rel="noopener noreferrer" className='border-0 text-[#174860] text-[17px] lg:text-[13px] font-semibold px-10 py-3 bg-[#4A4AF4] hover:bg-[#212183] text-white uppercase'>
            Go to APR calculator
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-wrap justify-center md:items-center py-12 lg:py-24 mt-10 px-[20px]">
        <span className='text-[45px] font-semibold mb-4'>FAQ</span>
        <span className='text-[17.5px] font-bold md:text-center mt-4'>How can I manage my payments?</span>
        <span className='text-[17.5px] md:max-w-[800px] md:text-center'>You can easily make payments online at Affirm.com or through the Affirm mobile app.
          Affirm will remind you via email and text before each due date - or simply enable AutoPay to have payments made automatically.
        </span>
        <span className='text-[17.5px] font-bold md:text-center mt-4'>Will checking my eligibility affect my credit score?</span>
        <span className='text-[17.5px]'>No. Affirm uses a soft credit check that won't impact your score.</span>
        <span className='text-[17.5px] font-bold md:text-center mt-4'>Can I pay off early?</span>
        <span className='text-[17.5px]'>Yes! You can pay off your balance at any time with no penalties.</span>
        <span className='text-[17.5px] font-bold md:text-center mt-4'>Are there any late or hidden fees?</span>
        <span className='text-[17.5px]'>No. Affirm never charges hidden or late fees.</span>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center bg-[#F2F2F4] rounded-[60px] mt-10">
        <div className='text-[#174860] text-[35px] font-semibold text-center leading-1 pt-[30px] md:pt-[50px] pb-[15px] px-[20px] mb-[10px] md:mb-[20px]'>
          Better Sleep Doesn't Have to Wait
        </div>

        <div className='flex flex-row justify-center mt-2 mb-10 md:mb-0'>
          <a href="https://magniflex.us/category/mattresses" target="_blank" rel="noopener noreferrer" className='flex items-baseline border-0 text-[#174860] text-[13px] lg:text-[13px] font-semibold px-5 py-5 bg-[#B38E4A] hover:bg-[#B08040] text-white uppercase'>
            SHOP NOW AND PAY WITH
            <img className='mt-[-17px] ml-1' src={whiteAffirmSvg} alt="" />
          </a>
        </div>
        <div className='mt-[25px] md:mt-[50px] bg-white py-12 lg:py-24 px-[30px] md:px-[100px] flex items-center justify-center'>
          <span className='text-[#787878] text-[13.5px] md:text-center'>
            DISCLOSURE: Rates from 0-36% APR. Payment options through Affirm are subject to an eligibility check and are provided by these lending partners: <a href="https://www.affirm.com/lenders" target="_blank" rel="noopener noreferrer" className='text-[#4A4AF4]' style={{ textDecoration: 'underline' }}>affirm.com/lenders</a>.<br />
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
        <div className='lg:hidden w-full text-[19px] my-[40px] mt-[10px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0 pt-[53px] md:pt-[80px] relative'>
          <img className='w-full h-auto mb-2' src={magniflexlogo} alt="" />
          At Night, We Bring Life to Your Days.
        </div>
      </div>
    </>
  );
}
