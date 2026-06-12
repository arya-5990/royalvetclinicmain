import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Royal Vet Clinic Indore | Ganeshganj & Kesharbagh",
  description: "Get in touch with Royal Veterinary Clinic. Find maps, phone numbers, email, and doctor availability for our Ganeshganj and Kesharbagh Road branches in Indore.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-24 md:pt-28">
        <Contact />
      </div>
    </div>
  );
}
