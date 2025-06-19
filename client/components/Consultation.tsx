import React from "react";

const Consultation = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center relative overflow-hidden">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-2xl" />

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get a Free Consultation – Trademark Your Brand Today!
        </h2>
        <p className="text-lg text-gray-700 font-medium mb-2">
          Protect Your Business Before It’s Too Late!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Your Brand Is Valuable – Don’t Leave It Unprotected!
        </p>
        <div className="text-blue-900 font-semibold text-xl mb-1">
          📞 Call Us Today: <a href="tel:9873904892">9873904892</a> |{" "}
          <a href="tel:8920590062">8920590062</a>
        </div>
        <div className="text-blue-800 font-medium">
          📍 Offices: Ghaziabad & Delhi
        </div>
      </div>
    </section>
  );
};

export default Consultation;
