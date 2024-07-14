import React, { useRef, useEffect } from "react";

const PrivacyPolicyPopup = ({ onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-navy">Privacy Policy</h2>
        <div className="text-gray-700">
          <p className="mb-4">
            SimJat Consulting Inc. is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-navy">
            Information We Collect
          </h3>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you
            fill out the contact form. This may include your name, email
            address, phone number, and any other information you choose to
            provide.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-navy">
            How We Use Your Information
          </h3>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to comply with legal
            obligations.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-navy">
            Data Security
          </h3>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized or unlawful
            processing, accidental loss, destruction, or damage.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-navy">Your Rights</h3>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal
            information. Please contact us if you wish to exercise these rights.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-navy">
            Changes to This Policy
          </h3>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-teal text-white px-4 py-2 rounded hover:bg-coral transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
