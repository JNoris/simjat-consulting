import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalculatorIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const AccountingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: DocumentTextIcon,
      title: "Tax Preparation",
      description:
        "Comprehensive tax planning and preparation for individuals and businesses",
      features: [
        "Personal tax returns",
        "Business tax filing",
        "Tax planning strategies",
        "Audit support",
      ],
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Bookkeeping Services",
      description:
        "Accurate and timely bookkeeping to keep your finances organized",
      features: [
        "Monthly bookkeeping",
        "Accounts reconciliation",
        "Financial reporting",
        "Payroll processing",
      ],
    },
    {
      icon: ChartBarIcon,
      title: "Financial Reporting",
      description:
        "Clear financial statements and reports for informed decision-making",
      features: [
        "Income statements",
        "Balance sheets",
        "Cash flow analysis",
        "Custom reports",
      ],
    },
    {
      icon: BanknotesIcon,
      title: "Business Advisory",
      description: "Strategic financial guidance to help your business grow",
      features: [
        "Financial planning",
        "Budget development",
        "Cost reduction",
        "Profitability analysis",
      ],
    },
    {
      icon: BuildingOfficeIcon,
      title: "Property Accounting",
      description:
        "Specialized accounting services for real estate and property management",
      features: [
        "Rental income tracking",
        "Property expenses",
        "Tenant accounting",
        "Investment analysis",
      ],
    },
    {
      icon: CalculatorIcon,
      title: "Non-Profit Accounting",
      description: "Tailored accounting solutions for non-profit organizations",
      features: [
        "Fund accounting",
        "Grant management",
        "Donor reporting",
        "Compliance support",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "We discuss your financial needs and goals to understand how we can best serve you",
    },
    {
      step: "2",
      title: "Customized Plan",
      description:
        "We develop a tailored accounting solution that fits your specific requirements",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "Our team implements the agreed-upon services with attention to detail",
    },
    {
      step: "4",
      title: "Ongoing Support",
      description:
        "We provide continuous support and regular updates on your financial status",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accounting-secondary via-accounting-primary to-accounting-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Accounting & Bookkeeping Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Professional financial management solutions tailored to your
              business needs
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-brand-gold text-accounting-secondary font-semibold rounded-full hover:bg-white transition-all duration-300 group"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Your Trusted Financial Partner
            </h2>
            <p className="text-xl text-gray-600">
              With over 15 years of experience in accounting and bookkeeping, we
              provide comprehensive financial services for businesses,
              individuals, and non-profit organizations. Our expertise spans
              across various industries, ensuring you receive knowledgeable and
              reliable support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Accounting Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <service.icon className="h-12 w-12 text-accounting-primary mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-accounting-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accounting-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accounting-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-accounting-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
              Why Choose SimJat Consulting
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accounting-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Experienced Professionals
                    </h3>
                    <p className="text-gray-600">
                      Over 15 years of experience in accounting and bookkeeping
                      across various industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accounting-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-gray-600">
                      Tailored solutions designed to meet your unique business
                      needs and goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accounting-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Attention to Detail
                    </h3>
                    <p className="text-gray-600">
                      Meticulous approach ensuring accuracy in all financial
                      records and reports
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accounting-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Timely Delivery
                    </h3>
                    <p className="text-gray-600">
                      We understand deadlines and ensure all work is completed
                      on time
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accounting-primary to-accounting-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">
                  Ready to Get Started?
                </h3>
                <p className="mb-8">
                  Let us handle your accounting needs so you can focus on
                  growing your business. Contact us today for a free
                  consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <span>Call us for immediate assistance</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-3" />
                    <span>Email us your questions</span>
                  </div>
                </div>
                <Link
                  to="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-accounting-secondary font-semibold rounded-full hover:bg-brand-gold transition-all duration-300 group mt-8"
                >
                  Contact Us Now
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountingPage;
