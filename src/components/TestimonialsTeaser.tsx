"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

export default function TestimonialsTeaser() {
  const [randomTestimonials, setRandomTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Shuffle and pick 3 reviews client-side to prevent hydration mismatch
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    setRandomTestimonials(shuffled.slice(0, 3));
  }, []);

  // Safe fallback to prevent layout shifts during SSR / initial load
  const displayList = randomTestimonials.length > 0 ? randomTestimonials : testimonials.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold animate-pulse">
          Testimonials
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">
          What pet parents say.
        </h2>
        <p className="font-sans text-stone-500 text-sm sm:text-base leading-relaxed">
          Read stories of recovery, academic precision, and gentle care from families in Indore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayList.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border border-stone-200/40 p-8 rounded-[32px] shadow-[0_10px_25px_rgba(43,41,39,0.012)] hover:shadow-[0_15px_30px_rgba(43,41,39,0.03)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex gap-0.5 text-[#FCAF45]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                ))}
              </div>
              <p className="font-sans text-stone-600 text-sm leading-relaxed italic">
                "{t.review}"
              </p>
            </div>
            <div className="border-t border-stone-100 pt-4 flex justify-between items-center text-xs">
              <span className="font-serif font-bold text-charcoal text-sm">
                {t.name}
              </span>
              <span className="font-sans text-stone-400">
                {t.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone-300 hover:border-charcoal text-charcoal rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300"
        >
          Read All Testimonials
        </Link>
      </div>
    </section>
  );
}
