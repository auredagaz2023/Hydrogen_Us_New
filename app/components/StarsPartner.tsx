import Slider from "react-slick";
import {Button, Link, Text} from '~/components';

import image_1 from '../assets/FiveStars/img-medium.jpg';

export function StarsPartner() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      return (
        <div id="StarsPartner" className='w-full relative pt-12 pb-36'>
            <h4 className="text-B09987 py-12 text-xl">SLEEP WELL WHEREVER YOU ARE</h4>
            <Slider {...settings}>
                <div className="pr-2">
                    <div
                        className="relative float-left">
                            <img src={image_1} alt="image1" />
                            <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl">Nome struttura 5 stelle</h3>
                            <div className="flex gap-1">
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                            </div>
                    </div>
                </div>
                <div className="pr-2">
                    <div
                        className="relative float-left">
                        <img src={image_1} alt="image2" />
                        <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl">Nome struttura 5 stelle</h3>
                        <div className="flex gap-1">
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                        </div>
                    </div>
                </div>
                <div className="pr-2">
                    <div
                        className="relative float-left">
                        <img src={image_1} alt="image3" />
                        <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl">Nome struttura 5 stelle</h3>
                        <div className="flex gap-1">
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                        </div>
                    </div>
                </div>
                <div className="pr-2">
                    <div
                        className="relative float-left">
                        <img src={image_1} alt="image4" />
                        <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl">Nome struttura 5 stelle</h3>
                        <div className="flex gap-1">
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                        </div>
                    </div>
                </div>
                <div className="pr-2">
                    <div
                        className="relative float-left">
                        <img src={image_1} alt="image6" />
                        <h3 className="text-174860 font-semibold pt-6 pb-2 text-xl">Nome struttura 5 stelle</h3>
                        <div className="flex gap-1">
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      );
}
