// app/terms-and-conditions/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header-policy";

export default function page() {
  return (
    <>
      <Header />
      <section className="bg-white py-16 border-t border-gray-200 px-4 md:px-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Effective Date: [Insert Date]
        </p>

        <div className="space-y-8 max-w-4xl mx-auto text-sm leading-6">
          <div>
            <h2 className="font-semibold mb-1">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of D Taksh IP through our
              website www.dtakship.com (“Website”) or via any communication
              channel, you agree to be bound by these Terms & Conditions, our
              Privacy Policy, and any applicable service-specific terms. If you
              do not agree, please discontinue use immediately.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">2. About the Firm</h2>
            <p>
              D Taksh IP is a law firm focused on the legal services relating to
              trademarks, copyrights, designs, IP litigation, contracts, and
              related consultancy. Our services may be rendered online or
              offline, depending on the nature of the engagement.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">3. Scope of Services</h2>
            <ul className="list-disc ml-5">
              <li>
                Trademark search, filing, prosecution, objection/reply,
                hearings, and renewals
              </li>
              <li>Copyright registration and advisory</li>
              <li>Design registration</li>
              <li>Assignment, licensing, and recordal of IPRs</li>
              <li>
                Legal notices, litigation assistance, and contract drafting
              </li>
              <li>Consultations and RFP handling</li>
            </ul>
            <p className="mt-2">
              Any new or additional services shall also be subject to these
              terms unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">4. User Responsibilities</h2>
            <ul className="list-disc ml-5">
              <li>Provide accurate, complete, and current information</li>
              <li>
                Not misuse or exploit the platform for unlawful or unauthorized
                activities
              </li>
              <li>
                Cooperate with D Taksh IP staff and promptly provide documents
                as requested
              </li>
              <li>
                Use services strictly for lawful purposes and in accordance with
                Indian law
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-1">5. Registration & Access</h2>
            <p>
              You may be required to register with valid personal and contact
              details to use certain features. You are solely responsible for
              maintaining the confidentiality of your account credentials and
              shall notify us immediately in case of any unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">6. Payment Terms</h2>
            <ul className="list-disc ml-5">
              <li>All professional fees must be paid as agreed in writing.</li>
              <li>Government and official fees are non-refundable.</li>
              <li>
                Invoices must be paid within 7 days from the date of issue
              </li>
              <li>
                Late payment may result in suspension or termination of service
              </li>
              <li>All payments are subject to applicable taxes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-1">
              7. Termination and Suspension
            </h2>
            <ul className="list-disc ml-5">
              <li>Breach of any terms</li>
              <li>Providing false information</li>
              <li>Misuse of services</li>
              <li>Non-payment of dues</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-1">8. Confidentiality</h2>
            <p>
              D Taksh IP maintains strict confidentiality of all client data and
              communications, except as required by law or court order, or with
              the client’s express written consent.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">
              9. Intellectual Property Rights
            </h2>
            <p>
              All content, trademarks, logos, text, designs, and other materials
              on www.dtakship.com are the intellectual property of D Taksh IP.
              You may not copy, reproduce, or distribute any material without
              express written consent. Unauthorized use may invite legal action.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">10. Disclaimer of Warranties</h2>
            <p>
              All services are provided on an “as-is” and “as-available” basis.
              D Taksh IP does not guarantee a particular outcome in any legal or
              statutory proceeding, which is subject to the discretion of
              government authorities and courts.
            </p>
            <p className="mt-1">
              We disclaim all warranties, express or implied, including fitness
              for a particular purpose or merchantability.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">11. Limitation of Liability</h2>
            <p>
              In no event shall D Taksh IP or its affiliates be liable for
              indirect, incidental, special, or consequential damages arising
              out of or relating to the use of our services or website.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">12. Third Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. D Taksh IP
              is not responsible for the accuracy, content, or services provided
              on those websites. Use of third-party platforms is at your own
              risk.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">13. Compliance & Legal Use</h2>
            <ul className="list-disc ml-5">
              <li>
                Use the Website or Services for unlawful, fraudulent, or harmful
                purposes
              </li>
              <li>
                Upload or transmit malicious code, viruses, or disruptive
                content
              </li>
              <li>Violate any applicable IP, privacy, or contract laws</li>
              <li>Misrepresent your identity or impersonate others</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-1">14. Data Collection and Use</h2>
            <p>
              We collect and store user data solely for communication and
              delivery of services. We reserve the right to suspend accounts
              with unverifiable identities or misuse of platform privileges.
              Please refer to our Privacy Policy for details.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">15. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless D Taksh IP, its partners,
              employees, and affiliates from any claims, liabilities, damages,
              or losses arising from:
            </p>
            <ul className="list-disc ml-5 mt-1">
              <li>Your breach of these Terms</li>
              <li>Your misuse of services</li>
              <li>Violation of third-party rights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-1">
              16. Dispute Resolution & Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of India. Any dispute
              arising from the use of our services or Website shall be subject
              to the exclusive jurisdiction of the courts at Ghaziabad, Uttar
              Pradesh.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">17. Modifications</h2>
            <p>
              D Taksh IP reserves the right to modify these Terms at any time
              without notice. It is your responsibility to review them
              periodically. Continued use after updates shall constitute your
              acceptance.
            </p>
          </div>

          <div className="pt-8 border-t mt-8">
            <h2 className="font-semibold mb-1">Contact Us</h2>
            <p>
              📧 Email:{" "}
              <a href="mailto:consult@dtakship.com" className="underline">
                consult@dtakship.com
              </a>
            </p>
            <p>📞 Phone: 9873904892</p>
            <p>
              🌐 Website:{" "}
              <a href="https://www.dtakship.com" className="underline">
                www.dtakship.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
