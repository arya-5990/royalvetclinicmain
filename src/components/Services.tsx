"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicesData = [
  {
    title: "Vaccination",
    description: "Preventative care is the foundation of lifelong health. We design custom immunization schedules to protect your dog or cat against critical viral and bacterial diseases.",
    features: [
      "Puppy & Kitten immunization series",
      "Annual core vaccine booster reviews",
      "Lifestyle risk assessments",
      "Immunity checks and health screenings"
    ],
    image: "/realimgs/vaccine.png" // New vaccine image
  },
  {
    title: "Treatment",
    description: "Compassionate, evidence-based therapy plans for both temporary illnesses and long-term chronic conditions. We ensure maximum comfort and gentle handling during healing.",
    features: [
      "Acute illness diagnostic & care",
      "Chronic pain management",
      "Fluid therapy & pharmacy support",
      "Ongoing checkups & monitoring"
    ],
    image: "/service_treatment.png"
  },
  {
    title: "Surgeries (Major & Minor)",
    description: "Advanced soft tissue and emergency operations conducted inside a state-of-the-art sterile operating room. We prioritize patient safety and comprehensive pain management.",
    features: [
      "Sterile operating environment",
      "Dedicated anesthetic nurses",
      "Continuous cardiac & oxygen monitoring",
      "Post-operative care & recovery rooms"
    ],
    image: "/service_surgery.png"
  },
  {
    title: "Sterilisation",
    description: "Routine spaying and neutering procedures designed to be as stress-free as possible. We use modern surgical techniques and deep sedation monitoring for quick, comfortable healing.",
    features: [
      "Spaying (Ovariohysterectomy)",
      "Neutering (Castration)",
      "Safe post-op discharge guidance",
      "Stitch removal & checkups included"
    ],
    image: "/realimgs/sterlisation.png" // New sterilisation image
  },
  {
    title: "Pathology",
    description: "Advanced diagnostic laboratory services including blood analysis, urine analysis, and cell pathology to catch, identify, and address issues early.",
    features: [
      "In-house blood analysis (CBC/Biochemistry)",
      "Urinalysis & organ function testing",
      "Microscopic cell evaluations",
      "Rapid diagnostic turnaround times"
    ],
    image: "/service_pathology.png"
  },
  {
    title: "Dental Scaling",
    description: "Premium dental prophylaxis, including plaque scaling, ultrasonic teeth cleaning, and polishing, to prevent periodontal issues and bad breath.",
    features: [
      "Ultrasonic scaling of plaque & tartar",
      "Teeth polishing and surface smoothing",
      "Gingival health checks",
      "Home oral hygiene plans"
    ],
    image: "/realimgs/dental scaling.png" // New dental scaling image
  }
];

function ServiceItem({
  title,
  description,
  features,
  image,
  index,
  setActiveIndex,
}: {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
  setActiveIndex: (index: number) => void;
}) {
  const ref = useRef(null);
  
  // Triggers active state when item enters viewport midsection
  const isInView = useInView(ref, {
    amount: 0.6,
    margin: "-20% 0px -20% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className="min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center py-10 lg:py-16 first:pt-4 last:pb-4 border-b border-stone-200/30 last:border-b-0"
    >
      <motion.div
        animate={{ 
          opacity: isInView ? 1 : 0.4,
          y: isInView ? 0 : 15 
        }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="space-y-6"
      >
        <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">
          {title}
        </h3>
        
        {/* Inline Mobile Image */}
        <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden block lg:hidden border border-stone-200/10 bg-stone-100 shadow-[0_10px_25px_rgba(43,41,39,0.03)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-md">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-stone-700">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta/80" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
          Our Offerings
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mt-4">
          Tailored medical craftsmanship.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
        {/* Left Column: Services list that scrolls */}
        <div className="lg:col-span-6 space-y-4">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* Right Column: Sticky desktop image container */}
        <div className="hidden lg:block lg:col-span-6 sticky top-32 h-[60vh] w-full max-w-[460px] ml-auto">
          <div className="relative w-full h-full rounded-[48px] overflow-hidden border border-stone-200/20 bg-stone-100 shadow-[0_20px_50px_rgba(43,41,39,0.04)]">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Image element with blur-to-focus on index changes */}
                <motion.img
                  key={index + "-img"}
                  initial={{ scale: 1.03, filter: "blur(6px)" }}
                  animate={{ 
                    scale: activeIndex === index ? 1 : 1.03,
                    filter: activeIndex === index ? "blur(0px)" : "blur(6px)"
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          {/* Subtle background shadow framing element */}
          <div className="absolute inset-0 border border-sage/10 rounded-[48px] translate-x-3 translate-y-3 -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
