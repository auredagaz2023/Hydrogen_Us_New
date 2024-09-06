import { useEffect, useRef, useState } from 'react'

import desktopHeaderVideo from '../../../assets/Landing-Memorial/Header/header-desktop.mp4'
import mobileHeaderVideo from '../../../assets/Landing-Memorial/Header/header-mobile.mp4'
import desktopCarousel_1 from '../../../assets/Landing-Memorial/Desktop/magnistretch-01.jpg'
import desktopCarousel_2 from '../../../assets/Landing-Memorial/Desktop/magnistretch-02.jpg'
import desktopCarousel_3 from '../../../assets/Landing-Memorial/Desktop/magnistretch-03.jpg'
import desktopCarousel_4 from '../../../assets/Landing-Memorial/Desktop/magnistretch-04.jpg'
import desktopCarousel_5 from '../../../assets/Landing-Memorial/Desktop/magnistretch-05.jpg'
import mobileCarousel_1 from  '../../../assets/Landing-Memorial/Mobile/magnistretch-01.jpg'
import mobileCarousel_2 from '../../../assets/Landing-Memorial/Mobile/magnistretch-02.jpg'
import mobileCarousel_3 from '../../../assets/Landing-Memorial/Mobile/magnistretch-03.jpg'
import mobileCarousel_4 from '../../../assets/Landing-Memorial/Mobile/magnistretch-04.jpg'
import mobileCarousel_5 from '../../../assets/Landing-Memorial/Mobile/magnistretch-05.jpg'
import universidadIcon from '../../../assets/universidad.svg'
import outlastIcon from '../../../assets/outlast.svg'
import endosedbyIcon from '../../../assets/endosedby.svg'
import patentedIcon from '../../../assets/patented.svg';
import spaceIcon from '../../../assets/space.svg'

import freeshippingsvg from  '../../../assets/Landing/Desktop/icons/free-shipping.svg'
import trialsvg from '../../../assets/Landing/Desktop/icons/trial.svg'
import starsvg from '../../../assets/Landing/Desktop/icons/star.svg'
import magniflexlogo from '../../../assets/Landing/Desktop/magniflex.svg'
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import Slider from 'react-slick';
import emailjs from '@emailjs/browser';

import '../../../styles/slick-custom.css';

const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';
const EMAILJS_SUBSCRIPTION_TEMPLATE_ID = 'mx-usa-form-subscription';

const PrevArrow = (props:any) => {
  const { style, onClick } = props;
  return (
    <div className='text-12 font-semibold text-[#174860] lg:text-white absolute left-2 lg:left-4 top-[50%] z-[200]' style={style} onClick={onClick}>
      {'<'}
    </div>
  )
}

const NextArrow = (props:any) => {
  const { style, onClick } = props;
  return (
    <div className='text-12 font-semibold text-[#174860] lg:text-white absolute right-2 lg:right-4 top-[50%] z-[200] ' onClick={onClick} style={style}>
      {'>'}
    </div>
  )
}

const products = [
  {
    desktopImage: desktopCarousel_1,
    mobileImage: mobileCarousel_1,
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch/magnistretch-12",
    bottom: "save up to $860"
  },
  {
    desktopImage: desktopCarousel_2,
    mobileImage: mobileCarousel_2,
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch/magnistretch-12",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_3,
    mobileImage: mobileCarousel_3,
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch/magnistretch-12",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_4,
    mobileImage: mobileCarousel_4,
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch/magnistretch-12",
    bottom: "Save up to $860"
  },
  {
    desktopImage: desktopCarousel_5,
    mobileImage: mobileCarousel_5,
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    original_price: "$2,099.00",
    price: "$1,679",
    button: "shop magnistretch",
    link: "https://magniflex.us/mattresses/magnistretch/magnistretch-12",
    bottom: "Save up to $860"
  },
]

const product = products[0]

