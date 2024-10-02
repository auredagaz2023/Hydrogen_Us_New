import { useRef, useState } from 'react'
import desktopHeader from '~/assets/LandingNew/Desktop/header.jpg'
import mobileHeader from '~/assets/LandingNew/Mobile/header.jpg'
import freeshippingsvg from  '~/assets/Landing/Desktop/icons/free-shipping.svg'
import trialsvg from '~/assets/Landing/Desktop/icons/trial.svg'
import starsvg from '~/assets/Landing/Desktop/icons/star.svg'
import dolcevitapng from '~/assets/LandingNew/Desktop/Products/Images/01-dolce-vita.jpg'
import magnicoolpng from '~/assets/LandingNew/Desktop/Products/Images/02-magnicool.jpg'
import toscanapng from '~/assets/LandingNew/Desktop/Products/Images/03-toscana.jpg'
import classicopng from '~/assets/LandingNew/Desktop/Products/Images/04-classico.jpg'
import dolcevitapng_roll from '~/assets/LandingNew/Desktop/Products/Roll/01-dolce-vita-roll.jpg'
import magnicoolpng_roll from '~/assets/LandingNew/Desktop/Products/Roll/02-magnicool-roll.jpg'
import toscanapng_roll from '~/assets/LandingNew/Desktop/Products/Roll/03-toscana-roll.jpg'
import classicopng_roll from '~/assets/LandingNew/Desktop/Products/Roll/04-classico-roll.jpg'
import magniflexlogo from '~/assets/Landing/Desktop/magniflex.svg'
import emailjs from '@emailjs/browser';
import mobileDolcevitapng from '~/assets/LandingNew/Mobile/Products/01-dolce-vita.jpg'
import mobileMagnicoolpng from '~/assets/LandingNew/Mobile/Products/02-magnicool.jpg'
import mobileToscanapng from '~/assets/LandingNew/Mobile/Products/03-toscana.jpg'
import mobileClassicopng from '~/assets/LandingNew/Mobile/Products/04-classico.jpg'
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import FadeIn from '~/components/FadeIn'
import { Link } from 'react-router-dom'
const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';
const EMAILJS_SUBSCRIPTION_TEMPLATE_ID = 'mx-usa-form-subscription';

const products = [
  {
    advance: "ultimate dual comfort",
    advance_color:"#CFBCA7",
    img: dolcevitapng,
    roll_img: dolcevitapng_roll,
    mobile_img: mobileDolcevitapng,
    name: "dolce vita",
    description: "One mattress with 4 boards combinations and different comfort levels thanks to our Dual Core technology",
    bestfor: "couples with different sleep needs",
    fitness: "soft, medium-soft, medium-firm, firm",
    original_price: "$2,999.00",
    price: "$2,099.30",
    button: "shop dolce vita",
    link: "https://magniflex.us/mattresses/dolce-vita?product=dolce-vita-dual-10",
    bottom: "$1,079.70"
  },
  {
    advance: "ultimate coolness",
    advance_color:"#839BB1",
    img: magnicoolpng,
    roll_img: magnicoolpng_roll,
    mobile_img: mobileMagnicoolpng,
    name: "magnicool",
    description: "The innovative mattress whose materials and cover fabrics offer unparalleled freshness and air circulation",
    bestfor: "cool night lovers",
    fitness: "medium-soft, medium-firm",
    original_price: "$2,199.00",
    price: "$1,539.30",
    button: "Shop MAGNICOOL",
    link: "https://magniflex.us/mattresses/magnicool?product=magnicool-10-firm",
    bottom: "$779.70"
  },
  {
    advance: "Ultimate NATURAL SLEEP",
    advance_color:"#707F62",
    img: toscanapng,
    roll_img: toscanapng_roll,
    mobile_img: mobileToscanapng,
    name: "TOSCANA",
    description: "OEKO-TEX certified mattress, featuring a cover made from organic materials, for a truly eco-friendly sleep",
    bestfor: "environmentally conscious people",
    fitness: "medium-firm, firm",
    original_price: "$2,399.00",
    price: "$1,749.30",
    button: "Shop TOSCANA",
    link: "https://magniflex.us/mattresses/magnifico?product=toscana-grande-12",
    bottom: "$1079.70"
  },
  {
    advance: "TIMELESS COMFORT",
    advance_color:"#575756",
    img: classicopng,
    roll_img: classicopng_roll,
    mobile_img:mobileClassicopng,
    name: "CLASSICO",
    description: "Perfect combination of performance and essentiality, it offers support, breathability, and a pleasant micro-massaging action",
    bestfor: "people looking for good sleep at great value",
    fitness: "medium-firm",
    original_price: "$1,899.00",
    price: "$1,329.30",
    button: "Shop CLASSICO",
    link: "https://magniflex.us/mattresses/classico?product=classico-9",
    bottom: "$659.70"
  },
]

