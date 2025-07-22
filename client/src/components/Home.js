import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  CalculatorIcon,
  SunIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Accounting & Bookkeeping",
      description:
        "Professional financial management and tax services for businesses and individuals",
      icon: CalculatorIcon,
      color: "accounting",
      link: "/accounting",
      features: [
        "Tax Preparation",
        "Financial Reporting",
        "Bookkeeping Services",
      ],
    },
    {
      title: "Construction & Renewables",
      description:
        "Expert solar energy consulting and construction project management",
      icon: SunIcon,
      color: "construction",
      link: "/construction",
      features: [
        "Solar Farm Development",
        "Quality Assurance",
        "Project Management",
      ],
    },
    {
      title: "IT & Cybersecurity",
      description:
        "Application security assessments and DevSecOps implementation",
      icon: ShieldCheckIcon,
      color: "it",
      link: "/it",
      features: ["Security Assessments", "DevSecOps", "Compliance Consulting"],
    },
  ];

  const stats = [
    { icon: ChartBarIcon, value: "15+", label: "Years Experience" },
    { icon: UserGroupIcon, value: "200+", label: "Clients Served" },
    { icon: AcademicCapIcon, value: "3", label: "Specialized Services" },
  ];

  const recentPosts = [
    {
      category: "IT",
      title: "Understanding OWASP Top 10 Security Risks",
      excerpt:
        "A comprehensive guide to the most critical web application security risks...",
      date: "July 15, 2025",
      color: "it",
    },
    {
      category: "Accounting",
      title: "Tax Planning Strategies for Small Businesses",
      excerpt:
        "Essential tax planning tips to maximize deductions and minimize liability...",
      date: "July 12, 2025",
      color: "accounting",
    },
    {
      category: "Construction",
      title: "Solar Farm Development Best Practices",
      excerpt:
        "Key considerations for successful solar energy project implementation...",
      date: "July 10, 2025",
      color: "construction",
    },
  ];

  return (
    <section id="home" className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-gold/20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_transparent_0%,_rgba(255,255,255,0.1)_50%,_transparent_100%)]"></div>
        </div>

        <div
          className={`container mx-auto px-4 pt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center text-white max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              Comprehensive Consulting
              <span className="block text-brand-gold mt-2">
                Solutions for Modern Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
              Expert guidance in accounting, construction, and technology to
              help your business thrive
            </p>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-blue font-semibold rounded-full hover:bg-white transition-all duration-300 cursor-pointer group animate-scale-in"
            >
              Explore Our Services
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service Cards Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => (window.location.href = service.link)}
              >
                <service.icon
                  className={`h-12 w-12 text-${service.color}-primary mb-4`}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-brand-gold text-sm font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Learn more <ArrowRightIcon className="ml-1 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Services Detail Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized consulting services across three key areas
              to support your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div
                  className={`h-2 bg-gradient-to-r from-${service.color}-primary to-${service.color}-secondary`}
                ></div>
                <div className="p-8">
                  <service.icon
                    className={`h-16 w-16 text-${service.color}-primary mb-6`}
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon
                          className={`h-5 w-5 text-${service.color}-primary mt-0.5 mr-3 flex-shrink-0`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.link}
                    className={`inline-flex items-center justify-center w-full px-6 py-3 bg-${service.color}-primary text-white font-semibold rounded-lg hover:bg-${service.color}-secondary transition-colors duration-300 group`}
                  >
                    Explore {service.title.split(" &")[0]}
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-brand-gold" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Recent Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with our latest articles and industry updates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-1 bg-${post.color}-primary`}></div>
                <div className="p-6">
                  <div
                    className={`inline-block px-3 py-1 bg-${post.color}-primary/10 text-${post.color}-primary text-sm font-semibold rounded-full mb-4`}
                  >
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href="/blog"
                      className={`text-${post.color}-primary hover:text-${post.color}-secondary font-medium text-sm`}
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-gold transition-colors duration-300"
            >
              View All Insights
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
