"use client";

import { useState, useEffect } from "react";

interface PatientCardProps {
  tag: string;
  name: string;
  desc: string;
  images: string[];
}

function PatientCard({ tag, name, desc, images }: PatientCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group relative overflow-hidden rounded-[36px] bg-white border border-stone-200/40 shadow-[0_15px_40px_rgba(43,41,39,0.02)] hover:shadow-[0_25px_50px_rgba(43,41,39,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 border-b border-stone-100">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${name} patient ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              currentIndex === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          />
        ))}
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Navigation Dot Indicators on the image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-charcoal/30 backdrop-blur-[2px] px-3.5 py-1.5 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-grow flex flex-col space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[10px] uppercase tracking-wider text-sage font-bold">
            {tag}
          </span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold group-hover:text-terracotta transition-colors duration-300">
          {name}
        </h3>
        <p className="font-sans text-stone-500 text-sm leading-relaxed flex-grow">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function PatientCategories() {
  const patientCategories = [
    {
      name: "Dogs",
      tag: "Canine Care",
      desc: "From playful puppies to wise seniors, we offer tailored vaccinations, diagnostics, and precise surgical care designed for dogs of all sizes.",
      images: [
        "/realimgs/dogs/kutta1.jpeg",
        "/realimgs/dogs/testimonial1.jpeg",
        "/realimgs/dogs/testimonial3.jpeg",
      ],
    },
    {
      name: "Cats",
      tag: "Feline Care",
      desc: "We understand that cats require a gentle touch. Our clinic offers a calm, low-stress environment with feline-specific treatments.",
      images: [
        "/realimgs/cats/dental scaling.png",
        "/realimgs/cats/sterlisation.png",
        "/realimgs/cats/testimonial2.jpeg",
      ],
    },
    {
      name: "Birds & Exotic",
      tag: "Avian & Exotic",
      desc: "Specialized diagnostics, medicine, and wellness services for birds, reptiles, rabbits, and other unique companion animals.",
      images: [
        "/realimgs/bird&Exotic/bird&E1.jpeg",
        "/realimgs/bird&Exotic/bird&E2.jpeg",
        "/realimgs/bird&Exotic/bird&E3.jpeg",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
          Our Patients
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">
          Compassionate care for every companion.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {patientCategories.map((pet, idx) => (
          <PatientCard
            key={idx}
            tag={pet.tag}
            name={pet.name}
            desc={pet.desc}
            images={pet.images}
          />
        ))}
      </div>
    </section>
  );
}
