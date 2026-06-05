"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-3xl"
    >
      <div className="bg-white border border-stone-200/40 rounded-full py-3 px-6 flex items-center justify-between shadow-[0_15px_35px_rgba(43,41,39,0.06),0_5px_15px_rgba(43,41,39,0.02)]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <img 
            src="/logo.png" 
            alt="RoyalVet Logo" 
            className="w-8 h-8 object-contain rounded-full transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-serif font-bold text-lg tracking-wide text-charcoal">
            RoyalVet
          </span>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="font-sans text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300 relative group"
          >
            Our Story
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/services"
            className="font-sans text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/testimonials"
            className="font-sans text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300 relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Terracotta Scale-on-Hover CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link
            href="/book"
            className="font-sans text-xs font-medium tracking-wide bg-sage hover:bg-sage/95 text-white px-5 py-2.5 rounded-full transition-colors duration-300 inline-block"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

