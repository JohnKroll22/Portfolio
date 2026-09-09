export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    category: "Coursework",
    skills: [
      "Data Structures",
      "Discrete Math",
      "Program Design & Abstraction",
      "Intro to Python",
    ],
  },
  {
    category: "Tools",
    skills: ["Canva", "Microsoft Excel", "Microsoft Word", "PowerPoint", "Figma"],
  },
  {
    category: "Other",
    skills: ["Research", "Spanish (basic)"],
  },
];
