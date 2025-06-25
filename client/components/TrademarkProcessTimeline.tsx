import {
  Search,
  FilePlus2,
  FileWarning,
  BookOpenCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "1 ) Trademark Search & Name Check",
    icon: Search,
    description:
      "We check your brand name availability to avoid conflicts and ensure uniqueness.",
  },
  {
    title: "2 ) Filing the Application",
    icon: FilePlus2,
    description:
      "We prepare and file your trademark application with complete legal accuracy.",
  },
  {
    title: "3 ) Handling Examination & Objections",
    icon: FileWarning,
    description:
      "Our legal experts draft replies to objections and ensure smooth progress.",
  },
  {
    title: "4 ) Journal Publication & Opposition",
    icon: BookOpenCheck,
    description:
      "We monitor journal publication and defend your brand in case of oppositions.",
  },
  {
    title: "5 ) Registration Certificate Issued",
    icon: BadgeCheck,
    description:
      "You receive your official Trademark Certificate — your brand is legally yours.",
  },
];

export default function TrademarkProcessZigZag() {
  return (
    <section className="bg-[#f9fbff] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Trademark Registration Process
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Your journey to trademarking your brand — simplified in 5 expert
            steps.
          </p>
        </div>

        <div className="relative space-y-16">
          {steps.map(({ title, description, icon: Icon }, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="bg-yellow-400  w-12 h-12 rounded-full flex items-center justify-center shadow-md shrink-0">
                  <Icon size={22} />
                </div>

                {/* Line connector */}
                <div className="hidden md:block w-10 h-1 bg-gray-300" />

                {/* Text Block */}
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
