#!/usr/bin/env node
/**
 * Sync AI-engineer portfolio copy into Sanity CMS.
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * and NEXT_PUBLIC_SANITY_ACCESS_TOKEN (Editor+ permissions).
 *
 * Usage: node scripts/sync-sanity-content.mjs
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rvlf0qwa";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

if (!token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_ACCESS_TOKEN. Create an Editor token at https://www.sanity.io/manage and retry."
  );
  process.exit(1);
}

function block(text, key) {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}-span`, marks: [], text }],
  };
}

const profileId = "8a3ce73f-3824-4765-84cf-b699a9c68a7a";

const mutations = [
  {
    patch: {
      id: profileId,
      set: {
        headline: "AI Engineer building LLM agents and ML systems.",
        location: "Darmstadt, Germany",
        shortBio:
          "I am an AI Engineer and Master’s student in Artificial Intelligence and Machine Learning at TU Darmstadt, Germany. I build LLM agents, recommendation systems, computer vision models, and NLP tools—using extensive AI across research and production. I combine deep learning, data science, and full-stack skills to ship intelligent products end to end.",
        fullBio: [
          block(
            "I am Akash Gundapuneni, an AI Engineer pursuing a Master’s degree in Artificial Intelligence and Machine Learning at TU Darmstadt in Darmstadt, Germany. I hold a Bachelor’s degree in Computer Science and Engineering with a specialization in the Internet of Things from Guru Nanak Institutions Technical Campus, Hyderabad. My work sits at the intersection of large language models, machine learning systems, and applied research.",
            "bio-1"
          ),
          block(
            "Today I focus on agentic AI, LLM tooling, sequential recommendation, computer vision, and NLP. Recent projects include llm-workspace—a portable multi-agent skills and memory workspace for Cursor, Claude Code, and Codex—and an LLM music recommender using SASRec with LoRA fine-tuning. I use AI extensively in day-to-day engineering: coding agents, context engineering, evaluation loops, and model experimentation.",
            "bio-2"
          ),
          block(
            "Earlier in my career I led web delivery at Graspins Innovations and built SharePoint solutions at IK Technologies, which gave me strong product and systems instincts I now apply to AI products. I have contributed to research on sentiment analysis, chatbot performance, and sustainable blockchain, served as IEEE Research Scholar & Web Master, and mentored thousands of developers through Google Developer Student Clubs. I also hold the IBM Data Science Professional Certificate.",
            "bio-3"
          ),
          block(
            "My goal is to design reliable, human-centered AI systems for healthcare, education, and industry—bridging research-grade models with production-ready software.",
            "bio-4"
          ),
        ],
        usage: [
          block(
            "AI & Machine Learning:\nPython, PyTorch, TensorFlow/Keras, scikit-learn, Hugging Face, LoRA / PEFT, SASRec, OpenCV, NLP, computer vision, recommendation systems, evaluation metrics (NDCG, Hit Rate), Jupyter, FastAPI.",
            "usage-1"
          ),
          block(
            "LLM & Agentic AI:\nOpenAI API, Claude, Cursor, Codex, Claude Code, prompt & context engineering, agent skills, RAG patterns, multi-agent workflows, LangChain-style tooling, model fine-tuning.",
            "usage-2"
          ),
          block(
            "Data & MLOps:\nSQL, pandas, NumPy, feature engineering, experiment tracking, Spotify/Web APIs, caching & rate limiting, IBM Data Science stack, Tableau, Power BI.",
            "usage-3"
          ),
          block(
            "Software & Delivery:\nTypeScript, React, Next.js, Node.js, Tailwind CSS, REST APIs, GitHub, Vercel, Docker basics, Azure DevOps.",
            "usage-4"
          ),
        ],
      },
    },
  },
];

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ mutations }),
});

const body = await res.json();
if (!res.ok) {
  console.error("Sanity sync failed:", JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log("Sanity profile synced successfully.");
console.log(JSON.stringify(body, null, 2));
console.log(
  "\nGitHub profile bio (update manually at https://github.com/settings/profile):"
);
console.log("AI Engineer | M.Sc. AI & ML @ TU Darmstadt | LLMs · Agents · CV · NLP");
