import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";
import { applyProfileContent } from "@/lib/content";

export default async function Usage() {
  let profile: ProfileType[] = [];
  try {
    profile = await sanityFetch({
      query: profileQuery,
      tags: ["profile"],
    });
  } catch {
    profile = [];
  }
  profile = applyProfileContent(profile);

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          AI, ML, and engineering tools I use extensively—plus the stack I rely
          on to ship intelligent products.
        </p>
      </div>
      {profile.map((textBlock, id) => (
        <PortableText
          key={id}
          value={textBlock.usage}
          components={CustomPortableTextFavicon}
        />
      ))}
    </section>
  );
}
