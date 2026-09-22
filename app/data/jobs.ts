import type { JobType } from "@/types";

/**
 * Experience + education timeline for the portfolio.
 * Education is listed first to highlight the AI/ML Master’s in Darmstadt.
 */
export const experienceEntries: JobType[] = [
  {
    _id: "local-tud-masters",
    name: "TU Darmstadt",
    jobTitle: "M.Sc. Artificial Intelligence and Machine Learning",
    logo: "/projects/tu-darmstadt.svg",
    url: "https://www.tu-darmstadt.de/",
    description:
      "Master’s studies in Artificial Intelligence and Machine Learning in Darmstadt, Germany. Focus areas include deep learning, LLMs and agentic systems, NLP, computer vision, recommendation models, and applied ML research—paired with extensive use of AI coding agents in coursework and personal projects.",
    startDate: "2024-10-01",
    endDate: "",
  },
  {
    _id: "local-graspins",
    name: "Graspins Innovations",
    jobTitle: "Lead Web Developer → AI-oriented delivery",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/b825743766ed27400080f35b231def1c251a8bea-500x500.jpg",
    url: "https://akash-graspins-com.vercel.app",
    description:
      "Led client delivery with React, Next.js, Node.js, and Tailwind while expanding into AI-assisted workflows and intelligent product features. Shipped sites for Txdesiconnect, Vivasoft, HR-IT Solutions, Soltex, and Veduka Restaurant—now applying that product craft to AI systems.",
    startDate: "2024-04-01",
    endDate: "",
  },
  {
    _id: "local-ieee",
    name: "IEEE Student Branch GNITC",
    jobTitle: "Research Scholar & Web Master",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/ecaa2abef03428e32e31486bc5efbf6e6552da88-204x204.png",
    url: "https://webinabox.vtools.ieee.org/wibp_officers/index/STB60219485",
    description:
      "Guided peers on research publications (sentiment analysis, chatbot optimization, sustainable blockchain) and maintained the IEEE GNITC web presence to improve event visibility.",
    startDate: "2023-11-02",
    endDate: "2024-05-31",
  },
  {
    _id: "local-ik",
    name: "IK Technologies Pvt Ltd",
    jobTitle: "Associate Engineer",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/a8c147dd8d410a272afa6c43ffa90e315e3d7f1f-187x160.jpg",
    url: "https://www.iktec.io/",
    description:
      "Built SharePoint Framework (SPFx) solutions with React and TypeScript, integrated Azure DevOps for collaboration, and delivered client-facing web components in a fast-paced engineering team.",
    startDate: "2023-08-03",
    endDate: "2023-12-03",
  },
  {
    _id: "local-gdsc",
    name: "Google Developer Student Clubs",
    jobTitle: "Content & Design Lead · Web Development Co-Lead",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/fc765e2c6bf289b0c949dd5a4e7e294726ca96e9-204x192.png",
    url: "https://developers.google.com/community/gdsc",
    description:
      "Engaged 3,000+ developers across 30 events covering web, DSA, ML, blockchain, and cloud. Led a 5-day web development bootcamp mentoring 200+ participants and coordinated hackathons and tech talks.",
    startDate: "2022-07-04",
    endDate: "2023-08-05",
  },
  {
    _id: "local-feliks",
    name: "Feliks Club",
    jobTitle: "Operations Lead",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/b825743766ed27400080f35b231def1c251a8bea-500x500.jpg",
    url: "#",
    description:
      "Ran 20+ technical and non-technical events, coordinated volunteers, and promoted knowledge sharing around emerging technologies.",
    startDate: "2022-03-02",
    endDate: "2023-10-03",
  },
];

/** Suggested GitHub profile bio (update manually — API write is blocked). */
export const githubBioSuggestion =
  "AI Engineer | M.Sc. AI & ML @ TU Darmstadt | LLMs · Agents · CV · NLP";
