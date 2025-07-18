import React, { useState } from "react";
import { Link } from "react-scroll";
import heroImage from "../assets/hero-image.jpeg";
import {
  CalculatorIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const TriServiceHero = () => {
  const [activeService, setActiveService] = useState("accounting");

  const services = [
    {
      id: "accounting",
      title: "Accounting & Bookkeeping",
      subtitle: "Professional Financial Services",
      description:
        "Comprehensive accounting and bookkeeping solutions for businesses and individuals.",
      icon: CalculatorIcon,
      color: "accounting-blue",
      bgColor: "accounting-light",
      isDefault: true,
    },
    {
      id: "construction",
      title: "Renewable Energy Construction",
      subtitle: "Commercial Solar & Green Building",
      description:
        "Specialized construction services for solar farms and renewable energy projects.",
      icon: BuildingOfficeIcon,
      color: "construction-green",
      bgColor: "construction-light",
      isDefault: false,
    },
    {
      id: "security",
      title: "Software Security",
      subtitle: "Cybersecurity & Digital Protection",
      description:
        "Advanced security solutions for software and digital infrastructure.",
      icon: ShieldCheckIcon,
      color: "security-red",
      bgColor: "security-light",
      isDefault: false,
    },
  ];

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

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

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">SimJat Consulting</h1>
          <p className="text-2xl mb-8">
            Professional Services Across Three Pillars
          </p>
        </div>

        {/* Service Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeService === service.id
                    ? `bg-${service.color} text-white shadow-lg`
                    : "text-white hover:bg-white hover:bg-opacity-20"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <service.icon className="h-5 w-5" />
                  <span>{service.title.split(" ")[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Display */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-${activeServiceData.bgColor} bg-opacity-90 backdrop-blur-sm rounded-xl p-8 text-center`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 bg-${activeServiceData.color} rounded-full mb-6`}
            >
              <activeServiceData.icon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-navy">
              {activeServiceData.title}
            </h2>
            <p className="text-xl mb-4 text-navy font-medium">
              {activeServiceData.subtitle}
            </p>
            <p className="text-lg mb-8 text-gray-700">
              {activeServiceData.description}
            </p>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className={`bg-${activeServiceData.color} hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition duration-300 cursor-pointer inline-block`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriServiceHero;
