import Slider from 'react-slick';
import image_1 from '../assets/Home/category-topper.jpg';
import image_2 from '../assets/Home/category-guanciali.jpg';
import image_3 from '../assets/Home/category-accessori.jpg';
import image_4 from '../assets/Home/category-materassi.jpg';
import image_5 from '../assets/Home/category-letti-reti.jpg';
import {Button, Link, Text} from '~/components';

export function HomeCollectionsSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const mobilesettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <>
      <div
        id="CollectionsSlider"
        className="hidden md:block w-full relative pt-12 pb-36"
      >
        <Slider {...settings}>
          <div className="pr-2">
            <Link
              to="/mattresses"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_4} className="max-h-80" alt="image4" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl  xl:text-2xl">
                Mattresses
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/pillows"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_2} className="max-h-80" alt="image2" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl xl:text-2xl">
                Pillows
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/beds_bases"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_5} className="max-h-80" alt="image6" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl xl:text-2xl line-clamp-1">
                Beds and bases
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/toppers"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_1} className="max-h-80" alt="image1" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl xl:text-2xl">
                Toppers
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>

          {/* <div className="pr-2">
            <Link
              to="/"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_3} className="max-h-80" alt="image3" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Accessories
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div> */}
        </Slider>
      </div>
      <div
        id="CollectionsSlider"
        className="blcok md:hidden w-full relative pt-12 pb-36"
      >
        <Slider {...mobilesettings}>
          <div className="pr-2">
            <Link
              to="/mattresses"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_4} className="max-h-80" alt="image4" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Mattresses
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/pillows"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_2} className="max-h-80" alt="image2" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Pillows
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/beds_bases"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_5} className="max-h-80" alt="image6" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Beds and bases
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to="/toppers"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_1} className="max-h-80" alt="image1" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Toppers
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div>

          {/* <div className="pr-2">
            <Link
              to="/"
              className="relative border-b border-neutral-200 p-6 hover:bg-neutral-100 float-left"
            >
              <img src={image_3} className="max-h-80" alt="image3" />
              <h3 className="text-174860 font-semibold pt-6 pb-2 text-sm md:text-3xl">
                Accessories
              </h3>
              <p className="uppercase font-semibold text-B09987 text-[10px] md:text-xs bg-no-repeat bg-[length:16px_auto] bg-right bg-[url('../assets/arrow-right.svg')]">
                Discover
              </p>
            </Link>
          </div> */}
        </Slider>
      </div>
    </>
  );
}
