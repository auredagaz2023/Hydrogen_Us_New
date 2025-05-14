import { useEffect, useRef, useState } from 'react'
import desktopHeader from '~/assets/Memorial-Day-2025/Desktop/Header/magniflex-us-memorial-day-header-desktop.jpg'
import mobileHeader from '~/assets/Memorial-Day-2025/Mobile/Header/magniflex-us-memorial-day-header-mobile.jpg'

import benefitBarGif from '~/assets/Memorial-Day-2025/magniflex-landing-benefit-bar.gif'
import benefitBarGifMobile from '~/assets/Memorial-Day-2025/magniflex-landing-benefit-bar-mobile-A.gif'

import dolcevitapng from '~/assets/Memorial-Day-2025/Desktop/Products/Images/01-dolce-vita.jpg'
import magnicoolpng from '~/assets/Memorial-Day-2025/Desktop/Products/Images/02-magnicool.jpg'
import magnistretchpng from '~/assets/Memorial-Day-2025/Desktop/Products/Images/03-magnistretch.jpg'
import magnificopng from '~/assets/Memorial-Day-2025/Desktop/Products/Images/04-magnifico.jpg'
import classicopng from '~/assets/Memorial-Day-2025/Desktop/Products/Images/05-classico.jpg'

import dolcevitapng_roll from '~/assets/Memorial-Day-2025/Desktop/Products/Roll/01-dolce-vita-roll.jpg'
import magnicoolpng_roll from '~/assets/Memorial-Day-2025/Desktop/Products/Roll/02-magnicool-roll.jpg'
import magnistretchpng_roll from '~/assets/Memorial-Day-2025/Desktop/Products/Roll/03-magnistretch-roll.jpg'
import magnificopng_roll from '~/assets/Memorial-Day-2025/Desktop/Products/Roll/04-magnifico-roll.jpg'
import classicopng_roll from '~/assets/Memorial-Day-2025/Desktop/Products/Roll/05-classico-roll.jpg'

import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import emailjs from '@emailjs/browser';
import mobileDolcevitapng from '~/assets/Memorial-Day-2025/Mobile/Images/01-dolce-vita.jpg'
import mobileMagnicoolpng from '~/assets/Memorial-Day-2025/Mobile/Images/02-magnicool.jpg'
import mobileMagnistretchpng from '~/assets/Memorial-Day-2025/Mobile/Images/03-magnistretch.jpg'
import mobileMagnificopng from '~/assets/Memorial-Day-2025/Mobile/Images/04-magnifico.jpg'
import mobileClassicopng from '~/assets/Memorial-Day-2025/Mobile/Images/05-classico.jpg'

import FadeIn from '~/components/FadeIn'
const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';
const EMAILJS_SUBSCRIPTION_TEMPLATE_ID = 'mx-usa-form-subscription';

const products = [
  {
    advance: "ultimate dual comfort",
    advance_color:"#AC9695",
    img: dolcevitapng,
    roll_img: dolcevitapng_roll,
    mobile_img: mobileDolcevitapng,
    name: "dolce vita",
    description: "One mattress with 4 layers combinations and different comfort levels thanks to our Dual Core technology",
    bestfor: "couples with different sleep needs",
    fitness: "soft, medium-soft, medium-firm, firm",
    price: "$3,599",
    original_price: '$4,399',
    button: "shop dolce vita",
    link: "https://magniflex.us/mattresses/dolce-vita?product=dolcevita-dual-10",
    bottom: 'SAVE UP TO $900',
    mattress: true
  },
  {
    advance: "ultimate coolness",
    advance_color:"#839BB1",
    img: magnicoolpng,
    roll_img: magnicoolpng_roll,
    mobile_img: mobileMagnicoolpng,
    name: "magnicool",
    description: "The innovative mattress, designed with premium materials and cover fabrics, delivers unmatched freshness and superior air circulation",
    bestfor: "cool night lovers",
    fitness: "medium-soft, medium-firm",
    price: "$2,699",
    original_price: "$3,299",
    button: "Shop MAGNICOOL",
    link: "https://magniflex.us/mattresses/magnicool?product=magnicool-10-firm",
    bottom: "SAVE UP TO $600",
    mattress: true    
  },
  {
    advance: "Ultimate SPINE RELIEF",
    advance_color:"#9AA8A9",
    img: magnistretchpng,
    roll_img: magnistretchpng_roll,
    mobile_img:mobileMagnistretchpng,
    name: "Magnistretch",
    description: "Its patented checkered and stretching construction ensures differentiated zone support and stretching of the spine",
    bestfor: "active people, back pain sufferers",
    fitness: "medium-firm, firm",
    price: "$3,199",    
    original_price: "$3,999",
    button: "Shop MAGNISTRETCH",
    link: "https://magniflex.us/mattresses/magnistretch?product=magnistretch-12",
    bottom: "SAVE UP TO $900",
    mattress: true
  },
  {
    advance: "ULTIMATE COMFORT",
    advance_color:"#A6682C",
    img: magnificopng,
    roll_img: magnificopng_roll,
    mobile_img: mobileMagnificopng,
    name: "MAGNIFICO",
    description: "The excellence of traditional materials combined with the innovation of new technologies to produce timeless comfort",
    bestfor: "discerning sleepers seeking ultimate comfort",
    fitness: "super-soft, medium-soft, medium-firm",
    price: "$3,299",
    original_price: "3,999",
    button: "Shop Magnifico",
    link: "https://magniflex.us/mattresses/magnifico?product=toscana-cotton-lux-10",
    bottom: "SAVE UP TO $1500."
  }
]

