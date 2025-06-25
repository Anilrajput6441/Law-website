// components/MarqueeLogos.tsx
"use client";

import Image from "next/image";

const logos = [
  "/logos/1ca7c14d-507d-471d-8e7d-80f37553c6f5.png",
  "/logos/04b65ae2-467c-439e-a19c-a0cd706c3570.png",
  "/logos/40da8cf2-f844-43f0-ba37-a484eaf18e93.png",
  "/logos/435b55d6-6083-4789-abaf-bb3e7d0278e3.png",
  "/logos/edc2da4b-be1e-423d-9189-4c1733199383.png",
  "/logos/f321e5f7-c98d-4e46-ace5-7a1831cb221c.png",
];

export default function MarqueeLogos() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 ">
      <h1 className="text-center font-kanit text-3xl">
        Join 100+ Brands Who’ve Secured Their Trademark with Us
      </h1>
      <div className="animate-marquee flex justify-between py-10 items-center space-x-20">
        {logos.concat(logos).map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            width={100}
            height={40}
            className="object-contain hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
