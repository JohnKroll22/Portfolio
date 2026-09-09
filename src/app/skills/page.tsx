import type { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, and tools I work with.",
};

export default function SkillsPage() {
  return <Skills />;
}
