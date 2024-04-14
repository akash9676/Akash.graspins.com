import Image from "next/image";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { formatDate } from "@/app/utils/date";
import { jobQuery } from "@/lib/sanity.query";
import { JobType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Akash",
  metadataBase: new URL("https://victoreke.com/projects"),
  description: "Explore Companies worked by Akash",
  openGraph: {
    title: "Experience | Akash",
    url: "https://victoreke.com/projects",
    description: "Explore Companies worked by Akash",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

export default async function Job() {
  const job: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Work Experience"
        description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
      />

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {job.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </main>
  );
}