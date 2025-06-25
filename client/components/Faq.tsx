"use client";
import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question:
      "What is the difference between ™ (Trademark) and ® (Registered Trademark)?",
    answer: (
      <div>
        <p>
          <strong>™ (Trademark Symbol):</strong> This symbol can be used as soon
          as you apply for a trademark. It shows that you are claiming ownership
          of the brand name, even if it&apos;s not officially registered yet.
        </p>
        <p>
          <strong>® (Registered Trademark Symbol):</strong> You can use this
          symbol only after your trademark is officially registered. It provides
          full legal protection, preventing others from using your brand name,
          logo, or slogan.
        </p>
        <p className="text-green-600 font-medium">
          ✅ If you want full legal protection, getting a registered trademark
          (®) is crucial.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I register a trademark if my business is not legally registered yet?",
    answer: (
      <div>
        <p>
          Yes! You don&apos;t need a registered company to file a trademark.
        </p>
        <p className="text-green-600 font-medium">
          ✅ You can register a trademark as:
        </p>
        <ul className="list-disc list-inside">
          <li>A sole proprietor</li>
          <li>A partnership firm</li>
          <li>A private limited company</li>
          <li>An LLP (Limited Liability Partnership)</li>
          <li>An individual with a unique brand or product</li>
        </ul>
        <p>
          Even if you haven&apos;t formally registered your business yet,
          securing a trademark early can prevent others from claiming your brand
          name.
        </p>
      </div>
    ),
  },
  {
    question: "Can two businesses have the same trademark name?",
    answer: (
      <div>
        <p>It depends on the industry and location.</p>
        <ul className="list-disc list-inside">
          <li>
            If two businesses operate in completely different industries, they
            may be allowed to use the same name. For example, &quot;Lotus&quot;
            can be both a car brand and a software company.
          </li>
          <li>
            If a name is too similar to an existing trademark in the same
            industry, it will be rejected.
          </li>
          <li>
            If someone else has already registered the name legally, they have
            the right to prevent you from using it.
          </li>
        </ul>
        <p>
          Before investing in branding, logos, and marketing, it&apos;s best to
          check trademark availability.
        </p>
      </div>
    ),
  },
  {
    question: "What should I do if my trademark application is rejected?",
    answer: (
      <div>
        <p className="text-red-600">
          A trademark can be rejected for multiple reasons, such as:
        </p>
        <ul className="list-disc list-inside ">
          <li> The name is too generic or descriptive.</li>
          <li> It is similar to an already registered trademark.</li>
          <li> It is misleading or offensive.</li>
          <li> There are errors in the application.</li>
        </ul>
        <p className="text-green-600">
          If your trademark application is rejected, don&apos;t panic! Our legal
          team will:
        </p>
        <ul className="list-disc list-inside ">
          <li> Analyze the reason for rejection.</li>
          <li> File a response to objections.</li>
          <li> Make necessary changes to improve approval chances.</li>
        </ul>
        <p>
          ✅ We have successfully defended and registered hundreds of trademarks
          even after objections!
        </p>
      </div>
    ),
  },
  {
    question: "What Can Be Trademarked?",
    answer:
      "A trademark can protect your brand name, logo, slogan, product name, business identity, and even sound or color combinations associated with your brand.",
  },
  {
    question: "How Long Does It Take to Register a Trademark?",
    answer:
      "The initial application takes 1-2 days, but the entire process can take 6-12 months, depending on objections. However, you can start using ™ immediately after filing.",
  },
  {
    question: "What If Someone Else Is Using My Business Name?",
    answer:
      "If your brand name is being used but not registered as a trademark, you may still be able to claim it legally. Our experts can help.",
  },
  {
    question: "How Long Does a Trademark Last?",
    answer:
      "A trademark is valid for 10 years and can be renewed indefinitely, ensuring lifelong brand protection.",
  },
  {
    question: "What If Someone Copies My Brand After I Register My Trademark?",
    answer:
      "If someone uses your trademark without permission, you can take legal action to stop them and even claim damages.",
  },

  {
    question: "Can I sell or transfer my trademark to someone else?",
    answer:
      "Yes! A registered trademark is intellectual property, just like real estate or stock shares. You can sell, license, or transfer your trademark to another business or individual. Many businesses buy and sell trademarks as part of mergers, acquisitions, or rebranding strategies.",
  },
];

const FAQItem = ({
  faq,
  open,
  onClick,
}: {
  faq: FAQ;
  open: boolean;
  onClick: () => void;
}) => (
  <div className="mb-3 border-b border-gray-200">
    <button
      className={`w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center transition-colors ${
        open ? "text-[#0E265E] font-semibold" : "text-gray-800"
      }`}
      onClick={onClick}
      aria-expanded={open}
    >
      <span>{faq.question}</span>
      <span
        className={`ml-2 transition-transform text-3xl ${
          open ? "rotate-180" : "rotate-0"
        }`}
      >
        +
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
      }`}
      aria-hidden={!open}
    >
      <div className="text-gray-600 text-md leading-relaxed px-2">
        {faq.answer}
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions (
          <span className="text-[#0E265E]">FAQs</span>)
        </h2>
        <div className="mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              open={openIdx === index}
              onClick={() => setOpenIdx(openIdx === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
