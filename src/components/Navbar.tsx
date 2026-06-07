"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      marginTop: 16,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -60, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-3xl lg:max-w-6xl"
    >
      <div
        className={`bg-white border border-stone-200/40 py-3 px-6 shadow-[0_15px_35px_rgba(43,41,39,0.06),0_5px_15px_rgba(43,41,39,0.02)] transition-all duration-300 ${
          isOpen ? "rounded-[28px] pb-6" : "rounded-full"
        }`}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group cursor-pointer" onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="RoyalVet Logo" 
              className="w-8 h-8 object-contain rounded-full transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-serif font-bold text-lg tracking-wide text-charcoal">
              RoyalVet
            </span>
          </a>

          {/* Minimal Navigation Links (Desktop only) */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* CTA Button (Desktop only) */}
          <div className="hidden lg:block">
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

          {/* Mobile / Tablet Menu Elements */}
          <div className="flex lg:hidden items-center gap-3">
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/book"
                    onClick={closeMenu}
                    className="font-sans text-[10px] font-bold uppercase tracking-wider bg-sage hover:bg-sage/95 text-white px-3.5 py-1.5 rounded-full transition-colors duration-300 inline-block"
                  >
                    Book
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={toggleMenu}
              className="p-2 -mr-2 text-stone-500 hover:text-charcoal transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden lg:hidden flex flex-col items-center w-full"
            >
              <div className="w-full h-[1px] bg-stone-100 my-3" />
              <nav className="flex flex-col items-center gap-5 w-full py-2">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300"
                >
                  Our Story
                </Link>
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  onClick={closeMenu}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-terracotta transition-colors duration-300"
                >
                  Contact
                </Link>
                <div className="w-full h-[1px] bg-stone-100 my-2" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-xs text-center"
                >
                  <Link
                    href="/book"
                    onClick={closeMenu}
                    className="font-sans text-xs font-bold uppercase tracking-widest bg-terracotta hover:bg-terracotta/95 text-white py-3 px-6 rounded-full transition-colors duration-300 block shadow-sm"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

