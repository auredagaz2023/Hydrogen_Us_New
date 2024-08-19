import Slider from 'react-slick';
import bgpressflower from '../assets/Home/bg-press-flower.png';
import {Button, Link, Text} from '~/components';

export function QuotesSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      id="QuotesSlider"
      className='w-full relative bg-174860 bg-no-repeat bg-[url("../assets/Home/bg-press-flower.png")] py-[70px] md:py-[90px] 3xl:pt-20 3xl:pb-36'
    >
      <div className="px-3 sm:container">
        <div className="md:py-12">
          <div className="w-full md:w-10/12 xl:w-8/12 mx-auto">
            <h3 className="font-semibold text-cusheading xl:text-5xl text-white mb-2">
              What they say about us
            </h3>
            <Slider {...settings} className="max-w-[650px] mt-20 mb-10">
              <div>
                <div className="flex">
                  <div className="hidden md:block">
                    <div className="text-white font-bold text-4xl border-4 border-8c8c8c rounded-full w-[100px] h-[100px]">
                      <div className="relative left-6 top-6">01</div>
                    </div>
                  </div>
                  <div className="md:pl-6">
                    <div className="font-semibold text-white text-xl min-h-[170px] xxl:min-h-[205px] xxl:leading-[1.45]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div className="pb-4 border-b border-white max-w-xs text-white mt-8 flex justify-between">
                      <div>IL CORRIERE DELLA SERA</div>
                      <div className="pl-8">11.03.22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="hidden md:block">
                    <div className="text-white font-bold text-4xl border-4 border-8c8c8c rounded-full w-[100px] h-[100px]">
                      <div className="relative left-6 top-6">02</div>
                    </div>
                  </div>
                  <div className="md:pl-6">
                    <div className="font-semibold text-white text-xl min-h-[170px] xxl:min-h-[205px] xxl:leading-[1.45]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab
                    </div>
                    <div className="pb-4 border-b border-white max-w-xs text-white mt-8 flex justify-between">
                      <div>IL CORRIERE DELLA SERA</div>
                      <div className="pl-8">11.03.22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="hidden md:block">
                    <div className="text-white font-bold text-4xl border-4 border-8c8c8c rounded-full w-[100px] h-[100px]">
                      <div className="relative left-6 top-6">03</div>
                    </div>
                  </div>
                  <div className="md:pl-6">
                    <div className="font-semibold text-white text-xl min-h-[170px] xxl:min-h-[205px] xxl:leading-[1.45]">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </div>
                    <div className="pb-4 border-b border-white max-w-xs text-white mt-8 flex justify-between">
                      <div>IL CORRIERE DELLA SERA</div>
                      <div className="pl-8">11.03.22</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
