"use client";

import { motion } from "framer-motion";
import { Award, Heart, Shield, Stethoscope } from "lucide-react";

export default function DoctorAbhay() {
  const highlights = [
    {
      icon: Stethoscope,
      title: "Advanced Surgery",
      description: "Expertise in soft-tissue surgeries, routine sterilisation, and precise surgical care in state-of-the-art operating suites.",
    },
    {
      icon: Award,
      title: "Expert Diagnostics",
      description: "Advanced BVSc & MVSc credentials with a focus on solving complex diagnostic, pathology, and internal medicine cases.",
    },
    {
      icon: Heart,
      title: "Compassionate Philosophy",
      description: "Pioneered the clinic's signature gentle, slow-paced care model that prioritizes a pet's emotional safety and peace of mind.",
    },
    {
      icon: Shield,
      title: "Indore Community Trust",
      description: "Revered by thousands of pet families in Indore for his calm demeanor, patient explanations, and genuine love for animals.",
    },
  ];

  return (
    <section id="doctor" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-t border-stone-200/40">
      {/* Decorative Organic Blur Accents */}
      <div className="absolute top-[20%] -right-[5%] w-32 h-32 rounded-full bg-sage/10 -z-10 blur-2xl" />
      <div className="absolute bottom-[10%] -left-[5%] w-24 h-24 rounded-full bg-terracotta/5 -z-10 blur-xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column: Portrait & Badge */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-4">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[40px] overflow-hidden border border-stone-200/30 bg-stone-100 shadow-[0_20px_50px_rgba(43,41,39,0.06)]">
            {/* Image container with blur-to-focus animation */}
            <motion.div
              initial={{ filter: "blur(8px)", scale: 1.05 }}
              whileInView={{ filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="/dr Abhay.jpeg"
                alt="Dr. Abhay Patel - Chief Veterinary Surgeon"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Overlapping Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md py-3.5 px-5 rounded-[20px] border border-stone-100 shadow-md flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                <Award className="w-5.5 h-5.5" />
              </div>
              <div>
                <p className="font-serif text-charcoal font-semibold text-sm">Dr. Abhay Patel</p>
                <p className="font-sans text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Founder & Chief Vet</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Narrative & Highlights */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="space-y-4"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold block">
              Meet Our Founder
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold leading-[1.12]">
              The vision behind our compassionate care.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.15 }}
            className="space-y-6 text-stone-600 font-sans text-sm sm:text-base leading-relaxed"
          >
            <p>
              As the founder and chief veterinarian of Royal Veterinary Clinic, <strong>Dr. Abhay Patel</strong> brings advanced clinical mastery and a deeply warm, patient-first perspective to Indore's pet parents. Holding prestigious <strong>BVSc & MVSc</strong> (Bachelor of Veterinary Science & Master of Veterinary Science) credentials, he has dedicated over a decade to elevating veterinary care standards.
            </p>
            <p>
              Dr. Abhay believes that healing begins with trust. He pioneered our signature slow-paced treatment model, dedicating twice as much time to appointments so that dogs, cats, and their families feel heard, respected, and completely safe. His calm bedside manner and ability to put even the most anxious animals at ease have made him Indore’s most trusted vet.
            </p>
            <p className="font-serif italic text-charcoal text-base sm:text-lg border-l-2 border-terracotta pl-4 py-1.5 leading-relaxed bg-stone-50/50 pr-4">
              "Pets are family. They communicate in subtle ways, and true veterinary care requires us to listen just as closely with our hearts as we do with our stethoscopes."
            </p>
          </motion.div>

          {/* Clinical Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 40, damping: 14, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200/40"
          >
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage/10 text-sage flex items-center justify-center shrink-0">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-semibold text-charcoal">{item.title}</h4>
                    <p className="font-sans text-xs text-stone-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
