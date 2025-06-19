"use client";

import { FileText } from "lucide-react";

const documents = [
  {
    title: "Proof of Applicant",
    description:
      "PAN card and address proof of applicant. Certificate of registration (for entities other than individuals).",
  },
  {
    title: "Brand Name & Logo",
    description:
      "Logo must contain the brand name you wish to register. Ensure clarity and consistency.",
  },
  {
    title: "User Affidavit",
    description:
      "If you want to claim a specific user date, an affidavit is required to support your claim.",
  },
  {
    title: "Proof of TM Use",
    description:
      "Invoices, registration certificates, or similar documents to prove use of the brand name.",
  },
  {
    title: "MSME / Start-up Recognition",
    description:
      "Provide certificate under MSME or Start-up India to avail 50% govt. fee rebate (non-individuals only).",
  },
  {
    title: "Signed Form TM-48",
    description:
      "A legal document allowing us to file on your behalf. We prepare this for your signature.",
  },
];

export default function DocumentsRequired() {
  return (
    <section className="py-20 bg-[#fff] border-t relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Documents Required for Trademark Registration
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Here’s what you need to keep ready for a smooth and successful
          trademark application.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="bg-[#f9f9ff] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {doc.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {doc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
