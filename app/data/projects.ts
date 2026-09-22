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
    embedUrl: url,
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
    "client-tx-desi",
    "TX DESI Connect",
    "tx-desi",
    "Community platform for the Texas desi diaspora.",
    "https://www.txdesiconnect.com/",
    "Full-stack community website connecting the Texas desi community—events, resources, and engagement features delivered as a production-ready web app."
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
    _id: "local-llm-music",
    name: "LLM Music Recommendation",
    slug: "llm-music-recommendation",
    tagline: "SASRec + LoRA smart shuffle for Spotify.",
    projectUrl: "https://github.com/akash9676/LLM_Music_Recommendation",
    logo: "/projects/llm-music.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/llm-music.svg",
      alt: "Music recommendation system",
    },
    description: [
      paragraph(
        "A hybrid music recommendation system with a FastAPI backend and web frontend. It connects to Spotify via OAuth, syncs liked tracks and listening history, and trains a SASRec sequential recommender with LoRA-style adaptation for personalized Smart Shuffle.",
        "music-1"
      ),
      paragraph(
        "Recommendations combine SASRec item embeddings with metadata vectors (genres, popularity, duration, release year). Includes caching, rate-limit handling, NDCG@10 / Hit Rate@10 evaluation, and playback controls for Premium devices.",
        "music-2"
      ),
    ],
  },
  {
    _id: "local-german-quiz",
    name: "German Quiz",
    slug: "german-quiz",
    tagline: "Interactive German practice built in Next.js.",
    projectUrl: "https://german-quiz-gules.vercel.app",
    embedUrl: "https://german-quiz-gules.vercel.app",
    logo: "/projects/german-quiz.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/german-quiz.svg",
      alt: "German quiz app",
    },
    description: [
      paragraph(
        "A TypeScript/Next.js quiz app for practicing German—built while living and studying in Darmstadt. Live at german-quiz-gules.vercel.app.",
        "de-1"
      ),
    ],
  },
  {
    _id: "local-nlp1",
    name: "NLP4Web",
    slug: "nlp4web",
    tagline: "Applied NLP coursework and web NLP labs.",
    projectUrl: "https://github.com/akash9676/NLP1",
    logo: "/projects/nlp.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/nlp.svg",
      alt: "NLP4Web materials",
    },
    description: [
      paragraph(
        "Teaching materials and experiments from NLP4Web—covering core natural language processing techniques applied to web-scale text.",
        "nlp-1"
      ),
    ],
  },
  {
    _id: "local-ibm-ds",
    name: "IBM Data Science",
    slug: "ibm-data-science",
    tagline: "Professional certificate labs & notebooks.",
    projectUrl: "https://github.com/akash9676/IBM-Data-Science",
    logo: "/projects/ibm.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/ibm.svg",
      alt: "IBM Data Science notebooks",
    },
    description: [
      paragraph(
        "Coursework and Jupyter notebooks from the IBM Data Science Professional Certificate—data wrangling, visualization, machine learning, and end-to-end analysis.",
        "ibm-1"
      ),
    ],
  },
];
