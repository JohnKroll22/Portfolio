export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    location: "City, Country",
    dates: "Summer 2025",
    bullets: [
      "Built and shipped an internal analytics dashboard used by 20+ teammates",
      "Cut API latency by 40% by adding caching and query batching",
      "Wrote unit and integration tests, brought coverage from 45% to 80%",
    ],
  },
  {
    role: "Teaching Assistant — Data Structures",
    org: "Your University",
    dates: "Sep 2024 – Present",
    bullets: [
      "Lead weekly lab sessions for 30 students on trees, graphs, and algorithms",
      "Hold office hours; wrote grading rubrics and starter code for assignments",
    ],
  },
  {
    role: "Hackathon Participant",
    org: "Various",
    dates: "2023 – Present",
    bullets: [
      "Placed top 10 at [Hackathon Name] with a real-time collaboration tool",
      "Shipped 5+ full-stack projects across weekends",
    ],
  },
];

export type Award = {
  title: string;
  org: string;
  date: string;
};

export const awards: Award[] = [
  { title: "Dean's List", org: "Your University", date: "2024" },
  { title: "Hackathon — Top 10", org: "MegaHack '24", date: "Mar 2024" },
  { title: "Scholarship Award", org: "Your University", date: "2023" },
];
