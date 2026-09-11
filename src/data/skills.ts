export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    category: "Coursework",
    skills: [
      "Data Structures",
      "Discrete Math",
      "Program Design & Abstraction",
      "Intro to Python",
      "Operating Systems"
    ],
  },
  {
    category: "Tools",
    skills: ["Figma", "Claude", "Microsoft Excel", "Microsoft Word", "PowerPoint", "Canva"],
  },
  {
    category: "Other",
    skills: ["Generative AI", "LLM Prompting", "Research", "Spanish"],
  },
];
