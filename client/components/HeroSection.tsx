"use client";

import { CheckCircle, PhoneCall } from "lucide-react";
// import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) {
      console.error("Google Script URL is not defined");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${encodeURIComponent(
        formData.name
      )}&Email=${encodeURIComponent(formData.email)}&Phone=${encodeURIComponent(
        formData.phone
      )}&Business=${encodeURIComponent(formData.business)}`,
    })
      .then((res) => res.text())
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", business: "" });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="hero" className="bg-[#0d275e] py-16 px-4 font-kanit">
      <div className="max-w-[77rem] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* <div className="h-[10vh]">
            <p className="absolute text-xl font-medium z-1 text-[#FFFF] ">
              TM Filing @ Rs. 998*
            </p>
            <Image
              src="/wave.png"
              alt="wave"
              width={200}
              height={30}
              className=" absolute mt-[-30]"
            />
          </div> */}

          <h1 className="text-3xl md:text-4xl lg:text-[2.4rem] font-kanit font-bold text-[#FFFFFF] mb-4">
            <span className="font-kanit">
              Online Trademark Registration in India –
            </span>
            <br className="hidden md:block" />
            Protect Your Brand Name, <br />
            Logo & Slogan
          </h1>
          <p className="text-[#FFFFFF] mb-6 text-base md:text-lg">
            Your business name, logo & slogan are your most valuable assets –
            protect them before someone else does!
          </p>

          <ul className="space-y-3 text-[#FFFFFF] text-base md:text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[#F3B419]" size={30} />
              Fill Out the Form.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[#F3B419]" size={30} />
              Expert Support from Filing to Approval.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[#F3B419]" size={30} />
              Get TM Application Number in 24 Hours.
            </li>
          </ul>
          <a
            href="tel:+919873904892"
            className="bg-[#F2B41A] w-fit flex justify-center items-center gap-x-3 rounded-full px-10 mt-10 py-3 hover:bg-yellow-500 transition"
          >
            <PhoneCall />
            <span className="text-xl">+91-98739 04892</span>
          </a>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            Secure Your Brand Identity — Book A Free Consultation
          </h2>

          {isSubmitted && (
            <div className="mb-4 text-green-600 font-semibold">
              ✅ Form submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-start gap-2">
              <input type="checkbox" defaultChecked required />
              <label className="text-sm text-gray-600">
                I agree to the Privacy Policy and consent to receive
                communications related to my inquiry.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F3B419] hover:scale-102   text- font-semibold py-3 rounded-md transition cursor-pointer"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
