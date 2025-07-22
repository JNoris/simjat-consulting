import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Determine if navbar should have solid background
  const hasBackground = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".services-dropdown")) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const services = [
    {
      name: "Accounting & Bookkeeping",
      href: "/accounting",
      color: "accounting",
      description:
        "Professional financial services for businesses and individuals",
    },
    {
      name: "Construction & Renewables",
      href: "/construction",
      color: "construction",
      description: "Solar energy and construction project management",
    },
    {
      name: "IT & Cybersecurity",
      href: "/it",
      color: "it",
      description: "Application security and DevSecOps consulting",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasBackground
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <h1
              className={`text-2xl font-display font-bold transition-colors duration-300 ${
                hasBackground ? "text-brand-blue" : "text-white"
              }`}
            >
              SJC
            </h1>
            <span
              className={`ml-2 text-sm font-sans transition-colors duration-300 ${
                hasBackground ? "text-gray-600" : "text-gray-200"
              }`}
            >
              SIMJAT CONSULTING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                    hasBackground ? "text-gray-700" : "text-white"
                  }`}
                >
                  Home
                </ScrollLink>
              ) : (
                <Link
                  to="/"
                  className={`cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                    hasBackground ? "text-gray-700" : "text-white"
                  }`}
                >
                  Home
                </Link>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="relative services-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className={`flex items-center cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                  hasBackground ? "text-gray-700" : "text-white"
                }`}
              >
                Services
                <ChevronDownIcon
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className={`block px-6 py-4 hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-${service.color}-primary`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className={`font-semibold text-gray-900 mb-1`}>
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              {isHomePage ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                    hasBackground ? "text-gray-700" : "text-white"
                  }`}
                >
                  About
                </ScrollLink>
              ) : (
                <a
                  href="/#about"
                  className={`cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                    hasBackground ? "text-gray-700" : "text-white"
                  }`}
                >
                  About
                </a>
              )}
            </li>

            <li>
              <Link
                to="/blog"
                className={`cursor-pointer transition-colors duration-300 hover:text-brand-gold ${
                  hasBackground ? "text-gray-700" : "text-white"
                }`}
              >
                Blog
              </Link>
            </li>

            <li>
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    hasBackground
                      ? "bg-brand-blue text-white hover:bg-brand-gold"
                      : "bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue"
                  }`}
                >
                  Contact
                </ScrollLink>
              ) : (
                <a
                  href="/#contact"
                  className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    hasBackground
                      ? "bg-brand-blue text-white hover:bg-brand-gold"
                      : "bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue"
                  }`}
                >
                  Contact
                </a>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              hasBackground ? "text-gray-700" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-3">
            {isHomePage ? (
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Home
              </ScrollLink>
            ) : (
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Home
              </Link>
            )}
            <div className="px-4 py-2">
              <p className="font-semibold text-gray-900 mb-2">Services</p>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block pl-4 py-2 text-gray-600 hover:text-brand-gold"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            {isHomePage ? (
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                About
              </ScrollLink>
            ) : (
              <a
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                About
              </a>
            )}
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Blog
            </Link>
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 py-2 bg-brand-blue text-white text-center rounded-full"
              >
                Contact
              </ScrollLink>
            ) : (
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 py-2 bg-brand-blue text-white text-center rounded-full"
              >
                Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
