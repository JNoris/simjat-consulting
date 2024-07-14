import React, { useState } from "react";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} SimJat Consulting Inc. All rights reserved.</p>
        <button
          onClick={() => setShowPrivacyPolicy(true)}
          className="text-white underline hover:text-accent mt-2"
        >
          Privacy Policy
        </button>
      </div>
      {showPrivacyPolicy && (
        <PrivacyPolicyPopup onClose={() => setShowPrivacyPolicy(false)} />
      )}
    </footer>
  );
};

export default Footer;
