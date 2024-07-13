import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">
          About SimJat Consulting
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            SimJat Consulting is a leading accounting firm specializing in
            personal, property, non-profit, and corporate accounting, as well as
            bookkeeping services. With our expertise and dedication, we help our
            clients navigate complex financial landscapes and achieve their
            goals.
          </p>
          <p className="text-lg">
            Our team of experienced professionals is committed to providing
            personalized, high-quality services tailored to meet the unique
            needs of each client. We pride ourselves on our attention to detail,
            integrity, and commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
