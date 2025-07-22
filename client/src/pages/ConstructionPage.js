import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  BoltIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const ConstructionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: SunIcon,
      title: "Solar Farm Development",
      description: "End-to-end consulting for solar energy project development",
      features: [
        "Site assessment",
        "Feasibility studies",
        "Project planning",
        "Environmental compliance",
      ],
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Quality Assurance Management",
      description: "Comprehensive QA oversight for construction projects",
      features: [
        "Quality control systems",
        "Inspection protocols",
        "Compliance verification",
        "Documentation management",
      ],
    },
    {
      icon: UserGroupIcon,
      title: "Regional Team Leadership",
      description:
        "Expert management of construction teams across multiple sites",
      features: [
        "Team coordination",
        "Resource allocation",
        "Performance monitoring",
        "Safety management",
      ],
    },
    {
      icon: BoltIcon,
      title: "Renewable Energy Consulting",
      description: "Strategic guidance for renewable energy initiatives",
      features: [
        "Technology selection",
        "ROI analysis",
        "Grid integration",
        "Sustainability planning",
      ],
    },
    {
      icon: BuildingOfficeIcon,
      title: "Commercial Construction",
      description: "Project management for commercial building projects",
      features: [
        "Timeline management",
        "Budget control",
        "Contractor coordination",
        "Progress reporting",
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: "Regulatory Compliance",
      description: "Ensuring all projects meet regulatory requirements",
      features: [
        "Permit acquisition",
        "Code compliance",
        "Safety regulations",
        "Environmental standards",
      ],
    },
  ];

  const stats = [
    { value: "50+", label: "Solar Projects Completed" },
    { value: "500MW", label: "Total Capacity Deployed" },
    { value: "10+", label: "Years in Renewables" },
    { value: "100%", label: "Safety Record" },
  ];

  const expertise = [
    {
      title: "Southern Alberta Expertise",
      description:
        "Extensive experience building solar farms throughout Southern Alberta, understanding local regulations, climate conditions, and grid infrastructure.",
    },
    {
      title: "End-to-End Project Management",
      description:
        "From initial site assessment through final commissioning, we manage every aspect of your renewable energy project.",
    },
    {
      title: "Quality-First Approach",
      description:
        "Our QA specialist background ensures every project meets the highest standards of quality and safety.",
    },
    {
      title: "Team Leadership Excellence",
      description:
        "Proven ability to coordinate and lead regional construction teams, ensuring efficient project execution.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-construction-secondary via-construction-primary to-construction-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Construction & Renewable Energy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Expert solar farm development and construction project management
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-construction-secondary font-semibold rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-construction-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-construction-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Building a Sustainable Future
            </h2>
            <p className="text-xl text-gray-600">
              With extensive experience in solar farm construction across
              Southern Alberta, we bring deep expertise in renewable energy
              project development, quality assurance, and team management to
              every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Construction Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <service.icon className="h-12 w-12 text-construction-primary mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-construction-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-construction-primary/5 to-construction-primary/10 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GlobeAmericasIcon className="h-8 w-8 text-construction-primary mr-3" />
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Project Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-construction-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Initial Assessment
                  </h3>
                  <p className="text-gray-600">
                    We conduct thorough site assessments and feasibility studies
                    to ensure project viability
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-construction-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Planning & Design
                  </h3>
                  <p className="text-gray-600">
                    Detailed project planning including permits, timelines, and
                    resource allocation
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-construction-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Construction Management
                  </h3>
                  <p className="text-gray-600">
                    Expert oversight of construction activities with focus on
                    quality and safety
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-construction-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Commissioning & Handover
                  </h3>
                  <p className="text-gray-600">
                    Final testing, commissioning, and seamless project handover
                    with complete documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-construction-primary to-construction-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Build Your Renewable Energy Project?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's work together to create sustainable energy solutions that
              power the future. Our expertise in solar farm development and
              construction management ensures your project's success from start
              to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-construction-secondary font-semibold rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group"
              >
                Get a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-construction-secondary transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;
