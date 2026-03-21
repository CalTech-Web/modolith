import type { Metadata } from "next";
import { Oswald, Didact_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContentLines from "@/components/ContentLines";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
    icon: "/favicon.png",
    apple: "/favicon.png",
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
        className={`${oswald.variable} ${didactGothic.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="content-wrapper">
          <ContentLines />
          <main id="main-content">{children}</main>
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
