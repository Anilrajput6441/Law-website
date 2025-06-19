"use client";
import { SendHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTopForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) {
      console.error("Google Script URL is not defined");
      return;
    }

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(
          formData.name
        )}&Email=${encodeURIComponent(
          formData.email
        )}&Phone=${encodeURIComponent(
          formData.phone
        )}&Business=${encodeURIComponent(formData.business)}`,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", business: "" });
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto md:px-4 md:py-3 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-3">
        {/* CTA Text */}
        <p className="hidden md:flex text-sm font-medium text-blue-900">
          Secure Your Brand Identity — Free Consultation!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex md:flex-nowrap gap-2 items-center justify-center"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Business Name"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer text-sm font-semibold"
          >
            Submit Now
          </button>
        </form>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-700 text-white w-full px-4 py-2 flex text-xl justify-center gap-x-5 cursor-pointer md:hidden"
        >
          Contact Now <SendHorizontal />
        </button>
      </div>

      {isSubmitted && (
        <div className="text-center text-green-600 text-sm py-2">
          ✅ Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ScrollTopForm;
