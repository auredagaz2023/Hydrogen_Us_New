import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';
import Cert1_Img from '~/assets/Brand/Aja-ukas_4.webp';
import Cert2_Img from '~/assets/Brand/Oeko_1.webp';
import Cert3_Img from '~/assets/Brand/FIRA_1.webp';
import Cert4_Img from '~/assets/Brand/CE-MD_1.webp';
import Cert5_Img from '~/assets/Brand/UNIFI_1.webp';
import Cert6_Img from '~/assets/Brand/Logo_made_in_italy.webp';
import Cert7_Img from '~/assets/Brand/GOTS_3.webp';
import Cert8_Img from '~/assets/Brand/Logistica-sostenibile_1.webp';
import Cert9_Img from '~/assets/Brand/Aca_1.webp';
import Cert10_Img from '~/assets/Brand/MED.webp';
import Cert11_Img from '~/assets/Brand/oeko-step.webp';
import Cert12_Img from '~/assets/Brand/certipur-us.svg'

export const handle = {
  seo: {
    title: 'Learn about Our Certifications | Magniflex | Magniflex',
    titleTemplate: 'Learn about Our Certifications | Magniflex | Magniflex',
    description:
      "Learn why Magniflex's certifications set us apart, guaranteeing you the finest sleep solutions.",
    handle: '@shopify',
    url: `https://magniflex.us/certifications`,
  },
};

const CERTIFICATIONS = [
  {
    image: Cert1_Img,
    title: 'AJA EUROPE',
    desc: "Certifies that the Company's management systems are compliant with standard UNI EN ISO 9001:2015, ensuring high manufacturing standards.",
  },
  {
    image: Cert2_Img,
    title: 'OEKO-TEX® CLASS I',
    desc: 'This certification guarantees the total absence of toxic and harmful substances to man and the environment.',
  },
  {
    image: Cert3_Img,
    title: 'CFR1633, FIRA',
    desc: "Flame-retardant certifications that confirm the Company's compliance with the applicable laws and standards for consumer protection when it comes to ensuring the flame-retardant safety of the products.",
  },
  {
    image: Cert4_Img,
    title: 'EC DECLARATION OF CONFORMITY, MEDICAL DEVICES',
    desc: 'Warrants to the consumer that the product is manufactured under standards falling under reference standard EU 745/2017 on medical devices. Allows consumers to deduct expenses incurred for such products from their annual income statement.',
  },
  {
    image: Cert5_Img,
    title: 'UNIVERSITY OF FLORENCE',
    desc: 'Tests and studies conducted on ergonomics in collaboration with the University of Florence.',
  },
  // {
  //   image: Cert6_Img,
  //   title: '100% MADE IN ITALY',
  //   desc: '100% Made in Italy Quality Certificate. Certifies that all the design, production, and supplies of raw materials took place in Italy.',
  // },
  {
    image: Cert7_Img,
    title: 'GOTS (GLOBAL ORGANIC TEXTILE STANDARD)',
    desc: 'Issued by the Institute for Ethical and Environmental Certification, the certificate confirms that the fabrics used for the Toscana line and Yoga Accessories are made entirely from organic materials while guaranteeing the utmost protection of human beings and the environment.',
  },
  {
    image: Cert8_Img,
    title: 'SUSTAINABLE LOGISTICS 2015*',
    desc: "The Company takes care of the environment, starting with the planning of a combined road and rail transport logistics, which optimizes the advantages of both. In 2015, this has led to a reduction of carbon dioxide emissions of more than 45,100 kg.*The data are based on the study 'ECO TRANS It 2008' conducted by the Institute for Energy and Environmental Research in Heidelberg and on DEKRA certification Paneuropa Rösch GmbH DIN ISO 14001",
  },
  {
    image: Cert9_Img,
    title: 'ACA - AMERICAN CHIROPRACTIC ASSOCIATION',
    desc: 'One of the most important trade associations in the United States has certified the beneficial effect of the MagniStretch mattress, which stretches and relaxes the back.',
  },
  {
    image: Cert10_Img,
    title: 'MED',
    desc: "Naval Directive MED 90/2014/EU certification attesting that the product has successfully passed tests on combustion, fire resistance, and the emission of noxious fumes, under the applicable SOLAS (Convention for the Safety of Life at Sea) and IMO (International Maritime Organization) technical rules and the applicable European standards. This certification means the Company's products are approved for installation on ships and ferries.",
  },
  {
    image: Cert11_Img,
    title: 'OEKO-TEX STEP',
    desc: 'STeP (Sustainable Textile Production) Certification is an evaluation system that ensures the application of high standards and best practices in the management of its environmental performance, social responsibility, production quality, and protection of workers’ health and safety. This Certification, therefore, recognizes a corporate approach focused on the use of environmentally-friendly technologies and products, efficient use of resources and the maintenance, and development of sustainable production conditions.',
  },
  {
    image: Cert12_Img,
    title: "CertiPUR-US",
    desc: "A widely recognized safety and environmental certification program specifically for foam materials used in mattresses and other home products. It ensures that the foams have been tested, are non-toxic, environmentally responsible, and meet strict standards for content, emissions, and durability."
  }
];

export default function Certificazioni() {
  return (
    <>
      <Section
        padding="x"
        className="justify-center bg-[url('../assets/Brand/bg-certifications-banner.jpg')] text-white h-banner max-h-96 min-h-banner bg-cover items-center center lg:pl-0 lg:pr-0 text-center"
      >
        <h1 className="text-[28px] md:text-3xl xl:text-5xl font-semibold text-center">
          Magniflex. Certified excellence.
        </h1>
      </Section>
      <section>
        <Fade duration={1000} triggerOnce>
          <div className="px-3 sm:container py-16 md:py-24 lg:py-28 flex justify-between text-174860">
            <div className="text-[1rem] lg:text-xl text-center max-w-[1050px] mx-auto">
              Close collaboration with various international certification
              institutes is a guarantee of the importance the company places on
              the pursuit of quality.
            </div>
          </div>
          <div className="container text-neutral-500">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                className="flex gap-6 justify-center border-t border-neutral-300 py-12"
                key={index}
              >
                <div className="w-4/12 lg:w-3/12 xl:w-2/12">
                  <img
                    src={cert.image}
                    alt="Cert image 1"
                    className="w-full max-w-[196px]"
                  />
                </div>
                <div className="w-8/12 lg:w-7/12 xl:w-6/12">
                  <h3 className="text-gold font-semibold text-[1.1rem] lg:text-xl pb-4">
                    {cert.title}
                  </h3>
                  <p className="text-[1rem] lg:text-md">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>
    </>
  );
}
