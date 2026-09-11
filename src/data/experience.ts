export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    org: "SAP",
    location: "Newtown Square, PA",
    dates: "May 2026 – Present",
    bullets: [
      "Built an internal data analysis tool using SAP technologies to process 100k+ rows of CSV datasets, reducing analysis time by 28%",
      "Collaborated with team members and clients to identify and translate business needs into technical solutions and reusable functionality",
      "Leveraged LLM prompting and Gen AI tools throughout development to optimize a data-processing workflow capable of analyzing 30 MB+ datatsets in under 10 seconds",
    ],
  },
  {
    role: "Research Team Leader",
    org: "Temple University — HCI Research",
    location: "Philadelphia, PA",
    dates: "May 2025 – Present",
    bullets: [
      "Design and test user interfaces for Generative AI applications, working with graduate students and faculty on accessibility and usability",
      "Contribute to a 60+ student undergraduate research lab that produced 50+ published undergraduates and 1,000+ citations in one year",
      "Lead weekly studio discussions to review progress and give research feedback",
    ],
  },

  {
    role: "Temple Men's Club Soccer President",
    org: "Temple University",
    location: "Philadelphia, PA",
    dates: "May 2026 – Present",
    bullets: [
      "Lead and coach a 25-player competitive club soccer team overseeing operations, player development, practices, and match preparation",
      "Manage a $15,000 annual budget, allocating funds across league + player dues, travel equiptment, tournaments, and raise $2,000+ through fundraisers",
      "Represent the club as the primary liason with league directors and opposing teams, coordingating match logistics, league rules, and team participation",
    ],
  },

  {
    role: "Logistics Team Leader",
    org: "Temple University — OwlHacks",
    location: "Philadelphia, PA",
    dates: "May 2025 – Present",
    bullets: [
      "Build financial plans covering catering, prizes, and merchandise for 250+ hackathon participants",
      "Design structured learning tracks and coordinate event logistics end-to-end",
    ],
  },
  {
    role: "Social Media Manager",
    org: "Temple University — ACM",
    location: "Philadelphia, PA",
    dates: "Aug 2025 – Present",
    bullets: [
      "Coordinate 15+ events with tech companies and guest speakers, including employer visits, career fairs, and technical workshops",
      "Run weekly outreach across departments and student organizations",
    ],
  },
  {
    role: "Social Media Manager + Player",
    org: "Temple University — Men's Club Soccer",
    location: "Philadelphia, PA",
    dates: "Sep 2024 – Present",
    bullets: [
      "One of 6 out of 150 freshmen selected; started as both a freshman and sophomore",
      "Manage the team's digital presence with 4+ posts/week for recruiting and event visibility",
      "Organize matches, tournaments, and activities for 30+ student-athletes",
    ],
  },
  {
    role: "Clerk",
    org: "JH Stevedoring",
    location: "Philadelphia, PA",
    dates: "Jan 2023 – May 2023",
    bullets: [
      "Created and interpreted shipping manifests to determine labor needs for cargo operations (4+ ships/month)",
      "Developed stow plans for safety and efficient weight distribution",
      "Processed documentation for accuracy and Customs compliance",
      "Coordinated logistics for 10,000+ packs of lumber monthly",
    ],
  },
  {
    role: "Server + Barback",
    org: "Icona Windrift",
    location: "Avalon, NJ",
    dates: "Jun 2022 – Present",
    bullets: [
      "Support bartenders with inventory prep in high-volume service",
      "Serve 50+ customers per shift in a fast-paced, team-oriented environment",
    ],
  },
];

export type Award = {
  title: string;
  org: string;
  date: string;
};

export const awards: Award[] = [
  {
    title: "SAP's STAR Hackathon Winner",
    org: "SAP",
    date: "August 2026",
  },
  {
    title: "Dean's List",
    org: "Temple University",
    date: "Fall 2024, Spring 2025",
  },
  {
    title: "Presidential Scholarship",
    org: "Temple University",
    date: "2024",
  },
  {
    title: "University Honors",
    org: "Temple University",
    date: "2024",
  },
  {
    title: "4× State Champion (Soccer)",
    org: "High School Varsity",
    date: "2020 – 2024",
  },
  {
    title: "4-Year Varsity Starter, Soccer + Basketball",
    org: "High School",
    date: "2020 – 2024",
  },
  {
    title: "2-Year Varsity Captain, Soccer + Basketball",
    org: "High School",
    date: "2022 – 2024",
  },
];
