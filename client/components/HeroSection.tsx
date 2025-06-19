"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#fff6e9] py-16 px-4 font-kanit">
      <div className="max-w-6xl  mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <div className="h-[10vh]">
            <p className="absolute text-xl font-medium z-1 text-blue-700 ">
              TM Filing @ Rs. 998*
            </p>
            <Image
              src="/wave.png"
              alt="wave"
              width={200}
              height={30}
              className=" absolute mt-[-30]"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-kanit text-gray-900 mb-4">
            Online Trademark Registration in India –
            <br className="hidden md:block" />
            Protect Your Brand Name, Logo & Slogan
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Your business name, logo & slogan are your most valuable assets –
            protect them before someone else does!
          </p>

          <ul className="space-y-3 text-gray-800 text-base md:text-lg">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Fill Out the Form.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Expert Support from Filing to Approval.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} />
              Get TM Application Number in 24 Hours.
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-white p-8 mt-15 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            Secure Your Brand Identity — Book A Free Consultation
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Business Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <label className="text-sm text-gray-600">
                I agree to the Privacy Policy and consent to receive
                communications related to my inquiry.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-md transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
