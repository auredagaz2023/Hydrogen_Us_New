import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';

export const handle = {
  seo: {
    title: 'Magniflex Warranty & Return Policy | Magniflex | Magniflex',
    titleTemplate: 'Magniflex Warranty & Return Policy | Magniflex | Magniflex',
    description:
      'Magniflex is pleased to offer you a 10 year limited warranty against defects in workmanship and/or materials of our mattresses.',
    handle: '@shopify',
    url: `https://magniflex.us/warranty`,
  },
};

export default function PaginaTestiCol(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <div className="justify-center text-174860">
        <div className="lg:flex lg:flex-row">
          <div className="basis-full lg:basis-9/12 py-[140px]">
            <div className="max-w-[880px] mx-auto my-0 px-8">
              <h1 className="text-5xl font-semibold my-8">Mattress Warranty</h1>
              <p className="text-8c8c8c">
                Magniflex is pleased to provide you with a 10-year limited
                warranty to protect against any potential workmanship or
                material defects in our mattresses. The limited warranty for
                mattresses remains in force for ten (10) years and is valid from
                the date of purchase. The original purchase receipt is required
                as proof of purchase. This limited warranty is to the benefit of
                the original purchaser of the product. It is not transferable.
                This warranty, with the exception of fabric or handles, covers
                any visible indentation exceeding one and one-quarter inches (1
                1⁄4”) on one side of the mattress. In cases where identical
                materials are unavailable for repair or replacement, we will
                substitute materials of equal quality. To ensure the
                effectiveness of this warranty, please use the mattress in
                conjunction with a firm, non-spring foundation, such as a
                slatted/grid top bed base, Magniflex foundation, or similar hard
                surfaces. These options guarantee proper center support and
                ventilation. Your satisfaction and comfort are our top
                priorities. Do not use a box spring foundation or foundations
                with inadequate center support, as they are likely to cause
                defects in the mattress, which are not covered under this
                warranty.
              </p>
              <br />
              <h4 className="text-xl font-semibold my-4">
                Exclusions from Mattress Coverage:
              </h4>
              <p className="text-8c8c8c">
                Our mattress limited warranty shall NOT apply in the following
                circumstances:
                <ul style={{listStyle: 'inherit'}} className="ml-8">
                  <li>Wear and tear of the product due to normal use.</li>
                  <li>
                    If the product is found to be unsanitary, dampened, burned,
                    cut, stained, and/or soiled.
                  </li>
                  <li>
                    If the product is used without a proper foundation and/or
                    inadequate center support.
                  </li>
                  <li>
                    Defects or damages resulting from accidents, misuse, abuse,
                    neglect, unusual physical stress, alteration, improper
                    operation, maintenance, or handling of the product.
                  </li>
                  <li>
                    If the product has any damage to the outer fabric of the
                    cover, including wear and tear.
                  </li>
                  <li>
                    If the product is used for commercial purposes (including,
                    but not limited to, hotels, motels, or institutional
                    facilities) unless designed and built for commercial use.
                  </li>
                  <li>
                    If the product is not used but rather stored (whether long
                    or short-term) in any orientation.
                  </li>
                  <li>
                    If the product was exposed to hot or cold temperatures, wet
                    environments, and inappropriate climate conditions,
                    including but not limited to, rain and humidity.
                  </li>
                  <li>Discoloration or other cosmetic changes.</li>
                  <li>
                    If the product was repaired by third parties not authorized
                    by Magniflex.
                  </li>
                  <li>
                    Product failure caused by factors other than defective
                    workmanship or material.
                  </li>
                </ul>
              </p>
              <br />
              <p>
                <strong>
                  In addition to the foregoing, this limited warranty on our
                  mattresses shall not apply to:
                </strong>
                <ul className="ml-6 gap-2">
                  <li>
                    <div className="flex gap-4">
                      <div>a)</div>
                      <div>
                        Body impressions, which are a normal occurrence in a
                        sleep set and indicate that the upholstery layers are
                        performing as they were designed to do by conforming to
                        the body’s individual contours. Such compressions are
                        natural and are not considered structural or design
                        defects and, therefore, are NOT covered under the
                        warranty.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>b)</div>
                      <div>
                        A normal increase in the softness of the foam that does
                        not affect the pressure-relieving qualities of the
                        mattress.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>c)</div>
                      <div>
                        A decrease in thickness or volume up to 2” for
                        mattresses with covers quilted in natural fiber, as
                        natural fiber tends to flatten down with time and usage
                        or as a result of vacuum packing the mattress before
                        shipping.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>d)</div>
                      <div>Handles, if present in the product.</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>e)</div>
                      <div>
                        Indentations NOT greater than one and one-quarter inches
                        (1 1⁄4”).
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>f)</div>
                      <div>Comfort preference.</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>g)</div>
                      <div>Transportation and inspection costs.</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>h)</div>
                      <div>
                        Product purchased from unauthorized retailers or
                        dealers.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>i)</div>
                      <div>
                        If the original purchaser does not present proof of
                        purchase, which shows the date, place, and price of
                        purchase of the product.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div>j)</div>
                      <div>
                        Pillows and other products are not listed in this
                        warranty.
                      </div>
                    </div>
                  </li>
                </ul>
              </p>
            </div>
            <div
              className="max-w-[880px] mx-auto my-0 px-8"
              style={{marginTop: '80px'}}
            >
              <h4 className=" text-xl font-bold w-full my-4 text-center">
                Pillow Warranty Terms
              </h4>
              <h4 className=" text-xl font-semibold w-full my-4 text-center">
                3-Year Limited Pillow Warranty
              </h4>
              <p className="text-8c8c8c">
                Magniflex USA, Magniflex Canada Ltd ensures the quality of your
                purchase with a comprehensive three (3) year warranty. During
                this period, Magniflex, at its discretion and with handling
                costs borne by the purchaser, commits to either replace or
                repair any product found defective due to faulty materials, as
                outlined within the specified limitations.
              </p>
              <h4 className="text-xl font-semibold my-4">
                Covered by this Warranty:
              </h4>
              <p className="text-8c8c8c">
                Our mattress limited warranty shall NOT apply in the following
                circumstances:
                <ul style={{listStyle: 'inherit'}} className="ml-8">
                  <li>
                    Physical defects in the pillow core resulting in foam
                    splitting or cracking under normal usage and proper
                    handling.{' '}
                  </li>
                  <li>
                    Deterioration of the foam structure, preventing the pillow
                    from returning to its original shape.
                  </li>
                </ul>
              </p>
              <h4 className="text-xl font-semibold my-4">
                This Warranty Excludes
              </h4>
              <p className="text-8c8c8c">
                <ul style={{listStyle: 'inherit'}} className="ml-8">
                  <li>
                    Normal softness increase that doesn't compromise the
                    pressure-relieving qualities of the product.
                  </li>
                  <li>Any defect related to the pillow cover.</li>
                </ul>
              </p>
            </div>
            <div
              className="max-w-[880px] mx-auto my-0 px-8"
              style={{marginTop: '80px'}}
            >
              <h4 className=" text-xl font-bold w-full my-4 text-center">
                How to Initiate a Warranty Claim:
              </h4>
              <p className="text-8c8c8c">
                Contact the authorized retailer from whom you purchased the
                product. If your retailer is unavailable, reach out directly to
                Magniflex at the following address:
              </p>
              <h4 className="text-xl font-semibold my-4">MAGNIFLEX USA LTD.</h4>
              <p className="text-8c8c8c">
                <ul style={{listStyle: 'inherit'}} className="ml-8">
                  <li>3050 Biscayne Blvd, Ste 200</li>
                  <li>Miami, FL 33137</li>
                  <li>Phone: 786-233-8805</li>
                  <li>Fax: 786-221-1800</li>
                  <li>Website: www.magniflex.us</li>
                  <li>Email: info@magniflex.us</li>
                </ul>
              </p>
              <h4 className="text-xl font-semibold my-4">
                Submit the following documents to the authorized retailer:
              </h4>
              <p className="text-8c8c8c">
                Proof of purchase, indicating the date, location, and price of
                the product. For further inquiries, contact Magniflex at the
                provided details.
              </p>
              <br />
              <p className="text-8c8c8c">
                Before any repair or replacement service is initiated, an
                inspection by the authorized retailer or Magniflex may be
                conducted to assess the product defect.
              </p>
            </div>
          </div>

          <aside className="basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12">
            <div className="sticky py-4 top-[118px]">
              <ul>
                <li className="py-2 mb-2 border-[#dee2e6] border-b text-B09987 active">
                  <Link to="/warranty">Warranty</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/shipping-methods">Shipping methods</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/return-policy">Return policy</Link>
                </li>
                {/* <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/terms-of-use">Terms of use</Link>
                </li> */}
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/cookies">Cookies</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
