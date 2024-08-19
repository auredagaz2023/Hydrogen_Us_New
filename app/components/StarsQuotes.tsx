import Slider from 'react-slick';
import {Button, Link, Text} from '~/components';

export function StarsQuotes() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      id="StarsQuotes"
      className='w-full relative bg-cover bg-center bg-[url("../assets/FiveStars/bg-testimonial.jpg")] flex justify-end'
    >
      <div className="bg-174860/75 mr-[5%] w-[40%] items-center p-16 pb-44 opacity-0">
        <div>
          <h4 className="text-B09987 py-12 text-xl">DICONO DI NOI</h4>
          <Slider {...settings}>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Hotel Relais De La Costa
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
              <p className="font-medium text-white text-xl pt-12 pb-24">
                sleep-5-stars.structures.structure1_desc
              </p>
            </div>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Lords Of Verona
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
              <p className="font-medium text-white text-xl pt-12 pb-24">
                sleep-5-stars.structures.structure1_desc
              </p>
            </div>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Hotel Hermitage Potoferraio
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
            </div>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Hotel Byron Frote Dei Marmi
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
            </div>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Hotel Astoria Genova
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
            </div>
            <div className="w-full">
              <p className="font-medium text-white text-xl pb-2 leading-normal">
                TELS ABOUT US
                <br />
                Hotel Fifty House
              </p>
              <div className="flex gap-1">
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
                <img src="/star.svg" className="w-5" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
