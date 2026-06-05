import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinary Services | Surgery, Vaccination & Diagnostics",
  description: "Discover our comprehensive veterinary capabilities in Indore. From soft-tissue surgery & vaccinations to lab diagnostics (pathology) & dental scaling.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-24 md:pt-28">
        <Services />
      </div>
    </div>
  );
}
