import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prevProject = index > 0 ? { slug: projects[index - 1].slug, title: projects[index - 1].title } : null;
  const nextProject = index < projects.length - 1 ? { slug: projects[index + 1].slug, title: projects[index + 1].title } : null;

  return <ProjectDetailClient project={project} prevItem={prevProject} nextItem={nextProject} />;
}
