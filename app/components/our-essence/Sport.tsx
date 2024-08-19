import {Keyframes} from '@emotion/react';
import Reveal, {Fade} from 'react-awesome-reveal';
import Buffon_Img from '~/assets/Sport/buffon.jpg';
import Castrogiovanni_Img from '~/assets/Sport/castrogiovanni.jpg';
import Chiellini_Img from '~/assets/Sport/chiellini.jpg';
import Sport1_Img from '~/assets/Sport/sport1.jpg';
import Sport2_Img from '~/assets/Sport/sport2.jpg';
import Sport3_Img from '~/assets/Sport/sport3.jpg';

type TProps = {
  keyframe: Keyframes;
};

export function Sport({keyframe}: TProps) {
  return (
    <section id="sport">
      <section className="pt-28" id="sport">
        <Reveal keyframes={keyframe} duration={1000}>
          <div className="max-w-xl mx-auto md:max-w-3xl md:px-12 lg:max-w-7xl lg:px-20 py-6 px-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="lg:w-3/12">
                <p className="text-text text-gold uppercase lg:text-xl mb-6">
                  SPORT
                </p>
                <p className="text-subheading text-dark-blue font-semibold mb-6 lg:text-3xl">
                  We always support a healthy life.
                </p>
                <div className="grid grid-cols-3 mb-6 gap-2 lg:flex lg:flex-col">
                  <img src={Buffon_Img} alt="buffon image" />
                  <img src={Castrogiovanni_Img} alt="castrogiovanni image" />
                  <img src={Chiellini_Img} alt="chiellini image" />
                </div>
              </div>
              <div className="lg:w-8/12">
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  Magniflex has a privileged relationship with sports. Back in
                  the 1980s, the company was already a sponsor of the Giro
                  d’Italia bicycle race, underlining the close link between
                  regenerating rest and a healthy lifestyle. And even today, the
                  company's great passion for sports guides its commitment to
                  promoting a culture of good rest as a source of energy.
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  Over the years, Magniflex has supported various players of the
                  Italian National Rugby team, prime examples of performance and
                  authenticity, calling on them to be testimonials of the
                  quality that the company transfers into each product. In 2016,
                  this philosophy led to Magniflex signing up a legend of
                  Italian and international sport as its testimonial: Gianluigi
                  Buffon. The two-year period between 2017 and 2018 was the
                  turning point of the partnership with the Italian Soccer Team,
                  which included the supply of mattresses and pillows for the
                  Federal Technical Center in Coverciano.
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  But our show of support to the world of sports doesn't stop
                  here. In 2021, Magniflex became a National Partner of the
                  Volleyball Nations League, a competition created in 2018 and
                  reserved for players of the volleyball national team. This is
                  a tangible sign of the link between the brand and a healthy
                  lifestyle, a statement of interest in the culture of a good
                  night's sleep to wake up feeling great.
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  Who is better than a European Champion like Giorgio Chiellini
                  to continue the relationship that has been linking Magniflex
                  to the World of Sport for years? Captain of the Italian
                  National Team that won the last European soccer event, a
                  player from Tuscany, who allows us to tie the name of our
                  company to the place where everything began. Magniflex and
                  Giorgio Chiellini are a strong and rooted duo, made up of
                  healthy principles and hard work
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:relative">
          <div className="max-w-xl md:max-w-3xl md:px-12 md:py-24 lg:max-w-7xl lg:px-20 mx-auto py-16 px-4">
            <Reveal triggerOnce duration={1000} keyframes={keyframe}>
              <div className="lg:w-8/12 xl:w-7/12">
                <p className="text-subheading text-dark-blue font-bold mb-6 lg:text-3xl">
                  We conquer champions from all over the world.
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  There is a link between the talented athletes and Magniflex
                  that is part of a long tradition that goes from historical
                  sponsorships in the world of cycling to the most recent
                  collaborations in the world of rugby and sponsorship of the
                  Italian international soccer team.
                </p>
                <p className="text-text text-dark-blue mb-6 lg:text-xl">
                  Like restful sleep, sport is a passion without borders, in
                  Italy as in the rest of the world. It's been 20 years of
                  Magniflex's presence in Japan that has led the company to bind
                  to the most important sports events in the country, so that
                  some of the most famous Japanese champions have become
                  significant testimonials
                </p>
              </div>
            </Reveal>
          </div>
          <Fade duration={1000} triggerOnce>
            <div className="w-full h-72 lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-4/12 bg-[url('../assets/Sport/bg-campioni.jpg')] bg-center bg-cover bg-no-repeat"></div>
          </Fade>
        </div>
        <div className="grid grid-cols-2 p-4 md:grid-cols-3 gap-4">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={50}>
            <img src={Sport1_Img} alt="sport image 1" />
          </Reveal>
          <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={100}>
            <img src={Sport2_Img} alt="sport image 2" />
          </Reveal>
          <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={150}>
            <img
              src={Sport3_Img}
              alt="sport image 3"
              className="hidden md:block"
            />
          </Reveal>
        </div>
      </section>
    </section>
  );
}
