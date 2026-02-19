import { FormEvent, useRef, useState } from 'react';
import { Keyframes } from '@emotion/react';
import { CollectionLinks } from '~/components/CollectionLinks';
import { ContactOptions } from '~/components/ContactOptions';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const EMAILJS_SERVICE_ID = 'orders-mx-mail';
const EMAILJS_CONTACT_TEMPLATE_ID = 'mx-usa-form-order';
const EMAILJS_CONTACT_TEMPLATE_BILLING_ID = 'mx-usa-form-billing';
const EMAILJS_PUBLIC_KEY = 'S4HKNw2-KC7dMdcU4';
const RECAPTCHA_SITE_KEY = '6LdDlQssAAAAAP-syxd1WlLWQEgBrwyJyif-g7gI'

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  city?: string;
  zip?: string;
  state?: string;
  topic?: string;
  message?: string;
}

export default function Contatti(props: { keyframe: Keyframes }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [policyCheck, setPolicyCheck] = useState(false);
  const [showError, setShowError] = useState(false);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const sendEmail = async () => {
    setLoading(true);
    setError(undefined);

    if (!captchaToken) {
      setError("reCAPTCHA failed. Please try again.");
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current || '',
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.text == 'OK') {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          }
        },
        (error) => {
          console.error(error);
          setError('Unknown error, please try again later!');
        },
      );
    // emailjs
    //   .sendForm(
    //     EMAILJS_SERVICE_ID,
    //     EMAILJS_CONTACT_TEMPLATE_BILLING_ID,
    //     formRef.current || '',
    //     EMAILJS_PUBLIC_KEY,
    //   )
    //   .then(
    //     (result) => {
    //       if (result.text == 'OK') {
    //         setLoading(false);
    //         setSuccess(true);
    //         setTimeout(() => {
    //           setSuccess(false);
    //         }, 3000);
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //       setError(error.text);
    //     },
    //   );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (policyCheck) await sendEmail();
    else setShowError(true);
  };

  return (
    <>
      <section className="bg-center bg-[url('../assets/Contacts/bg-contacts-banner.jpg')] h-[500px] md:h-banner bg-cover">
        <div className="container h-full">
          <div className="h-full flex place-items-end">
            <div className="basis-5/12">
              <div className="bg-white text-174860">
                <div className="px-20">
                  <svg
                    version="1.1"
                    id="giglio"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="59px"
                    height="81px"
                    viewBox="0 0 59 81"
                    enableBackground="new 0 0 59 81"
                    xmlSpace="preserve"
                    className="relative -top-6"
                  >
                    <path
                      id="Path"
                      fill="#B09987"
                      d="M56.025,40.603c-7.911-12.636-21.678-2.055-23.527,8.938c-1.13,6.678-2.362,3.699-1.541-1.232
                      c0.822-4.623,3.391-11.403,8.219-16.335c4.828-4.931,4.623-6.781,1.027-14.794c-1.951-4.418-8.424-14.28-10.684-16.54
                      c-2.26,2.26-8.732,12.123-10.685,16.54c-3.596,8.013-3.802,9.966,1.027,14.794c4.931,4.931,7.5,11.712,8.219,16.335
                      c0.822,4.93-0.411,7.91-1.541,1.232C24.69,38.549,10.923,27.967,3.013,40.603c-6.883,10.889,5.855,21.78,15.411,13.356
                      c4.109-3.596-2.671-1.951-3.904-2.568c-3.595-1.85-2.362-6.576,1.335-7.705c4.52-1.439,9.966,4.52,8.013,8.938
                      c-1.027,2.363-3.595,1.541-4.623,3.904c-0.72,1.645,2.877,1.645,2.877,2.465c0,0.104-6.473,3.803-7.192,4.623
                      c-2.877,3.699,7.5,4.008,8.219-0.82c0.616-4.109,6.781-3.289,1.027,2.979c-0.409,0.41-4.313,7.602-0.307,5.547
                      c0.719-0.309,3.082-3.699,3.699-3.494c0.822,0.412-3.699,9.658-2.671,10.479c0.616,0.412,4.315,1.953,4.726,2.057
                      c0.411-0.104,4.109-1.645,4.725-2.057c1.027-0.82-3.595-10.066-2.671-10.479c0.616-0.309,2.979,3.082,3.699,3.494
                      c4.006,2.055,0.103-5.035-0.411-5.65c-5.855-6.268,0.309-6.986,1.027-2.98c0.72,4.828,11.198,4.52,8.219,0.822
                      c-0.72-0.822-7.192-4.52-7.192-4.623c0-0.822,3.596-0.822,2.877-2.467c-1.026-2.465-3.595-1.541-4.623-3.902
                      c-1.951-4.418,3.493-10.377,8.014-8.939c3.596,1.131,4.931,5.855,1.336,7.705c-1.336,0.617-8.014-1.025-3.904,2.568
                      C50.17,62.383,62.807,51.492,56.025,40.603L56.025,40.603z"
                    ></path>
                  </svg>
                  {showError && (
                    <span className="font-semibold text-3xl">Magniflex</span>
                  )}
                  <p className="pb-16 pt-4">
                    Manufactured by Magniflex USA Ltd., Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28 text-174860">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-4 lg:mb-0 lg:basis-7/12">
              <p className="font-semibold text-sm pb-4">ADDRESS</p>
              <p className="pb-8">
                3050 Biscayne Blvd, Ste 200 Miami, FL 33137 - USA
              </p>
              <a
                href="https://www.google.it/maps/place/Via+S.+Leonardo+da+Porto+Maurizio,+24%2F26%2F28,+59100+Prato+PO/@43.850669,11.1165476,17z/data=!3m1!4b1!4m5!3m4!1s0x132a587db96ddaa5:0xee71bd2373baf3b9!8m2!3d43.850669!4d11.1187363"
                target="_blank"
                className=" border border-174860 uppercase text-174860 py-2 px-4 text-xs hover:bg-174860 hover:text-white transition hidden lg:inline"
              >
                HOW TO REACH US
              </a>
            </div>
            <div className="mb-4 lg:mb-0 lg:basis-3/12">
              <p className="font-semibold text-sm pb-4">EMAIL</p>
              <a
                href="mailto:info@magniflex.us"
                className="underline decoration-[#174860] pb-8 text-B09987"
              >
                info@magniflex.us
              </a>
            </div>
            <div className="basis-2/12">
              <p className="font-semibold text-sm pb-4 text-blue">
                TOLL FREE NUMBER
              </p>
              <a href="tel:+18883818481" className="pb-8 text-blue">
                +1-888-381-8481
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactOptions />
      <section className="bg-f7 px-3 sm:container py-16 md:py-24 lg:py-28">
        <div id="form-contact" className="max-w-[880px] mx-auto">
          <div className="flex flex-col lg:flex-row pt-16 place-items-end">
            <h3 className="basis-1/2 text-174860 font-semibold text-cusSubheading w-full text-center md:text-left pb-2">
              Write an email to our support
            </h3>
            <p className="basis-1/2 text-174860 text-xl pb-8">
              Fill the form and you will be contacted as soon as possible
            </p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div className="mt-3">
                <input
                  type="text"
                  id="title"
                  name="title"
                  autoComplete="family-name"
                  placeholder="title"
                  aria-label="title"
                  defaultValue="MX-USA - A new web site message from"
                  className="hidden"
                />
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Name*"
                  aria-label="Name"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name*"
                  aria-label="Last name"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email*"
                  aria-label="Email"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="company"
                  placeholder="Company"
                  aria-label="Company"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="mt-3">
                <input
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="zip"
                  name="zip"
                  type="text"
                  autoComplete="province"
                  placeholder="ZIP"
                  aria-label="ZIP"
                />
              </div>
              <div className="mt-3">
                <select
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="state"
                  name="state"
                  autoComplete="state"
                  aria-label="State"
                >
                  <option>State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="mt-3">
                <select
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none"
                  id="topic"
                  name="topic"
                  autoComplete="topic"
                  aria-label="Topic"
                >
                  <option value="">How do you know us?</option>
                  <option value="search engines">Search engines</option>
                  <option value="social networks">Social networks</option>
                  <option value="faris or events">Trade faris or events</option>
                  <option value="advertising">Advertising</option>
                  <option value="magazines">Magazines</option>
                  <option value="TV">TV</option>
                  <option value="Radio">Radio</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mt-5">
                <textarea
                  className="appearance-none dark:bg-transparent border border-gray-400 focus:border-gray-800 focus:ring-0 w-full text-black placeholder:text-gray-500 leading-tight focus:shadow-outline py-4 px-4 rounded-none resize-none"
                  rows={4}
                  id="message"
                  name="message"
                  autoComplete="message"
                  placeholder="Your message"
                  aria-label="Message"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    name="agreePrivacy"
                    value="agreePrivacy"
                    onChange={() => setPolicyCheck(!policyCheck)}
                  // required
                  />
                  <label
                    htmlFor="agreePrivacy"
                    className="text-8c8c8c pl-4 text-sm"
                  >
                    {' '}
                    I agree with the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-174860 hover:text-B09987"
                    >
                      Privacy policy
                    </a>
                  </label>
                </div>
                {showError && (
                  <div className="text-red-500">
                    You should agree to the policy to submit.
                  </div>
                )}

                <div className="flex place-content-end">
                  <button
                    type="submit"
                    className="mt-4 text-center text-sm text-2f88b1 uppercase border border-2f88b1 font-semibold px-8 py-2 hover:bg-2f88b1 hover:text-white disabled:opacity-30 whitespace-nowrap"
                    disabled={loading}
                  >
                    {loading ? 'Loading ...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY!}
              onChange={handleCaptchaChange}
            />
            {success && (
              <div className="w-full bg-green-600 flex justify-center items-center text-white text-sm py-2 mt-3">
                Contact email sent successfully!
              </div>
            )}
            {error && (
              <div className="w-full bg-red-600 flex justify-center items-center text-white text-sm py-2 mt-3">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>
      <CollectionLinks />
    </>
  );
}
