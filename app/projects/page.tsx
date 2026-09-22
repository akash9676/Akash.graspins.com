import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { getFeaturedProjects } from "@/lib/content";

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col gap-3 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg overflow-hidden"
    >
      <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden dark:bg-zinc-800 bg-zinc-100">
        <Image
          src={project.coverImage.image}
          fill
          alt={project.coverImage.alt || project.name}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex items-center gap-x-3">
        <Image
          src={project.logo}
          width={40}
          height={40}
          alt={project.name}
          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-1 object-cover shrink-0"
        />
        <div>
          <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
          <div className="text-sm dark:text-zinc-400 text-zinc-600">
            {project.tagline}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Project() {
  const projects = getFeaturedProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="CARE and other open-source work first, then client sites and side projects I designed, built, and deployed."
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
