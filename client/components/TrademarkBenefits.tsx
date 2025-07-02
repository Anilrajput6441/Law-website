import { ShieldCheck, Gavel, ThumbsUp, TrendingUp, Globe2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Exclusive Rights Over Your Brand",
    icon: ShieldCheck,
    description:
      "Own your business name, logo, and slogan legally — no one else can claim or misuse them.",
  },
  {
    title: "Legal Protection Against Infringement",
    icon: Gavel,
    description:
      "Registered trademarks empower you to take action if others copy or misuse your brand.",
  },
  {
    title: "Builds Brand Trust & Recognition",
    icon: ThumbsUp,
    description:
      "A trademark adds authority and builds customer confidence in your brand.",
  },
  {
    title: "Boosts Business Value",
    icon: TrendingUp,
    description:
      "Trademarks are business assets. You can license, sell, or use them to raise investment.",
  },
  {
    title: "Protection Across India & Globally",
    icon: Globe2,
    description:
      "Start with Indian rights and expand your trademark protection internationally as you grow.",
  },
];

export default function TrademarkBenefitsFluid() {
  return (
    <section className="bg-[#f9fbff] pt-10 px-4" id="benefits">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Heading */}
        <div className="h-full">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Benefits of Trademark Filing in India
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-md leading-relaxed">
            A trademark isn’t just a legal formality. It’s your shield, your
            advantage, and your growth asset. Here’s how it helps your business
            thrive in the long run.
          </p>
          <Image
            src="/trademark-benifit-new.png"
            alt="trademarkbenifit"
            width={600}
            height={600}
            className=" border-b-2 drop-shadow-xl"
          />
        </div>

        {/* Right Column - Benefits List */}
        <div className="space-y-8">
          {benefits.map(({ title, icon: Icon, description }, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-200 to-yellow-400  w-12 h-12 rounded-full flex items-center justify-center shadow-md transition group-hover:scale-105">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-500">
                  {title}
                </h3>
                <p className="text-gray-600 text-base mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bar */}
      <div className="mt-20 max-w-3xl mx-auto bg-[#007AAE] border  text-white text-center py-6 px-6 rounded-xl shadow-inner">
        ⚠️{" "}
        <strong>
          If your brand isn’t trademarked, someone else can register it first.
        </strong>
        <br />
        Don’t risk losing your name — protect it before it&apos;s too late.
      </div>
    </section>
  );
}
