import Booking from "@/components/Booking";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Vet Appointment Online | Royal Vet Clinic Indore",
  description: "Schedule a premium, low-stress veterinary consultation for your dog or cat in under two minutes using our online appointment wizard.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookingPage() {
  return (
    <div className="w-full relative">
      {/* Main page content with spacing for the navbar */}
      <div className="pt-24 md:pt-28">
        <Booking />
      </div>
    </div>
  );
}
