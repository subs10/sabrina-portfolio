import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product management, visual storytelling, editorial design, and digital marketing projects by Sabrina Feld.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
