import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Sabrina Feld",
    template: "%s | Sabrina Feld",
  },
  description:
    "Portfolio of Sabrina Feld — Scripps College senior pursuing dual degrees in Science, Technology & Society and Fine Arts. Product design, product management, graphic design, and creative practice.",
  keywords: [
    "Sabrina Feld",
    "product designer",
    "product manager",
    "graphic designer",
    "fine artist",
    "portfolio",
    "Scripps College",
    "STS",
    "creative technologist",
    "art and technology",
    "editorial design",
    "UI design",
    "visual storytelling",
    "artistic residency",
  ],
  authors: [{ name: "Sabrina Feld" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Sabrina Feld",
    description:
      "Product design, fine art, and creative practice at the intersection of art, tech, and science.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <StructuredData />
        <CustomCursor />
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
