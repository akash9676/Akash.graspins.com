import type { PortableTextBlock } from "sanity";

/** Portable Text helper for plain paragraphs */
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

/**
 * AI-engineer profile copy used by the portfolio.
 * Text fields override Sanity CMS values so the site stays in sync with
 * GitHub work even when Studio credentials are unavailable.
 */
export const profileContent = {
  fullName: "Akash Gundapuneni",
  headline: "AI Engineer building LLM agents and ML systems.",
  location: "Darmstadt, Germany",
  email: "akashgundapuneni@gmail.com",
  shortBio:
    "I am an AI Engineer and Master’s student in Artificial Intelligence and Machine Learning at TU Darmstadt, Germany. I build LLM agents, recommendation systems, computer vision models, and NLP tools—using extensive AI across research and production. I combine deep learning, data science, and full-stack skills to ship intelligent products end to end.",
  fullBio: [
    paragraph(
      "I am Akash Gundapuneni, an AI Engineer pursuing a Master’s degree in Artificial Intelligence and Machine Learning at TU Darmstadt in Darmstadt, Germany. I hold a Bachelor’s degree in Computer Science and Engineering with a specialization in the Internet of Things from Guru Nanak Institutions Technical Campus, Hyderabad. My work sits at the intersection of large language models, machine learning systems, and applied research.",
      "bio-1"
    ),
    paragraph(
      "Today I focus on agentic AI, LLM tooling, sequential recommendation, computer vision, and NLP. Recent projects include llm-workspace—a portable multi-agent skills and memory workspace for Cursor, Claude Code, and Codex—and an LLM music recommender using SASRec with LoRA fine-tuning. I use AI extensively in day-to-day engineering: coding agents, context engineering, evaluation loops, and model experimentation.",
      "bio-2"
    ),
    paragraph(
      "Earlier in my career I led web delivery at Graspins Innovations and built SharePoint solutions at IK Technologies, which gave me strong product and systems instincts I now apply to AI products. I have contributed to research on sentiment analysis, chatbot performance, and sustainable blockchain, served as IEEE Research Scholar & Web Master, and mentored thousands of developers through Google Developer Student Clubs. I also hold the IBM Data Science Professional Certificate.",
      "bio-3"
    ),
    paragraph(
      "My goal is to design reliable, human-centered AI systems for healthcare, education, and industry—bridging research-grade models with production-ready software.",
      "bio-4"
    ),
  ],
  usage: [
    paragraph(
      "AI & Machine Learning:\nPython, PyTorch, TensorFlow/Keras, scikit-learn, Hugging Face, LoRA / PEFT, SASRec, OpenCV, NLP, computer vision, recommendation systems, evaluation metrics (NDCG, Hit Rate), Jupyter, FastAPI.",
      "usage-1"
    ),
    paragraph(
      "LLM & Agentic AI:\nOpenAI API, Claude, Cursor, Codex, Claude Code, prompt & context engineering, agent skills, RAG patterns, multi-agent workflows, LangChain-style tooling, model fine-tuning.",
      "usage-2"
    ),
    paragraph(
      "Data & MLOps:\nSQL, pandas, NumPy, feature engineering, experiment tracking, Spotify/Web APIs, caching & rate limiting, IBM Data Science stack, Tableau, Power BI.",
      "usage-3"
    ),
    paragraph(
      "Software & Delivery:\nTypeScript, React, Next.js, Node.js, Tailwind CSS, REST APIs, GitHub, Vercel, Docker basics, Azure DevOps.",
      "usage-4"
    ),
  ],
};
