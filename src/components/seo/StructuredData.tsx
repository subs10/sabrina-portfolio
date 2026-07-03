export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabrina Feld",
    url: "https://sabrinafeld.com",
    jobTitle: "Product Designer & Fine Artist",
    description:
      "Scripps College senior pursuing dual degrees in Science, Technology & Society and Fine Arts. Seeking roles in product design, product management, and creative practice.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Scripps College",
    },
    knowsAbout: [
      "Product Design",
      "Product Management",
      "Graphic Design",
      "Fine Art",
      "Editorial Design",
      "Visual Storytelling",
      "UI Design",
      "Print Production",
    ],
    sameAs: [
      "https://www.linkedin.com/in/sabrinafeld",
      "https://www.instagram.com/subs_10",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
