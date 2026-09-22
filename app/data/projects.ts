import type { PortableTextBlock } from "sanity";
import type { ProjectType } from "@/types";

function paragraph(text: string, key: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${key}-span`,
        marks: [],
        text,
      },
    ],
  } as PortableTextBlock;
}

const placeholderCover = {
  image: "/project.png",
  alt: "Project cover",
  lqip:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
};

/**
 * Featured projects prioritized for an AI Engineer portfolio,
 * sourced from GitHub (akash9676) and rewritten for clarity.
 */
export const featuredProjects: ProjectType[] = [
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
        "Built for multi-agent teams: portable Agent Skills (SKILL.md), CLAUDE.md / AGENTS.md instructions, persistent memory, knowledge graphs, and sync scripts that install skills globally for Cursor, Claude Code, and Codex. Demonstrates deep practice with agent orchestration and LLM developer tooling.",
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
        "Because Spotify audio-features APIs are restricted for newer apps, recommendations combine SASRec item embeddings with metadata vectors (genres, popularity, duration, release year). Includes caching, rate-limit handling, NDCG@10 / Hit Rate@10 evaluation, and playback controls for Premium devices.",
        "music-2"
      ),
    ],
  },
  {
    _id: "local-gender-age",
    name: "Gender & Age Detection",
    slug: "gender-and-age-detection",
    tagline: "Deep learning face analysis with OpenCV.",
    projectUrl: "https://github.com/akash9676/Gender-and-Age-Detection",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/7a8c246dbdbb11b1ce9fe624bc0a9f52a6683f44-1024x1024.webp",
    coverImage: {
      image:
        "https://cdn.sanity.io/images/rvlf0qwa/production/18c833f6bf4705de05d8a1e02b71e2d107c23cb3-1920x1080.jpg",
      alt: "Gender and age detection demo",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "A computer vision project that detects faces and estimates gender and age from images using deep learning models (Caffe) with OpenCV. The pipeline runs face detection followed by gender and age classification networks—useful for research demos, personalization experiments, and CV fundamentals.",
        "cv-1"
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
        "Teaching materials and experiments from NLP4Web—covering core natural language processing techniques applied to web-scale text. Supports my Master’s focus on AI/ML with practical NLP pipelines and evaluation.",
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
        "Coursework and Jupyter notebooks from the IBM Data Science Professional Certificate—data wrangling, visualization, machine learning, and end-to-end analysis that underpin my AI engineering practice.",
        "ibm-1"
      ),
    ],
  },
  {
    _id: "local-german-quiz",
    name: "German Quiz",
    slug: "german-quiz",
    tagline: "Interactive German practice built in Next.js.",
    projectUrl: "https://german-quiz-gules.vercel.app",
    logo: "/projects/german-quiz.svg",
    coverImage: {
      ...placeholderCover,
      image: "/projects/german-quiz.svg",
      alt: "German quiz app",
    },
    description: [
      paragraph(
        "A TypeScript/Next.js quiz app for practicing German—built while living and studying in Darmstadt. Live at german-quiz-gules.vercel.app. Shows product thinking around learning UX alongside AI studies in Germany.",
        "de-1"
      ),
    ],
  },
  {
    _id: "local-instagram-filter",
    name: "Instagram Filter App",
    slug: "instagramfilterapp",
    tagline: "React Native focus tools for Instagram.",
    projectUrl: "https://github.com/akash9676/InstagramFilterApp",
    logo: "https://cdn.sanity.io/images/rvlf0qwa/production/758b7ff5d8580cfe9352370dc781f21997bd9e5f-72x72.png",
    coverImage: {
      image:
        "https://cdn.sanity.io/images/rvlf0qwa/production/18c833f6bf4705de05d8a1e02b71e2d107c23cb3-1920x1080.jpg",
      alt: "Instagram Filter App",
      lqip: placeholderCover.lqip,
    },
    description: [
      paragraph(
        "A React Native app that reduces distraction on Instagram by limiting reels and suggestion surfaces—custom UI filtering for healthier mobile habits. Demonstrates cross-platform mobile engineering alongside AI work.",
        "ig-1"
      ),
    ],
  },
];
