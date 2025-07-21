import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const ShippingInfo = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">Shipping Information</h1>

        {/* Domestic Shipping - India */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Domestic Shipping (India)</h2>
          <p className="mb-4">
            We offer free standard shipping across India on all prepaid orders. Most orders are processed within 1–2 business days.
            Once shipped, you will receive a tracking number via email or SMS.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Standard Shipping:</strong> 3–7 business days depending on your region.</li>
            <li><strong>Express Shipping:</strong> 1–3 business days available at an additional cost.</li>
            <li>Cash on Delivery (COD) available for select PIN codes.</li>
          </ul>
          <p>
            We partner with trusted logistics providers like Bluedart, Delhivery, and Ecom Express to ensure your order arrives safely and on time.
          </p>
        </section>

        {/* International Shipping */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">International Shipping</h2>
          <p className="mb-4">
            We ship internationally to most countries. Shipping rates are calculated at checkout based on your location and order weight.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>International orders may take 7–15 business days for delivery.</li>
            <li>Tracking information is provided once your order ships.</li>
            <li>Customs duties and taxes (if applicable) are the customer’s responsibility.</li>
          </ul>
        </section>

        {/* Order Processing */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Order Processing</h2>
          <p>
            All orders are processed Monday to Friday (excluding public holidays). Orders placed on weekends or holidays will be processed the next business day.
          </p>
        </section>

        {/* Delays */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Delays and Exceptions</h2>
          <p>
            Shipping times are estimates and may vary due to factors outside our control, such as weather or customs clearance delays.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p>
            For questions or concerns about your shipment, feel free to{" "}
            <a href="/contact" className="text-blue-600 underline">contact our support team</a>.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ShippingInfo;
