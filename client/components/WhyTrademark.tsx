"use client";
import {
  AlertTriangle,
  Gavel,
  RotateCcw,
  Megaphone,
  PhoneCall,
} from "lucide-react";
import { usePopup } from "@/context/PopupContext"; // ✅ import popup hook

export default function WhyTrademarkEnhanced() {
  const { triggerPopup } = usePopup(); // ✅ use trigger from context
  const handleConsultationClick = () => {
    triggerPopup(); // ✅ triggers global popup
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="why" className="bg-[#f9fbff] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Why Trademark Registration in India is Essential for Your Business
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Building a brand takes years of hard work, trust-building, and
          marketing investment. But what if someone else registers your brand
          name or logo before you do? Most businesses realize the importance of
          trademarks only when it&apos;s too late.
        </p>

        {/* Dangers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-red-600 font-semibold">
              <AlertTriangle size={20} />
              Brand Hijacking Risk
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Someone else can legally register your business name, slogan, or
              logo—forcing you to abandon the brand you&apos;ve built. It
              happens more often than you think.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-yellow-700 font-semibold">
              <Gavel size={20} />
              Expensive Legal Battles
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Defending your unregistered brand in court can drain your
              finances. You risk losing not just your name—but customer trust
              and market share.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-orange-600 font-semibold">
              <RotateCcw size={20} />
              Costly Rebranding
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              If your brand is challenged or taken, rebranding requires a total
              overhaul of your website, packaging, social media, marketing, and
              customer communication.
            </p>
          </div>
        </div>

        {/* Solution Highlight */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-8 py-10 md:flex items-center justify-between gap-12 shadow-sm">
          <div className="flex items-start gap-4 mb-8 md:mb-0">
            <Megaphone className="text-blue-700 w-8 h-8 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                Trademark = Protection, Peace & Power
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                A registered trademark gives you full legal control of your
                brand assets across India. It builds trust with your customers,
                protects your business identity, and gives you an edge in market
                positioning.
                <br />
                <br />
                <span className="font-kanit font-bold text-lg">
                  Don&apos;t wait for someone to misuse your brand—trademark it
                  today!
                </span>
                <br />
                Our team of experts will guide you for a hassle-free online TM
                registration service in India! We will help you through the
                entire trademark registration process, ensuring your brand is
                legally secured.
              </p>
            </div>
          </div>
          <a
            href="#form"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleConsultationClick();
            }}
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition whitespace-nowrap"
          >
            <PhoneCall className="w-5 h-5" />
            Secure Your Trademark Now
          </a>
        </div>
      </div>
    </section>
  );
}
