import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modolith.com"),
  title: {
    default: "Modolith Structures | Houston General Contractor",
    template: "%s | Modolith Structures",
  },
  description:
    "Modolith Structures - Standing Structures. Setting Standards. Expert structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting in Houston, TX.",
  keywords: [
    "Modolith Structures",
    "Houston general contractor",
    "structural steel erection",
    "pre-engineered metal buildings",
    "construction consulting",
    "PEMB erection",
    "Houston construction company",
    "steel erection Texas",
  ],
  authors: [{ name: "Modolith Structures" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modolith.com",
    siteName: "Modolith Structures",
    title: "Modolith Structures | Houston General Contractor",
    description:
      "Standing Structures. Setting Standards. Expert construction services throughout Houston and the greater Houston area.",
    images: [
      {
        url: "/images/services/Modolith-Image-108.jpg",
        width: 1200,
        height: 630,
        alt: "Modolith Structures - Steel Erection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modolith Structures | Houston General Contractor",
    description:
      "Standing Structures. Setting Standards. Expert construction services in Houston, TX.",
    images: ["/images/services/Modolith-Image-108.jpg"],
  },
  icons: {
    icon: "/images/logos/modolith-reduced-logo.png",
    apple: "/images/logos/modolith-reduced-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Modolith Structures",
  url: "https://modolith.com",
  logo: "https://modolith.com/images/logos/Modolith-Structures.webp",
  image: "https://modolith.com/images/services/Modolith-Image-108.jpg",
  description:
    "Standing Structures. Setting Standards. Expert structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting.",
  telephone: "+1-832-519-8584",
  email: "info@modolith.com",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1500 Waugh Dr. Suite 110",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77019",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/p/Modolith-LLC-100090859106290/",
    "https://www.instagram.com/modolith_structures/",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
