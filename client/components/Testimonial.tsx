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
    name: "Priya S.",
    title: "E-Commerce Business Owner",
    stars: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoTJkAkN_W2Ux2OL3mvM4vaqpBeQEp3a1dA&s", // ✅ Add your image path here
    quote:
      "I was running my online fashion store for two years when I discovered that another company had trademarked a similar name. They sent me a legal notice to stop using the name, and I was at risk of shutting down. I contacted D Taksh IP, and they handled everything—filing objections, negotiating with the other party, and ultimately securing my trademark. Don't wait—get your trademark secured today!",
    highlight: "Trademarking My Brand Saved Me from a Costly Rebranding.",
  },
  {
    name: "Rahul Mehta",
    title: "Startup Founder",
    stars: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSc74iwal7QiOS_hvo6cdhH-5g4AHSqzmTTuBVZfdJ1EHWpx7mArp30GfR5BkGCg_WTkk&usqp=CAU",
    quote:
      "I had been using my brand name for three years when a competitor tried to register it as their trademark. I panicked because I didn't have a trademark yet. D Taksh IP guided me through the entire process, filed my application, and fought for my brand rights. The case was settled in my favor, and now my brand is fully protected. I wish I had trademarked my brand earlier. Their legal team is amazing!",
    highlight:
      "Competitor Tried to Steal My Business Name – But We Won the Case!",
  },
  {
    name: "Manish Verma",
    title: "Tech Entrepreneur",
    stars: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzG3NkOwl16mrfvMqBOaIUdcEoT8vUV7wSQ&s",
    quote:
      "I was hesitant about the trademark registration process because I thought it would be complicated and time-consuming. But D Taksh IP made everything smooth and stress-free. They checked name availability, handled all the paperwork, and kept me updated throughout the process. Within months, I had my official trademark registration. Now, I can confidently expand my business without worrying about copycats. Highly recommended!",
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
    <section className="py-20 px-6 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
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