function Landing() {
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showEmailError, setShowEmailError] = useState(false);
  const [hoveredClassico, setHoveredClassico] = useState(false)

  const handleHover = (index:number) => {
    setHoveredIndex(index);
  }
  const handleUnhover = () => {
    setHoveredIndex(-1);
  };
  const handleHoverClassico = () => {
    setHoveredClassico(true)
  }
  const handleUnhoverClassico = () => {
    setHoveredClassico(false)
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
      document.getElementById('email').value = '';
    }
  };
  return (
    <div>
      <FadeIn>
        <img src={desktopHeader} loading='lazy' alt="header" className='w-full hidden md:block' />
        <img src={mobileHeader} loading='lazy' alt="header" className='w-full md:hidden' />
      </FadeIn>
      <div className='flex overflow:hidden md:h-[61px] h-auto px-[0px] md:px-[32px] py-[0px] text-[13px] landing-[34px] justify-center items-start md:items-center flex-col md:flex-row md:space-x-nav w-100 text-white'>
        <img src={benefitBarGif} className='h-[61px] object-cover hidden md:block'></img>
        <img src={benefitBarGifMobile} className='object-cover md:hidden w-full'></img>
      </div>
      <div className='bg-white text-[#174860] landing-[29px] text-[17.5px] text-center pt-[96px] pb-[64px] md:pt-[72px] md:pb-[32px] px-[30px] md:px-[10%]'>
        <div className=''>
          This Memorial Day, treat yourself to more space and comfort for less.
        </div>
        <div>
          Get a King mattress for the price of a Queen, or a Queen for the price of a Full<span className='hidden md:block'>,</span>
        </div>
        <div>          
          and enjoy premium rest and unmatched value - <span className='font-bold'>saving up to $1,500.</span>
        </div>
      </div>
      <div className='bg-white text-[#174860] text-[35px] font-[600] text-center landing-[24px] py-[24px] px-[20px] mb-[24px] md:mb-[55px]'>
        Explore our collections
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      {
        products.map((product:any, index)=>{
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
                  onMouseOver={()=>handleHover(index)}
                  onMouseOut={handleUnhover} 
                  alt="product_img" 
                  className='md:hidden'
                  style={{
                    transition: '0.3s all ease' // Apply a smooth transition effect
                  }}
                />
              </div>
              <div style={{color:product.advance_color}} className={`mt-[24px] lg:mt-[38px] text-[17px] lg:text-[13px] text-[${product.advance_color}] uppercase text-center font-bold`}>{product.advance}</div>
              <div className='flex flex-col items-center md:px-12'>
                <a  href={product.link} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >{product.name}</a>
                <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]'  />
                <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] text-center'>{product.description}</div>
                <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] text-center'>
                  <span className='text-[#839BB1]'>Best for:</span> <span className='text-[#174860] text-[15px]'>{product.bestfor}</span>
                  <br />
                  <span className='text-[#839BB1]'>Firmness:</span> <span className='text-[#174860] text-[15px]'>{product.fitness}</span>
                </div>
                <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
                  King starting at
                  <br className='hidden lg:block'/>
                  <span className='lg:hidden'>&nbsp;</span>
                  <span className='line-through'>{product.original_price}</span>&nbsp;&nbsp; <span className='text-red-600 text-[22px] landing-[27.5px] font-semibold'>{product.price}</span>
                </div>
                <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-[#174860] lg:bg-white lg:hover:text-white text-white lg:text-[#174860] hover:text-[17.5px] lg:text-[13px] font-semibold' href={product.link}>{product.button}</a>
                <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>{product.bottom}</div>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-full md:w-1/2 px-[32px] md:px-12 pb-32 relative'>
          <div className='relative h-auto'>
            <img
              src={classicopng_roll}
              onMouseOver={handleHoverClassico}
              onMouseOut={handleUnhoverClassico}
              alt="product_img"
              className='hidden md:block absolute'
              style={{
                objectFit: 'cover',
                opacity: hoveredClassico ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            />
            {/* <img
              src={classicopng}
              onMouseOver={handleHoverClassico}
              onMouseOut={handleUnhoverClassico}
              alt="product_img"
              className='hidden md:block absolute'
              style={{
                objectFit: 'cover',
                opacity: hoveredClassico ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            /> */}
            <img
              src={classicopng}
              onMouseOver={handleHoverClassico}
              onMouseOut={handleUnhoverClassico}
              alt="product_img"
              className='hidden md:block'
              style={{
                objectFit: 'cover',
                opacity: hoveredClassico ? 0 : 1,
                transition: 'opacity 0.5s ease'
              }}
            />
            <img src={mobileClassicopng} 
              onMouseOver={handleHoverClassico}
              onMouseOut={handleUnhoverClassico} 
              alt="product_img" 
              className='md:hidden'
              style={{
                transition: '0.3s all ease' // Apply a smooth transition effect
              }}
            />
          </div>
          <div style={{color:'#575756'}} className={`mt-[24px] lg:mt-[38px] text-[17px] lg:text-[13px] text-[#575756] uppercase text-center font-bold`}>performance and essentiality</div>
          <div className='flex flex-col items-center md:px-12'>
            <a  href={'https://magniflex.us/mattresses/classico?product=classico-9'} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >CLASSICO</a>
            <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]'  />
            <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] text-center'>The perfect combination of performance and essentiality for a mattress with built-in massaging system designed to meet every sleep need.</div>
            <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] text-center'>
              <span className='text-[#839BB1]'>Best for:</span> <span className='text-[#174860] text-[15px]'> quality sleep lover, restorative sleep seekers</span>
              <br />
              <span className='text-[#839BB1]'>Firmness:</span> <span className='text-[#174860] text-[15px]'>medium-firm</span>
            </div>
            <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
              {'King starting at'}
              <br className='hidden lg:block'/>
              <span className='lg:hidden'>&nbsp;</span>
              <span className='line-through'>$3,499</span>&nbsp;&nbsp; <span className='text-red-600 text-[22px] landing-[27.5px] font-semibold'>$2,999</span>
            </div>
            <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[#174860] hover:bg-[#174860] bg-[#174860] lg:bg-white lg:hover:text-white text-white lg:text-[#174860] hover:text-[17.5px] lg:text-[13px] font-semibold' href={'https://magniflex.us/mattresses/classico?product=classico-9'}>SHOP CLASSICO</a>
            <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>SAVE UP TO $500</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-4 bg-[#f6f6f6] px-[30px] lg:p-4 pt-[40px] lg:pt-0'>
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
            className='w-full md:w-[400px] text-center text-[16px] font-[24px] bg-[#F6F6F6] border border-t-0 border-l-0 border-r-0 border-b-1 border-[#174860] my-[20px] outline-none'/>
          <br />
          <button type='submit' className='border border-[#556268] text-[#174860] text-[17px] lg:text-[13px] font-semibold px-6 py-3 hover:bg-[#174860] hover:text-white uppercase'>subscribe</button>
        </form>
        <div className='lg:mt-[40px] mt-[208px] w-full flex justify-center'>
          <img className='w-full h-auto' src={magniflexlogo} alt="" />
        </div>
        <hr className='text-[#0a2430] my-[20px] hidden lg:block border-[#888888]' />
        <div className='text-[12px] sm:text-[16px] md:text-[20px] lg:text-[23px] text-center landing-[100px] font-semibold py-[30px] lg:py-0'>At Night, We Bring Life to Your Days.</div>
        {/* <div className='flex gap-[26px] items-center justify-center mt-[35px] mb-[40px]'>
          <a href="https://www.facebook.com/MagniflexUS">
            <FaFacebookF className='h-[26px]'/>
          </a>
          <a href="https://www.instagram.com/magniflex_usa/">
            <AiOutlineInstagram className='h-[35px] w-[35px]'/>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Landing