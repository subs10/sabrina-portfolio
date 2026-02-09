import type { Metadata } from "next";
import ArtClient from "./ArtClient";

export const metadata: Metadata = {
  title: "Art",
  description:
    "Fine art portfolio by Sabrina Feld — monotype prints, watercolors, ceramics, screen prints, cyanotypes, lithography, and mixed media explorations.",
};

export default function ArtPage() {
  return <ArtClient />;
}
