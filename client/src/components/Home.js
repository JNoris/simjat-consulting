import React from "react";
import { Link } from "react-scroll";
import heroImage from "../assets/hero-image.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-light-gray min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">SimJat Consulting</h1>
        <p className="text-2xl mb-8 text-white">
          Professional Accounting & Bookkeeping Services
        </p>
        <Link
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-teal hover:bg-coral text-white font-bold py-3 px-6 rounded-full transition duration-300 cursor-pointer"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Home;
