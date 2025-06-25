import { Briefcase, Smile, Scale, Star } from "lucide-react";

const badges = [
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "1000+ Startups & MSMEs",
    subtitle: "Trusted By Growing Businesses",
  },
  {
    icon: <Smile className="w-6 h-6 text-white" />,
    title: "10+ Years Expertise",
    subtitle: "Ex officials of CGPDTM",
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: "100% Online Filing",
    subtitle: "Hassle-Free, End-to-End Support",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "4.8/5 Google Rating",
    subtitle: "Rated By Verified Clients",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#f3f8ff] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="bg-blue-900 p-3 rounded-lg">{badge.icon}</div>
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                {badge.title}
              </h4>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
