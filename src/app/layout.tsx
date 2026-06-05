import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

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
    default: "Royal Veterinary Clinic | Premium Pet Care & Surgery in Indore",
    template: "%s | Royal Veterinary Clinic Indore",
  },
  description: "Royal Veterinary Clinic is Indore's leading premium pet clinic. Led by expert vets with BVSc & MVSc credentials, we offer stress-free vaccination, surgery, dental scaling, and pathology diagnostics at Ganeshganj & Kesharbagh branches.",
  keywords: [
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
    title: "Royal Veterinary Clinic | Premium Pet Care & Surgery in Indore",
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
    title: "Royal Veterinary Clinic | Premium Pet Care & Surgery in Indore",
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
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton />
        <StructuredData />
      </body>
    </html>
  );
}


