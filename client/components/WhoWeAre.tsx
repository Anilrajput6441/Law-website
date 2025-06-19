"use client";

import { CheckCircle, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          👩‍⚖️ Who We Are
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          At <strong>D Taksh IP</strong>, we&apos;re not just consultants –
          we’re former insiders of the Indian IP system. Our team includes
          ex-Trademark Hearing Officers and ex-Copyright Examiners who’ve
          handled thousands of IP cases. Now, we bring that expertise to protect
          your brand.
        </p>

        {/* Services Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📢 Services We Specialize In
          </h3>
          <ul className="grid md:grid-cols-3 gap-3 text-gray-700 text-md">
            {[
              "Trademark Search & Filing",
              "Objection Handling",
              "Show Cause Hearing Representation",
              "Trademark Oppositions",
              "Assignments & Licensing",
              "Copyright Registration",
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}

        <div className="bg-[#fff4ec] flex flex-col md:flex-row p-6 rounded-xl shadow-sm mb-10">
          <div className="">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Why Choose Us? (Trust Factor & Credibility)
            </h3>
            <ul className="space-y-4 text-gray-700 text-md">
              <li>
                🔹 <strong>Ex-Officials Advantage</strong> – Former Indian IP
                Office officers on our team
              </li>
              <li>
                🔹 <strong>Tailored Drafting</strong> – Avoid refusals with
                professionally drafted applications
              </li>
              <li>
                🔹 <strong>Hearing-Ready</strong> – Real courtroom and hearing
                experience
              </li>
              <li>
                🔹 <strong>Transparent Pricing</strong> – ₹2500 flat fee. No
                hidden charges.
              </li>
              <li>
                🔹 <strong>Fast & Professional</strong> – Quick filings with the
                right documentation
              </li>
              <li>
                ✔ <strong>1000+ Successful Registrations</strong> – Across all
                business types
              </li>
            </ul>
          </div>
          <div className="mb-[-25]">
            <Image
              src="/why-choose-us.png"
              alt="logo"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Offer Section */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            💼 What We Offer – Flat ₹2500 Professional Fee
          </h3>
          <p className="text-md text-gray-700 mb-4">
            Our all-in-one Trademark Registration Package includes:
          </p>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 text-md mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} /> Trademark
              Filing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} /> Reply to
              Objections
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} /> Show Cause
              Hearing
            </li>
          </ul>
          <p className="text-lg text-gray-600 mb-4">
            Govt. Fee: ₹4500 for individuals/startups, ₹9000 for companies.
            <br />
            <strong>No hidden charges. End-to-end expert handling.</strong>
          </p>
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
            <PhoneCall className="inline-block mr-2" size={16} /> Get a Free
            Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
