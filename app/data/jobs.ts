import type { JobType } from "@/types";

/** Work experience timeline (newest first). */
export const experienceEntries: JobType[] = [
  {
    _id: "local-ukp",
    name: "UKP Lab · TU Darmstadt",
    jobTitle: "Student Web Developer · CARE Platform",
    logo: "https://www.google.com/s2/favicons?domain=tu-darmstadt.de&sz=128",
    url: "https://care.ukp.informatik.tu-darmstadt.de/",
    description:
      "Student developer at the Ubiquitous Knowledge Processing Lab on CARE, an open-source stack for shared PDF reading, annotations, and NLP-backed analysis. I ship real-time UI in Vue.js, run services in Docker, persist data with Sequelize, and use Socket.io so multiple readers stay in sync.",
    startDate: "2024-09-01",
    endDate: "",
  },
  {
    _id: "local-graspins",
    name: "Graspins Innovations",
    jobTitle: "Lead Developer · Freelance client delivery",
    logo: "https://www.google.com/s2/favicons?domain=graspins.com&sz=128",
    url: "https://akash-graspins-com.vercel.app/",
    description:
      "I own delivery for freelance and client sites in React, Next.js, Node.js, and Tailwind. Shipped HR IT Solutions, Archana Garments, VIVA Soft, Veduka Restaurant, and Soltex: design, build, Vercel deploys, and follow-up fixes.",
    startDate: "2024-04-01",
    endDate: "",
  },
  {
    _id: "local-ieee",
    name: "IEEE Student Branch GNITC",
    jobTitle: "Research Scholar & Web Master",
    logo: "https://www.google.com/s2/favicons?domain=ieee.org&sz=128",
    url: "https://webinabox.vtools.ieee.org/wibp_officers/index/STB60219485",
    description:
      "Helped peers publish work on sentiment analysis, chatbot tuning, and sustainable blockchain. Kept the IEEE GNITC site updated so events and officer info were easy to find.",
    startDate: "2023-11-02",
    endDate: "2024-05-31",
  },
  {
    _id: "local-ik",
    name: "IK Technologies Pvt Ltd",
    jobTitle: "Associate Engineer",
    logo: "/experience/ik-technologies.png",
    url: "https://www.linkedin.com/company/iktechnologies/home/",
    description:
      "Associate Engineer at IK Technologies in Hyderabad (Aug–Dec 2023). Built SharePoint Framework web parts in React and TypeScript, hooked builds into Azure DevOps, and shipped client UI components from specs under weekly release cadences.",
    startDate: "2023-08-03",
    endDate: "2023-12-03",
  },
  {
    _id: "local-gdsc",
    name: "Google Developer Student Clubs",
    jobTitle: "Content & Design Lead · Development Co-Lead",
    logo: "https://www.google.com/s2/favicons?domain=developers.google.com&sz=128",
    url: "https://developers.google.com/community/gdsc",
    description:
      "Ran content and design for GDSC and co-led development tracks. Ran about 30 events for 3,000+ students on web, DSA, ML, blockchain, and cloud, including a five-day web bootcamp with 200+ participants.",
    startDate: "2022-07-04",
    endDate: "2023-08-05",
  },
];
