import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and things I've built.",
};

export default function ProjectsPage() {
  return <Projects />;
}
