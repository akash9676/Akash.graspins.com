import Image from "next/image";

type SanityImageValue = {
  asset?: { url?: string };
  alt?: string;
};

type imageProp = {
  src: string | SanityImageValue;
  alt: string;
};

function resolveImageUrl(src: string | SanityImageValue): string {
  if (typeof src === "string") return src;
  return src.asset?.url ?? "";
}

export default function ImageComponent({ src, alt }: imageProp) {
  const url = resolveImageUrl(src);
  if (!url) return null;

  return (
    <Image
      className="rounded-sm object-contain object-left-top aspect-auto duration-300"
      src={url}
      alt={alt}
      loading="lazy"
      width={900}
      height={900}
      quality={100}
    />
  );
}
