import Slider from 'react-slick';
import social_1 from '../assets/Home/social1.webp';
import social_2 from '../assets/Home/social2.webp';
import social_3 from '../assets/Home/social3.webp';
import social_4 from '../assets/Home/social4.webp';
import social_5 from '../assets/Home/social5.webp';
import social_6 from '../assets/Home/social6.webp';
import social_7 from '../assets/Home/social7.webp';
import social_8 from '../assets/Home/social8.webp';
import {Button, Link, Text} from '~/components';

export function SocialSlider() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 8000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="SocialSlider" className="w-full relative">
      <Slider {...settings}>
        <div>
          <img src={social_1} className="w-full" alt="social_1" />
        </div>
        <div>
          <img src={social_2} className="w-full" alt="social_2" />
        </div>
        <div>
          <img src={social_3} className="w-full" alt="social_3" />
        </div>
        <div>
          <img src={social_4} className="w-full" alt="social_4" />
        </div>
        <div>
          <img src={social_5} className="w-full" alt="social_1" />
        </div>
        <div>
          <img src={social_6} className="w-full" alt="social_2" />
        </div>
        <div>
          <img src={social_7} className="w-full" alt="social_3" />
        </div>
        <div>
          <img src={social_8} className="w-full" alt="social_4" />
        </div>
      </Slider>
    </div>
  );
}
