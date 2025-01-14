import Slider from 'react-slick';
import {Button, Link, Text} from '~/components';

import Contacts1_Ico from '../assets/Contacts/mail.svg';
import Contacts2_Ico from '../assets/Contacts/phone.svg';
import Contacts3_Ico from '../assets/Contacts/chat2.svg';
import Contacts4_Ico from '../assets/Contacts/whatsapp.svg';
import Arrow_Ico from '../assets/Contacts/arrow-right.svg';

export function ContactOptions() {
  return (
    <section className="py-8">
      <div className="container text-center">
        <h3 className="text-cusSubheading text-174860 font-semibold center pb-16">
          Require Assistance? <br />
          We are always at your service.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-2 gap-y-6 xl:gap-y-0 text-174860">
          <a
            href="#form-contact"
            className="relative basis-3/12 bg-f7 px-10 py-12 hover:text-B09987"
          >
            <img src={Contacts1_Ico} className="mx-auto my-0" />
            <p className="font-semibold pb-4 uppercase pt-4 text-sm">
              Write to us
            </p>
            <p className="text-sm pb-10">
              Fill out the contact form: we will process your request(s) as soon
              as possible.
            </p>
            <div className='bg-[url("../assets/Contacts/arrow-bottom.svg")] bg-[length:75%_75%] bg-no-repeat bg-center bg-174860 h-8 w-8 rounded-full absolute -bottom-4 left-0 right-0 mx-auto my-0'></div>
          </a>
          <a
            href="#"
            className="relative basis-3/12 bg-f7 px-10 py-12 hover:text-B09987"
          >
            <img src={Contacts2_Ico} className="mx-auto my-0" />
            <p className="font-semibold pb-4 uppercase pt-4 text-sm">Call us</p>
            <a href="tel:+18883818481" className="pb-8 text-blue">
              +1-888-381-8481
            </a>
            <p className="text-sm pb-10">
              Our call center is at your service Monday to Friday 8:30 a.m. to
              5:00 p.m.
            </p>
            <div className='bg-[url("../assets/Contacts/arrow-right.svg")] bg-[length:75%_75%] bg-no-repeat bg-center bg-174860 h-8 w-8 rounded-full absolute -bottom-4 left-0 right-0 mx-auto my-0'></div>
          </a>
          {/* <a
            href="#"
            className="relative basis-3/12 bg-f7 px-10 py-12 hover:text-B09987"
          >
            <img src={Contacts3_Ico} className="mx-auto my-0" />
            <p className="font-semibold pb-4 uppercase pt-4 text-sm">Chat</p>
            <p className="text-sm pb-10">
              Ask our chatbot for help with the most frequently asked questions
            </p>
            <div className='bg-[url("../assets/Contacts/arrow-right.svg")] bg-[length:75%_75%] bg-no-repeat bg-center bg-174860 h-8 w-8 rounded-full absolute -bottom-4 left-0 right-0 mx-auto my-0'></div>
          </a>
          <a
            href="#"
            className="relative basis-3/12 bg-f7 px-10 py-12 hover:text-B09987"
          >
            <img src={Contacts4_Ico} className="mx-auto my-0" />
            <p className="font-semibold pb-4 uppercase pt-4 text-sm">
              Whatsapp
            </p>
            <p className="text-sm pb-10">
              Send us a message on Whatsapp, and we’ll answer you and process
              your request in the shortest time possible
            </p>
            <div className='bg-[url("../assets/Contacts/arrow-right.svg")] bg-[length:75%_75%] bg-no-repeat bg-center bg-174860 h-8 w-8 rounded-full absolute -bottom-4 left-0 right-0 mx-auto my-0'></div>
          </a> */}
        </div>
      </div>
    </section>
  );
}
