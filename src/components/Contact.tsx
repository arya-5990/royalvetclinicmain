"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Stethoscope, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const branches = [
    {
      name: "Ganeshganj Branch",
      address: "55 Ganeshganj, Indore (near Antim Square, Rajmohalla) - 452202",
      timing: "Monday to Saturday: 10 AM to 9 PM",
      doctorTiming: "10 AM - 2 PM, 6 PM - 9 PM",
      phone: "+91 87707 93826",
      email: "contact@royalveterinaryclinic.shop",
      mapUrl: "https://maps.google.com/maps?q=22.7186253,75.8409981&z=16&output=embed"
    },
    {
      name: "Kesharbagh Road Branch",
      address: "G-42 A, in front of Palash Parisar, Kesharbagh Road, Indore - 452009",
      timing: "Monday to Sunday: 10 AM to 9 PM",
      doctorTiming: "2 PM - 5 PM",
      phone: "+91 87707 93826",
      email: "contact@royalveterinaryclinic.shop",
      mapUrl: "https://maps.google.com/maps?q=22.6788412,75.8418031&z=16&output=embed"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Title */}
      <div className="text-center space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-xs uppercase tracking-widest text-sage font-semibold block"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold"
        >
          We are here for you.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-sans text-sm sm:text-base text-stone-500 max-w-lg mx-auto leading-relaxed"
        >
          Visit us at one of our premium facilities in Indore, or contact us directly to arrange dedicated care for your companion.
        </motion.p>
      </div>

      {/* Grid of Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {branches.map((branch, index) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 14, delay: index * 0.15 }}
            className="bg-white border border-stone-200/40 rounded-[40px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(43,41,39,0.02)] space-y-8 overflow-hidden"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold">
                {branch.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs sm:text-sm">
                {/* Left side details */}
                <div className="space-y-4">
                  <div className="flex gap-3.5 items-start text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-terracotta shrink-0 mt-0.5 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  <div className="flex gap-3.5 items-start text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-terracotta shrink-0 mt-0.5 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <p className="leading-relaxed">
                      {branch.timing}
                    </p>
                  </div>
                </div>

                {/* Right side details */}
                <div className="space-y-4">
                  <div className="flex gap-3.5 items-start text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-terracotta shrink-0 mt-0.5 shadow-sm">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div className="leading-relaxed">
                      <span className="block font-semibold text-charcoal">Doctor Availability:</span>
                      <span className="text-sage font-semibold">{branch.doctorTiming}</span>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-terracotta shrink-0 mt-0.5 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="leading-relaxed hover:text-terracotta transition-colors duration-200 font-medium"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-[28px] overflow-hidden border border-stone-200/40 shadow-inner h-[280px] bg-stone-50">
              <iframe
                title={`Google Map - ${branch.name}`}
                src={branch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full lg:grayscale lg:opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Action Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-stone-100/50 border border-stone-200/20 rounded-[40px] p-8 sm:p-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left"
      >
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold">
            Ready to schedule a visit?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-500 leading-normal max-w-md">
            Our step-by-step booking wizard makes scheduling hassle-free. Take 1 minute to share details about your pet.
          </p>
        </div>
        <motion.a
          href="/book"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-7 py-3.5 bg-terracotta hover:bg-terracotta/95 text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all duration-300 shrink-0"
        >
          Book Appointment <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
