import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "personal",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      try {
        const response = await fetch("/netlify/functions/contact.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            inquiryType: formData.inquiryType,
            message: formData.message,
          }),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            inquiryType: "personal",
          });
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(error.message || "An error occurred. Please try again later.");
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8"
          netlify
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company (optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-teal text-white px-6 py-3 rounded-md text-lg hover:bg-coral transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
