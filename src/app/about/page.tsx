import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Clinic & Expert Vets | Royal Veterinary Clinic Indore",
  description: "Learn about Royal Veterinary Clinic's gentle philosophy, state-of-the-art facilities in Indore, and our expert vets holding BVSc & MVSc credentials.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-24 md:pt-28">
        <About />
      </div>
    </div>
  );
}
