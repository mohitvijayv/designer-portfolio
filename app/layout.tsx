import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://mahimagupta.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Mahima Gupta — Senior Graphic Designer | Brand & Visual Design Portfolio",
    template: "%s | Mahima Gupta",
  },
  description:
    "Portfolio of Mahima Gupta — Senior Graphic Designer with 3.5+ years of experience in brand identity, packaging design, performance creatives, and visual storytelling. Based in Gurgaon, India.",
  keywords: [
    "Mahima Gupta",
    "Graphic Designer",
    "Senior Graphic Designer",
    "Brand Designer",
    "Visual Designer",
    "Portfolio",
    "Brand Identity",
    "Packaging Design",
    "Performance Creatives",
    "Gurgaon",
    "India",
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Motion Graphics",
    "UI Design",
  ],
  authors: [{ name: "Mahima Gupta", url: siteUrl }],
  creator: "Mahima Gupta",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mahima Gupta — Designer Portfolio",
    title: "Mahima Gupta — Senior Graphic Designer",
    description:
      "Senior Graphic Designer with 3.5+ years crafting bold brand identities, performance creatives, and visual storytelling for national brands.",
    images: [
      {
        url: "/mahima.JPG",
        width: 600,
        height: 600,
        alt: "Mahima Gupta — Senior Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahima Gupta — Senior Graphic Designer",
    description:
      "Senior Graphic Designer with 3.5+ years crafting bold brand identities, performance creatives, and visual storytelling.",
    images: ["/mahima.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
