"use client";

export default function OneRoofSection() {
  return (
    <section className="relative bg-[#fff6e9] py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute left-0 top-0 h-full w-full opacity-10 pointer-events-none">
        <svg
          className="h-full w-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            fill="#ffedd5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          We’ve Got You Covered —{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Everything Under One Roof
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-700">
          Whether you need to protect your brand with a trademark, your
          invention with a patent, or your creative work with a copyright —
          we’ve got it handled.
        </p>

        <p className="mt-3 text-base text-gray-600">
          Our expert legal team helps you find the right IP protection strategy
          for your business, idea, or product. No confusion. No delay. Just
          expert-driven, seamless protection.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-xl shadow hover:bg-blue-900 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
