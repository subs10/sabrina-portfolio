import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sabrina Feld. Interested in collaborating, hiring, or learning more about my work in product design, fine art, and creative practice.",
};

export default function ContactPage() {
  return <ContactClient />;
}
