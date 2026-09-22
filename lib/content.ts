import type { ProfileType, ProjectType, JobType } from "@/types";
import { profileContent } from "@/app/data/profile";
import { featuredProjects } from "@/app/data/projects";
import { experienceEntries } from "@/app/data/jobs";

/**
 * Merge CMS profile assets (photo, resume) with AI-engineer copy from the repo.
 */
export function applyProfileContent(profiles: ProfileType[]): ProfileType[] {
  if (!profiles?.length) {
    return [
      {
        _id: "local-profile",
        fullName: profileContent.fullName,
        headline: profileContent.headline,
        shortBio: profileContent.shortBio,
        email: profileContent.email,
        location: profileContent.location,
        fullBio: profileContent.fullBio,
        usage: profileContent.usage,
        resumeURL:
          "https://cdn.sanity.io/files/rvlf0qwa/production/f735c4a4bd6e04324d0b964bb9a09895d9650ae5.pdf",
        og: "",
        profileImage: {
          image:
            "https://cdn.sanity.io/images/rvlf0qwa/production/65e464ff09d6d02f7b2e310906c2c06ac2e6f292-3000x4000.jpg",
          lqip:
            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBQYHBP/EACcQAAIBBAEDAgcAAAAAAAAAAAEDAgAEBRESBiExFHEyQUJRYYHR/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDBP/EAB0RAAIDAAIDAAAAAAAAAAAAAAECABESAwQhIlH/2gAMAwEAAhEDEQA/ANLfcwhKE2thCESCZE6AqKfkcblZsjZXinMSw7EZd9GspuM3HMuhatuZLTKQlLf1a+VL6gyKcX6a5UVoYsiPGK+BmD596zOfcLLohyX+TTiV70YT/VFc+E6rtTirYh6I7gDqcNmijMVyi3uAweLTcIUt7Wp0ZOJ2R/Kj7CCGvSb+3FzasZwgWDlsfj7VbjCFwrqMuiJnx3FNYJKmYdcZriQlZK+3wmnXnRho1mOvx8LcwXYJiLYRHAedCipzpRK3YO3m2PKXfufeipNxITZEqvY5FFAz/9k=",
          alt: "Akash Gundapuneni",
        },
      },
    ];
  }

  return profiles.map((profile) => ({
    ...profile,
    fullName: profileContent.fullName,
    headline: profileContent.headline,
    shortBio: profileContent.shortBio,
    email: profileContent.email,
    location: profileContent.location,
    fullBio: profileContent.fullBio,
    usage: profileContent.usage,
  }));
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
