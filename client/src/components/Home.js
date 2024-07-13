import React, { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-light-gray relative"
    >
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4 text-navy">SimJat Consulting</h1>
        <p className="text-2xl mb-8 text-teal">
          Professional Accounting & Bookkeeping Services
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-teal text-white px-6 py-3 rounded-full text-lg hover:bg-coral transition duration-300"
        >
          Learn More
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-coral rounded-full opacity-10"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="mb-4">
              SimJat Consulting offers a wide range of professional accounting
              services tailored to meet your specific needs. Our expert team is
              dedicated to helping you navigate complex financial landscapes and
              achieve your goals.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Personal Accounting</li>
              <li>Property Accounting</li>
              <li>Non-Profit Accounting</li>
              <li>Corporate Accounting</li>
              <li>Bookkeeping</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-teal text-white px-4 py-2 rounded hover:bg-coral transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
