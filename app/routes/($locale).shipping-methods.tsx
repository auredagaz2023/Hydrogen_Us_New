export default function ShippingMethods() {
  return (
    <div className="justify-center text-174860">
      <div className="max-w-[880px] mx-auto my-0 px-8 py-[140px]">
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
            <h3 className="text-xl font-semibold">MATTRESSES AND PILLOW</h3>
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
  );
}
