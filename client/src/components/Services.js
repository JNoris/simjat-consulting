import React from "react";
import {
  CashIcon,
  OfficeBuildingIcon,
  HeartIcon,
  BriefcaseIcon,
  CalculatorIcon,
} from "@heroicons/react/outline";

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <Icon className="h-12 w-12 text-teal mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Personal Accounting",
      description: "Tailored accounting solutions for individuals.",
      icon: CashIcon,
    },
    {
      title: "Property Accounting",
      description:
        "Specialized accounting for real estate and property management.",
      icon: OfficeBuildingIcon,
    },
    {
      title: "Non-Profit Accounting",
      description: "Accounting services for non-profit organizations.",
      icon: HeartIcon,
    },
    {
      title: "Corporate Accounting",
      description: "Comprehensive accounting solutions for businesses.",
      icon: BriefcaseIcon,
    },
    {
      title: "Bookkeeping",
      description: "Accurate and efficient bookkeeping services.",
      icon: CalculatorIcon,
    },
  ];

  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
