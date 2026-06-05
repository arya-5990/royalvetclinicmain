"use client";

import { Heart, MapPin, Clock, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100/50 border-t border-stone-200/20 py-16 px-6 md:px-12 mt-auto w-full">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Logo column */}
          <div className="lg:col-span-3 space-y-4">
            <a href="/" className="flex items-center gap-2.5 group inline-block cursor-pointer">
              <img 
                src="/logo.png" 
                alt="RoyalVet Logo" 
                className="w-8 h-8 object-contain rounded-full transition-transform duration-300 group-hover:scale-105 inline-block align-middle mr-2" 
              />
              <span className="font-serif font-bold text-lg tracking-wide text-charcoal align-middle">
                RoyalVet
              </span>
            </a>
            <p className="font-sans italic text-xs text-stone-400">
              Healing begins with feeling safe.
            </p>
            <p className="font-sans text-xs text-stone-500 max-w-xs leading-relaxed">
              Premium veterinary care tailored for cats and dogs. Led by expert clinicians holding BVSc & MVSc credentials.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/royalvetclinic_103/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Ganeshganj branch */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs">
            <p className="font-serif font-semibold text-sm text-charcoal uppercase tracking-wider">Ganeshganj Branch</p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed">
                  55 Ganeshganj, Indore<br />near Antim Square, Rajmohalla - 452202
                </p>
              </div>
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed">
                  Monday to Saturday: 10 AM to 9 PM
                </p>
              </div>
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed text-sage font-semibold">
                  Doctor: 10 AM - 2 PM, 6 PM - 9 PM
                </p>
              </div>
            </div>
          </div>

          {/* Kesharbagh branch */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs">
            <p className="font-serif font-semibold text-sm text-charcoal uppercase tracking-wider">Kesharbagh Road Branch</p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed">
                  G-42 A, in front of Palash Parisar,<br />Kesharbagh Road, Indore
                </p>
              </div>
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed">
                  Monday to Sunday: 10 AM to 9 PM
                </p>
              </div>
              <div className="flex gap-3 items-start text-stone-500">
                <div className="w-6 h-6 rounded-full bg-stone-200/30 border border-stone-200/50 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed text-sage font-semibold">
                  Doctor: 2 PM - 5 PM
                </p>
              </div>
            </div>
          </div>

          {/* Company column */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs">
            <p className="font-serif font-semibold text-sm text-charcoal uppercase tracking-wider">Company</p>
            <ul className="space-y-3 text-stone-500 font-medium">
              <li>
                <Link href="/about" className="hover:text-terracotta transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-terracotta transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-terracotta transition-colors">Book Appointment</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-terracotta transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-terracotta transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-stone-400 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Royal Veterinary Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 font-sans text-[10px] text-stone-400 uppercase tracking-widest">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta inline" />
            <span>by</span>
            <a 
              href="https://www.antilabs.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-stone-600 hover:text-terracotta transition-colors normal-case"
            >
              AntiLabs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
