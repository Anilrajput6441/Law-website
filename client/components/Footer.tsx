"use client";

import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-100 via-blue-50 to-pink-100  py-12 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            <span>⚖️</span> DTaksh
          </h2>
          <p className="text-sm leading-relaxed">
            Providing expert legal counsel for businesses, contracts, and
            compliance. Protecting your interests with professionalism and
            precision.
          </p>
          <div className="flex gap-3 mt-5">
            <div className="bg-gray-100 p-2 rounded-md hover:text-blue-600">
              <Facebook size={18} />
            </div>
            <div className="bg-gray-100 p-2 rounded-md hover:text-blue-600">
              <Twitter size={18} />
            </div>
            <div className="bg-gray-100 p-2 rounded-md hover:text-blue-600">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Intellectual Property</li>
            <li>Trademark</li>
            <li>Copyright</li>
            <li>Design</li>
            <li>Patent</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2 items-start">
              <MapPin className="text-blue-500 mt-1" size={16} />
              <span>
                Ghaziabad: L 1004 Ajnara Integrity Raj Nagar Extension
                <br /> Ghaziabad, U.P.
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="text-blue-500" size={16} />
              Consult@dtakship.com
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="text-blue-500" size={16} />
              +91 8920590062
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© LYFsmile 2024 | All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-600">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
