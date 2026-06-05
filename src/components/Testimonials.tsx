"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Bind the new testimonial images to the first three reviews
const featuredStories = [
  {
    ...testimonials[0],
    image: "/realimgs/testimonial1.jpeg",
    tag: "General Checkup & Wellness",
    highlight: "Expert Examination & Caring Staff"
  },
  {
    ...testimonials[1],
    image: "/realimgs/testimonial2.jpeg",
    tag: "Critical Parvo Recovery",
    highlight: "Life-Saving Treatment"
  },
  {
    ...testimonials[2],
    image: "/realimgs/testimonial3.jpeg",
    tag: "Second Opinion & Diagnosis",
    highlight: "Accurate & Knowledgeable Care"
  }
];

// The remaining testimonials (from index 3 onwards)
const remainingTestimonials = testimonials.slice(3);

export default function Testimonials() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [currentPage, setCurrentPage] = useState(0); // Grid pagination

  // Automatic slide transitions every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextFeatured();
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredIndex]);

  const handlePrevFeatured = () => {
    setDirection(-1);
    setFeaturedIndex((prev) => (prev === 0 ? featuredStories.length - 1 : prev - 1));
  };

  const handleNextFeatured = () => {
    setDirection(1);
    setFeaturedIndex((prev) => (prev === featuredStories.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > featuredIndex ? 1 : -1);
    setFeaturedIndex(index);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNextFeatured();
    } else if (info.offset.x > swipeThreshold) {
      handlePrevFeatured();
    }
  };

  // Grid pagination logic (6 items per page)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(remainingTestimonials.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const pageReviews = remainingTestimonials.slice(startIndex, startIndex + itemsPerPage);

  const activeStory = featuredStories[featuredIndex];

  return (
    <div className="w-full relative overflow-hidden bg-[#FAF8F5]">
      {/* Decorative top background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#7C8D80]/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="pt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/10 text-sage text-xs uppercase tracking-widest font-semibold"
          >
            <Sparkles className="w-3 h-3 text-terracotta" />
            Client Stories
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-semibold tracking-tight"
          >
            Loved by families in Indore.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-stone-500 leading-relaxed"
          >
            Read authentic reviews from pet parents who have trusted Dr. Abhay Patel and our expert surgical team with their beloved companions.
          </motion.p>
        </div>

        {/* PREMIUM SLIDER SECTION: Featured Stories */}
        <div className="space-y-6">
          <div className="flex justify-between items-center px-2">
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold">
              Featured Recoveries
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevFeatured}
                className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-charcoal shadow-sm transition-all duration-300 cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextFeatured}
                className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-charcoal shadow-sm transition-all duration-300 cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Slider Showcase */}
          <div className="relative bg-white border border-stone-200/50 rounded-[40px] shadow-[0_24px_60px_rgba(43,41,39,0.03)] overflow-hidden min-h-[500px] md:min-h-[420px] lg:min-h-[460px]">
            
            {/* Animated slide content */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={featuredIndex}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? 160 : -160,
                    scale: 0.98
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 }
                    }
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? -160 : 160,
                    scale: 0.98,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 }
                    }
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 cursor-grab active:cursor-grabbing p-6 sm:p-8 lg:p-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left side: Premium Image Display */}
                <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[300px] lg:h-full min-h-[240px] rounded-[32px] overflow-hidden bg-stone-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-stone-200/20 group">
                  <img
                    src={activeStory.image}
                    alt={activeStory.name}
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right side: Story & Quote Details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
                  <div className="space-y-6">
                    {/* Header tags */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-terracotta/10 text-terracotta tracking-wider uppercase">
                        {activeStory.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold bg-sage/10 text-sage tracking-wider">
                        {activeStory.highlight}
                      </span>
                    </div>

                    {/* Star ratings */}
                    <div className="flex gap-0.5 text-[#FCAF45]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current stroke-current" />
                      ))}
                    </div>

                    {/* The Quote */}
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-6 w-12 h-12 text-[#7C8D80]/8 opacity-30 rotate-180 pointer-events-none" />
                      <p className="font-sans text-[#2B2927]/90 text-base sm:text-lg lg:text-xl leading-relaxed italic relative z-10 pl-2">
                        "{activeStory.review}"
                      </p>
                    </div>
                  </div>

                  {/* Client Info at bottom */}
                  <div className="border-t border-stone-100 pt-6 flex justify-between items-center">
                    <div>
                      <p className="font-serif font-bold text-charcoal text-base sm:text-lg">
                        {activeStory.name}
                      </p>
                      <p className="font-sans text-xs text-stone-400 mt-0.5">
                        Verified Pet Parent • Indore
                      </p>
                    </div>
                    <span className="font-sans text-xs text-stone-400 font-medium">
                      {activeStory.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-6 right-6 lg:right-12 z-20 flex gap-2">
              {featuredStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    featuredIndex === index ? "bg-terracotta w-6" : "bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Regular Testimonials Grid */}
        <div className="space-y-10 pt-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold">
              More Patient Experiences
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-500 leading-relaxed">
              Read additional feedback from local families regarding our medicine, service, and gentle approach.
            </p>
          </div>

          {/* Paginated Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageReviews.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white border border-stone-200/40 p-8 rounded-[32px] shadow-[0_12px_35px_rgba(43,41,39,0.015)] hover:shadow-[0_15px_40px_rgba(43,41,39,0.03)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                {/* Quote Mark & Stars */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-0.5 text-[#FCAF45]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                      ))}
                    </div>
                    <MessageSquare className="w-4 h-4 text-stone-200/60" strokeWidth={1.5} />
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
              </motion.div>
            ))}
          </div>

          {/* Grid Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 pt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className={`p-3 rounded-full border border-stone-200 bg-white transition-all duration-300 flex items-center justify-center ${
                  currentPage === 0
                    ? "opacity-40 cursor-not-allowed text-stone-400"
                    : "text-charcoal hover:border-terracotta hover:text-terracotta cursor-pointer"
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, pageIdx) => (
                  <button
                    key={pageIdx}
                    onClick={() => setCurrentPage(pageIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPage === pageIdx ? "bg-terracotta w-6" : "bg-stone-200 hover:bg-stone-300"
                    }`}
                    aria-label={`Go to Page ${pageIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className={`p-3 rounded-full border border-stone-200 bg-white transition-all duration-300 flex items-center justify-center ${
                  currentPage === totalPages - 1
                    ? "opacity-40 cursor-not-allowed text-stone-400"
                    : "text-charcoal hover:border-terracotta hover:text-terracotta cursor-pointer"
                }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Subtle separator */}
        <div className="w-[85%] mx-auto h-[1px] bg-stone-200/40 pt-4" />

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: "/realimgs/lifeatroyal/WhatsApp Image 2026-06-05 at 11.42.34 AM.jpeg", alt: "Caring for our patients" },
              { src: "/realimgs/lifeatroyal/WhatsApp Image 2026-06-05 at 11.42.35 AM.jpeg", alt: "Our medical facility" },
              { src: "/realimgs/lifeatroyal/WhatsApp Image 2026-06-05 at 11.42.40 AM.jpeg", alt: "Happy healthy companion" }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
