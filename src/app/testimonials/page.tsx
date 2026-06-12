import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Royal Vet Clinic Indore",
  description: "Read authentic reviews from pet parents in Indore. See why families trust Dr. Abhay Patel and the Royal Veterinary Clinic with their beloved companions.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-24 md:pt-28">
        <Testimonials />
      </div>
    </div>
  );
}
