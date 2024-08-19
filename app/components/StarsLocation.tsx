import Slider from "react-slick";
import {Button, Link, Text} from '~/components';
import justme from '../assets/FiveStars/justme.jpg';
import bagatelle from '../assets/FiveStars/bagatelle.jpg';
import blueMarlin from '../assets/FiveStars/blue-marlin.jpg';
import hotelDelGolfo from '../assets/FiveStars/hotel-del-golfo.jpg';
import twiga from '../assets/FiveStars/twiga.jpg';
import oceanBeach from '../assets/FiveStars/ocean-beach.jpg';
import esMoliDeSal from '../assets/FiveStars/es-moli-de-sal.jpg';
import fantini from '../assets/FiveStars/fantini.jpg';
import beachHouse from '../assets/FiveStars/beach-house.jpg';
import blueMarlin2 from '../assets/FiveStars/blue-marlin2.jpg';
import hotelHermitage from '../assets/FiveStars/hotel-hermitage.jpg';

export function StarsLocation() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return (
        <div id="StarsLocation" className='w-full relative pt-12 pb-12'>
            <Slider {...settings}>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={justme} alt="image1" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Just Me</h3>
                        <p className="text-174860 pb-2">Versilia</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={bagatelle} alt="image2" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Bagatelle</h3>
                        <p className="text-174860 pb-2">Ibiza  </p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={blueMarlin} alt="image3" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Blue Marlin</h3>
                        <p className="text-174860 pb-2">Dubai</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={hotelDelGolfo} alt="image4" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Hotel Del Golfo</h3>
                        <p className="text-174860 pb-2">Isola d'Elba  </p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={twiga} alt="image5" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Twiga</h3>
                        <p className="text-174860 pb-2">Forte dei Marmi</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={oceanBeach} alt="image6" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Ocean Beach</h3>
                        <p className="text-174860 pb-2">Ibiza  </p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={esMoliDeSal} alt="image7" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Es Molì De Sal</h3>
                        <p className="text-174860 pb-2">Fromentera</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={fantini} alt="image8" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Fantini</h3>
                        <p className="text-174860 pb-2">Milano Marittima</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={beachHouse} alt="image9" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Beach House</h3>
                        <p className="text-174860 pb-2">Ibiza</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={beachHouse} alt="image9" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">CBbC Taittinger</h3>
                        <p className="text-174860 pb-2">Ibiza</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={blueMarlin2} alt="image10" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Blue Marlin</h3>
                        <p className="text-174860 pb-2">Ibiza</p>
                    </div>
                </div>
                <div className="pr-2">
                    <div className="relative float-left">
                        <img src={hotelHermitage} alt="image11" />
                        <h3 className="text-174860 pt-6 pb-2 text-xl">Hotel Hermitage</h3>
                        <p className="text-174860 pb-2">Porto Ferraio</p>
                    </div>
                </div>
            </Slider>
        </div>
      );
}
