import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import { IS_BLOCKED } from "@/lib/status";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royalveterinaryclinic.shop"),
  title: {
    default: "Royal Veterinary Clinic | Best Vet Clinic in Indore",
    template: "%s | Royal Veterinary Clinic Indore",
  },
  description: "Royal Veterinary Clinic is Indore's leading premium pet clinic. Led by expert vets with BVSc & MVSc credentials, we offer stress-free vaccination, surgery, dental scaling, and pathology diagnostics at Ganeshganj & Kesharbagh branches.",
  keywords: [
    "vet clinic Indore",
    "best vet clinic in Indore",
    "veterinary clinic in Indore",
    "veterinary clinic Indore",
    "best vet in Indore",
    "Royal Veterinary Clinic Indore",
    "pet clinic Indore",
    "dog doctor Indore",
    "cat doctor Indore",
    "pet surgery Indore",
    "dog vaccination Indore",
    "Dr. Abhay Patel vet",
    "veterinary doctor Indore",
    "Ganeshganj vet clinic",
    "Kesharbagh pet clinic",
    "Royal Vet Indore"
  ],
  authors: [{ name: "Dr. Abhay Patel" }],
  creator: "Royal Veterinary Clinic",
  publisher: "Royal Veterinary Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Royal Veterinary Clinic | Best Vet Clinic in Indore",
    description: "Indore's leading premium pet clinic. Led by expert vets with BVSc & MVSc credentials, we offer stress-free vaccination, surgery, dental scaling, and pathology diagnostics.",
    url: "https://www.royalveterinaryclinic.shop",
    siteName: "Royal Veterinary Clinic",
    images: [
      {
        url: "/clinic_interior.png",
        width: 1200,
        height: 630,
        alt: "Royal Veterinary Clinic Interior Lobby",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Veterinary Clinic | Best Vet Clinic in Indore",
    description: "Indore's leading premium pet clinic. Led by expert vets with BVSc & MVSc credentials.",
    images: ["/clinic_interior.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${playfair.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-charcoal">
        {IS_BLOCKED ? (
          <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF8F5] p-6">
            <div className="max-w-md w-full text-center space-y-6 bg-white border border-stone-200/60 p-10 rounded-[32px] shadow-[0_20px_50px_rgba(43,41,39,0.03)]">
              <div className="w-16 h-16 bg-[#BD6B53]/10 text-[#BD6B53] flex items-center justify-center rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#2B2927]">
                  Access Suspended
                </h1>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">
                  This website is temporarily offline due to unpaid administrative balances or non-compliance with the development agreement.
                </p>
                <p className="font-sans text-xs text-stone-400">
                  Error Code: 502 / PAYMENT_REQUIRED
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 font-sans text-xs text-stone-400">
                Please resolve the outstanding dues with the service developer to restore access.
              </div>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
            <WhatsAppButton />
            <StructuredData />
          </>
        )}
      </body>
    </html>
  );
}


