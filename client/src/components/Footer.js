import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} SimJat Consulting Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
