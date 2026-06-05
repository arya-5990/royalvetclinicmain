import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Royal Veterinary Clinic",
    short_name: "RoyalVet",
    description: "Premium, compassionate veterinary care for your pet in Indore. Warm, calming, and expertly tailored care.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5", // cream bg
    theme_color: "#BD6B53", // terracotta
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
