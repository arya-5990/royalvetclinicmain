import React from "react";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://royalvetindore.com/#organization",
        "name": "Royal Veterinary Clinic",
        "url": "https://royalvetindore.com",
        "logo": "https://royalvetindore.com/logo.png",
        "image": "https://royalvetindore.com/clinic_interior.png",
        "description": "Indore's leading premium pet clinic. Guided by expert vets holding BVSc & MVSc degrees, we offer gentle vaccination, sterilisation surgeries, pathology, & dental scaling.",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-87707-93826",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "VeterinaryCare",
        "@id": "https://royalvetindore.com/#branch-ganeshganj",
        "name": "Royal Veterinary Clinic - Ganeshganj Branch",
        "description": "Premium, compassionate veterinary clinic in Indore near Rajmohalla. Warm, calming, and expertly tailored care.",
        "image": "https://royalvetindore.com/clinic_interior.png",
        "telephone": "+91-87707-93826",
        "email": "contact@royalvetindore.com",
        "url": "https://royalvetindore.com/contact",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "55 Ganeshganj (near Antim Square, Rajmohalla)",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452202",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.7186253,
          "longitude": 75.8409981
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "21:00"
        },
        "employee": {
          "@type": "Person",
          "name": "Dr. Abhay Patel",
          "jobTitle": "Lead Veterinary Surgeon",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "BVSc & MVSc Veterinary Medicine"
          }
        }
      },
      {
        "@type": "VeterinaryCare",
        "@id": "https://royalvetindore.com/#branch-kesharbagh",
        "name": "Royal Veterinary Clinic - Kesharbagh Road Branch",
        "description": "Premium, compassionate veterinary clinic in Indore on Kesharbagh Road. Warm, calming, and expertly tailored care.",
        "image": "https://royalvetindore.com/service_wellness.png",
        "telephone": "+91-87707-93826",
        "email": "contact@royalvetindore.com",
        "url": "https://royalvetindore.com/contact",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "G-42 A, in front of Palash Parisar, Kesharbagh Road",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452009",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.6788412,
          "longitude": 75.8418031
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "21:00"
        },
        "employee": {
          "@type": "Person",
          "name": "Dr. Abhay Patel",
          "jobTitle": "Lead Veterinary Surgeon",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "BVSc & MVSc Veterinary Medicine"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
