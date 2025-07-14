"use client";

import { CheckCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext"; // ✅ import popup hook

export default function WhoWeAre() {
  const { triggerPopup } = usePopup(); // ✅ use trigger from context
  const handleConsultationClick = () => {
    triggerPopup(); // ✅ triggers global popup
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="services" className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          👩‍⚖️ Who We Are
        </h2>
        <p
          id="about"
          className="text-center text-gray-700 max-w-3xl mx-auto mb-10"
        >
          At <strong>D Taksh IP</strong>, we&apos;re not just consultants – we
          are former insiders of the Indian IP system. Our team comprises
          ex-Trademark Hearing Officers and ex-Copyright Examiners who have
          processed, examined, and decided on thousands of IP matters.
          <br />
          Now, we use that expertise to help startups, businesses, and creators
          protect what’s rightfully theirs.
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

        <div className="bg-[#0E265E] flex flex-col md:flex-row p-3 md:p-6  rounded-xl shadow-sm mb-10">
          <div className=" md:w-[75%] mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Why Choose Us? (Trust Factor & Credibility)
            </h3>
            <ul className="space-y-4  md:w-[90%] text-white text-md">
              <li>
                🔹 <strong>Ex-Officials Advantage</strong> – Our team includes
                former officials from the Indian IP Office – we know what works
                and what gets rejected.
              </li>
              <li>
                🔹 <strong>Tailored Drafting</strong> – Avoid refusals with
                professionally drafted applications and replies.
              </li>
              <li>
                🔹 <strong>Hearing-Ready</strong> – Real experience presenting
                and deciding hearings.
              </li>
              <li>
                🔹 <strong> Cost-Effective and Transparency</strong> –
                Comprehensive service at just ₹2500, No hidden costs. Flat-fee
                structure. Free consultations.
              </li>
              <li>
                🔹 <strong>Speedy & Professional </strong> – Quick turnaround
                with proper documentation.
              </li>
              <li>
                🔹 <strong>1000+ Successful Trademark Registrations</strong> –
                Helping Startups, Small Businesses, and Corporates.
              </li>
            </ul>
          </div>
          <div className="flex border justify-center  bg-white ">
            <a
              href="/D-takship.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700  font-semibold hover:underline flex flex-col items-center"
            >
              <Image
                src="/udyamimg.png"
                alt="udyamimg"
                width={200}
                height={200}
              />
              Verified MSME Certificate
            </a>
          </div>
        </div>

        {/* Offer Section */}
        <div className="bg-white p-6  rounded-xl shadow-md  flex flex-col items-center justify-center ">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            💼 What We Offer 
          </h3>
          <p className="text-md text-center text-gray-700 mb-4">
            Our all-in-one Trademark Registration Package includes:
          </p>
          <ul className="flex flex-col md:flex-row justify-center items-center md:items-center gap-6 text-gray-700 text-md mb-4">
            <li className="flex gap-2">
              <div className="mt-1">
                <CheckCircle className="text-green-500" size={16} />
              </div>
              <div>Trademark Filing</div>
            </li>

            <li className="flex gap-2">
              <div className="mt-1">
                <CheckCircle className="text-green-500" size={16} />
              </div>
              <div>Reply to Examination Report (Objection)</div>
            </li>

            <li className="flex gap-2">
              <div className="mt-1">
                <CheckCircle className="text-green-500" size={16} />
              </div>
              <div>Appearance in Show Cause Hearing</div>
            </li>
          </ul>

          <p className="text-lg  text-center text-gray-600 mb-4">
            Flat Fee: ₹2500 (Professional Fees Only)
            <br />
            Govt. fees as applicable (₹4500 for individuals/startups; ₹9000 for
            companies)
            <br />
            <strong>
              No hidden charges. No confusion. Just expert handling, end-to-end.
            </strong>
          </p>
          <button
            className="mt-2 bg-[#F2B41A] hover:bg-yellow-400  font-medium px-6 py-2  rounded-lg cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleConsultationClick();
            }}
          >
            <PhoneCall className="inline-block mr-2" size={16} /> Get a Free
            Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
