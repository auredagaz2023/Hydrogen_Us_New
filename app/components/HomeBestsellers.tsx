import Slider from 'react-slick';
import image_2 from '../assets/Home/prod2.jpg';
import image_1 from '../assets/Home/prod1.jpg';
import image_4 from '../assets/Home/prod4.jpg';
import image_3 from '../assets/Home/prod3.jpg';
import {Button, Link, Text} from '~/components';

export function HomeBestsellers() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div id="CollectionsSlider" className="w-full relative pt-12 pb-36 bg-f7">
      <div className="container">
        <h4 className="uppercase text-B09987 text-xl font-semibold pb-6">
          BEST SELLER
        </h4>
      </div>
      <Slider {...settings}>
        <div className="pr-2">
          <Link
            to="/collections/magnicool"
            className="relative border-b border-neutral-200 hover:bg-neutral-100 float-left"
          >
            <img
              src={image_1}
              className="object-cover w-[550px] h-[390px]"
              alt="image1"
            />
            <span className=" place-content-between place-items-center md:place-items-end pl-4 pr-4 pb-6">
              <h3 className="max-w-[12ch] text-174860 font-semibold pt-6 px-6 pb-2 text-3xl">
                Magnicool
              </h3>
              <div className="grid grid-cols-2 px-8">
                <p className="colspan-1 pt-2 uppercase font-semibold text-B09987 text-sm">
                  Mattresses, Pillows, Topper
                </p>
                <span className="flex items-center colspan-1 w-full justify-end">
                  <span className=" min-w-[120px] text-center uppercase text-174860 text-xs border border-174860  py-2  md:px-8 transition hover:text-white hover:bg-174860">
                    BUY NOW
                  </span>
                </span>
              </div>
            </span>
          </Link>
        </div>
        <div className="pr-2">
          <Link
            to="/collections/magnistretch"
            className="relative border-b border-neutral-200 hover:bg-neutral-100 float-left"
          >
            <img
              src={image_2}
              className="object-cover w-[550px] h-[390px]"
              alt="image2"
            />
            <span className=" place-content-between place-items-center md:place-items-end pl-4 pr-4 pb-6">
              <h3 className="max-w-[12ch] text-174860 font-semibold pt-6 px-6 pb-2 text-3xl">
                Magnistretch
              </h3>
              <div className="grid grid-cols-2 px-8">
                <p className="colspan-1 pt-2 uppercase font-semibold text-B09987 text-sm">
                  Mattresses
                </p>
                <span className="flex items-center colspan-1 w-full justify-end">
                  <span className=" min-w-[120px] text-center uppercase text-174860 text-xs border border-174860  py-2  md:px-8 transition hover:text-white hover:bg-174860">
                    BUY NOW
                  </span>
                </span>
              </div>
            </span>
          </Link>
        </div>

        <div className="pr-2">
          <Link
            to="/collections/dolce-vita"
            className="relative border-b border-neutral-200 hover:bg-neutral-100 float-left"
          >
            <img
              src={image_3}
              className="object-cover w-[550px] h-[390px]"
              alt="image3"
            />
            <span className=" place-content-between place-items-center md:place-items-end pl-4 pr-4 pb-6">
              <h3 className="max-w-[12ch] text-174860 font-semibold pt-6 px-6 pb-2 text-3xl">
                Dolce Vita
              </h3>
              <div className="grid grid-cols-2 px-8">
                <p className="colspan-1 pt-2 uppercase font-semibold text-B09987 text-sm">
                  Mattresses
                </p>
                <span className="flex items-center colspan-1 w-full justify-end">
                  <span className=" min-w-[120px] text-center uppercase text-174860 text-xs border border-174860  py-2  md:px-8 transition hover:text-white hover:bg-174860">
                    BUY NOW
                  </span>
                </span>
              </div>
            </span>
          </Link>
        </div>

        <div className="pr-2">
          <Link
            to="/collections/superiore"
            className="relative border-b border-neutral-200 hover:bg-neutral-100 float-left"
          >
            <img
              src={image_4}
              className="object-cover w-[550px] h-[390px]"
              alt="image4"
            />
            <span className=" place-content-between place-items-center md:place-items-end pl-4 pr-4 pb-6">
              <h3 className="max-w-[12ch] text-174860 font-semibold pt-6 px-6 pb-2 text-3xl">
                Superiore
              </h3>
              <div className="grid grid-cols-2 px-8">
                <p className="colspan-1 pt-2 uppercase font-semibold text-B09987 text-sm">
                  Pillows
                </p>
                <span className="flex items-center colspan-1 w-full justify-end">
                  <span className=" min-w-[120px] text-center uppercase text-174860 text-xs border border-174860  py-2  md:px-8 transition hover:text-white hover:bg-174860">
                    BUY NOW
                  </span>
                </span>
              </div>
            </span>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
