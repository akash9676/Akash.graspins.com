import type { ProfileType, ProjectType, JobType } from "@/types";
import { profileContent } from "@/app/data/profile";
import { featuredProjects } from "@/app/data/projects";
import { experienceEntries } from "@/app/data/jobs";
import { heroes } from "@/app/data/heroes";

export function getProfile(): ProfileType {
  return profileContent;
}

export function getFeaturedProjects(): ProjectType[] {
  return featuredProjects;
}

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getExperienceEntries(): JobType[] {
  return experienceEntries;
}

export function getHeroes() {
  return heroes;
}
