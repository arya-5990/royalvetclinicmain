"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Dotted Path representing dog's walk */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 hidden lg:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M -100 220 C 250 200, 200 480, 520 520 C 720 550, 820 280, 1080 430 C 1140 460, 1200 520, 1250 600"
            stroke="#BD6B53"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
          {/* Custom Paw Print at the end of the line */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
            transform="translate(1070, 415) rotate(22)"
            fill="#BD6B53"
          >
            {/* Main pad */}
            <path d="M 12 16 C 14 13 18 13 20 16 C 21 18 19 22 16 22 C 13 22 11 18 12 16 Z" />
            {/* 4 toes */}
            <circle cx="9" cy="11" r="2.5" />
            <circle cx="14" cy="8" r="2.5" />
            <circle cx="19" cy="8" r="2.5" />
            <circle cx="23" cy="11" r="2.5" />
          </motion.g>
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column: Text (Magazine layout) */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="space-y-4"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold leading-[1.14]">
              A gentler approach to veterinary care.
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
              Led by expert clinicians holding BVSc & MVSc (Bachelor of Veterinary Science & Master of Veterinary Science) credentials, our premier vet clinic in Indore combines academic precision with a gentle, slow-paced approach. Our space is designed to calm, quiet, and soothe, stripping away the sterile environment of traditional clinics.
            </p>
            <p>
              By combining state-of-the-art medicine with a deeply warm, slow-paced environment, 
              we allow our patients to settle, explore, and feel safe. Our team spends twice 
              as much time per appointment to ensure both you and your pet feel listened to and respected.
            </p>
            <p className="font-serif italic text-charcoal text-base sm:text-lg border-l-2 border-terracotta pl-4 py-1.5 leading-relaxed">
              "Healing begins with feeling safe. Every detail of our clinic is tailored to support a quiet, stress-free path to wellness."
            </p>
          </motion.div>
        </div>

        {/* Right Column: Overlapping, Staggered Images */}
        <div className="lg:col-span-7 relative flex justify-center items-center py-8">
          <div className="relative w-full max-w-[480px] aspect-[4/5]">
            {/* Primary/Back Image: Surgeon 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 45, damping: 15 }}
              className="w-[82%] h-[78%] rounded-[48px] overflow-hidden border border-stone-200/20 bg-stone-100 shadow-[0_15px_40px_rgba(43,41,39,0.03)]"
            >
              {/* Blur-to-focus on mount/scroll */}
              <motion.div
                initial={{ filter: "blur(8px)" }}
                whileInView={{ filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <img
                  src="/realimgs/surgeon1.jpeg"
                  alt="Our professional surgeon in the operating theatre"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Staggered/Overlapping Foreground Image: Award 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 40, damping: 14, delay: 0.25 }}
              className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[36px] overflow-hidden border-4 border-stone-50 bg-stone-100 shadow-[0_20px_45px_rgba(43,41,39,0.05)]"
            >
              {/* Blur-to-focus on mount/scroll */}
              <motion.div
                initial={{ filter: "blur(8px)" }}
                whileInView={{ filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <img
                  src="/realimgs/award1.jpeg"
                  alt="Veterinary Excellence Award"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Decorative Organic Blur Accents */}
            <div className="absolute top-[10%] -left-[5%] w-16 h-16 rounded-full bg-sage/10 -z-10 blur-xl" />
            <div className="absolute -bottom-[5%] right-[20%] w-24 h-24 rounded-full bg-terracotta/5 -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
