import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  CodeBracketIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  DocumentMagnifyingGlassIcon,
  CommandLineIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const ITPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Application Security Assessments",
      description:
        "Comprehensive security evaluations using OWASP methodologies",
      features: [
        "OWASP Top 10 analysis",
        "Vulnerability assessment",
        "Security code review",
        "Penetration testing",
      ],
    },
    {
      icon: CodeBracketIcon,
      title: "DevSecOps Implementation",
      description: "Integrate security throughout your development lifecycle",
      features: [
        "CI/CD pipeline security",
        "SAST/DAST integration",
        "Security automation",
        "Container security",
      ],
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Security Advisory Services",
      description: "Expert guidance on security strategy and best practices",
      features: [
        "Security architecture review",
        "Risk assessment",
        "Threat modeling",
        "Security roadmap development",
      ],
    },
    {
      icon: LockClosedIcon,
      title: "Compliance Consulting",
      description: "Navigate complex compliance requirements with confidence",
      features: [
        "SOC 2 preparation",
        "ISO 27001 guidance",
        "PCI DSS compliance",
        "PIPEDA/GDPR alignment",
      ],
    },
    {
      icon: CloudArrowUpIcon,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure and applications",
      features: [
        "Azure security",
        "AWS security",
        "Cloud architecture review",
        "Identity management",
      ],
    },
    {
      icon: CommandLineIcon,
      title: "Secure Code Training",
      description: "Empower your developers with security knowledge",
      features: [
        "Developer workshops",
        "Secure coding practices",
        "Code review training",
        "Security champions program",
      ],
    },
  ];

  const expertise = [
    {
      icon: ExclamationTriangleIcon,
      title: "OWASP Expertise",
      description:
        "Deep knowledge of OWASP Top 10 and application security best practices",
    },
    {
      icon: CpuChipIcon,
      title: "Technical Excellence",
      description:
        "Hands-on experience with Python, JavaScript, C#, and modern DevOps tools",
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Experience",
      description:
        "Proven track record with organizations like RCMP, Microsoft, HP, and Disney",
    },
    {
      icon: CheckCircleIcon,
      title: "Certified Professional",
      description: "CompTIA Security+ certified with CISSP in progress",
    },
  ];

  const technologies = [
    "Python",
    "JavaScript",
    "C#",
    "Azure DevOps",
    "GitHub Actions",
    "Burp Suite",
    "OWASP ZAP",
    "Docker",
    "Kubernetes",
    "Terraform",
  ];

  const process = [
    {
      title: "Discovery",
      description:
        "Understanding your security posture, technology stack, and business requirements",
    },
    {
      title: "Assessment",
      description:
        "Comprehensive evaluation of your applications and infrastructure security",
    },
    {
      title: "Planning",
      description:
        "Developing a prioritized security roadmap aligned with your business goals",
    },
    {
      title: "Implementation",
      description:
        "Executing security improvements with minimal disruption to operations",
    },
    {
      title: "Validation",
      description:
        "Verifying security controls and ensuring compliance requirements are met",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-it-secondary via-it-primary to-it-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Matrix-style background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              IT & Cybersecurity Consulting
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Application security and DevSecOps solutions for modern
              enterprises
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-it-secondary font-semibold rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group"
            >
              Secure Your Applications
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
              Security-First Approach to Technology
            </h2>
            <p className="text-xl text-gray-600">
              As an Application Security & DevSecOps Advisor with experience at
              leading organizations including RCMP, Microsoft, HP, and Disney, I
              bring enterprise-level security expertise to businesses of all
              sizes. My focus is on making security an enabler, not a barrier.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our IT Security Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <service.icon className="h-12 w-12 text-it-primary mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-it-primary mt-0.5 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-it-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Why Choose Our Security Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-start">
                <item.icon className="h-12 w-12 text-it-primary mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technologies We Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-it-primary/30 rounded-full text-gray-700 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Our Security Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-it-primary/30"></div>

              {process.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-12 h-12 bg-it-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Recent Success Story
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="h-16 w-16 text-it-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    RCMP Security Standardization
                  </h3>
                  <p className="text-gray-600">Royal Canadian Mounted Police</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Led security standardization across 4 provinces, aligning
                  application code standards and deployments with OWASP, NIST,
                  and ISO 27001 frameworks.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-it-primary/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-it-primary mb-2">
                      150+
                    </div>
                    <div className="text-gray-600">Detachments Secured</div>
                  </div>
                  <div className="bg-it-primary/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-it-primary mb-2">
                      70%
                    </div>
                    <div className="text-gray-600">
                      Reduction in Security Incidents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-it-primary to-it-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Don't wait for a security breach to take action. Let's work
              together to build security into your applications and
              infrastructure from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-it-secondary font-semibold rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group"
              >
                Schedule a Security Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-it-secondary transition-all duration-300"
              >
                Read Security Insights
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITPage;
