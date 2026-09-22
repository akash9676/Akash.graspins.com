"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  name: string;
  embedUrl?: string;
  screenshotSrc: string;
  screenshotAlt: string;
};

export default function ProjectSitePreview({
  name,
  embedUrl,
  screenshotSrc,
  screenshotAlt,
}: Props) {
  const [useScreenshot, setUseScreenshot] = useState(false);

  if (!embedUrl || useScreenshot) {
    return (
      <div className="relative w-full aspect-[16/10] mb-8">
        <Image
          className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover object-top"
          fill
          src={screenshotSrc}
          alt={screenshotAlt}
          quality={90}
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />
        {embedUrl ? (
          <button
            type="button"
            onClick={() => setUseScreenshot(false)}
            className="absolute bottom-4 right-4 text-sm px-3 py-1.5 rounded-md dark:bg-zinc-900/90 bg-white/90 border dark:border-zinc-700 border-zinc-200 hover:border-zinc-400"
          >
            Try live preview
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border dark:border-zinc-800 border-zinc-200 bg-zinc-100 dark:bg-zinc-950">
        <iframe
          src={embedUrl}
          title={`${name} live preview`}
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onError={() => setUseScreenshot(true)}
        />
      </div>
      <button
        type="button"
        onClick={() => setUseScreenshot(true)}
        className="mt-2 text-sm dark:text-zinc-400 text-zinc-600 hover:underline"
      >
        Show screenshot instead
      </button>
    </div>
  );
}
