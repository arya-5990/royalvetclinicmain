import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the Terms of Service for Royal Veterinary Clinic, covering appointment scheduling, emergency consent, payment fees, and patient records.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-20 font-sans text-stone-600 text-sm sm:text-base leading-relaxed space-y-8">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-sage font-semibold">Legal & Policies</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">Terms of Service</h1>
        <p className="text-stone-400 text-xs">Last updated: June 4, 2026</p>
      </div>

      <p>
        Welcome to the Royal Veterinary Clinic. By scheduling appointments, visiting our facilities, or utilizing our services, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
      </p>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">1. Scheduling & Cancellations</h2>
        <p>
          Appointments can be booked online through our conversational booking system or by calling either of our branches. We kindly request that you arrive 10 minutes prior to your scheduled time. If you need to cancel or reschedule, please provide at least 24 hours' notice.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">2. Medical Care & Emergency Consent</h2>
        <p>
          Our licensed veterinarians (holding BVSc & MVSc credentials) will exercise professional discretion when diagnosing and treating your pets. In life-threatening emergencies, if we are unable to contact you immediately, you authorize our team to administer necessary stabilize-and-care treatments.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">3. Fees & Payment</h2>
        <p>
          All fees for examinations, surgeries, pathology diagnostics, vaccinations, and treatment plans are due at the time services are rendered. We accept credit cards, debit cards, and standard digital payments. Written estimates can be provided for major surgeries and long-term treatments.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">4. Patient Records</h2>
        <p>
          All veterinary medical charts, diagnostic radiographs, lab reports, and pathology analysis profiles are the physical property of Royal Veterinary Clinic. We will gladly release copies of records directly to you or another veterinary clinic upon your written request.
        </p>
      </div>
    </div>
  );
}
