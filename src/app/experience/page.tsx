import type { Metadata } from "next";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, awards, and accolades.",
};

export default function ExperiencePage() {
  return <Experience />;
}
