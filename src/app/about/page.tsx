import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sabrina Feld — Maker in Motion. Scripps College senior pursuing dual degrees in Science, Technology & Society and Fine Arts. Curious, creative, and grounded in learning.",
};

export default function AboutPage() {
  return <AboutClient />;
}
