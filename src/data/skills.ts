export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Flask", "REST APIs", "WebSockets", "PostgreSQL"],
  },
  {
    category: "Tools & Cloud",
    skills: ["Git", "Docker", "Vercel", "Linux", "GitHub Actions"],
  },
];
