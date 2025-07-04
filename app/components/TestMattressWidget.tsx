import {useCallback, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from '@remix-run/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types/index';
import {EffectFade} from 'swiper/modules';
import {RxChevronRight} from 'react-icons/rx';
import Slider from 'react-slick';
import img1 from '~/assets/Test/tab-slide-scopri-materasso-1.jpg';
import img2 from '~/assets/Test/tab-slide-scopri-materasso-2.jpg';
import img3 from '~/assets/Test/tab-slide-scopri-materasso-3.jpg';
import img4 from '~/assets/Test/tab-slide-scopri-materasso-4.jpg';

import 'swiper/css/effect-fade';

const images = [img1, img2, img3, img4];

export function TestMattressWidget() {
  const [imageSwiper, setImageSwiper] = useState<SwiperType | undefined>(
    undefined,
  );
  const [imageIndex, setImageIndex] = useState<number>(0);

  const onClickButton = (index: number) => {
    setImageIndex(index);
    if (imageSwiper) imageSwiper.slideTo(index);
  };

  return (
    <div className="relative w-full bg-[#b5b5b4] py-12">
      <div className="m-6 mt-0 p-4 lg:max-w-[550px] text-cusheading xl:text-[50px] xl:ml-[15%] text-white font-semibold absolute top-12 z-10 h-[786px]">
        Find your best mattress
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          effect="fade"
          modules={[EffectFade]}
          onInit={(ev) => setImageSwiper(ev)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[690px] bg-cover bg-center"
                style={{backgroundImage: `url("${image}")`}}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute z-10 top-0 left-0 bottom-0 right-0">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28 h-full">
          <div className="max-w-7xl mx-auto flex flex-col justify-end h-full">
            <div>
              <p className="text-white lg:text-lg max-w-[200px] relative z-10 mb-4">
                Who will sleep on the new mattress?
              </p>
              <div className="w-full flex items-center justify-between flex-col lg:flex-row lg:gap-x-6">
                <div className="w-full lg:w-auto grid grid-cols-4 gap-x-2 lg:gap-x-6 lg:grow">
                  <div
                    className={`text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3 ${
                      imageIndex === 0
                        ? 'border-b-2 border-dark-blue text-174860'
                        : 'text-white'
                    }`}
                    onClick={() => onClickButton(0)}
                  >
                    Me
                  </div>
                  <div
                    className={`text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3 ${
                      imageIndex === 1
                        ? 'border-b-2 border-dark-blue text-174860'
                        : 'text-white'
                    }`}
                    onClick={() => onClickButton(1)}
                  >
                    My partner and I
                  </div>
                  <div
                    className={`text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3 ${
                      imageIndex === 2
                        ? 'border-b-2 border-dark-blue text-174860'
                        : 'text-white'
                    }`}
                    onClick={() => onClickButton(2)}
                  >
                    Me and my baby
                  </div>
                  <div
                    className={`text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3 ${
                      imageIndex === 3
                        ? 'border-b-2 border-dark-blue text-174860'
                        : 'text-white'
                    }`}
                    onClick={() => onClickButton(3)}
                  >
                    My guest
                  </div>
                </div>
                <div className="w-44 pt-4 lg:pt-0 lg:pl-6">
                  <Link
                    to={`/test-mattress?test-index=${imageIndex}`}
                    className="text-white text-xs uppercase py-2 px-8 border border-white font-bold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-none hover:text-white flex justify-between items-center"
                  >
                    Begin test <RxChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
