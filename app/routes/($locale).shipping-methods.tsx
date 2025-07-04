import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';

export default function PaginaTestiCol(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <div className="justify-center text-174860">
        <div className="lg:flex lg:flex-row">
          <div className="basis-full lg:basis-9/12 py-[140px]">
            <div className="max-w-[880px] mx-auto my-0 px-8">
              <h1 className="text-5xl font-semibold my-8">
                How to receive your Magniflex product
              </h1>
              <p className="text-[#212529]">
                Magniflex shipments are free. We deliver by appointment and with
                telephone notice. You can arrange the delivery day directly with
                the courier, the product will be left at street level. <br />
                How long does it take to receive your order? Order shipping
                times vary according to the product you have purchased and you
                will receive an email when the order has been processed
              </p>
              <br />
              <h4 className="text-xl font-semibold my-4">MATTRESSES</h4>
              <p className="text-[#212529]">
                To find out the actual delivery times for the products, contact
                customer assistance on the toll-free number 800 030636 or send
                an e-mail to{' '}
                <a
                  href="mailto:customercare@magniflex.com"
                  className="text-dark-blue underline hover:text-B09987 transition"
                >
                  customercare@magniflex.com
                </a>
                . The products with immediate availability will be shipped
                within 48 hours of receipt of payment. Unavailable products will
                be shipped within 4 weeks of receiving payment.
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">PILLOWS</h4>
              <p className="text-[#212529]">
                All lines within: 4 weeks (excluding Saturdays and Sundays).
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">NETWORKS</h4>
              <p className="text-[#212529]">
                The products with immediate availability will be shipped within
                48 hours of receipt of payment. Unavailable products will be
                shipped within 4 weeks of receiving payment.
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">SHEET</h4>
              <p className="text-[#212529]">
                All lines available within: 4 weeks (excluding Saturdays and
                Sundays).
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">MATTRESS COVER</h4>
              <p className="text-[#212529]">
                All lines available within: 4 weeks (excluding Saturdays and
                Sundays).
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">YOGA ACCESSORIES</h4>
              <p className="text-[#212529]">
                Futon Yoga within: 4 weeks (excluding Saturdays and Sundays).
              </p>
              <br />

              <h4 className="text-xl font-semibold my-4">PET</h4>
              <p className="text-[#212529]">
                All lines available within: 4 weeks (excluding Saturdays and
                Sundays).
              </p>
              <br />
              <br />
              <h1 className="text-5xl font-semibold my-8">Returns</h1>
              <p className="text-[#212529]">
                All products purchased through the website www.magniflex.com can
                be returned according to what is indicated in the Conditions of
                Use published in the dedicated section, we invite you to
                carefully consult the procedure indicated in article 16 of the
                same. <br />
                <br />
                Below is a brief extract of what is contained in the Terms of
                Use mentioned above: Returns must be sent to our warehouse:
                Alessanderx Spa | Cap. Soc. €375,000 (iv) - Legal address: 59100
                PRATO Via S.Leonardo da Porto Maurizio, 24/26/28 VAT number:
                01729090975 <br />
                <br />
                How to return/exchange items: <br />
                <br />
              </p>
              <ol
                type="1"
                className="text-[#212529]"
                style={{
                  marginLeft: '20px',
                  paddingLeft: '10px',
                  listStyle: 'decimal',
                }}
              >
                <li>
                  Contact our sales department on the toll-free number 800030636
                  (Mon-Fri 8.30/12.30 -14.30/18.30, holidays excluded) or by
                  email at customercare@magniflex.com, you will be notified
                  within 24 hours the return code that you will have to indicate
                  in the form and the return authorization form will be sent to
                  you by email which you will have to print and include in the
                  package you return.
                </li>
                <li>
                  Make sure the products are in the same condition you received
                  them. Magniflex avails itself of the right not to accept
                  damaged or broken goods.
                </li>
                <li>
                  Paste our address that you find at the bottom of the return
                  form on the original box to cover the delivery label
                </li>
                <li>
                  Download and fill out the RETURN FORM in all parts and insert
                  it inside the package.
                </li>
              </ol>
              <br />
              <p className="text-[#212529]">
                In order for the return to be accepted, the goods must be intact
                and packed correctly, in the original packaging. For any
                clarification, please refer to{' '}
                <Link
                  to="/terms-of-use"
                  className="text-dark-blue underline hover:text-B09987 transition"
                >
                  the Terms of Use
                </Link>
                .
              </p>
              <br />
              <p className="text-[#212529]">
                <strong className="text-dark-blue">
                  Wrong or defective item
                </strong>
                <br />
                We strive every day to always keep the quality high, but it can
                happen that something goes wrong during shipping. If you have
                received a wrong or damaged item, the replacement will be
                completely free. Contact our sales office and we will promptly
                arrange for collection and replacement.
              </p>
              <br />
              <p className="text-[#212529]">
                <strong className="text-dark-blue">
                  Replace the item or change the size
                </strong>
                <br />
                Do you want to replace your mattress with another Magniflex®
                mattress? Changing height, collection and comfort? Our sleep
                experts are always available to give you all the advice and
                information you need. Contact our customer care, our experts
                will call you back to help you, the shipping costs will always
                be borne by Magniflex®. In the event that the new mattress costs
                more, you will have to pay the difference via PayPal. If, on the
                other hand, the cost is lower, you will not be able to receive a
                refund.
              </p>
              <br />
              <p className="text-[#212529]">
                <strong className="text-dark-blue">
                  Item return and refund
                </strong>
                <br />
                Do you want to return the purchased item? You have 14 days from
                the delivery date, the shipment will be at your expense. The
                refund will be made within 30 days of receipt of the product in
                our offices. Make sure the products are in the same condition
                you received them. Magniflex® avails itself of the right not to
                accept goods that are damaged, broken or in compromised hygienic
                conditions. You can return products purchased online by choosing
                your own means or using the Returns Service made available by
                Magniflex. If you take advantage of this option, contact our
                customer care to find out the rates of the Magniflex® returns
                service and agree on the collection date and time.
              </p>
              <br />
              <p className="text-[#212529]">
                <strong className="text-dark-blue">Refund method</strong>
                <br />
                Once the shipment has been received, our quality control will
                verify that all the requirements for the return are met and will
                proceed with the refund request within 30 days. The timing of
                crediting your account may vary from one bank to another. For
                anything not specified on this page and for more information,
                please contact our customer service.
              </p>
              <br />
            </div>
          </div>
          <aside className="basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12">
            <div className="sticky py-4 top-[118px]">
              <ul>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/warranty">Warranty</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b text-B09987 active">
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
