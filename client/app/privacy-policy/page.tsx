// app/privacy-policy/page.tsx

import Footer from "@/components/Footer";
import HeaderPolicy from "@/components/Header-policy";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderPolicy />
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">Effective Date: [Insert Date]</p>
        <p className="mb-8">Website: www.dtakship.com</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy outlines how D Taksh IP (&quot;Firm&quot;,
            &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) collects, uses,
            stores, discloses, and protects your personal information when you
            visit our website www.dtakship.com or avail any of our services. By
            using our Website or services, you consent to the practices
            described in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name, contact number, email ID, and postal address</li>
            <li>Identity documents for filing IP applications</li>
            <li>User credentials when registering on our website</li>
            <li>
              Payment details, billing information, and transaction history
            </li>
            <li>
              Communication records including emails, phone calls, and service
              requests
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Providing legal and IP services as requested</li>
            <li>
              Processing and filing applications with regulatory authorities
            </li>
            <li>Communication and updates regarding your case or services</li>
            <li>Internal record-keeping and compliance</li>
            <li>Improving our website and services</li>
            <li>Legal obligations and dispute resolution</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell, rent, or share your personal data with third parties
            except:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>When required by law, regulation, or legal process</li>
            <li>
              With government authorities such as the IP Office, Copyright
              Office, etc.
            </li>
            <li>
              With trusted third-party service providers under confidentiality
              obligations
            </li>
            <li>With your express consent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy unless a longer
            retention period is required or permitted by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Security Measures</h2>
          <p>
            We implement appropriate administrative, technical, and physical
            safeguards to protect your data from loss, misuse, unauthorized
            access, disclosure, or alteration. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Access, correct, or update your personal information</li>
            <li>Withdraw consent at any time (subject to legal obligations)</li>
            <li>Request deletion of your data</li>
            <li>
              Opt out of non-essential communications by emailing us at [Insert
              Email]
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            8. Cookies and Tracking
          </h2>
          <p>
            Our website may use cookies or similar technologies to enhance user
            experience and analyze traffic. You can control the use of cookies
            through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites. This Privacy
            Policy does not apply to those sites. Please review the respective
            privacy policies of those websites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Children’s Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18.
            We do not knowingly collect personal data from children without
            parental consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            11. Changes to this Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The revised
            version will be posted on our website with the updated effective
            date. Continued use of the site or services constitutes acceptance
            of the revised policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p>
            For any queries or concerns regarding this Privacy Policy, please
            contact us at:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>📧 Email: Consult@dtakship.com </li>
            <li>📞 Phone: +91 8920590062</li>
            <li>🌐 Website: www.dtakship.com</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
