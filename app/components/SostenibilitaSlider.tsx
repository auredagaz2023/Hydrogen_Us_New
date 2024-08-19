import Slider from 'react-slick';
import Sost1_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2021-en-01.jpg';
import Sost2_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2021-en-02.jpg';
import Sost3_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2021-en-03.jpg';
import Sost4_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2021-en-04.jpg';
import Sost5_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-01.jpg';
import Sost6_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-02.jpg';
import Sost7_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-03.jpg';
import Sost8_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-04.jpg';
import Sost9_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-05.jpg';
import Sost10_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-06.jpg';
import Sost11_Img from '../assets/Sostenibilita/sostenibilita-sdgs-2022-en-07.jpg';
import ArrowRight from '../assets/arrow-right.svg';
import ArrowLeft from '../assets/arrow-left.svg';

export function SostenibilitaSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    fade: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <img className="w-[25] h-[25]" src={ArrowRight} alt="arrow-right " />
    ),
    prevArrow: <img src={ArrowRight} id="prevArrow-1" alt="arrow-left" />,
  };
  return (
    <div id="SostenibilitaSlider" className="w-full py-16 lg:py-32">
      <div className="container flex justify-start items-center text-174860 mb-4">
        <div>
          <h5 className="text-[1.1rem] lg:text-xl">MAGNIFLEX'S GOALS</h5>
        </div>
      </div>
      <Slider {...settings}>
        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost1_Img} alt="sostenibilit image 1" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                GOAL 7, clean and affordable energy.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                We continue the constant commitment to sustainable development.
                With solar energy we wake up happier and also the planet.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost2_Img} alt="sostenibilit image 2" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 12, sustainable consumption and production patterns.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                For us, avoiding waste and transforming waste into resources
                also means producing a sustainable future. Find out more at
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost3_Img} alt="sostenibilit image 3" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                We have always believed in innovation that improves the present
                and the future, the invention of vacuum transport proves it.
                Find out more at
                <a href="https://sdgs.un.org/" target="_blank">
                  sdgs.un.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost4_Img} alt="sostenibilit image 4" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 12, sustainable consumption and production patterns.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                The quality of our production also depends on sustainable
                packaging choices. Find out more at{' '}
                <a href="https://sdgs.un.org/" target="_blank">
                  sdgs.un.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost5_Img} alt="sostenibilit image 5" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 12, sustainable consumption and production patterns.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                In 2021 we increased the use of FSC certified boxes by 10%
                compared to the previous year. FSC, the Forest Stewardship
                Council, is an international NGO whose purpose is the
                certification of correct forest management and the traceability
                of derived products. Another step towards greater balance with
                the environment.{' '}
                <a href="https://it.fsc.org/it-it" target="_blank">
                  https://it.fsc.org/it-it
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost6_Img} alt="sostenibilit image 6" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                We have reached the maximum level in the STeP by OEKO-TEX®
                certification which measures environmental performance, social
                responsibility, protection of workers' health and safety
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost7_Img} alt="sostenibilit image 7" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                We are working on rationalizing the movement of people and goods
                to comply with the new Interministerial Decree and to make the
                impact of our production even more virtuous.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost8_Img} alt="sostenibilit image 8" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                For the sake of the environment and health, CO2 emission levels
                must be kept under control. Since 2019 with the introduction of
                LED lights we have managed to reduce them by more than 50%.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost9_Img} alt="sostenibilit image 9" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                Goal 9, industry, innovation and infrastructure. Chemicals
                management standards are a primary objective for a company
                aiming for sustainability. In particular, the replacement of
                dangerous materials for a safer and more eco-sustainable final
                process. Thanks to OEXO TEX® STeP, we know we are heading in the
                right direction. Find out more at{' '}
                <a href="https://sdgs.un.org/" target="_blank">
                  sdgs.un.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost10_Img} alt="sostenibilit image 10" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 9, industry, innovation and infrastructure.
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                One of the main objectives is to be able to offer the best
                possible environment to workers, while remaining in line with
                the regulations issued by the International Labor Organization.
                The step by OEKO-TEX® certification also rewards us on this
                aspect. Find out more at{' '}
                <a href="https://sdgs.un.org/" target="_blank">
                  sdgs.un.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="px-3 sm:container flex flex-wrap justify-items-center">
            <div className="w-full lg:w-7/12 lg:px-3">
              <img src={Sost11_Img} alt="sostenibilit image 11" />
            </div>
            <div className="w-full lg:w-5/12 lg:px-3 self-center">
              <h4 className="text-174860 font-semibold text-[20px] mt-4 mb-2">
                Goal 8, decent work and economic growth
              </h4>
              <p className="text-[#212529] text-[12px] lg:text-[13px]">
                Safety at work is imperative and essential to ensure quality
                inside and outside the company. This is why we at Magniflex who
                care about the well-being of our customers as well as that of
                our team, aim to obtain the highest results in certifications in
                this area as well. Find out more:{' '}
                <a href="https://sdgs.un.org/" target="_blank">
                  sdgs.un.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
