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

/** Freelance client websites + open-source / research projects. */
export const featuredProjects: ProjectType[] = [
  clientSite(
    "client-hr-it",
    "HR IT Solutions",
    "hr-it",
    "Corporate site for HR & IT services.",
    "https://hr-it-website.vercel.app/",
    "Marketing and services website for HR IT Solutions—built with modern React/Next.js patterns, responsive layout, and clear service positioning for HR and IT consulting."
  ),
  clientSite(
    "client-archana",
    "Archana Garments",
    "archana-garments",
    "E-commerce style storefront for a garments brand.",
    "https://archanagarments.vercel.app/",
    "Brand and catalog experience for Archana Garments—product-focused UI, mobile-friendly layout, and fast Vercel deployment for a retail client."
  ),
  clientSite(
    "client-viva-soft",
    "VIVA Soft",
    "viva-soft",
    "Software services company landing page.",
    "https://viva-soft.vercel.app/",
    "Professional landing site for VIVA Soft highlighting software services, contact flows, and a polished visual identity for B2B outreach."
  ),
  clientSite(
    "client-veduka",
    "Veduka Restaurant",
    "veduka-restaurant",
    "Restaurant website with menu and visit info.",
    "https://vedukarestaurant.com/",
    "Customer-facing restaurant website for Veduka—menu presentation, location details, and branding tailored for hospitality."
  ),
  clientSite(
    "client-soltex",
    "Soltex",
    "soltex",
    "Business website for Soltex.",
    "https://soltex.vercel.app/",
    "Corporate web presence for Soltex with service overview, contact sections, and responsive design on Vercel."
  ),
  {
    _id: "local-care",
    name: "CARE",
    slug: "care",
    tagline: "Open-source collaborative AI-assisted research platform.",
    projectUrl: "https://github.com/UKPLab/CARE",
    logo: "/projects/care.svg",
    coverImage: {
      image: "/projects/screenshots/care.png",
      alt: "CARE platform",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "Open-source contribution to CARE (Collaborative AI-Assisted Research Environment) at the UKP Lab, TU Darmstadt—an integrated platform for collaborative PDF reading, annotation, writing, assessment, and NLP-assisted research workflows.",
        "care-1"
      ),
      paragraph(
        "As a student developer I help build real-time collaborative features with Vue.js, Docker, Sequelize, and Socket.io, and work toward integrating intelligent reading assistance into production research tooling. Repository: github.com/UKPLab/CARE.",
        "care-2"
      ),
    ],
  },
  {
    _id: "local-llm-workspace",
    name: "llm-workspace",
    slug: "llm-workspace",
    tagline: "Portable AI agent skills, memory & knowledge.",
    projectUrl: "https://github.com/akash9676/llm-workspace",
    logo: "/projects/llm-workspace.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/llm-workspace.svg",
      alt: "llm-workspace repository",
    },
    description: [
      paragraph(
        "An open-source, cross-harness workspace for managing AI agent skills, coding-agent instructions, context engineering, agent memory, project knowledge, decisions, and task reports. It keeps AI development files outside application repos while sharing the same reusable knowledge across Cursor, Claude Code, and OpenAI Codex.",
        "llm-ws-1"
      ),
      paragraph(
        "Built for multi-agent teams: portable Agent Skills (SKILL.md), CLAUDE.md / AGENTS.md instructions, persistent memory, knowledge graphs, and sync scripts that install skills globally for Cursor, Claude Code, and Codex.",
        "llm-ws-2"
      ),
    ],
  },
  {
    _id: "local-german-quiz",
    name: "German Quiz",
    slug: "german-quiz",
    tagline: "Interactive German practice built in Next.js.",
    projectUrl: "https://germanquiz.vercel.app/",
    logo: "/projects/german-quiz.svg",
    coverImage: {
      image: "/projects/screenshots/german-quiz.png",
      alt: "German quiz app",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "A TypeScript/Next.js quiz app for practicing German—built while living and studying in Darmstadt. Live at germanquiz.vercel.app.",
        "de-1"
      ),
    ],
  },
];
