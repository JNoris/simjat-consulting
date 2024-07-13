import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-navy text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SimJat Consulting</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-coral">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-coral">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-coral">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
