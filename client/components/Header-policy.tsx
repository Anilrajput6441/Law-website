"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext"; // ✅ import popup hook

export default function Header() {
  const { isPopupVisible } = usePopup();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { triggerPopup } = usePopup(); // ✅ use trigger from context

  const handleConsultationClick = () => {
    triggerPopup(); // ✅ triggers global popup
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Our Services", href: "/" },
    { label: "Why Trademark?", href: "/" },
    { label: "About Us", href: "/" },
    { label: "Success Stories", href: "/" },
    { label: "FAQs", href: "/" },
    { label: "Contact", href: "#/" },
  ];

  return (
    <header className="w-full bg-white py-2 shadow-md z-50">
      {isPopupVisible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded shadow-md z-50">
          📩 Please fill out the form to get your free consultation.
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-blue-700">
          <Image src="/lawlogo.png" alt="logo" width={150} height={50} />
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-[#F2B41A] p-2 rounded-full  duration-300 transition-colors scroll-smooth"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          onClick={handleConsultationClick}
          className="hidden md:inline-block bg-[#F3B419]  px-4 py-2 rounded-md text-sm hover:scale-102 transition-colors cursor-pointer"
        >
          Get a Free Consultation
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
          <a
            onClick={() => {
              handleConsultationClick();
              setMobileMenuOpen(false);
            }}
            className="block text-white text-center bg-blue-600 py-2 rounded-md hover:bg-blue-700 font-semibold"
          >
            Get a Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
