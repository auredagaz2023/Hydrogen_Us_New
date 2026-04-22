import {Link} from '~/components';

export default function ShippingMethods() {
  return (
    <div className="justify-center text-174860">
      <div className="lg:flex lg:flex-row">
        <div className="basis-full lg:basis-9/12 py-[140px]">
          <div className="max-w-[880px] mx-auto my-0 px-8">
            <h1 className="text-5xl font-semibold my-8">
              How to receive your Magniflex product
            </h1>

            <div className="space-y-4 text-[#212529] leading-7">
              <p>Magniflex shipments are free within the United States.</p>
              <p>
                Orders are processed Monday through Friday (excluding holidays).
                Once your order has been processed, you will receive a confirmation
                email.
              </p>
              <p>
                Delivery times vary depending on product category and availability.
                Products in stock are shipped within 48 hours of order
                confirmation.
              </p>
              <p>
                For assistance regarding your order, please contact:
                <br />
                Phone: <a href="tel:+17862338805">(786) 233-8805</a>
                <br />
                Email:{' '}
                <a
                  href="mailto:orders@magniflex.us"
                  className="text-dark-blue underline hover:text-B09987 transition"
                >
                  orders@magniflex.us
                </a>
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-3xl font-semibold">Delivery Times by Product Category</h2>

              <section className="space-y-2">
                <h3 className="text-xl font-semibold">MATTRESSES AND PILLOWS</h3>
                <p className="text-[#212529] leading-7">
                  In-stock products ship within 48 hours of order confirmation.
                  <br />
                  Out-of-stock products ship within 4 weeks.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xl font-semibold">KIT FOUNDATION</h3>
                <p className="text-[#212529] leading-7">Ships within 2–4 business days.</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xl font-semibold">ADJUSTABLE BASE</h3>
                <p className="text-[#212529] leading-7">Ships within 4–5 business days.</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xl font-semibold">TOPPERS</h3>
                <p className="text-[#212529] leading-7">Ships within 24 hours.</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xl font-semibold">SHEETS</h3>
                <p className="text-[#212529] leading-7">Ships within 48 hours.</p>
              </section>
            </div>
          </div>
        </div>
        <aside className="basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12">
          <div className="sticky py-4 top-[118px] text-174860">
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
  );
}