function Landing() {
  const formRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showEmailError, setShowEmailError] = useState(false);

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
          console.error(error);
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
    <div className='relative'>
      <FadeIn>
        {/* <Link to='/'> */}
          <img src={desktopHeader} loading='lazy' alt="header" className='hidden md:block' />
          <img src={mobileHeader} loading='lazy' alt="header" className='md:hidden' />
        {/* </Link> */}
      </FadeIn>
      <div className='flex overflow:hidden px-[32px] text-[13px] landing-[34px] justify-center items-start md:items-center flex-col md:flex-row md:space-x-nav bg-[#174960] w-100 text-white md:h-[50px] py-2'>
        <div  className='flex gap-[24px] md:gap-2 h-[34px] items-center'>
          <img width={32} src={freeshippingsvg}></img>
          <span className='uppercase'>Free shipping</span>
        </div>
        <div className='flex gap-[24px] md:gap-2 h-[34px] items-center'>
          <img width={32} src={trialsvg} alt="" />
          <span className='uppercase'>90-NIGHT SLEEP TRIAL</span>
        </div>
        <div className='flex gap-[24px] md:gap-2 h-[34px] items-center'>
          <img width={32} src={starsvg} alt="" />
          <span className='uppercase'>10-Year Warranty ON MATTRESSES</span>
        </div>
      </div>
      <div className='bg-white text-[#174860] landing-[29px] text-[17.5px] text-center pt-[96px] pb-[64px] md:pt-[72px] md:pb-[32px] px-[30px] '>
        <div>Looking for a great deal?</div>
        <div>We're <span className='font-bold'>discounting some of our timeless mattress models</span> as we prepare to unveil our latest innovations.</div>
        <div>But hurry, these offers are only available while supplies last!</div>
      </div>
      <div className='bg-white text-[#174860] text-[35px] font-[600] text-center landing-[24px] py-[24px] px-[20px] mb-[24px] md:mb-[55px]'>
        Shop Our Closeout Mattresses
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
              <div className='flex flex-col items-center px-12'>
                <a  href={product.link} className='mt-[20px] text-[27.5px] lg:text-[22px] text-[#174860] landing-[24px] font-bold uppercase text-center hover:underline' >{product.name}</a>
                <hr className='my-[20px] lg:hidden block border-0 clear-both, w-[96%] bg-[#174860] h-[1px]'  />
                <div className='mt-[20px] text-[17px] font-semibold md:font-normal text-[#174860] landing-[25px] text-center'>{product.description}</div>
                <div className='mt-[30px] lg:mt-[25px] text-[17px] lg:text-[15px] text-center'>
                  <span className='text-[#839BB1]'>Best for:</span> <span className='text-[#174860] text-[15px]'>{product.bestfor}</span>
                  <br />
                  <span className='text-[#839BB1]'>Firmness:</span> <span className='text-[#174860] text-[15px]'>{product.fitness}</span>
                </div>
                <div className='mt-[25px] text-[#839BB1] text-[13px] landing-[27.5px] text-center'>
                  Queen starting at
                  <br />
                  <span className='line-through'>{product.original_price}</span> <span className='text-red-600 text-[22px] landing-[27.5px]'>{product.price}</span>
                </div>
                <a className='text-center mt-[15px] py-4 px-8 uppercase border border-[174860] bg-[#174860] text-white hover:bg-red-600 hover:text-white text-[17.5px] lg:text-[13px] font-semibold' href={product.link}>{product.button}</a>
                <div className='mt-[15px] uppercase text-[#174860] text-center text-[17px] lg:text-[13px] font-semibold'>SAVE UP TO <span className='text-red-600 text-[20px] lg:text-[15px]'>{product.bottom}</span></div>
              </div>
            </div>
          )
        })
      }
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
        <div className='flex gap-[26px] items-center justify-center mt-[35px] mb-[40px]'>
          <a href="https://www.facebook.com/MagniflexUS">
            <FaFacebookF className='h-[26px]'/>
          </a>
          <a href="https://www.instagram.com/magniflex_usa/">
            <AiOutlineInstagram className='h-[35px] w-[35px]'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing