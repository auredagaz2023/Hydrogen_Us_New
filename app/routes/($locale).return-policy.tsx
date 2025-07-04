import {Link} from '~/components';

export default function ReturnPolicy() {
  return (
    <div className="justify-center">
      <div className="lg:flex lg:flex-row">
        <div className="basis-full lg:basis-9/12 pt-[50px] pb-[140px]">
          <div className="max-w-[880px] mx-auto my-0 px-8 text-[11px] md:text-[16px]">
            <h1
              className="mt-18 mb-4 xl:mb-6  text-[#212529] font-bold landing-[1.15]"
            >
              Magniflex USA Ltd Return Policy
            </h1>
            <p className='landing-[1.15]  text-[#212529] font-normal mb-4 xl:mb-6'>
              At Magniflex USA Ltd, we're dedicated to ensuring you experience the ultimate night's sleep.
            </p>
            <p className='landing-[1.15]  text-[#212529] font-normal mb-4 xl:mb-6'>
              Our commitment to quality is evident in our use of premium materials, meticulous attention to 
              detail, and exceptional craftsmanship. We proudly stand behind our products, offering you  
              the confidence to purchase directly from us.
            </p>
            <p className="mt-18 mb-4 xl:mb-6  text-[#212529] font-bold landing-[1.15]">
              Mattresses 
            </p>
            <p className="mt-18 mb-4 xl:mb-6  landing-[1.15] text-[#212529]">
              At Magniflex, we're dedicated to ensuring you enjoy the ultimate sleep comfort. 
              If, for any reason, you find yourself dissatisfied with your Magniflex product purchased 
              directly from our website, please do not hesitate to contact us at <span className='font-bold'>1-888-381-8481</span> or via 
              email at <span className='font-bold'>info@magniflex.us</span>. If your purchase was made through an authorized Magniflex 
              retailer, we kindly request that you get in touch with them directly. 
              It's important to note that certain fees, including those associated with in-home delivery, 
              setup, shipping, and disposables, are non-refundable. When processing a return, please be 
              aware that return shipping costs will be deducted from your refund. Our commitment to your 
              satisfaction extends to a <span className='font-bold'>90-Night Sleep Trial</span> for every Magniflex mattress bought directly 
              from our website. We recommend allowing your new mattress a minimum of <span className='font-bold'>30 nights</span> for proper 
              acclimatization before considering a return. To be eligible for a return, you must still be 
              within your <span className='font-bold'>90-Night Sleep Trial</span>, with at least <span className='font-bold'>30 days of use</span>, and your mattress should 
              remain in pristine condition, free of damage, and used with a suitable mattress protector. 
              Thank you for choosing Magniflex to enhance your sleep experience. 
              Your comfort is our priority.
            </p>
            <h1
              className="mt-18 mb-4 xl:mb-6  text-[#212529] font-bold landing-[1.15]"
            >
              Foundations and Adjustable Basis
            </h1>
            <p className='landing-[1.15]  text-[#212529] font-normal mb-4 xl:mb-6'>
              While we regret to inform you that returns cannot be accommodated for foundations and adjustable bases, 
              we are dedicated to ensuring your satisfaction. If you experience any concerns with your base, 
              please feel free to reach out to us at <span className='font-bold'>786-233-8805</span>. 
              Our team will promptly connect you with the manufacturer's specialists, who will be more than happy to 
              assist you with any inquiries or issues you may have.
            </p>
            <h1
              className="mt-18 mb-4 xl:mb-6  text-[#212529] font-bold landing-[1.15]"
            >
              Pillows, Bed Linens,Mattress Protectors, Mattress Toppers and Other Accessories 
            </h1>
            <p className='landing-[1.15]  text-[#212529] font-normal mb-4 xl:mb-6'>
              Given the intimate nature of these items, returns are exclusively accepted in the event of 
              damage upon delivery or product defects.Please note that for pillows, 
              returns are only accepted in cases of defects.
              If you've made your purchase through a retail store, please adhere to the respective return 
              and exchange policies of that specific retailer. Our commitment to ensuring you achieve 
              restful sleep remains unwavering. Should you have any concerns or questions regarding 
              our products and policies, we are here to provide dedicated support and assistance.
            </p>
          </div>
        </div>
        <aside className="basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12">
          <div className="sticky py-4 top-[118px] text-174860">
            <ul>
              <li className="py-2 mb-2 border-[#dee2e6] border-b">
                <Link to="/warranty">Warranty</Link>
              </li>
              <li className="py-2 mb-2 border-[#dee2e6] border-b">
                <Link to="/shipping-methods">Shipping methods</Link>
              </li>
              <li className="py-2 mb-2 border-[#dee2e6] border-b  text-B09987 active">
                <Link to="/return-policy">Return policy</Link>
              </li>
              {/* <li className="py-2 mb-2 border-[#dee2e6] border-b">
                <Link to="/terms-of-use">Terms of use</Link>
              </li> */}
              <li className="py-2 mb-2 border-[#dee2e6] border-b">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="py-2 mb-2 border-[#dee2e6] border-b ">
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
