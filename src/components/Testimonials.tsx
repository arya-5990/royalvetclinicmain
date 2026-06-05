"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = first 6, 1 = second 6

  const startIndex = currentPage * 6;
  const pageReviews = testimonials.slice(startIndex, startIndex + 6);

  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
            Testimonials
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold">
            Loved by pets and their families.
          </h1>
          <p className="font-sans text-sm sm:text-base text-stone-500 leading-relaxed">
            Read authentic reviews from pet owners who have trusted Dr. Abhay Patel and our dedicated team with their beloved companions in Indore.
          </p>
        </div>

        {/* Paginated Testimonials Grid Container */}
        <div className="space-y-10">
          <div className="relative overflow-hidden min-h-[580px] md:min-h-[460px] lg:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: currentPage === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: currentPage === 0 ? 30 : -30 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {pageReviews.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200/40 p-8 rounded-[32px] shadow-[0_12px_35px_rgba(43,41,39,0.015)] hover:shadow-[0_15px_40px_rgba(43,41,39,0.03)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-6"
                  >
                    {/* Quote Mark & Stars */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-0.5 text-[#FCAF45]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                          ))}
                        </div>
                        <MessageSquare className="w-5 h-5 text-stone-200/60" strokeWidth={1.5} />
                      </div>
                      <p className="font-sans text-stone-600 text-sm leading-relaxed italic">
                        "{t.review}"
                      </p>
                    </div>

                    {/* Author Info */}
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-6 pt-4">
            <button
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
              className={`p-3 rounded-full border border-stone-200 transition-all duration-300 flex items-center justify-center ${
                currentPage === 0
                  ? "opacity-40 cursor-not-allowed text-stone-400"
                  : "text-charcoal hover:border-terracotta hover:text-terracotta cursor-pointer"
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(0)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === 0 ? "bg-terracotta w-6" : "bg-stone-200 hover:bg-stone-300"
                }`}
                aria-label="Go to Page 1"
              />
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === 1 ? "bg-terracotta w-6" : "bg-stone-200 hover:bg-stone-300"
                }`}
                aria-label="Go to Page 2"
              />
            </div>

            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-stone-200 transition-all duration-300 flex items-center justify-center ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed text-stone-400"
                  : "text-charcoal hover:border-terracotta hover:text-terracotta cursor-pointer"
              }`}
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subtle separator */}
        <div className="w-[85%] mx-auto h-[1px] bg-stone-200/40 pt-8" />

        {/* Gallery Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold">
              Life at RoyalVet
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-500 leading-relaxed">
              A glimpse inside our warm facilities and some of the wonderful patients we care for.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/clinic_interior.png", alt: "Warm clinic lobby" },
              { src: "/service_wellness.png", alt: "Patient checkup" },
              { src: "/hero_dog.png", alt: "Healthy happy dog" },
              { src: "/service_surgery.png", alt: "Sterile surgery room" }
            ].map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-[32px] overflow-hidden border border-stone-200/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-stone-50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-sans text-xs font-semibold uppercase tracking-wider">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
