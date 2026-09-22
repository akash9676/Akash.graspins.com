import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { getFeaturedProjects, getProjectBySlug } from "@/lib/content";
import NotFoundComponent from "@/app/components/shared/NotFound";

type Props = {
  params: {
    project: string;
  };
};

export function generateStaticParams() {
  return getFeaturedProjects().map((project) => ({
    project: project.slug,
  }));
}

export default function Project({ params }: Props) {
  const project = getProjectBySlug(params.project);

  if (!project) {
    return (
      <NotFoundComponent
        title="Project not found"
        description="That project slug does not exist. Browse the projects page for freelance sites and open-source work."
      />
    );
  }

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4 gap-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-sm">
              {project.name}
            </h1>

            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className={`dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 shrink-0 ${
                !project.projectUrl
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer hover:border-zinc-700"
              }`}
            >
              {project.projectUrl ? "Visit site" : "Coming Soon"}
            </a>
          </div>

          <p className="dark:text-zinc-400 text-zinc-600 mb-6">{project.tagline}</p>

          <div className="relative w-full aspect-[16/10] mb-8">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover object-top"
              fill
              src={project.coverImage.image}
              alt={project.coverImage.alt || project.name}
              quality={90}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