function Landing() {
  const formRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showEmailError, setShowEmailError] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleHover = (index:number) => {
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

  const validateEmail = (email:any) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email format validation
    return regex.test(email);
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email =e.target["email"].value;
    if (!validateEmail(email)) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
      await sendEmail();
      setSubscribeSuccess(true);
      document.getElementById('email').value = '';
    }
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 4000,
    autoplay: false,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
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



  return (
    <div className='mb-50'>
      <section id='hero' className='bg-hero bg-no-repeat bg-center bg-cover relative w-full h-full lg:h-auto h-scroll'>
            <video className='hidden lg:block' autoPlay loop muted > 
                <source className='hidden lg:block' src={desktopHeaderVideo} type='video/mp4'/>
            </video>
            <video className='block lg:hidden w-full' autoPlay loop muted> 
                <source src={mobileHeaderVideo} type='video/mp4'/>
            </video>
        </section>
      <div className='flex overflow:hidden px-[32px] text-[13px] landing-[34px] justify-center items-center flex-col gap-4 lg:flex-row lg:space-x-nav bg-[#174960] w-100 text-center text-white lg:h-[50px] lg:py-3 py-[24px]'>
        <div className='w-[300px] lg:w-auto border-[0.5px] rounded-full border-white px-4 py-2 lg:border-0 lg:px-0 lg:py-0'>
            <div  className='flex gap-[24px] lg:gap-2 h-[34px] items-center'>
                <img width={32} src={freeshippingsvg}></img>
                <span className='uppercase text-left'>Free shipping</span>
            </div>
        </div>
        <div className='w-[300px] lg:w-auto border-[0.5px] rounded-full border-white px-4 py-2 lg:border-0 lg:px-0 lg:py-0'>
            <div className='flex gap-[24px] lg:gap-2 h-[34px] items-center'>
                <img width={32} src={trialsvg} alt="" />
                <span className='uppercase text-left'>90-NIGHT SLEEP TRIAL</span>
            </div>
        </div>
        <div className='w-[300px] px-4 lg:w-auto border-[0.5px] rounded-full border-white py-2 lg:border-0 lg:px-0 lg:py-0'>
            <div className='flex gap-[24px] lg:gap-2 h-[34px] items-center'>
                <img className='w-[32px] lg:w-[36px]' src={starsvg} alt="" />
                <span className='uppercase text-left'>10-Year Warranty</span>
            </div>
        </div>
      </div>
      <section className='bg-[#EEF2F2] '>

        <div className='text-[#174860] landing-[29px] text-[17.5px] text-center pt-[64px] pb-[64px] lg:pt-[72px] lg:pb-[32px] px-[30px] lg:px-[20%]'>
                Experience the <span className='font-bold'>ultimate relief for your spine</span> with the MagniStretch <br/> mattress collection,
                designed to stretch and decompress all night long, <span className='font-bold'>saving up to $860</span>.
        </div>
        <div className='flex w-full justify-center'>
          <div className='px-3 text-[#174860] font-semibold leading-[36px] text-[24px] md:leading-[45px] md:text-[35px] text-center mt-0 md:mt-[94px] lg:w-[800px]'>
              Choose MagniStretch,
            the best awakening for your back
          </div>
        </div>

        <div className='mt-0 lg:mt-[40px] md:pl-[50px] md:pr-[70px] lg:h-[535px] relative'>
          <div className='w-full h-full justify-around flex flex-col lg:flex-row'>
              <div className='relative w-full h-full lg:w-[65%]'>
                {/* <div className='absolute hidden lg:flex justify-center items-center  text-center rounded-3xl lg:-rotate-90 bottom-[0px] lg:left-[-70px] lg:top-[18.5%] bg-[#eef2f2] w-[155px] h-[55px] lg:h-[65px] z-[50] text-[17.5px] leading-[30px] text-[#D50613] '>
                  20% OFF
                </div> */}
                <Slider {...settings} className="landing-carousel relative">
                {
                    products.map(product => {
                        return (
                          <div>
                            <div className='hidden lg:block'>
                              <img className='w-full h-[535px]' src={product.desktopImage} alt="" />
                            </div>
                            <div className='block lg:hidden px-[10px] md:px-[26px] py-[50px] md:py-[30px]'>
                              <img className='w-full h-auto aspect-auto' src={product.mobileImage} alt="" />
                            </div>
                            <div className='w-full flex justify-center items-center mt-[-60px] relative lg:static'>
                              {/* <div className='absolute lg:hidden flex justify-center items-center  text-center rounded-2xl lg:-rotate-90 bottom-[-20px] lg:left-[40px] lg:top-[18.5%] bg-[#eef2f2] w-[155px] h-[55px] lg:h-[65px] z-[50] text-[17.5px] leading-[30px] text-[#D50613] '>
                                  20% OFF
                              </div> */}
                            </div>
                          </div>
                        )
                    })
                }
                </Slider>
              </div>

              <div className='bg-white mt-4 lg:mt-0 flex w-full max-h-[535px] lg:w-[35%] py-[54px] lg:py-[86px] px-[30px] flex-col items-center min-h-[535px] '>
                <svg width="127" height="42" viewBox="0 0 127 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8071 18.3202V23.7115H11.6388V27.7289L0 21.0159L11.6388 14.2854V18.3202H20.8071Z" fill="#174860"/>
                    <path d="M106.193 23.6941V18.3028H115.362V14.2854L127 20.9985L115.362 27.7289V23.6941H106.193Z" fill="#174860"/>
                    <path d="M98.6776 20.9985C98.6776 22.0246 98.434 22.9985 97.9817 23.8681C97.1814 25.4159 95.7027 26.5115 94.0151 26.9463C93.7368 27.0159 93.441 27.1028 93.1627 27.1898C88.4654 28.7202 84.7424 32.4594 83.2636 37.1898C83.194 37.3811 83.1418 37.5724 83.0896 37.7637C82.185 40.3724 79.6102 42.2159 76.6353 41.9724C73.7125 41.7289 71.3117 39.4159 70.9638 36.4941C70.5984 33.3985 72.5121 30.6855 75.2435 29.7985C75.4696 29.7289 75.6958 29.6941 75.922 29.6594C76.1829 29.6246 76.4265 29.5724 76.6701 29.5202C80.5322 28.6159 83.4202 25.1376 83.4202 20.9811C83.4202 16.8246 80.5322 13.3637 76.6701 12.4594C76.4265 12.4072 76.1655 12.355 75.922 12.3202C75.6958 12.2855 75.4696 12.2507 75.2435 12.1811C72.5121 11.2941 70.5984 8.5985 70.9638 5.50284C71.2943 2.5985 73.6951 0.285453 76.6179 0.0245831C79.5928 -0.236286 82.185 1.60719 83.0896 4.21589C83.1418 4.40719 83.194 4.5985 83.2636 4.7898C84.7598 9.52024 88.4654 13.2594 93.1627 14.7898C93.441 14.8768 93.7368 14.9637 94.0151 15.0507C95.7027 15.5028 97.164 16.5811 97.9643 18.1289C98.3992 18.9811 98.6602 19.955 98.6602 20.9811M75.5566 20.9811C75.5566 21.5202 75.4349 22.0246 75.1913 22.4768C74.7738 23.2768 74.0083 23.8507 73.1384 24.0768C72.9992 24.1115 72.8427 24.1637 72.7035 24.2159C70.2505 25.0159 68.3194 26.9637 67.5539 29.4159C67.5191 29.5202 67.5017 29.6246 67.4669 29.7115C66.9972 31.0681 65.6576 32.0246 64.1092 31.9028C62.5957 31.7811 61.3431 30.5637 61.1691 29.0507C60.9777 27.4333 61.9694 26.0246 63.3959 25.5724C63.5177 25.5376 63.6221 25.5202 63.7439 25.5028C63.8831 25.4855 64.0049 25.4507 64.1266 25.4333C66.1447 24.9637 67.6409 23.155 67.6409 20.9985C67.6409 18.842 66.1447 17.0333 64.1266 16.5637C64.0049 16.5289 63.8657 16.5115 63.7439 16.4941C63.6221 16.4941 63.5003 16.4594 63.3959 16.4246C61.9694 15.9724 60.9777 14.5637 61.1691 12.9463C61.3431 11.4333 62.5957 10.2333 64.1092 10.0941C65.6576 9.95502 67.0146 10.9115 67.4669 12.2681C67.4843 12.3724 67.5191 12.4768 67.5539 12.5637C68.3368 15.0159 70.2505 16.9637 72.7035 17.7637C72.8427 17.8159 72.9992 17.8507 73.1558 17.9028C74.0257 18.1289 74.7912 18.7028 75.2087 19.5028C75.4349 19.955 75.574 20.4594 75.574 20.9985M59.1162 20.9985C59.1162 21.5376 58.9944 22.042 58.7509 22.4942C58.3333 23.2941 57.5679 23.8681 56.698 24.0941C56.5414 24.1289 56.4023 24.1811 56.2631 24.2333C53.8101 25.0333 51.879 26.9811 51.1135 29.4333C51.0787 29.5376 51.0613 29.642 51.0265 29.7289C50.5568 31.0855 49.2172 32.042 47.6688 31.9202C46.1553 31.7985 44.9027 30.5811 44.7287 29.0681C44.5373 27.4507 45.529 26.042 46.9555 25.5898C47.0773 25.555 47.1817 25.5376 47.3035 25.5202C47.4427 25.5028 47.5644 25.4681 47.6862 25.4507C49.7043 24.9811 51.2005 23.1724 51.2005 21.0159C51.2005 18.8594 49.7043 17.0507 47.6862 16.5811C47.5644 16.5463 47.4253 16.5289 47.3035 16.5115C47.1817 16.5115 47.0599 16.4768 46.9555 16.442C45.529 15.9898 44.5373 14.5811 44.7287 12.9637C44.9027 11.4507 46.1553 10.2507 47.6688 10.1115C49.2172 9.97241 50.5568 10.9289 51.0265 12.2855C51.0613 12.3898 51.0787 12.4941 51.1135 12.5811C51.8964 15.0333 53.8101 16.9811 56.2631 17.7811C56.4023 17.8333 56.5588 17.8681 56.7154 17.9202C57.5853 18.1463 58.3507 18.7202 58.7683 19.5202C58.9944 19.9724 59.1336 20.4768 59.1336 21.0159M42.6758 21.0159C42.6758 21.555 42.554 22.0594 42.3105 22.5115C41.8929 23.3115 41.1275 23.8855 40.2576 24.1115C40.1184 24.1463 39.9618 24.1985 39.8227 24.2507C37.3696 25.0507 35.4386 26.9985 34.6731 29.4507C34.6383 29.555 34.6209 29.6594 34.5861 29.7463C34.1164 31.1028 32.7768 32.0594 31.2284 31.9376C29.7149 31.8159 28.4623 30.5985 28.2883 29.0855C28.0969 27.4681 29.0886 26.0594 30.5151 25.6072C30.6369 25.5724 30.7413 25.555 30.8631 25.5376C31.0022 25.5202 31.124 25.4855 31.2458 25.4681C33.2639 24.9985 34.7601 23.1898 34.7601 21.0333C34.7601 18.8768 33.2639 17.0681 31.2458 16.5985C31.124 16.5637 30.9849 16.5463 30.8631 16.5289C30.7413 16.5289 30.6195 16.4941 30.5151 16.4594C29.0886 16.0072 28.0969 14.5985 28.2883 12.9811C28.4623 11.4681 29.7149 10.2681 31.2284 10.1289C32.7768 9.9898 34.1338 10.9463 34.5861 12.3028C34.6035 12.4072 34.6383 12.5115 34.6731 12.5985C35.4559 15.0507 37.387 16.9985 39.8227 17.7985C39.9618 17.8507 40.1184 17.8855 40.275 17.9376C41.1449 18.1637 41.9103 18.7376 42.3279 19.5376C42.554 19.9898 42.6932 20.4941 42.6932 21.0333" fill="#174860"/>
                </svg>
                <div className='text-[#174860] text-[17.5px] leading-[24px] font-bold uppercase'>Stretch technology</div>
                <div className='py-[30px]'>
                    <div className='text-[15px] text-[#839BB1] leading-[22px] text-center font-normal'>Best for: <span className='text-[#174860]'>active people, back pain sufferers</span></div>
                    <div className='text-[15px] text-[#839BB1] leading-[22px] text-center font-normal'>Firmness: <span className='text-[#174860]'>medium-firm, firm</span></div>
                </div>
                <div className='text-[13px] text-[#839BB1] leading-[27.5px]'>Starting at</div>
                <div className='text-[15px] text-[#D50613] leading-[27.5px]'><span className='text-[13px] text-[#839BB1] line-through'>{product.original_price+' '}</span>{product.price}</div>
                <a href={product.link} className='my-[20px] h-[45px] w-[196px] bg-[#174860] text-[12.8px] hover:bg-red-600 text-white text-center uppercase flex items-center justify-center'>{product.button}</a>
                <div className='uppercase text-[#174860] text-[13px] leading-[30px]'>{product.bottom}</div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#EEF2F2] py-[55px] lg:py-[132px]'>
        <div className='text-[17.5px] px-[55px] leading-[24px] text-[#174860] text-center mb-4 md:mb-0 md:h-[60px]'>The complete response to your search for wellness</div>
        <div className='w-full grid grid-cols-2 justify-items-center place-content-center md:grid-cols-2 lg:grid-cols-4 justify-center gap-[56px] px-[15px] md:px-[135px]'>
            <div className='w-[140px] md:w-[220px] h-[87px] flex gap-[14px] justify-center items-center border-t-[1px] border-b-[1px] border-[#174860]'>
                <img src={outlastIcon} alt="" />
                <img src={spaceIcon} alt="" />
            </div>
            <div className='w-[140px] md:w-[220px] h-[87px] flex items-center justify-center border-t-[1px] border-b-[1px] border-[#174860]'>
                <img src={universidadIcon} alt="" />
            </div>
            <div className='w-[140px] md:w-[220px] h-[87px] flex justify-center items-center border-t-[1px] border-b-[1px] border-[#174860]'>
                <img src={endosedbyIcon} alt="" />
            </div>
            <div className='w-[140px] md:w-[220px] h-[87px] flex justify-center items-center border-t-[1px] border-b-[1px] border-[#174860]'>
                <img src={patentedIcon} alt="" />
            </div>
        </div>
      </section>

      <div className='flex flex-col bg-[#f6f6f6] px-[30px] lg:p-4 pt-[40px] lg:pt-4'>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef} className='flex flex-col items-center lg:py-8'>
          <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.9999 14.4738C49.9284 13.9068 50.0795 14.4993 49.9788 14.907C49.8718 15.3083 49.4688 15.2574 49.4688 15.2574C49.4688 15.2574 43.8028 14.1426 25.9798 29.4888C28.6491 33.2664 30.6826 39.1781 28.945 40.1528C27.2137 41.1274 25.1739 35.7126 21.875 34.7188C18.5698 33.7251 18.5698 33.4957 10.1903 40.9045C2.72998 46.6187 5.78336 39.0953 9.10117 36.4771C12.419 33.8652 16.807 29.5143 17.1344 27.9153C17.4555 26.3036 14.3077 24.5645 14.9813 19.5128C15.082 18.9522 15.0694 18.9203 15.3464 18.2769C16.486 15.6077 17.0085 18.6464 18.7083 21.0162C20.5907 23.6471 21.9128 24.1568 21.9128 24.1568C21.9128 24.1568 35.4421 15.99 46.0062 14.4611" fill="#174860"/>
            <path d="M14.5789 27.7684C14.5789 27.7684 -9.58376 12.4859 4.30443 1.49701C14.6985 -4.62492 17.0216 10.0078 17.0216 10.0078C17.0216 10.0078 22.4925 -0.783586 29.1093 3.67567C36.4437 8.62545 26.5532 17.2892 22.2533 20.3278C21.7119 19.557 27.7116 13.7281 24.929 11.5303C22.2659 9.44086 20.1191 12.3075 17.0972 15.9004C15.4792 17.8179 13.7416 6.28115 8.85618 9.02678C4.55625 11.4475 8.44696 19.1748 13.8486 25.8255C14.9378 27.2015 14.5789 27.762 14.5789 27.762" fill="#174860"/>
            <path d="M14.6412 27.7052C14.6412 27.7052 -7.63274 9.81715 5.4559 1.1853C16.0578 -4.19129 18.2235 10.9001 18.2235 10.9001C18.2235 10.9001 23.6818 -0.834109 29.883 4.09019C36.7515 9.54323 26.9303 17.8566 22.5108 20.5831C22.026 19.774 28.6365 13.1106 26.049 10.7281C23.5748 8.45389 19.3567 12.6838 17.5184 15.302C16.083 17.3469 14.7042 5.70189 9.72435 8.09715C5.34258 10.2057 9.18922 18.7102 14.0558 25.7303C15.0316 27.1828 14.6412 27.7115 14.6412 27.7115" fill="#DA0613"/>
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
            style={{outline:'none', boxShadow:'none'}}
            className='w-full lg:w-[400px] text-center text-[16px] font-[24px] bg-[#F6F6F6] border border-t-0 border-l-0 border-r-0 border-b-1 border-[#174860] my-[20px] outline-none'/>
          <br />
          <button type='submit' className='border border-[#556268] text-[#174860] text-[17px] lg:text-[13px] font-semibold px-6 py-3 hover:bg-[#174860] hover:text-white uppercase'>subscribe</button>
          {subscribeSuccess && <div className='text-red-600 text-[12px] mt-2'>Thanks for signing up!</div>}
        </form>
        <div className='lg:mt-[40px] mt-[208px] w-full flex justify-center'>
          <img className='w-full h-auto' src={magniflexlogo} alt="" />
        </div>
        <hr className='text-[#0a2430] my-[20px] hidden lg:block border-[#888888]' />
        <div className='relative flex flex-col-reverse gap-4 lg:flex-row justify-between items-center'>
            <div className='flex gap-2 text-[12px] text-[#174860] brightness-[60%]'>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/cookies">Cookie Policy</a>
                <a href="/terms-of-use">Terms of service</a>
            </div>
            <div className='hidden lg:block absolute w-full text-center text-[12px] sm:text-[16px] lg:text-[23px] landing-[100px] font-semibold py-[30px] lg:py-0 z-[100]'>At Night, We Bring Life to Your Days.</div>
            <div className='flex flex-col lg:flex-row'>
              <div className='static lg:absolute w-full text-center text-[12px] sm:text-[16px] lg:text-[23px] landing-[100px] font-semibold py-[30px] lg:py-0 z-[100]'>At Night, We Bring Life to Your Days.</div>
              <div className='flex gap-[19px] items-center justify-center'>
                  <a href="https://www.facebook.com/MagniflexUS">
                      <FaFacebookF className='h-[26px] lg:h-[15px]'/>
                  </a>
                  <a href="https://www.instagram.com/magniflex_usa/">
                      <AiOutlineInstagram className='h-[26px] w-[26px] lg:h-[35px] lg:w-[17px]'/>
                  </a>
              </div>
            </div>
        </div>
      </div>
      <div className='w-full mt-4 text-[12px] lg:mt-[12px] text-[#174860A6] brightness-[65%] text-center'>
        Copyright © 2024 Magniflex. All right reserved.
      </div>
    </div>
  )
}

export default Landing