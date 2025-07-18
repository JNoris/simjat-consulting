import React, { useState } from "react";
import { useToast } from "../contexts/ToastContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessLine: "accounting",
    inquiryType: "personal",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const { showSuccess, showError, showWarning } = useToast();

  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          errors[name] = "This field is required";
        } else if (value.length < 2) {
          errors[name] = "Must be at least 2 characters";
        } else if (value.length > 50) {
          errors[name] = "Must be less than 50 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          errors[name] = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors[name] = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !/^[+]?[1-9][\d\s\-()]{7,15}$/.test(value)) {
          errors[name] = "Please enter a valid phone number";
        }
        break;
      case "message":
        if (!value.trim()) {
          errors[name] = "Message is required";
        } else if (value.length < 10) {
          errors[name] = "Message must be at least 10 characters";
        } else if (value.length > 2000) {
          errors[name] = "Message must be less than 2000 characters";
        }
        break;
      case "company":
        if (value && value.length > 100) {
          errors[name] = "Company name must be less than 100 characters";
        }
        break;
      default:
        break;
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Real-time validation
    const fieldError = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: fieldError[name] || null,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldError = validateField(key, formData[key]);
      if (fieldError[key]) {
        errors[key] = fieldError[key];
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const submitWithRetry = async (requestData, attempt = 0) => {
    const maxRetries = 3;
    const baseDelay = 1000; // 1 second

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      if (
        attempt < maxRetries &&
        (error.name === "AbortError" || error.message.includes("fetch"))
      ) {
        const delay = baseDelay * Math.pow(2, attempt); // Exponential backoff
        showWarning(
          `Request failed. Retrying in ${delay / 1000} seconds... (${
            attempt + 1
          }/${maxRetries})`
        );
        await sleep(delay);
        return submitWithRetry(requestData, attempt + 1);
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submission

    // Validate form
    if (!validateForm()) {
      showWarning("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    const requestData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      businessLine: formData.businessLine,
      inquiryType: formData.inquiryType,
      message: formData.message,
    };

    try {
      const response = await submitWithRetry(requestData);
      const responseData = await response.json();

      if (response.ok) {
        showSuccess(responseData.message || "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          businessLine: "accounting",
          message: "",
          inquiryType: "personal",
        });
        setFieldErrors({});
      } else {
        // Handle different error types
        if (response.status === 429) {
          showError(
            "Too many requests. Please wait before sending another message."
          );
        } else if (response.status === 400 && responseData.details) {
          // Show validation errors from server
          if (Array.isArray(responseData.details)) {
            responseData.details.forEach((detail) => showError(detail));
          } else {
            showError(responseData.details);
          }
        } else {
          showError(
            responseData.details ||
              responseData.error ||
              "Failed to send message"
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.name === "AbortError") {
        showError(
          "Request timed out after multiple attempts. Please check your connection and try again."
        );
      } else if (error.message.includes("fetch")) {
        showError(
          "Network error persists after retries. Please check your connection and try again."
        );
      } else {
        showError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.firstName ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {fieldErrors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {fieldErrors.firstName}
                </p>
              )}
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.lastName ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {fieldErrors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {fieldErrors.lastName}
                </p>
              )}
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.email ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
              )}
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.phone ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {fieldErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
              )}
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.company ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
              {fieldErrors.company && (
                <p className="mt-1 text-sm text-red-600">
                  {fieldErrors.company}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="businessLine"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Business Line
              </label>
              <select
                id="businessLine"
                name="businessLine"
                value={formData.businessLine}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.businessLine
                    ? "border-red-500"
                    : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
              >
                <option value="accounting">Accounting & Bookkeeping</option>
                <option value="construction">
                  Renewable Energy Construction
                </option>
                <option value="security">Software Security</option>
              </select>
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
                disabled={isSubmitting}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                  fieldErrors.inquiryType ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
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
              disabled={isSubmitting}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${
                fieldErrors.message ? "border-red-500" : "border-gray-300"
              } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
            ></textarea>
            {fieldErrors.message && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-md text-lg transition duration-300 flex items-center justify-center ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal hover:bg-coral"
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
