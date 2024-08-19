import Slider from 'react-slick';
import outdoorhome_1 from '../assets/Home/outdoor-home-1.jpg';
import outdoorhome_2 from '../assets/Home/outdoor-home-2.jpg';
import outdoorhome_3 from '../assets/Home/outdoor-home-3.jpg';
import {Button, Link, Text} from '~/components';

export function OutdoorSlider() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 8000,
    autoplaySpeed: 0,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  return (
    <div
      id="OutdoorSlider"
      className="w-full relative bg-f7 pb-16 md:pb-24 lg:pb-28"
    >
      <div className="flex flex-wrap justify-between">
        <div className="px-3 md:px-0 w-full md:ml-[8%] md:w-4/12 xl:w-3/12 self-center xl:my-6 text-center md:text-left py-[70px] md:py-[90px] 3xl:pt-20 3xl:pb-36">
          <h3 className="text-174860 font-semibold text-subheading xl:text-3xl md:max-w-[320px] mb-2">
            Lying down in the sun becomes a unique experience
          </h3>

          {/*
           <hr className="mt-12 mb-8 max-w-[280px] border border-174860 mx-auto md:ml-0" />
          <p className="text-B09987 text-[1rem] xl:text-xl pt-5 pb-5 font-medium md:max-w-[590px]">
            Discover all the structures that have chosen the Magniflex Outdoor
            line.
          </p>
          */}
          <div className="hidden md:flex md:justify-center">
            <Link
              to="/5-star-luxury-sleep"
              className="uppercase text-174860 font-semibold text-sm border border-174860 py-3 px-9 transition hover:text-white hover:bg-2f88b1"
            >
              Discover more
            </Link>
          </div>
        </div>
        <div className="w-full md:w-6/12 xl:w-7/12">
          <div>
            <Slider {...settings}>
              <div className="pr-2">
                <img
                  src={outdoorhome_1}
                  className="w-full"
                  alt="outdoorhome1"
                />
              </div>
              <div className="pr-2">
                <img
                  src={outdoorhome_2}
                  className="w-full"
                  alt="outdoorhome2"
                />
              </div>
              <div className="pr-2">
                <img
                  src={outdoorhome_3}
                  className="w-full"
                  alt="outdoorhome2"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex justify-center w-full static mt-4 md:hidden">
          <Link
            to="/5-star-luxury-sleep"
            className="uppercase text-174860 font-semibold text-sm border border-174860 py-3 px-9 transition hover:text-white hover:bg-2f88b1"
          >
            Discover more
          </Link>
        </div>
      </div>
    </div>
  );
}
