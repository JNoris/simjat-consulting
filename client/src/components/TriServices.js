import React from "react";
import {
  // Accounting icons
  BanknotesIcon,
  BuildingOfficeIcon,
  HeartIcon,
  BriefcaseIcon,
  CalculatorIcon,
  // Construction icons
  WrenchScrewdriverIcon,
  BoltIcon,
  SunIcon,
  CogIcon,
  // Security icons
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

const ServiceCard = ({ title, description, icon: Icon, colorClass }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 ${colorClass}`}
  >
    <Icon
      className={`h-12 w-12 mb-4 ${colorClass.replace("border-", "text-")}`}
    />
    <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceSection = ({ title, services, colorClass, bgColorClass }) => (
  <div className={`${bgColorClass} rounded-xl p-8 mb-12`}>
    <h3
      className={`text-2xl font-bold mb-6 text-center ${colorClass.replace(
        "border-",
        "text-"
      )}`}
    >
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          colorClass={colorClass}
        />
      ))}
    </div>
  </div>
);

const TriServices = () => {
  const accountingServices = [
    {
      title: "Personal Accounting",
      description:
        "Tailored accounting solutions for individuals and families.",
      icon: BanknotesIcon,
    },
    {
      title: "Property Accounting",
      description:
        "Specialized accounting for real estate and property management.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Non-Profit Accounting",
      description:
        "Accounting services for non-profit organizations and charities.",
      icon: HeartIcon,
    },
    {
      title: "Corporate Accounting",
      description:
        "Comprehensive accounting solutions for businesses of all sizes.",
      icon: BriefcaseIcon,
    },
    {
      title: "Bookkeeping",
      description:
        "Accurate and efficient bookkeeping services for your business.",
      icon: CalculatorIcon,
    },
  ];

  const constructionServices = [
    {
      title: "Solar Farm Construction",
      description:
        "Commercial-scale solar farm development and installation in Southern Alberta.",
      icon: SunIcon,
    },
    {
      title: "Renewable Energy Projects",
      description:
        "Specialized construction for wind, solar, and other renewable energy systems.",
      icon: BoltIcon,
    },
    {
      title: "Green Building Construction",
      description:
        "Sustainable construction practices and LEED-certified building projects.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Energy Infrastructure",
      description:
        "Construction of energy transmission and distribution infrastructure.",
      icon: CogIcon,
    },
    {
      title: "Project Management",
      description:
        "End-to-end project management for large-scale construction projects.",
      icon: WrenchScrewdriverIcon,
    },
  ];

  const securityServices = [
    {
      title: "Software Security Audits",
      description:
        "Comprehensive security assessments for software applications and systems.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Penetration Testing",
      description:
        "Advanced penetration testing to identify vulnerabilities in your systems.",
      icon: EyeIcon,
    },
    {
      title: "Security Architecture",
      description:
        "Design and implementation of secure software architecture and infrastructure.",
      icon: LockClosedIcon,
    },
    {
      title: "Incident Response",
      description:
        "Rapid response and recovery services for security incidents and breaches.",
      icon: KeyIcon,
    },
    {
      title: "Security Consulting",
      description:
        "Strategic security consulting for businesses and organizations.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-navy">
          Our Services
        </h2>

        {/* Accounting Services */}
        <ServiceSection
          title="Accounting & Bookkeeping Services"
          services={accountingServices}
          colorClass="border-accounting-blue"
          bgColorClass="bg-accounting-light"
        />

        {/* Construction Services */}
        <ServiceSection
          title="Renewable Energy Construction"
          services={constructionServices}
          colorClass="border-construction-green"
          bgColorClass="bg-construction-light"
        />

        {/* Security Services */}
        <ServiceSection
          title="Software Security Services"
          services={securityServices}
          colorClass="border-security-red"
          bgColorClass="bg-security-light"
        />
      </div>
    </section>
  );
};

export default TriServices;
