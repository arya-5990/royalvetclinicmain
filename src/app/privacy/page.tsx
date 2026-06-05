import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how Royal Veterinary Clinic protects client data and your pet's medical records.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-20 font-sans text-stone-600 text-sm sm:text-base leading-relaxed space-y-8">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-sage font-semibold">Privacy Protection</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-semibold">Privacy Policy</h1>
        <p className="text-stone-400 text-xs">Last updated: June 4, 2026</p>
      </div>

      <p>
        At Royal Veterinary Clinic, we are committed to protecting the privacy of our clients and the medical confidentiality of their pets. This Privacy Policy describes how we collect, use, and secure your personal and pet information.
      </p>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">1. Information We Collect</h2>
        <p>
          When you use our scheduling wizard, register at either of our branches, or request services, we collect:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Owner Details</strong>: Name, email address, phone number, and mailing address.</li>
          <li><strong>Pet Details</strong>: Name, species, breed, age, sex, and vaccination history.</li>
          <li><strong>Medical Records</strong>: Pathology lab results, radiographs, surgical notes, and pharmacy prescriptions.</li>
        </ul>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">2. How We Use Your Information</h2>
        <p>
          We use the collected details to schedule appointments, conduct diagnoses, contact you regarding pet updates, process digital billing, and coordinate with third-party pathology labs for specialized diagnostics.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">3. Data Sharing & Security</h2>
        <p>
          We do not sell, lease, or rent your personal information to third parties. We only share details with referral veterinary specialists or pathology labs when necessary for your pet's treatment. We implement secure electronic encryption to store and manage clinic files.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">4. Contact & Opt-Out</h2>
        <p>
          You may request access to, correction of, or deletion of your owner profile details at any time by contacting either our Rajmohalla or Kesharbagh Road branches. You can also opt-out of vaccine reminder emails.
        </p>
      </div>
    </div>
  );
}
