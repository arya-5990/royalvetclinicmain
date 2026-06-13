"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column (40% width on large screens) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-center text-left z-10"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold mb-3 block">
            Premium Vet Clinic in Indore
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-semibold leading-[1.12] mb-6">
            Compassionate care for your best friend.
          </h1>
          <p className="font-sans text-stone-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            We believe veterinary care should feel gentle, warm, and deliberate. 
            Step into a premium space where design meets exceptional medicine to heal 
            and nurture the ones you love most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-terracotta hover:bg-terracotta/95 text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-full shadow-[0_10px_25px_rgba(189,107,83,0.15)] transition-colors duration-300"
            >
              Book A Visit
            </motion.a>
            <a
              href="#services"
              className="px-6 py-3 font-sans text-xs font-semibold tracking-wider uppercase text-charcoal hover:text-terracotta transition-colors duration-300 flex items-center gap-2 group"
            >
              Explore Services
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column (60% width on large screens) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 16, delay: 0.3 }}
          className="lg:col-span-7 relative w-full flex items-end justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-end">
            {/* Playful Detail: 2D Vector Cat Resting on the Arch Curve */}
            <div className="absolute top-[8%] left-[16%] z-20 pointer-events-none transform -translate-y-1/2 -rotate-[8deg]">
              <svg
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-[53px] sm:w-24 sm:h-16 lg:w-[120px] lg:h-[80px] overflow-visible"
              >
                {/* Cat Tail - Animated group */}
                <motion.g
                  style={{ transformOrigin: "24px 52px" }}
                  animate={{ rotate: [0, 12, -8, 12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M24 52C12 50 4 35 8 20C10 10 20 6 18 2"
                    stroke="#BD6B53"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>

                {/* Cat Body */}
                <path
                  d="M20 52C20 32 50 26 72 36C82 41 87 50 87 60C87 62 82 65 72 65C52 65 20 62 20 52Z"
                  fill="#BD6B53"
                />
                
                {/* Cat Head */}
                <circle cx="87" cy="35" r="14" fill="#BD6B53" />
                
                {/* Ears */}
                <path d="M75 26L71 13L83 23Z" fill="#A85741" />
                <path d="M93 23L100 13L96 26Z" fill="#A85741" />
                
                {/* Eyes (Sleeping) */}
                <path
                  d="M80 37C82 39 84 39 86 37"
                  stroke="#FAF8F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M89 37C91 39 93 39 95 37"
                  stroke="#FAF8F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                
                {/* Nose */}
                <polygon points="87,41 89,43 85,43" fill="#FAF8F5" />
                
                {/* Paws */}
                <rect x="76" y="58" width="12" height="7" rx="3.5" fill="#FAF8F5" opacity="0.9" />
              </svg>
            </div>

            {/* Arched Hero Image Container */}
            <div className="relative w-full h-[92%] rounded-t-[200px] overflow-hidden border border-stone-200/20 bg-stone-100 shadow-[0_20px_50px_rgba(43,41,39,0.04)]">
              {/* Subtle blur-to-focus animation */}
              <motion.div
                initial={{ filter: "blur(12px)", scale: 1.04 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src="/dr Abhay.jpeg"
                  alt="Dr. Abhay Patel - Chief Veterinary Surgeon"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Arch Silhouette Accents (Muted terracotta border behind) */}
            <div className="absolute inset-0 border border-terracotta/15 rounded-t-[200px] translate-x-3.5 translate-y-3.5 -z-10 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
