import Hero from "@/components/Hero";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import TestimonialsTeaser from "@/components/TestimonialsTeaser";
import PatientCategories from "@/components/PatientCategories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Veterinary Clinic | Best Vet Clinic in Indore",
  description: "Indore's leading premium pet clinic. Guided by expert vets holding BVSc & MVSc degrees, we offer gentle vaccination, sterilisation surgeries, pathology, and dental scaling.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="w-full relative selection:bg-terracotta/20 selection:text-terracotta overflow-x-hidden font-sans">
      {/* Main Content Layout */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Subtle separator */}
        <div className="w-[85%] max-w-7xl mx-auto h-[1px] bg-stone-200/40" />

        {/* About Teaser Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image on Left for variation */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-[40px] overflow-hidden border border-stone-200/20 bg-stone-100 shadow-[0_15px_35px_rgba(43,41,39,0.03)]">
                <img
                  src="/clinic111.jpeg"
                  alt="Cozy veterinary clinic reception lobby"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[10%] -right-[5%] w-16 h-16 rounded-full bg-sage/10 -z-10 blur-xl" />
            </div>

            {/* Text on Right */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold leading-[1.15]">
                A sanctuary for pets and their families.
              </h2>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                Traditional veterinary clinics can feel sterile, cold, and frightening. 
                We created RoyalVet to feel like a warm, welcoming home—a quiet sanctuary 
                where your pet can relax, explore, and heal in peace, led by certified practitioners holding BVSc & MVSc credentials.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta/90 transition-colors group"
                >
                  Read Our Story <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle separator */}
        <div className="w-[85%] max-w-7xl mx-auto h-[1px] bg-stone-200/40" />

        {/* Services Teaser Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
              Our Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">
              Tailored with meticulous care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                num: "01",
                tag: "Preventative Care",
                title: "Vaccination & Treatment",
                desc: "Thorough immunization schedules and customized medical therapies designed to heal, nurture, and protect your dog or cat.",
                image: "/realimgs/vaccine.png",
              },
              {
                num: "02",
                tag: "Surgical Excellence",
                title: "Surgeries & Sterilisation",
                desc: "Major and minor soft-tissue procedures alongside routine sterilisation, conducted in sterile, state-of-the-art operating suites.",
                image: "/realimgs/surgeon3.jpeg",
              },
              {
                num: "03",
                tag: "Diagnostics & Dental",
                title: "Pathology & Dental Scaling",
                desc: "In-house lab diagnostics (blood/urinalysis) and ultrasonic dental cleaning to prevent periodontal issues and secure overall health.",
                image: "/service_pathology.png",
              },
            ].map((srv, idx) => (
              <Link
                key={idx}
                href="/services"
                className="group bg-white border border-stone-200/40 p-6 rounded-[36px] flex flex-col shadow-[0_15px_40px_rgba(43,41,39,0.02)] hover:shadow-[0_25px_50px_rgba(43,41,39,0.06)] hover:-translate-y-1 transition-all duration-500 ease-out"
              >
                <div className="relative w-full aspect-[16/11] rounded-[24px] overflow-hidden mb-6 bg-stone-100 border border-stone-200/10">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-grow flex flex-col space-y-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-terracotta text-sm font-semibold">
                      {srv.num}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span className="font-sans text-[10px] uppercase tracking-wider text-sage font-bold">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold group-hover:text-terracotta transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-stone-500 text-sm leading-relaxed flex-grow">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-stone-100/80 flex items-center justify-between px-1">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-terracotta transition-colors duration-300">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-terracotta" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone-300 hover:border-charcoal text-charcoal rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Browse All Services
            </Link>
          </div>
        </section>
        {/* Who We Treat Section */}
        <PatientCategories />

        {/* Subtle separator */}
        <div className="w-[85%] max-w-7xl mx-auto h-[1px] bg-stone-200/40" />

        {/* Conditions We Treat Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
              Clinical Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">
              Conditions we diagnose & treat.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                name: "Vomiting & Diarrhea",
                desc: "Rapid fluid therapy, precise diagnostics, and targeted gastroenteritis treatments to restore digestive health.",
              },
              {
                num: "02",
                name: "Tick Infestation",
                desc: "Comprehensive external parasite removal, dermatological soothing, and long-term preventative control.",
              },
              {
                num: "03",
                name: "Parvovirus Care",
                desc: "Dedicated isolation treatment protocols, aggressive hydration, and vital immune support to combat viral enteritis.",
              },
              {
                num: "04",
                name: "Canine Distemper",
                desc: "Compassionate, high-level supportive care alongside respiratory, gastrointestinal, and neurological symptom management.",
              },
              {
                num: "05",
                name: "Leptospirosis",
                desc: "Targeted antibiotic regimens, hydration therapies, and organ monitoring for zoonotic bacterial infections.",
              },
              {
                num: "06",
                name: "Skin Infections",
                desc: "Advanced dermatological diagnostic tests for bacterial dermatitis, fungal hot spots, and allergic reactions.",
              },
              {
                num: "07",
                name: "Dental Disorders",
                desc: "Professional ultrasonic scaling, teeth polishing, surgical extractions, and comprehensive oral hygiene plans.",
              },
              {
                num: "08",
                name: "Tick Fever",
                desc: "Hematology screenings, supportive therapy, and specialized medications to eliminate blood-borne tick parasites.",
              },
              {
                num: "09",
                name: "Kidney Disorders",
                desc: "Fluid management, specialized therapeutic diets, and proactive care for acute and chronic renal disease.",
              },
              {
                num: "10",
                name: "Liver Disorders",
                desc: "Specialized liver function panels, hepatoprotective therapies, and diet planning for biliary health.",
              },
              {
                num: "11",
                name: "Eye Diseases",
                desc: "Diagnostics and therapies for corneal ulcers, conjunctivitis, cataract screening, and ocular injuries.",
              },
              {
                num: "12",
                name: "Emergency Trauma",
                desc: "Triage, immediate stabilization, oxygen therapy, and critical care management for emergency cases.",
              },
            ].map((disease, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-stone-200/40 p-6 rounded-[28px] shadow-[0_10px_30px_rgba(43,41,39,0.01)] hover:shadow-[0_20px_45px_rgba(43,41,39,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Top Border Line Accent that expands on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-stone-100 group-hover:bg-terracotta transition-colors duration-300" />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-bold text-sage uppercase tracking-wider">
                      Condition {disease.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-charcoal font-semibold group-hover:text-terracotta transition-colors duration-300">
                    {disease.name}
                  </h3>
                  <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {disease.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subtle separator */}
        <div className="w-[85%] max-w-7xl mx-auto h-[1px] bg-stone-200/40" />

        {/* Testimonials Section */}
        <TestimonialsTeaser />

        {/* Booking CTA Banner */}
        <section className="bg-sage text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Begin a calmer chapter of veterinary wellness.
            </h2>
            <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Our doors are open. Schedule a visit online in under two minutes or contact us for a consultation.
            </p>
            <div className="pt-4">
              <Link
                href="/book"
                className="inline-block bg-white hover:bg-cream text-sage font-sans text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-colors duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          {/* Accent circles inside banner */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-24 -right-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        </section>
      </main>
    </div>
  );
}
