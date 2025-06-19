"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Our Services", href: "#services" },
    { label: "Why Trademark?", href: "#why" },
    { label: "About Us", href: "#about" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          <Image src="/lawlogo.png" alt="logo" width={250} height={150} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#form"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
        >
          Get a Free Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
            href="#form"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white text-center bg-blue-600 py-2 rounded-md hover:bg-blue-700 font-semibold"
          >
            Get a Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
