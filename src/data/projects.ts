export type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Expensive Statements Analyzer",
    slug: "expensive-statements",
    description:
      "Full-stack CSV analysis tool for financial statements. Flask backend with a React frontend, deployed to SAP BTP Cloud Foundry.",
    tech: ["Python", "Flask", "React", "TypeScript", "Cloud Foundry"],
    github: "https://github.com/yourusername/expensive-statements-btp-site",
    featured: true,
  },
  {
    title: "Research Agent",
    slug: "research-agent",
    description:
      "Real-time financial research agent using WebSockets. Streams reasoning and market data live to the browser via Flask-Sock and yfinance.",
    tech: ["Python", "Flask", "WebSockets", "yfinance"],
    github: "https://github.com/yourusername/research-agent",
    featured: true,
  },
  {
    title: "Data Viz Playground",
    slug: "data-viz",
    description:
      "React 19 + Vite app for interactive data exploration with ECharts and PapaParse. Drop a CSV, get instant charts.",
    tech: ["React", "TypeScript", "Vite", "ECharts"],
    github: "https://github.com/yourusername/my-app",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    slug: "portfolio",
    description:
      "This site. Built with Next.js 16, Tailwind CSS v4, and a terminal-inspired dark theme. Deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
];
