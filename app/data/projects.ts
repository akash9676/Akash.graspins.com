import type { ProjectType } from "@/types";
import { paragraph } from "@/lib/portable-text";

const placeholderCover = {
  image: "/project.png",
  alt: "Project cover",
  lqip:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
};

function clientSite(
  id: string,
  name: string,
  slug: string,
  tagline: string,
  url: string,
  description: string
): ProjectType {
  const screenshot = `/projects/screenshots/${slug}.png`;
  return {
    _id: id,
    name,
    slug,
    tagline,
    projectUrl: url,
    logo: screenshot,
    coverImage: {
      image: screenshot,
      alt: `${name} website preview`,
      lqip: placeholderCover.lqip,
    },
    description: [paragraph(description, `${slug}-desc`)],
  };
}

/** Freelance client websites + open-source / research projects. CARE is listed first. */
export const featuredProjects: ProjectType[] = [
  {
    _id: "local-care",
    name: "CARE",
    slug: "care",
    tagline: "Open-source research platform with shared PDF reading and AI help.",
    projectUrl: "https://github.com/UKPLab/CARE",
    logo: "/projects/care.svg",
    coverImage: {
      image: "/projects/screenshots/care.png",
      alt: "CARE platform",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "I contribute to CARE (Collaborative AI-Assisted Research Environment) at UKP Lab, TU Darmstadt. The repo is github.com/UKPLab/CARE. The app bundles PDF reading, annotations, writing, grading hooks, and NLP helpers in one place for research groups.",
        "care-1"
      ),
      paragraph(
        "My work is mostly Vue.js on the front end, Sequelize and Docker for services, and Socket.io for live edits when several people read the same document. I am wiring reading-assist features into flows researchers already use.",
        "care-2"
      ),
    ],
  },
  {
    _id: "local-llm-workspace",
    name: "llm-workspace",
    slug: "llm-workspace",
    tagline: "Agent skills, memory, and project notes outside your app repo.",
    projectUrl: "https://github.com/akash9676/llm-workspace",
    logo: "/projects/llm-workspace.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/llm-workspace.svg",
      alt: "llm-workspace repository",
    },
    description: [
      paragraph(
        "llm-workspace keeps SKILL.md files, CLAUDE.md / AGENTS.md instructions, memory, decisions, and task notes in one folder tree that is not tied to a single application repository. The same files install into Cursor, Claude Code, and OpenAI Codex via sync scripts.",
        "llm-ws-1"
      ),
      paragraph(
        "I built it because agent instructions were scattered across repos and kept drifting. The layout covers skills, knowledge graphs, and reports so a team can reuse context without copy-pasting prompts.",
        "llm-ws-2"
      ),
    ],
  },
  {
    _id: "local-german-quiz",
    name: "German Quiz",
    slug: "german-quiz",
    tagline: "Next.js quiz app for German vocabulary practice.",
    projectUrl: "https://germanquiz.vercel.app/",
    logo: "/projects/german-quiz.svg",
    coverImage: {
      image: "/projects/screenshots/german-quiz.png",
      alt: "German quiz app",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "A TypeScript and Next.js quiz I built while studying in Darmstadt. It runs at germanquiz.vercel.app and covers vocabulary drills I wanted for daily practice.",
        "de-1"
      ),
    ],
  },
  clientSite(
    "client-hr-it",
    "HR IT Solutions",
    "hr-it",
    "Marketing site for HR and IT consulting.",
    "https://hr-it-website.vercel.app/",
    "React and Next.js marketing site for HR IT Solutions: service pages, responsive layout, and contact paths for HR and IT consulting leads."
  ),
  clientSite(
    "client-archana",
    "Archana Garments",
    "archana-garments",
    "Catalog-style storefront for a garments brand.",
    "https://archanagarments.vercel.app/",
    "Product-focused storefront for Archana Garments with mobile-first layout and Vercel hosting for a retail client."
  ),
  clientSite(
    "client-viva-soft",
    "VIVA Soft",
    "viva-soft",
    "Landing page for a software services company.",
    "https://viva-soft.vercel.app/",
    "B2B landing site for VIVA Soft with service copy, contact forms, and branding aimed at outbound sales."
  ),
  clientSite(
    "client-veduka",
    "Veduka Restaurant",
    "veduka-restaurant",
    "Restaurant site with menu and visit details.",
    "https://vedukarestaurant.com/",
    "Public site for Veduka Restaurant with menu sections, location hours, and hospitality-focused visuals."
  ),
  clientSite(
    "client-soltex",
    "Soltex",
    "soltex",
    "Corporate site for Soltex.",
    "https://soltex.vercel.app/",
    "Company site for Soltex with service overview, contact blocks, and responsive layout on Vercel."
  ),
];
