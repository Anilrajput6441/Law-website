import Image from "next/image";
import React from "react";

type Testimonial = {
  name: string;
  title: string;
  stars: number;
  image: string;
  quote: string;
  highlight: string;
};

const testimonials = [
  {
    name: "Nilanjana Mukherjee",
    title: "E-Commerce Business Owner",
    stars: 5,
    image: "/testimonial/testimonial1.png", // ✅ Add your image path here
    quote:
      "Dtaksh IP provided excellent service for our trademark registration. They are knowledgeable, efficient, and kept us informed throughout the process. Highly recommended for anyone needing top-notch intellectual property assistance.",
    highlight: "Trademarking My Brand Saved Me from a Costly Rebranding.",
  },
  {
    name: "Shubham Parashar",
    title: "Startup Founder",
    stars: 5,
    image: "/testimonial/testimonial2.png",
    quote:
      "I found very excellent and accurate consultation from Dtaksh IP and team. Everyone is amazing with their work. Highly recommended from my side. For any kind of legal consultation, contact them without a thought.",
    highlight:
      "Competitor Tried to Steal My Business Name – But We Won the Case!",
  },
  {
    name: "Dev Verma",
    title: "Tech Entrepreneur",
    stars: 5,
    image: "/testimonial/testimonial3.png",
    quote:
      "I had a great experience filing my trademark with D Taksh IP. Their team was highly responsive and attentive, guiding me through each step of the process with clear communication and expert advice. Their thoroughness and dedication made the entire registration process smooth and reassuring. I highly recommend their services.",
    highlight:
      "Quick & Hassle-Free Trademark Registration – Highly Recommended!",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex justify-center gap-1 mb-2">
    {Array.from({ length: count }).map((_, idx) => (
      <span key={idx} className="text-yellow-400 text-xl">
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all">
    <div className="flex justify-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={30}
        height={30}
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
    <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>
    <p className="text-gray-600 italic text-sm mb-4">
      &quot;{testimonial.quote}&quot;
    </p>
    <StarRating count={testimonial.stars} />
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl md:font-extrabold text-gray-800">
          Client Success Stories – What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Real Businesses, Real Protection, Real Results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
